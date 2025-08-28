
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/blog';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

interface BlogCardProps {
    post: BlogPost;
}

const categoryDisplay: Record<string, string> = {
    'python-co-ban': 'Python cơ bản',
    'python-for-ai': 'Python for AI',
    'python-for-data': 'Python for Data',
};

export default function BlogCard({ post }: BlogCardProps) {
    const postDate = post.createdAt ? format(new Date(post.createdAt.seconds * 1000), 'dd/MM/yyyy') : '';

    return (
        <Link href={`/blog/${post.slug}`} className="block group">
            <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 flex flex-col overflow-hidden">
                <CardHeader className="p-0">
                    <div className="relative w-full aspect-video">
                        <Image
                            src={post.coverImage || 'https://picsum.photos/400/225'}
                            alt={`Ảnh bìa bài viết ${post.title}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                    <Badge variant="outline" className="mb-2 w-fit">{categoryDisplay[post.category] || post.category}</Badge>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-grow">
                        {post.excerpt}
                    </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0 text-xs text-muted-foreground">
                    <span>{post.authorName} &bull; {postDate}</span>
                </CardFooter>
            </Card>
        </Link>
    );
}


export function BlogCardSkeleton() {
    return (
        <Card className="h-full flex flex-col overflow-hidden">
            <CardHeader className="p-0">
                 <Skeleton className="w-full aspect-video" />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
                <Skeleton className="h-5 w-1/3 mb-2" />
                <Skeleton className="h-6 w-full mb-1" />
                <Skeleton className="h-6 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-1/2 mt-2" />
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Skeleton className="h-4 w-1/2" />
            </CardFooter>
        </Card>
    )
}
