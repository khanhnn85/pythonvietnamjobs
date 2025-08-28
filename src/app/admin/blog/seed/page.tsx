
"use client";

import { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';
import { seedBlogDataAction } from '@/app/actions';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { DatabaseZap, ArrowLeft, Loader2 } from 'lucide-react';

export default function SeedPage() {
    const { toast } = useToast();
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();
    const [isPending, startTransition] = useTransition();

    const handleSeedData = () => {
        if (!user) {
            toast({
                title: "Lỗi",
                description: "Bạn cần đăng nhập với tư cách quản trị viên.",
                variant: 'destructive'
            });
            return;
        }

        startTransition(async () => {
            const result = await seedBlogDataAction(user.uid, user.displayName || "Admin");
            if (result.success) {
                toast({
                    title: "Thành công!",
                    description: result.message,
                });
                router.push('/admin/blog');
            } else {
                toast({
                    title: "Thất bại",
                    description: result.error,
                    variant: 'destructive',
                });
            }
        });
    };
    
    if (authLoading) {
        return <div className="text-center p-8">Đang tải...</div>;
    }

    if (!user || user.role !== 'admin') {
        return (
             <div className="max-w-2xl mx-auto text-center">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Truy cập bị từ chối</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-muted-foreground">
                            Bạn không có quyền truy cập vào trang này.
                        </p>
                        <Button asChild className="mt-4">
                            <Link href="/admin/blog">Quay về trang quản lý</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <Button asChild variant="ghost" className="-ml-4">
              <Link href="/admin/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Quay lại quản lý Blog
              </Link>
            </Button>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <DatabaseZap className="h-6 w-6" />
                        Thêm dữ liệu Blog mẫu
                    </CardTitle>
                    <CardDescription>
                        Thêm 10 bài viết mẫu thuộc chuyên mục "Python cơ bản" vào cơ sở dữ liệu Firestore.
                        Hệ thống sẽ tự động bỏ qua các bài viết đã tồn tại (dựa trên slug).
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-lg">
                        <p className="mb-4 text-muted-foreground">
                            Nhấp vào nút bên dưới để bắt đầu quá trình thêm dữ liệu.
                            Hành động này an toàn để chạy nhiều lần.
                        </p>
                         <Button onClick={handleSeedData} disabled={isPending} size="lg">
                            {isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Đang xử lý...
                                </>
                            ) : (
                                "Thêm 10 bài viết mẫu"
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

