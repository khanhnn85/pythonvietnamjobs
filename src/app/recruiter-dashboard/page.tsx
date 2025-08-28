
"use client";

import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { type Job } from '@/lib/jobs';
import { PlusCircle, Eye } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const RECRUITER_REQUEST_STATUS_KEY = 'recruiterRequestStatus';
const POSTED_JOBS_KEY = 'postedJobs';

export default function RecruiterDashboardPage() {
    const { user, loading } = useAuth();
    const [recruiterStatus, setRecruiterStatus] = useState<string | null>(null);
    const [postedJobs, setPostedJobs] = useState<Job[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const status = localStorage.getItem(RECRUITER_REQUEST_STATUS_KEY);
            setRecruiterStatus(status);
            
            const loadPostedJobs = () => {
                const jobsRaw = localStorage.getItem(POSTED_JOBS_KEY);
                if (jobsRaw) {
                    setPostedJobs(JSON.parse(jobsRaw));
                }
            };

            if (status === 'approved') {
                loadPostedJobs();
                // Listen for new jobs being posted from another tab/window
                window.addEventListener('storage', (e) => {
                    if (e.key === POSTED_JOBS_KEY) {
                        loadPostedJobs();
                    }
                });
                // Listen for new jobs being posted from the same tab
                window.addEventListener('jobsUpdated', loadPostedJobs);

                return () => {
                    window.removeEventListener('jobsUpdated', loadPostedJobs);
                }
            }
        }
    }, []);

    if (loading) {
        return (
            <div className="max-w-4xl mx-auto">
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

    if (!user || recruiterStatus !== 'approved') {
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
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Bảng điều khiển Nhà tuyển dụng</h1>
                    <p className="text-muted-foreground">Quản lý tin đăng và ứng viên của bạn.</p>
                </div>
                 <Button asChild>
                    <Link href="/post-job">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Đăng tin mới
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Tin tuyển dụng đã đăng</CardTitle>
                    <CardDescription>Đây là danh sách các công việc bạn đã đăng.</CardDescription>
                </CardHeader>
                <CardContent>
                     {postedJobs.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Chức danh</TableHead>
                                    <TableHead>Địa điểm</TableHead>
                                    <TableHead className="text-center">Ứng viên</TableHead>
                                    <TableHead className="text-right">Hành động</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {postedJobs.map((job) => (
                                <TableRow key={job.id}>
                                    <TableCell className="font-medium">{job.title}</TableCell>
                                    <TableCell>{job.location}</TableCell>
                                    <TableCell className="text-center">
                                        <span className="font-medium">0</span>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={`/jobs/${job.id}`}>
                                                <Eye className="mr-2 h-4 w-4" />
                                                Xem tin
                                            </Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <p className="text-sm text-muted-foreground text-center py-8">Bạn chưa đăng tin tuyển dụng nào.</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

