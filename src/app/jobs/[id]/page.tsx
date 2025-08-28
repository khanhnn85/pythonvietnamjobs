import { allJobs } from '@/lib/jobs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import JobDetailClient from '@/components/JobDetailClient';

interface JobDetailPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const job = allJobs.find((j) => j.id === params.id);

  if (!job) {
    return {
      title: 'Không tìm thấy công việc',
    };
  }

  return {
    title: `${job.title} tại ${job.company} | VN Jobs Hub`,
    description: job.description,
  };
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = allJobs.find((j) => j.id === params.id);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
