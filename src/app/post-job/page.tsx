
"use client";

import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PostJobForm from '@/components/PostJobForm';

export default function PostJobPage() {
    const { user, loading } = useAuth();
    
    if (loading) {
        return (
            <div className="max-w-2xl mx-auto">
                <Card>
                    <CardHeader>
                        <div className="h-8 bg-muted rounded w-3/4 animate-pulse"></div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="h-6 bg-muted rounded w-full animate-pulse"></div>
                        <div className="h-12 bg-muted rounded w-full animate-pulse"></div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (!user || user.role !== 'recruiter') {
        return (
            <div className="max-w-2xl mx-auto text-center">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Truy cập bị từ chối</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-muted-foreground">
                            Bạn phải là nhà tuyển dụng đã được duyệt để đăng tin tuyển dụng.
                        </p>
                        <Button asChild>
                            <Link href="/">Quay về trang chủ</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
    
    return (
        <div className="max-w-2xl mx-auto">
             <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight">Đăng tin tuyển dụng mới</h1>
                <p className="mt-3 text-lg text-muted-foreground">
                    Điền thông tin chi tiết dưới đây để tìm kiếm ứng viên tài năng.
                </p>
            </div>
            <PostJobForm />
        </div>
    );
}
