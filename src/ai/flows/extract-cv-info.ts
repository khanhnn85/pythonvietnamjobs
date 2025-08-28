'use server';
/**
 * @fileOverview Extracts candidate information from a CV.
 *
 * - extractCvInfo - A function that handles the CV information extraction process.
 * - ExtractCvInfoInput - The input type for the extractCvInfo function.
 * - ExtractCvInfoOutput - The return type for the extractCvInfo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractCvInfoInputSchema = z.object({
  cvDataUri: z
    .string()
    .describe(
      "A CV document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ExtractCvInfoInput = z.infer<typeof ExtractCvInfoInputSchema>;

const ExtractCvInfoOutputSchema = z.object({
  fullName: z.string().optional().describe('The full name of the candidate.'),
  email: z.string().optional().describe('The email address of the candidate.'),
  phoneNumber: z.string().optional().describe('The phone number of the candidate.'),
});
export type ExtractCvInfoOutput = z.infer<typeof ExtractCvInfoOutputSchema>;

export async function extractCvInfo(input: ExtractCvInfoInput): Promise<ExtractCvInfoOutput> {
  return extractCvInfoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'extractCvInfoPrompt',
  input: {schema: ExtractCvInfoInputSchema},
  output: {schema: ExtractCvInfoOutputSchema},
  prompt: `You are an expert recruitment assistant. Your task is to extract key information from the provided CV.

Analyze the following CV document and extract the candidate's full name, email address, and phone number.
If any piece of information is not found, leave the corresponding field empty.

CV Document: {{media url=cvDataUri}}`,
});

const extractCvInfoFlow = ai.defineFlow(
  {
    name: 'extractCvInfoFlow',
    inputSchema: ExtractCvInfoInputSchema,
    outputSchema: ExtractCvInfoOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
