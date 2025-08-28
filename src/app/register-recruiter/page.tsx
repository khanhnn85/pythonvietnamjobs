
"use client";

import RecruiterRegistrationForm from '@/components/RecruiterRegistrationForm';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RegisterRecruiterPage() {
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

    if (!user) {
        return (
            <div className="max-w-2xl mx-auto text-center">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Vui lòng đăng nhập</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-muted-foreground">
                            Bạn cần đăng nhập để có thể đăng ký làm nhà tuyển dụng.
                        </p>
                        <Button asChild>
                            <Link href="/home">Quay về trang chủ</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight">Đăng ký làm Nhà tuyển dụng</h1>
                <p className="mt-3 text-lg text-muted-foreground">
                    Gửi yêu cầu để có quyền đăng tin tuyển dụng trên nền tảng của chúng tôi.
                </p>
            </div>
            <RecruiterRegistrationForm />
        </div>
    );
}
