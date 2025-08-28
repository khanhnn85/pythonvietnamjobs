
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

const RECRUITER_REQUEST_STATUS_KEY = 'recruiterRequestStatus';

export default function RecruiterRegistrationForm() {
    const { toast } = useToast();
    const [requestStatus, setRequestStatus] = useState<string | null>(null);

    useEffect(() => {
        const status = localStorage.getItem(RECRUITER_REQUEST_STATUS_KEY);
        setRequestStatus(status);
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            companyName: '',
            website: '',
            reason: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log('Recruiter registration submitted:', values);
        
        localStorage.setItem(RECRUITER_REQUEST_STATUS_KEY, 'pending');
        setRequestStatus('pending');

        // Dispatch a custom event to notify other components (like the Header) of the change
        window.dispatchEvent(new CustomEvent('recruiterStatusChanged'));

        toast({
            title: 'Yêu cầu đã được gửi!',
            description: "Cảm ơn bạn đã đăng ký. Yêu cầu của bạn đang ở trạng thái 'chờ duyệt'. Chúng tôi sẽ xem xét và phản hồi sớm.",
        });
        form.reset();
    }

    if (requestStatus === 'approved') {
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
                        <Button type="submit" className="w-full" size="lg">Gửi yêu cầu</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
