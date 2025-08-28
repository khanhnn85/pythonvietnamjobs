
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
        toast({
            title: 'Yêu cầu đã được gửi!',
            description: "Cảm ơn bạn đã đăng ký. Yêu cầu của bạn đang ở trạng thái 'chờ duyệt'. Chúng tôi sẽ xem xét và phản hồi sớm.",
        });
        form.reset();
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
