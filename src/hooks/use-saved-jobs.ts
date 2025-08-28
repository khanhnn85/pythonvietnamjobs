"use client";

import { useState, useEffect, useCallback } from 'react';
import { useToast } from './use-toast';

const SAVED_JOBS_KEY = 'savedJobs';

export const useSavedJobs = () => {
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(SAVED_JOBS_KEY);
      if (item) {
        setSavedJobIds(JSON.parse(item));
      }
    } catch (error) {
      console.error('Failed to read saved jobs from localStorage', error);
    }
  }, []);

  const persistSavedJobs = (ids: string[]) => {
    try {
      setSavedJobIds(ids);
      window.localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(ids));
    } catch (error) {
      console.error('Failed to save jobs to localStorage', error);
    }
  };

  const addJob = useCallback((jobId: string) => {
    const newSavedJobIds = [...savedJobIds, jobId];
    persistSavedJobs(newSavedJobIds);
    toast({
      title: "Job Saved!",
      description: "You can view your saved jobs on the 'Saved Jobs' page.",
    });
  }, [savedJobIds, toast]);

  const removeJob = useCallback((jobId: string) => {
    const newSavedJobIds = savedJobIds.filter((id) => id !== jobId);
    persistSavedJobs(newSavedJobIds);
    toast({
      title: "Job Unsaved",
      description: "The job has been removed from your saved list.",
    });
  }, [savedJobIds, toast]);

  const isSaved = useCallback((jobId: string) => {
    return savedJobIds.includes(jobId);
  }, [savedJobIds]);

  return { savedJobIds, addJob, removeJob, isSaved };
};
