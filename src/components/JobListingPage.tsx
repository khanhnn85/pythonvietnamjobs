"use client";

import { useState, useTransition, useEffect } from 'react';
import { Search } from 'lucide-react';
import type { Job } from '@/lib/jobs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import JobList from '@/components/JobList';
import { filterJobs } from '@/app/actions';

const POSTED_JOBS_KEY = 'postedJobs';

interface JobListingPageProps {
  initialJobs: Job[];
}

export default function JobListingPage({ initialJobs }: JobListingPageProps) {
  const [allJobs, setAllJobs] = useState<Job[]>(initialJobs);
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>(initialJobs);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const loadJobs = () => {
      const jobsRaw = localStorage.getItem(POSTED_JOBS_KEY);
      const postedJobs = jobsRaw ? JSON.parse(jobsRaw) : [];
      const combinedJobs = [...postedJobs, ...initialJobs];
      
      // Remove duplicates, preferring the one from postedJobs (which is newer)
      const uniqueJobs = Array.from(new Map(combinedJobs.map(job => [job.id, job])).values());

      setAllJobs(uniqueJobs);
      setDisplayedJobs(uniqueJobs);
    };

    loadJobs();

    const handleStorageUpdate = (e: StorageEvent) => {
        if (e.key === POSTED_JOBS_KEY) {
            loadJobs();
        }
    };
    
    // Listen for jobs updated from PostJobForm in the same tab
    window.addEventListener('jobsUpdated', loadJobs);
    // Listen for changes from other tabs
    window.addEventListener('storage', handleStorageUpdate);

    return () => {
        window.removeEventListener('jobsUpdated', loadJobs);
        window.removeEventListener('storage', handleStorageUpdate);
    };
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
          <Button type="submit" size="lg" disabled={isPending}>
            {isPending ? 'Đang tìm...' : 'Tìm việc'}
          </Button>
        </form>
      </div>

      <JobList jobs={displayedJobs} isLoading={isPending} />
    </div>
  );
}
