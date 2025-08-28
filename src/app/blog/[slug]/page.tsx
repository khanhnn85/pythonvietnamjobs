
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, limit, doc, getDoc } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { BlogPost } from '@/lib/blog';
import Image from 'next/image';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Calendar, UserCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface BlogPostPageProps {
    params: { slug: string };
}

async function getPost(slug: string): Promise<BlogPost | null> {
    try {
        const q = query(collection(db, 'blogPosts'), where('slug', '==', slug), limit(1));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return null;
        }

        const postDoc = querySnapshot.docs[0];
        return { id: postDoc.id, ...postDoc.data() } as BlogPost;
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}

const categoryDisplay: Record<string, string> = {
    'python-co-ban': 'Python cơ bản',
    'python-for-ai': 'Python for AI',
    'python-for-data': 'Python for Data',
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return { title: 'Không tìm thấy bài viết' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.title, categoryDisplay[post.category], 'Python Viet Nam Jobs Blog'],
    openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [
            {
                url: post.coverImage || '/placeholder.png',
                width: 1200,
                height: 630,
                alt: post.title,
            },
        ],
    },
  };
}


export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post = await getPost(params.slug);

    if (!post) {
        notFound();
    }
    
    return (
        <article className="max-w-3xl mx-auto py-8">
            <header className="mb-12 text-center">
                <Badge asChild variant="outline" className="mb-4">
                    <Link href={`/blog?category=${post.category}`}>
                        {categoryDisplay[post.category]}
                    </Link>
                </Badge>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                    {post.title}
                </h1>
                <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <UserCircle className="h-4 w-4" />
                        <span>{post.authorName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={new Date(post.createdAt.seconds * 1000).toISOString()}>
                           {format(new Date(post.createdAt.seconds * 1000), 'PPP', { locale: vi })}
                        </time>
                    </div>
                </div>
            </header>

            {post.coverImage && (
                <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={post.coverImage}
                        alt={`Ảnh bìa cho bài viết ${post.title}`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}
            
            {/* Using prose for nice typography styling from Tailwind */}
            <div
                className="prose prose-lg dark:prose-invert max-w-none prose-p:leading-relaxed prose-headings:font-bold prose-a:text-primary hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}

// Generate static paths for posts to improve build times and performance
export async function generateStaticParams() {
    try {
        const postsCol = collection(db, 'blogPosts');
        const postSnapshot = await getDocs(postsCol);
        const paths = postSnapshot.docs.map(doc => ({
            slug: doc.data().slug,
        }));
        return paths;
    } catch (error) {
        console.error("Error generating static params for blog:", error);
        return [];
    }
}
