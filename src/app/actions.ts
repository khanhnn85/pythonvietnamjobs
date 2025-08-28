'use server';

import { filterJobsByRelevance } from '@/ai/flows/filter-jobs';
import type { Job } from '@/lib/jobs';

export async function filterJobs(query: string, jobs: Job[]) {
  if (!query) {
    return jobs;
  }
  try {
    const jobsForAI = jobs.map(({ id, ...job }) => job);
    const filteredJobs = await filterJobsByRelevance({ query, jobs: jobsForAI });
    
    // The AI returns jobs matching the JobPosting schema, which doesn't include 'id'.
    // We need to map the results back to our original jobs to retain the 'id'.
    // A simple way is to match by title and company, assuming they are unique enough for this context.
    const originalJobsMap = new Map(jobs.map(job => [`${job.title}-${job.company}`, job]));
    
    const jobsWithIds = filteredJobs
        .map(filteredJob => {
            const key = `${filteredJob.title}-${filteredJob.company}`;
            return originalJobsMap.get(key);
        })
        .filter((job): job is Job => !!job);

    return jobsWithIds;

  } catch (error) {
    console.error('Error filtering jobs with AI:', error);
    // Fallback to simple text search on error
    const lowerCaseQuery = query.toLowerCase();
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(lowerCaseQuery) ||
        job.company.toLowerCase().includes(lowerCaseQuery) ||
        job.description.toLowerCase().includes(lowerCaseQuery) ||
        job.location.toLowerCase().includes(lowerCaseQuery)
    );
  }
}
