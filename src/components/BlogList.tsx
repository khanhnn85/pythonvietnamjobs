
"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { BlogPost } from '@/lib/blog';
import BlogCard, { BlogCardSkeleton } from '@/components/BlogCard';

export default function BlogList() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        let q;
        const postsCollection = collection(db, "blogPosts");
        
        if (category && category !== 'all') {
            q = query(
                postsCollection, 
                where("category", "==", category),
                orderBy("createdAt", "desc")
            );
        } else {
            q = query(postsCollection, orderBy("createdAt", "desc"));
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

    if (isLoading) {
        return (
             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                    <BlogCardSkeleton key={i} />
                ))}
            </div>
        );
    }
    
    return posts.length > 0 ? (
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
    );
}
