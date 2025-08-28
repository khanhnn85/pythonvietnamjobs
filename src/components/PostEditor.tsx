
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { db } from '@/lib/firebase';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import type { BlogPost } from '@/lib/blog';

const formSchema = z.object({
    title: z.string().min(10, { message: 'Tiêu đề phải có ít nhất 10 ký tự.' }),
    slug: z.string().min(5, { message: 'Slug phải có ít nhất 5 ký tự.' })
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: 'Slug chỉ được chứa chữ thường, số và dấu gạch nối.' }),
    category: z.enum(['python-co-ban', 'python-for-ai', 'python-for-data'], {
        required_error: "Bạn phải chọn một chuyên mục."
    }),
    coverImage: z.string().url({ message: 'Vui lòng nhập một URL ảnh hợp lệ.' }),
    excerpt: z.string().min(20, { message: 'Tóm tắt phải có ít nhất 20 ký tự.' }).max(200, { message: 'Tóm tắt không được quá 200 ký tự.'}),
    content: z.string().min(100, { message: 'Nội dung phải có ít nhất 100 ký tự.' }),
});

interface PostEditorProps {
    existingPost?: BlogPost;
}

export default function PostEditor({ existingPost }: PostEditorProps) {
    const { toast } = useToast();
    const router = useRouter();
    const { user } = useAuth();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: existingPost ? {
            ...existingPost,
            // @ts-ignore
            category: existingPost.category
        } : {
            title: '',
            slug: '',
            coverImage: '',
            excerpt: '',
            content: '',
        },
    });

    // Function to generate slug from title
    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
            .replace(/[đĐ]/g, 'd')
            .replace(/[^a-z0-9\s-]/g, '') // remove special characters
            .trim()
            .replace(/\s+/g, '-') // replace spaces with -
            .replace(/-+/g, '-'); // remove consecutive -
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        form.setValue('title', title);
        if (!form.formState.dirtyFields.slug) {
            form.setValue('slug', generateSlug(title), { shouldValidate: true });
        }
    };


    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!user || user.role !== 'admin') {
            toast({ title: "Lỗi", description: "Bạn không có quyền thực hiện hành động này.", variant: "destructive" });
            return;
        }

        try {
            const postData = {
                ...values,
                authorId: user.uid,
                authorName: user.displayName || "Admin",
                createdAt: existingPost?.createdAt || new Date(),
                updatedAt: new Date(),
            };
            
            if (existingPost) {
                // Update existing document
                const postRef = doc(db, "blogPosts", existingPost.id);
                await setDoc(postRef, postData);
                 toast({
                    title: 'Cập nhật thành công!',
                    description: "Bài viết đã được cập nhật.",
                });
            } else {
                // Add new document
                await addDoc(collection(db, "blogPosts"), postData);
                toast({
                    title: 'Đăng bài thành công!',
                    description: "Bài viết của bạn đã được đăng.",
                });
            }


            router.push('/admin/blog');
            router.refresh();

        } catch (error) {
            console.error("Error saving post to Firestore", error);
            toast({ title: "Lỗi", description: "Không thể lưu bài viết. Vui lòng thử lại.", variant: "destructive" });
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
                                    <FormLabel>Tiêu đề bài viết</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="Tiêu đề hấp dẫn cho bài viết của bạn" 
                                            {...field}
                                            onChange={handleTitleChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Slug (Đường dẫn URL)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="vi-du-slug-bai-viet" {...field} />
                                    </FormControl>
                                    <FormDescription>Slug sẽ được tạo tự động từ tiêu đề.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Chuyên mục</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Chọn một chuyên mục" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="python-co-ban">Python cơ bản</SelectItem>
                                        <SelectItem value="python-for-ai">Python for AI</SelectItem>
                                        <SelectItem value="python-for-data">Python for Data</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="coverImage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>URL Ảnh bìa</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://example.com/image.png" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="excerpt"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tóm tắt ngắn</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Một đoạn tóm tắt ngắn gọn (khoảng 200 ký tự) sẽ xuất hiện trên trang danh sách blog."
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
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nội dung</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Nội dung chi tiết của bài viết. Bạn có thể sử dụng HTML."
                                            className="min-h-[300px]"
                                            {...field}
                                        />
                                    </FormControl>
                                     <FormDescription>
                                        Bạn có thể sử dụng các thẻ HTML cơ bản như &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;code&gt; để định dạng.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? 'Đang lưu...' : (existingPost ? 'Cập nhật bài viết' : 'Đăng bài viết')}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
