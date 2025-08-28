
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from '@/hooks/use-toast';

// In a real application, this data would come from a database.
const FAKE_REQUESTS = [
    { id: 'req-1', userEmail: 'pending.recruiter@example.com', companyName: 'Pending Corp', status: 'pending' },
    { id: 'req-2', userEmail: 'another.recruiter@example.com', companyName: 'Another Inc', status: 'pending' },
    { id: 'req-3', userEmail: 'approved.user@example.com', companyName: 'Already Approved Ltd', status: 'approved' },
];

const RECRUITER_REQUEST_STATUS_KEY = 'recruiterRequestStatus';
const FAKE_REQUESTS_KEY = 'fakeRecruiterRequests';


export default function AdminPage() {
    const { toast } = useToast();
    const [requests, setRequests] = useState(FAKE_REQUESTS);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // In a real app, you'd fetch this from a secure backend.
        // Here, we use localStorage to make the status persistent for the demo.
        const storedRequests = localStorage.getItem(FAKE_REQUESTS_KEY);
        if (storedRequests) {
            setRequests(JSON.parse(storedRequests));
        } else {
            localStorage.setItem(FAKE_REQUESTS_KEY, JSON.stringify(FAKE_REQUESTS));
        }
    }, []);

    const handleApprove = (requestId: string) => {
        const updatedRequests = requests.map(req =>
            req.id === requestId ? { ...req, status: 'approved' } : req
        );
        setRequests(updatedRequests);
        localStorage.setItem(FAKE_REQUESTS_KEY, JSON.stringify(updatedRequests));

        // This simulates approving for the current user if their (fake) email matches
        const approvedRequest = updatedRequests.find(r => r.id === requestId);
        // To test, you could manually set your email to match a pending one
        // For this demo, we'll just approve the generic key.
        localStorage.setItem(RECRUITER_REQUEST_STATUS_KEY, 'approved');
         // Dispatch a custom event to notify other components (like the Header) of the change
        window.dispatchEvent(new CustomEvent('recruiterStatusChanged'));


        toast({
            title: "Yêu cầu đã được duyệt!",
            description: `Trạng thái của ${approvedRequest?.companyName} đã được cập nhật.`,
        });
    };

    if (!isClient) {
        return <div className="text-center p-8">Đang tải trang quản trị...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight">Bảng điều khiển Admin (Mô phỏng)</h1>
                <p className="text-muted-foreground mt-2">Duyệt các yêu cầu đăng ký làm nhà tuyển dụng.</p>
                 <CardDescription className="mt-2 text-sm italic">
                    Lưu ý: Đây là trang mô phỏng. Trong một ứng dụng thực tế, trang này sẽ được bảo vệ và dữ liệu sẽ đến từ cơ sở dữ liệu.
                </CardDescription>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Yêu cầu đang chờ xử lý</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Công ty</TableHead>
                                <TableHead>Email Người dùng</TableHead>
                                <TableHead>Trạng thái</TableHead>
                                <TableHead className="text-right">Hành động</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {requests.map((req) => (
                                <TableRow key={req.id}>
                                    <TableCell className="font-medium">{req.companyName}</TableCell>
                                    <TableCell>{req.userEmail}</TableCell>
                                    <TableCell>
                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                            req.status === 'pending' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'
                                        }`}>
                                            {req.status === 'pending' ? 'Đang chờ' : 'Đã duyệt'}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {req.status === 'pending' && (
                                            <Button variant="outline" size="sm" onClick={() => handleApprove(req.id)}>
                                                Duyệt
                                            </Button>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
