
"use client";

import { Suspense } from 'react';
import CategoryTabs from '@/components/CategoryTabs';
import BlogList from '@/components/BlogList';
import { BlogCardSkeleton } from '@/components/BlogCard';

export default function BlogPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
                <h1 className="text-4xl font-bold tracking-tight">Blog Công nghệ</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Khám phá các bài viết, hướng dẫn và chia sẻ kiến thức về Python, AI và Dữ liệu từ các chuyên gia.
                </p>
            </div>
            
            {/* Wrap the components that use searchParams in Suspense */}
            <Suspense fallback={<BlogListSkeleton />}>
                <CategoryTabs />
                <BlogList />
            </Suspense>
        </div>
    );
}

function BlogListSkeleton() {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
            ))}
        </div>
    );
}
