
"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, onSnapshot, orderBy, doc, deleteDoc } from 'firebase/firestore';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';
import type { BlogPost } from '@/lib/blog';
import { useToast } from '@/hooks/use-toast';

const categoryDisplay: Record<string, string> = {
    'python-co-ban': 'Python cơ bản',
    'python-for-ai': 'Python for AI',
    'python-for-data': 'Python for Data',
};

export default function BlogManagementPage() {
    const { user, loading } = useAuth();
    const { toast } = useToast();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!user || user.role !== 'admin') {
            setIsLoading(false);
            return;
        }

        const q = query(collection(db, "blogPosts"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedPosts: BlogPost[] = [];
            querySnapshot.forEach((doc) => {
                fetchedPosts.push({ id: doc.id, ...doc.data() } as BlogPost);
            });
            setPosts(fetchedPosts);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, [user]);

    const handleDelete = async (postId: string) => {
        if (!confirm('Bạn có chắc chắn muốn xóa bài viết này không? Hành động này không thể hoàn tác.')) {
            return;
        }

        try {
            await deleteDoc(doc(db, "blogPosts", postId));
            toast({
                title: "Xóa thành công",
                description: "Bài viết đã được xóa khỏi hệ thống.",
            });
        } catch (error) {
            console.error("Error deleting post: ", error);
            toast({
                title: "Lỗi",
                description: "Không thể xóa bài viết. Vui lòng thử lại.",
                variant: 'destructive'
            });
        }
    };

    if (loading || isLoading) {
        return <div className="text-center p-8">Đang tải trang quản lý blog...</div>;
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
        <div className="max-w-5xl mx-auto space-y-8">
             <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Quản lý Blog</h1>
                    <p className="text-muted-foreground">Tạo, sửa và quản lý các bài viết.</p>
                </div>
                <Button asChild>
                    <Link href="/admin/blog/new">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Viết bài mới
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Danh sách bài viết</CardTitle>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Tiêu đề</TableHead>
                                <TableHead>Chuyên mục</TableHead>
                                <TableHead>Ngày tạo</TableHead>
                                <TableHead className="text-right">Hành động</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {posts.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="h-24 text-center">
                                        Chưa có bài viết nào.
                                    </TableCell>
                                </TableRow>
                            ) : posts.map((post) => (
                                <TableRow key={post.id}>
                                    <TableCell className="font-medium">{post.title}</TableCell>
                                    <TableCell>{categoryDisplay[post.category] || post.category}</TableCell>
                                    <TableCell>
                                        {post.createdAt ? formatDistanceToNow(post.createdAt.toDate(), { addSuffix: true, locale: vi }) : 'N/A'}
                                    </TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button asChild variant="outline" size="icon">
                                            <Link href={`/admin/blog/edit/${post.id}`}>
                                                <Edit className="h-4 w-4" />
                                                <span className="sr-only">Sửa</span>
                                            </Link>
                                        </Button>
                                        <Button variant="destructive" size="icon" onClick={() => handleDelete(post.id)}>
                                            <Trash2 className="h-4 w-4" />
                                            <span className="sr-only">Xóa</span>
                                        </Button>
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
