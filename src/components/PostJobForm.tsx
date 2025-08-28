
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const formSchema = z.object({
    title: z.string().min(5, { message: 'Chức danh phải có ít nhất 5 ký tự.' }),
    company: z.string().min(2, { message: 'Tên công ty phải có ít nhất 2 ký tự.' }),
    location: z.string().min(2, { message: 'Địa điểm phải có ít nhất 2 ký tự.' }),
    description: z.string().min(20, { message: 'Mô tả ngắn gọn phải có ít nhất 20 ký tự.' }),
    fullDescription: z.string().min(50, { message: 'Mô tả đầy đủ phải có ít nhất 50 ký tự.' }),
    requirements: z.string().min(20, { message: 'Yêu cầu phải có ít nhất 20 ký tự.' }),
});

export default function PostJobForm() {
    const { toast } = useToast();
    const router = useRouter();
    const { user } = useAuth();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            company: '',
            location: '',
            description: '',
            fullDescription: '',
            requirements: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!user) {
            toast({ title: "Lỗi", description: "Bạn phải đăng nhập để đăng tin.", variant: "destructive" });
            return;
        }

        try {
            await addDoc(collection(db, "jobs"), {
                ...values,
                recruiterId: user.uid,
                recruiterEmail: user.email,
                createdAt: new Date(),
            });

            toast({
                title: 'Đăng tin thành công!',
                description: "Tin tuyển dụng của bạn đã được đăng. Bạn sẽ được chuyển hướng đến Bảng điều khiển.",
            });

            setTimeout(() => {
                router.push('/recruiter-dashboard');
            }, 1500);

        } catch (error) {
            console.error("Error adding job to Firestore", error);
            toast({ title: "Lỗi", description: "Không thể đăng tin. Vui lòng thử lại.", variant: "destructive" });
        }
    }

    return (
        <Card>
            <CardContent className="p-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Chức danh công việc</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ví dụ: Lập trình viên Python cấp cao" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="company"
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
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Địa điểm</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ví dụ: Thành phố Hồ Chí Minh" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mô tả ngắn gọn</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Một mô tả ngắn gọn sẽ xuất hiện trong danh sách công việc..."
                                            className="min-h-[100px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="fullDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mô tả đầy đủ</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Mô tả chi tiết về vai trò, trách nhiệm và văn hóa công ty..."
                                            className="min-h-[150px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="requirements"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Yêu cầu công việc</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Liệt kê các kỹ năng, kinh nghiệm và bằng cấp cần thiết..."
                                            className="min-h-[150px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? 'Đang đăng...' : 'Đăng tin tuyển dụng'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
