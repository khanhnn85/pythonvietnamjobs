
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, getDocs, doc, onSnapshot } from 'firebase/firestore';

const formSchema = z.object({
    companyName: z.string().min(2, {
        message: 'Tên công ty phải có ít nhất 2 ký tự.',
    }),
    website: z.string().url({ message: 'Vui lòng nhập một URL hợp lệ.' }).optional().or(z.literal('')),
    reason: z.string().min(20, {
        message: 'Lý do phải có ít nhất 20 ký tự.',
    }).max(500, {
        message: 'Lý do không được dài hơn 500 ký tự.'
    }),
});


export default function RecruiterRegistrationForm() {
    const { toast } = useToast();
    const { user } = useAuth();
    const [requestStatus, setRequestStatus] = useState<'approved' | 'pending' | 'new' | 'loading'>('loading');

    useEffect(() => {
        if (!user) return;

        const q = query(collection(db, "recruiterRequests"), where("userId", "==", user.uid));
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            if (!querySnapshot.empty) {
                const docData = querySnapshot.docs[0].data();
                setRequestStatus(docData.status);
            } else {
                 // Also check the user's role directly
                if (user.role === 'recruiter') {
                    setRequestStatus('approved');
                } else {
                    setRequestStatus('new');
                }
            }
        }, (error) => {
            console.error("Error fetching recruiter request status: ", error);
            setRequestStatus('new');
        });

        return () => unsubscribe();

    }, [user]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            companyName: '',
            website: '',
            reason: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!user) {
             toast({
                title: 'Lỗi',
                description: "Bạn phải đăng nhập để gửi yêu cầu.",
                variant: 'destructive',
            });
            return;
        }

        try {
            await addDoc(collection(db, "recruiterRequests"), {
                userId: user.uid,
                userEmail: user.email,
                companyName: values.companyName,
                website: values.website,
                reason: values.reason,
                status: 'pending', // 'pending', 'approved', 'rejected'
                submittedAt: new Date(),
            });

            setRequestStatus('pending');
            toast({
                title: 'Yêu cầu đã được gửi!',
                description: "Cảm ơn bạn đã đăng ký. Chúng tôi sẽ xem xét và phản hồi sớm.",
            });
            form.reset();

        } catch (e) {
            console.error("Error adding document: ", e);
             toast({
                title: 'Gửi yêu cầu thất bại',
                description: "Đã có lỗi xảy ra. Vui lòng thử lại.",
                variant: "destructive",
            });
        }
    }
    
    if (requestStatus === 'loading') {
        return (
            <Card>
                <CardContent className="p-6">
                    <div className="h-24 bg-muted rounded animate-pulse"></div>
                </CardContent>
            </Card>
        )
    }

    if (requestStatus === 'approved' || user?.role === 'recruiter') {
        return (
             <Card>
                <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold">Tài khoản của bạn đã được duyệt</h3>
                    <p className="mt-2 text-muted-foreground">
                       Chúc mừng! Bạn có thể bắt đầu đăng tin tuyển dụng ngay bây giờ.
                    </p>
                </CardContent>
            </Card>
        )
    }

    if (requestStatus === 'pending') {
        return (
             <Card>
                <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold">Yêu cầu của bạn đã được gửi</h3>
                    <p className="mt-2 text-muted-foreground">
                        Chúng tôi đã nhận được thông tin đăng ký của bạn và sẽ xem xét sớm. Cảm ơn sự kiên nhẫn của bạn.
                    </p>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card>
            <CardContent className="p-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tên công ty</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Công ty của bạn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="website"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Website Công ty (Tùy chọn)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="reason"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Lý do bạn muốn đăng tin</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Mô tả ngắn gọn về công ty và nhu cầu tuyển dụng của bạn..."
                                            className="min-h-[120px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
                             {form.formState.isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
