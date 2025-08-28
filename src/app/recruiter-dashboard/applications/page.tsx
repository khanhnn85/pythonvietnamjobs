
"use client";

import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db } from '@/lib/firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';

interface Application {
    id: string;
    jobTitle: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    cvFileName: string;
    cvUrl: string;
    submittedAt: any;
}

export default function ApplicationsPage() {
    const { user, loading } = useAuth();
    const [applications, setApplications] = useState<Application[]>([]);
    const [isLoadingApps, setIsLoadingApps] = useState(true);

    useEffect(() => {
        if (!user || user.role !== 'recruiter') {
            setIsLoadingApps(false);
            return;
        }

        const appQuery = query(collection(db, "applications"), where("recruiterId", "==", user.uid));
        
        const unsubscribe = onSnapshot(appQuery, (querySnapshot) => {
            const apps: Application[] = [];
            querySnapshot.forEach((doc) => {
                apps.push({ id: doc.id, ...doc.data() } as Application);
            });
            apps.sort((a, b) => b.submittedAt.toMillis() - a.submittedAt.toMillis());
            setApplications(apps);
            setIsLoadingApps(false);
        });

        return () => unsubscribe();
    }, [user]);

    if (loading) {
        return (
            <div className="max-w-4xl mx-auto">
                <div className="h-8 bg-muted rounded w-1/2 animate-pulse mb-8"></div>
                <Card>
                    <CardHeader>
                        <div className="h-8 bg-muted rounded w-3/4 animate-pulse"></div>
                    </CardHeader>
                    <CardContent className="space-y-4 mt-4">
                        <div className="h-12 bg-muted rounded w-full animate-pulse"></div>
                        <div className="h-12 bg-muted rounded w-full animate-pulse"></div>
                        <div className="h-12 bg-muted rounded w-full animate-pulse"></div>
                    </CardContent>
                </Card>
            </div>
        );
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
                            Bạn phải là một nhà tuyển dụng đã được duyệt để xem trang này.
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
        <div className="max-w-5xl mx-auto space-y-6">
            <Button asChild variant="ghost" className="-ml-4">
              <Link href="/recruiter-dashboard">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Quay lại Bảng điều khiển
              </Link>
          </Button>

            <Card>
                <CardHeader>
                    <CardTitle>Danh sách ứng viên</CardTitle>
                    <CardDescription>
                        Tất cả các ứng viên đã nộp đơn vào các vị trí bạn đã đăng.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {isLoadingApps ? (
                        <p className="text-center py-8">Đang tải danh sách ứng viên...</p>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Họ và tên</TableHead>
                                    <TableHead>Vị trí ứng tuyển</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Số điện thoại</TableHead>
                                    <TableHead>CV</TableHead>
                                    <TableHead>Ngày nộp</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {applications.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="h-24 text-center">
                                            Chưa có ứng viên nào.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    applications.map((app) => (
                                        <TableRow key={app.id}>
                                            <TableCell className="font-medium">{app.fullName}</TableCell>
                                            <TableCell>{app.jobTitle}</TableCell>
                                            <TableCell>{app.email}</TableCell>
                                            <TableCell>{app.phoneNumber}</TableCell>
                                            <TableCell>
                                                <Button asChild variant="outline" size="sm">
                                                    <a href={app.cvUrl} target="_blank" rel="noopener noreferrer" title={app.cvFileName}>
                                                        Xem CV
                                                        <ExternalLink className="ml-2 h-4 w-4" />
                                                    </a>
                                                </Button>
                                            </TableCell>
                                            <TableCell>{app.submittedAt ? formatDistanceToNow(app.submittedAt.toDate(), { addSuffix: true, locale: vi }) : 'N/A'}</TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
