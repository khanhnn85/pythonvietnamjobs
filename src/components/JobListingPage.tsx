
"use client";

import { useState, useTransition, useEffect } from 'react';
import { Search } from 'lucide-react';
import type { Job } from '@/lib/jobs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import JobList from '@/components/JobList';
import { filterJobs } from '@/app/actions';
import { db } from '@/lib/firebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';

interface JobListingPageProps {
  initialJobs: Job[]; // Keep initial jobs for SEO and initial load
}

export default function JobListingPage({ initialJobs }: JobListingPageProps) {
  const [allJobs, setAllJobs] = useState<Job[]>(initialJobs);
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>(initialJobs);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch all jobs from Firestore
    const q = query(collection(db, "jobs"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const jobsFromFirestore: Job[] = [];
        querySnapshot.forEach((doc) => {
            jobsFromFirestore.push({ id: doc.id, ...doc.data() } as Job);
        });

        // Combine firestore jobs with initial static jobs, ensuring no duplicates
        const combinedJobs = [...jobsFromFirestore];
        const initialJobIds = new Set(jobsFromFirestore.map(j => j.id));
        initialJobs.forEach(job => {
            if (!initialJobIds.has(job.id)) {
                combinedJobs.push(job);
            }
        })

        setAllJobs(combinedJobs);
        setDisplayedJobs(combinedJobs);
        setIsLoading(false);
    }, (error) => {
        console.error("Error fetching jobs from Firestore: ", error);
        // Fallback to initial jobs on error
        setAllJobs(initialJobs);
        setDisplayedJobs(initialJobs);
        setIsLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [initialJobs]);


  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
        setDisplayedJobs(allJobs);
        return;
    }
    startTransition(async () => {
      const filteredJobs = await filterJobs(searchQuery, allJobs);
      setDisplayedJobs(filteredJobs as Job[]);
    });
  };

  return (
    <div className="space-y-8">
      <div className="p-8 rounded-lg bg-card border shadow-sm text-center">
        <h1 className="text-4xl font-bold tracking-tight">Tìm công việc Python mơ ước của bạn</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Tìm kiếm các vị trí Python ở TP. Hồ Chí Minh, Hà Nội, Đà Nẵng và hơn thế nữa.
        </p>
        <form
          onSubmit={handleSearch}
          className="mt-6 max-w-2xl mx-auto flex items-center gap-2"
        >
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm theo chức danh, kỹ năng hoặc địa điểm..."
              className="pl-10 h-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit" size="lg" disabled={isPending || isLoading}>
            {isPending ? 'Đang tìm...' : 'Tìm việc'}
          </Button>
        </form>
      </div>

      <JobList jobs={displayedJobs} isLoading={isPending || isLoading} />
    </div>
  );
}
