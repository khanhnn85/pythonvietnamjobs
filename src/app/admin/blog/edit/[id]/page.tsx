
"use client";

import { useEffect, useState } from 'react';
import PostEditor from '@/components/PostEditor';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import type { BlogPost } from '@/lib/blog';

export default function EditPostPage({ params }: { params: { id: string } }) {
    const { user, loading: authLoading } = useAuth();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [isLoadingPost, setIsLoadingPost] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!params.id) return;
        
        const fetchPost = async () => {
            try {
                const docRef = doc(db, 'blogPosts', params.id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setPost({ id: docSnap.id, ...docSnap.data() } as BlogPost);
                } else {
                    setError('Không tìm thấy bài viết này.');
                }
            } catch (err) {
                setError('Lỗi khi tải bài viết.');
                console.error(err);
            } finally {
                setIsLoadingPost(false);
            }
        };

        fetchPost();
    }, [params.id]);
    
    if (authLoading || isLoadingPost) {
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
        );
    }

    if (error) {
         return (
             <div className="max-w-2xl mx-auto text-center">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl text-destructive">{error}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button asChild className="mt-4">
                            <Link href="/admin/blog">Quay lại danh sách</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight">Chỉnh sửa bài viết</h1>
                <p className="mt-3 text-lg text-muted-foreground">
                    Cập nhật nội dung bài viết của bạn.
                </p>
            </div>
            {post && <PostEditor existingPost={post} />}
        </div>
    );
}
