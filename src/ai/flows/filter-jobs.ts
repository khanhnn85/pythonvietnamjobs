'use server';
/**
 * @fileOverview Filters job postings based on relevance to a search query.
 *
 * - filterJobsByRelevance - A function that filters and sorts job postings based on relevance.
 * - FilterJobsInput - The input type for the filterJobsByRelevance function.
 * - FilterJobsOutput - The return type for the filterJobsByRelevance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JobPostingSchema = z.object({
  title: z.string().describe('The title of the job posting.'),
  company: z.string().describe('The company offering the job.'),
  location: z.string().describe('The location of the job.'),
  description: z.string().describe('A brief description of the job.'),
  fullDescription: z.string().optional().describe('The full job description.'),
  requirements: z.string().optional().describe('The job requirements.'),
});

export type JobPosting = z.infer<typeof JobPostingSchema>;

const FilterJobsInputSchema = z.object({
  query: z.string().describe('The search query from the user.'),
  jobs: z.array(JobPostingSchema).describe('An array of job postings to filter.'),
});
export type FilterJobsInput = z.infer<typeof FilterJobsInputSchema>;

const FilterJobsOutputSchema = z.array(JobPostingSchema);
export type FilterJobsOutput = z.infer<typeof FilterJobsOutputSchema>;

export async function filterJobsByRelevance(input: FilterJobsInput): Promise<FilterJobsOutput> {
  return filterJobsFlow(input);
}

const filterJobsPrompt = ai.definePrompt({
  name: 'filterJobsPrompt',
  input: {schema: FilterJobsInputSchema},
  output: {schema: FilterJobsOutputSchema},
  prompt: `You are an expert at filtering job postings based on relevance to a search query.

  Given the following search query:
  {{query}}

  Filter the following job postings to only include those that are relevant to the search query. Sort the results by relevance, with the most relevant jobs first.

  Job Postings:
  {{#each jobs}}
  Title: {{this.title}}
  Company: {{this.company}}
  Location: {{this.location}}
  Description: {{this.description}}
  {{/each}}`,
});

const filterJobsFlow = ai.defineFlow(
  {
    name: 'filterJobsFlow',
    inputSchema: FilterJobsInputSchema,
    outputSchema: FilterJobsOutputSchema,
  },
  async input => {
    const {output} = await filterJobsPrompt(input);
    return output!;
  }
);
