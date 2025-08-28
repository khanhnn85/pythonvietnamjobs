import { allJobs } from '@/lib/jobs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import JobDetailClient from '@/components/JobDetailClient';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Job } from '@/lib/jobs';

interface JobDetailPageProps {
  params: { id: string };
}

async function getJob(id: string): Promise<Job | null> {
    try {
        const jobDocRef = doc(db, 'jobs', id);
        const jobSnap = await getDoc(jobDocRef);

        if (jobSnap.exists()) {
            return { id: jobSnap.id, ...jobSnap.data() } as Job;
        }

        // Fallback to static jobs if not in Firestore
        const staticJob = allJobs.find((j) => j.id === id);
        if (staticJob) return staticJob;

        return null;

    } catch (error) {
        console.error("Error fetching job:", error);
        // Fallback to static jobs on error
        const staticJob = allJobs.find((j) => j.id === id);
        return staticJob || null;
    }
}


export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const job = await getJob(params.id);

  if (!job) {
    return {
      title: 'Không tìm thấy công việc',
    };
  }

  return {
    title: `Tuyển ${job.title} - ${job.company}`,
    description: `Ứng tuyển vị trí ${job.title} tại ${job.company} ở ${job.location}. ${job.description}`,
    keywords: [job.title, job.company, job.location, 'Việc làm Python', 'Lập trình Python', 'Tuyển dụng IT'],
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const job = await getJob(params.id);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
