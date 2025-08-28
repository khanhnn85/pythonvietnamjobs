
'use server';

import { filterJobsByRelevance } from '@/ai/flows/filter-jobs';
import { extractCvInfo, type ExtractCvInfoOutput } from '@/ai/flows/extract-cv-info';
import type { Job } from '@/lib/jobs';
import { db } from '@/lib/firebase';
import { collection, addDoc, writeBatch, query, where, getDocs } from 'firebase/firestore';
import { seedBlogPosts } from '@/lib/blog-seed-data';
import type { BlogPost } from '@/lib/blog';

export async function filterJobs(query: string, jobs: Job[]) {
  if (!query) {
    return jobs;
  }
  try {
    const jobsForAI = jobs.map(({ id, ...job }) => job);
    const filteredJobs = await filterJobsByRelevance({ query, jobs: jobsForAI });
    
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

export async function extractInfoFromCvAction(cvDataUri: string): Promise<ExtractCvInfoOutput> {
    try {
        const result = await extractCvInfo({ cvDataUri });
        return result;
    } catch(error) {
        console.error("Error extracting CV info with AI:", error);
        return {
            fullName: '',
            email: '',
            phoneNumber: '',
        }
    }
}

export async function submitApplicationAction(applicationData: {
    jobId: string,
    jobTitle: string,
    recruiterId: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    cvFileName: string,
    cvUrl: string,
}) {
    try {
        await addDoc(collection(db, "applications"), {
            ...applicationData,
            submittedAt: new Date(),
            status: 'new', // 'new', 'viewed', 'contacted'
        });
        return { success: true };
    } catch (error) {
        console.error("Error submitting application:", error);
        return { success: false, error: "Không thể nộp đơn. Vui lòng thử lại."};
    }
}

export async function seedBlogDataAction(adminUserId: string, adminUserName: string) {
    try {
        const batch = writeBatch(db);
        const postsCollection = collection(db, "blogPosts");
        let count = 0;

        for (const post of seedBlogPosts) {
             // Check if a post with the same slug already exists
            const q = query(postsCollection, where("slug", "==", post.slug));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                const docRef = doc(postsCollection);
                const postData: Omit<BlogPost, 'id'> = {
                    ...post,
                    authorId: adminUserId,
                    authorName: adminUserName,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                };
                batch.set(docRef, postData);
                count++;
            }
        }

        if (count > 0) {
            await batch.commit();
            return { success: true, message: `Đã thêm thành công ${count} bài viết mẫu vào Firestore.` };
        } else {
            return { success: true, message: "Tất cả các bài viết mẫu đã tồn tại trong Firestore. Không có gì được thêm." };
        }

    } catch (error) {
        console.error("Error seeding blog data:", error);
        return { success: false, error: "Đã xảy ra lỗi khi thêm dữ liệu mẫu." };
    }
}
