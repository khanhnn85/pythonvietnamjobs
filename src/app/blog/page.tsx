
"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { BlogPost } from '@/lib/blog';
import BlogCard, { BlogCardSkeleton } from '@/components/BlogCard';
import CategoryTabs from '@/components/CategoryTabs';

export default function BlogPage() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        let q;
        if (category) {
            q = query(
                collection(db, "blogPosts"), 
                where("category", "==", category),
                orderBy("createdAt", "desc")
            );
        } else {
            q = query(collection(db, "blogPosts"), orderBy("createdAt", "desc"));
        }

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedPosts: BlogPost[] = [];
            querySnapshot.forEach((doc) => {
                fetchedPosts.push({ id: doc.id, ...doc.data() } as BlogPost);
            });
            setPosts(fetchedPosts);
            setIsLoading(false);
        }, (error) => {
            console.error("Error fetching blog posts: ", error);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, [category]);

    return (
        <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
                <h1 className="text-4xl font-bold tracking-tight">Blog Công nghệ</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Khám phá các bài viết, hướng dẫn và chia sẻ kiến thức về Python, AI và Dữ liệu từ các chuyên gia.
                </p>
            </div>
            
            <CategoryTabs />

            {isLoading ? (
                 <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <BlogCardSkeleton key={i} />
                    ))}
                </div>
            ) : posts.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h2 className="text-2xl font-semibold">Không có bài viết nào</h2>
                    <p className="mt-2 text-muted-foreground">
                        Chưa có bài viết nào trong chuyên mục này. Vui lòng quay lại sau.
                    </p>
                </div>
            )}
        </div>
    );
}
