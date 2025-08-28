
"use client";

import PostEditor from '@/components/PostEditor';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewPostPage() {
    const { user, loading } = useAuth();
    
    if (loading) {
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
                            <Link href="/">Quay về trang chủ</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight">Viết bài mới</h1>
                <p className="mt-3 text-lg text-muted-foreground">
                    Chia sẻ kiến thức của bạn với cộng đồng.
                </p>
            </div>
            <PostEditor />
        </div>
    );
}
