
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

export default function JobSearchPage() {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>([]);
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

        setAllJobs(jobsFromFirestore);
        setDisplayedJobs(jobsFromFirestore);
        setIsLoading(false);
    }, (error) => {
        console.error("Error fetching jobs from Firestore: ", error);
        // On error, show no jobs and stop loading.
        setAllJobs([]);
        setDisplayedJobs([]);
        setIsLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);


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
       <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">Tất cả việc làm Python</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sử dụng bộ lọc AI để tìm kiếm các vị trí phù hợp nhất với kỹ năng và kinh nghiệm của bạn.
            </p>
        </div>
        <form
          onSubmit={handleSearch}
          className="mt-6 max-w-2xl mx-auto flex items-center gap-2 p-4 border rounded-lg bg-card"
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

      <JobList jobs={displayedJobs} isLoading={isLoading} />
    </div>
  );
}
