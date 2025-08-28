import type { Job } from '@/lib/jobs';
import JobCard, { JobCardSkeleton } from '@/components/JobCard';

interface JobListProps {
  jobs: Job[];
  isLoading?: boolean;
}

export default function JobList({ jobs, isLoading = false }: JobListProps) {
  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold">No Jobs Found</h2>
        <p className="mt-2 text-muted-foreground">
          Try adjusting your search or check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
