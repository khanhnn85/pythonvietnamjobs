
"use client";

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { Users, CheckSquare } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, query, where, onSnapshot, doc, writeBatch } from "firebase/firestore";
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';

interface RecruiterRequest {
    id: string;
    userId: string;
    userEmail: string;
    companyName: string;
    status: 'pending' | 'approved' | 'rejected';
    submittedAt: any;
}


export default function AdminPage() {
    const { toast } = useToast();
    const { user, loading } = useAuth();
    const [requests, setRequests] = useState<RecruiterRequest[]>([]);
    const [isLoadingData, setIsLoadingData] = useState(true);

    useEffect(() => {
        if (!user || user.role !== 'admin') return;

        const q = query(collection(db, "recruiterRequests"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedRequests: RecruiterRequest[] = [];
            querySnapshot.forEach((doc) => {
                fetchedRequests.push({ id: doc.id, ...doc.data() } as RecruiterRequest);
            });
            // Sort by submission date, newest first
            fetchedRequests.sort((a, b) => b.submittedAt.toMillis() - a.submittedAt.toMillis());
            setRequests(fetchedRequests);
            setIsLoadingData(false);
        });

        return () => unsubscribe();

    }, [user]);

    const pendingRequestsCount = useMemo(() => {
        return requests.filter(req => req.status === 'pending').length;
    }, [requests]);

    const handleApprove = async (request: RecruiterRequest) => {
        if (!request.userId) {
            toast({ title: "Lỗi", description: "Yêu cầu này thiếu ID người dùng.", variant: 'destructive'});
            return;
        }

        const batch = writeBatch(db);

        const requestRef = doc(db, "recruiterRequests", request.id);
        batch.update(requestRef, { status: "approved" });

        const userRef = doc(db, "users", request.userId);
        batch.update(userRef, { role: "recruiter" });

        try {
            await batch.commit();
            toast({
                title: "Yêu cầu đã được duyệt!",
                description: `Người dùng ${request.userEmail} hiện đã là nhà tuyển dụng.`,
            });
        } catch (error) {
            console.error("Lỗi duyệt yêu cầu:", error);
            toast({
                title: "Duyệt thất bại",
                description: "Đã có lỗi xảy ra. Vui lòng thử lại.",
                variant: "destructive",
            });
        }
    };
    
    if (loading) {
        return <div className="text-center p-8">Đang tải trang quản trị...</div>;
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
                            Bạn không có quyền truy cập vào trang này. Vui lòng đăng nhập với tư cách quản trị viên.
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
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight">Bảng điều khiển Admin</h1>
                <p className="text-muted-foreground mt-2">Duyệt các yêu cầu đăng ký làm nhà tuyển dụng.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Yêu cầu đang chờ xử lý
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{pendingRequestsCount}</div>
                        <p className="text-xs text-muted-foreground">
                            Tổng số yêu cầu cần được duyệt
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Tổng số yêu cầu
                        </CardTitle>
                         <CheckSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                     <CardContent>
                        <div className="text-2xl font-bold">{requests.length}</div>
                        <p className="text-xs text-muted-foreground">
                            Bao gồm cả các yêu cầu đã được duyệt
                        </p>
                    </CardContent>
                </Card>
            </div>


            <Card>
                <CardHeader>
                    <CardTitle>Danh sách yêu cầu đăng ký</CardTitle>
                </CardHeader>
                <CardContent>
                     {isLoadingData ? <p>Đang tải danh sách...</p> : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Công ty</TableHead>
                                    <TableHead>Email Người dùng</TableHead>
                                    <TableHead>Thời gian gửi</TableHead>
                                    <TableHead>Trạng thái</TableHead>
                                    <TableHead className="text-right">Hành động</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {requests.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={5} className="h-24 text-center">
                                            Không có yêu cầu nào.
                                        </TableCell>
                                    </TableRow>
                                ) : requests.map((req) => (
                                    <TableRow key={req.id}>
                                        <TableCell className="font-medium">{req.companyName}</TableCell>
                                        <TableCell>{req.userEmail}</TableCell>
                                        <TableCell>{req.submittedAt ? formatDistanceToNow(req.submittedAt.toDate(), { addSuffix: true, locale: vi }) : 'N/A'}</TableCell>
                                        <TableCell>
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                                req.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                                            }`}>
                                                {req.status === 'pending' ? 'Đang chờ' : 'Đã duyệt'}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {req.status === 'pending' && (
                                                <Button variant="outline" size="sm" onClick={() => handleApprove(req)}>
                                                    Duyệt
                                                </Button>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
