"use client";

import { useState, useEffect } from 'react';
import { useSavedJobs } from '@/hooks/use-saved-jobs';
import { allJobs, type Job } from '@/lib/jobs';
import JobList from '@/components/JobList';
import { Bookmark } from 'lucide-react';

export default function SavedJobsPage() {
  const { savedJobIds } = useSavedJobs();
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const jobs = allJobs.filter(job => savedJobIds.includes(job.id));
      setSavedJobs(jobs);
    }
  }, [savedJobIds, isClient]);

  if (!isClient) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-card p-6 rounded-lg animate-pulse h-64" />
            ))}
        </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Công việc đã lưu của bạn</h1>
      {savedJobs.length > 0 ? (
        <JobList jobs={savedJobs} />
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-lg bg-card border">
          <Bookmark className="w-16 h-16 text-muted-foreground" />
          <h2 className="mt-4 text-2xl font-semibold">Chưa có công việc nào được lưu</h2>
          <p className="mt-2 text-muted-foreground">
            Nhấp vào biểu tượng dấu trang trên một công việc để lưu lại sau.
          </p>
        </div>
      )}
    </div>
  );
}
