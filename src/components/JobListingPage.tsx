
"use client";

import { useState, useEffect } from 'react';
import { Briefcase, Rss, ArrowRight } from 'lucide-react';
import type { Job } from '@/lib/jobs';
import type { BlogPost } from '@/lib/blog';
import { Button } from '@/components/ui/button';
import JobList from '@/components/JobList';
import { db } from '@/lib/firebase';
import { collection, query, onSnapshot, orderBy, limit } from 'firebase/firestore';
import BlogCard, { BlogCardSkeleton } from './BlogCard';
import Link from 'next/link';
import JobCard, { JobCardSkeleton } from './JobCard';


export default function JobListingPage() {
  const [latestJobs, setLatestJobs] = useState<Job[]>([]);
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [isJobsLoading, setIsJobsLoading] = useState(true);
  const [isPostsLoading, setIsPostsLoading] = useState(true);

  useEffect(() => {
    // Fetch latest 6 jobs from Firestore
    const jobsQuery = query(collection(db, "jobs"), orderBy("createdAt", "desc"), limit(6));
    const unsubscribeJobs = onSnapshot(jobsQuery, (querySnapshot) => {
        const jobsFromFirestore: Job[] = [];
        querySnapshot.forEach((doc) => {
            jobsFromFirestore.push({ id: doc.id, ...doc.data() } as Job);
        });
        setLatestJobs(jobsFromFirestore);
        setIsJobsLoading(false);
    }, (error) => {
        console.error("Error fetching jobs from Firestore: ", error);
        setIsJobsLoading(false);
    });

    // Fetch latest 6 blog posts from Firestore
    const postsQuery = query(collection(db, "blogPosts"), orderBy("createdAt", "desc"), limit(6));
    const unsubscribePosts = onSnapshot(postsQuery, (querySnapshot) => {
        const postsFromFirestore: BlogPost[] = [];
        querySnapshot.forEach((doc) => {
            postsFromFirestore.push({ id: doc.id, ...doc.data() } as BlogPost);
        });
        setLatestPosts(postsFromFirestore);
        setIsPostsLoading(false);
    }, (error) => {
        console.error("Error fetching blog posts from Firestore: ", error);
        setIsPostsLoading(false);
    });

    // Cleanup subscription on unmount
    return () => {
        unsubscribeJobs();
        unsubscribePosts();
    };
  }, []);


  return (
    <div className="space-y-16">
      <div className="p-8 rounded-lg bg-card border shadow-sm text-center">
        <h1 className="text-4xl font-bold tracking-tight">Chào mừng đến với Python Viet Nam Jobs</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
          Nền tảng tìm kiếm việc làm và chia sẻ kiến thức hàng đầu cho cộng đồng lập trình Python tại Việt Nam.
        </p>
         <div className="mt-6 flex justify-center gap-4">
            <Button size="lg" asChild>
                <Link href="/">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Tìm việc làm ngay
                </Link>
            </Button>
             <Button size="lg" variant="outline" asChild>
                 <Link href="/blog">
                    <Rss className="mr-2 h-5 w-5" />
                    Khám phá Blog
                </Link>
            </Button>
        </div>
      </div>

      {/* Latest Jobs Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold tracking-tight">Việc làm mới nhất</h2>
             <Button variant="ghost" asChild>
                <Link href="/">
                    Xem tất cả việc làm
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isJobsLoading ? (
             Array.from({ length: 6 }).map((_, i) => <JobCardSkeleton key={i} />)
          ) : latestJobs.length > 0 ? (
            latestJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="col-span-3 text-center text-muted-foreground">Chưa có tin tuyển dụng nào.</p>
          )}
        </div>
      </section>

       {/* Latest Blog Posts Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold tracking-tight">Bài viết mới nhất</h2>
            <Button variant="ghost" asChild>
                <Link href="/blog">
                    Xem tất cả bài viết
                     <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {isPostsLoading ? (
                 Array.from({ length: 6 }).map((_, i) => <BlogCardSkeleton key={i} />)
             ) : latestPosts.length > 0 ? (
                latestPosts.map((post) => <BlogCard key={post.id} post={post} />)
             ) : (
                <p className="col-span-3 text-center text-muted-foreground">Chưa có bài viết nào.</p>
             )}
        </div>
      </section>

    </div>
  );
}
