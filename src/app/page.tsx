import JobListingPage from '@/components/JobListingPage';
import { allJobs } from '@/lib/jobs';

export default function Home() {
  return <JobListingPage initialJobs={allJobs} />;
}
