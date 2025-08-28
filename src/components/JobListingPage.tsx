"use client";

import { useState, useTransition } from 'react';
import { Search } from 'lucide-react';
import type { Job } from '@/lib/jobs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import JobList from '@/components/JobList';
import { filterJobs } from '@/app/actions';

interface JobListingPageProps {
  initialJobs: Job[];
}

export default function JobListingPage({ initialJobs }: JobListingPageProps) {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
        setJobs(initialJobs);
        return;
    }
    startTransition(async () => {
      const filteredJobs = await filterJobs(searchQuery, initialJobs);
      setJobs(filteredJobs as Job[]);
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

      <JobList jobs={jobs} isLoading={isPending} />
    </div>
  );
}
