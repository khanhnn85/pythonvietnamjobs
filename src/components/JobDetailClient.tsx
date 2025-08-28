
"use client";

import { useState } from 'react';
import { Briefcase, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Job } from '@/lib/jobs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ApplyDialog from '@/components/ApplyDialog';

interface JobDetailClientProps {
  job: Job;
}

export default function JobDetailClient({ job }: JobDetailClientProps) {
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);

  return (
    <>
      <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-4">
              <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Quay lại tất cả công việc
              </Link>
          </Button>

        <Card>
          <CardHeader className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className="flex-grow">
              <CardTitle className="text-3xl font-extrabold">{job.title}</CardTitle>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  <span className="font-medium">{job.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">{job.location}</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2">
              <Button onClick={() => setIsApplyDialogOpen(true)} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                  Ứng tuyển ngay
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Separator className="my-6" />
            <div className="prose prose-quoteless prose-neutral dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Mô tả công việc</h2>
              <p>{job.fullDescription}</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Yêu cầu</h2>
              <p>{job.requirements}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <ApplyDialog job={job} isOpen={isApplyDialogOpen} onOpenChange={setIsApplyDialogOpen} />
    </>
  );
}
