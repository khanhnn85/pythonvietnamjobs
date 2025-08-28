
"use client";

import Link from 'next/link';
import { Briefcase, MapPin } from 'lucide-react';
import type { Job } from '@/lib/jobs';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/jobs/${job.id}`} className="block group">
      <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 flex flex-col">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
              {job.title}
            </CardTitle>
          </div>
          <CardDescription className="!mt-2 space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {job.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export function JobCardSkeleton() {
    return (
        <Card className="h-full">
            <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <div className="!mt-2 space-y-2 pt-2">
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                     <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-1/3" />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
            </CardContent>
        </Card>
    )
}
