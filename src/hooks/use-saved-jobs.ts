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
      console.error('Không thể đọc các công việc đã lưu từ localStorage', error);
    }
  }, []);

  const persistSavedJobs = (ids: string[]) => {
    try {
      setSavedJobIds(ids);
      window.localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(ids));
    } catch (error) {
      console.error('Không thể lưu công việc vào localStorage', error);
    }
  };

  const addJob = useCallback((jobId: string) => {
    const newSavedJobIds = [...savedJobIds, jobId];
    persistSavedJobs(newSavedJobIds);
    toast({
      title: "Đã lưu công việc!",
      description: "Bạn có thể xem các công việc đã lưu của mình trên trang 'Việc làm đã lưu'.",
    });
  }, [savedJobIds, toast]);

  const removeJob = useCallback((jobId: string) => {
    const newSavedJobIds = savedJobIds.filter((id) => id !== jobId);
    persistSavedJobs(newSavedJobIds);
    toast({
      title: "Đã bỏ lưu công việc",
      description: "Công việc đã được xóa khỏi danh sách đã lưu của bạn.",
    });
  }, [savedJobIds, toast]);

  const isSaved = useCallback((jobId: string) => {
    return savedJobIds.includes(jobId);
  }, [savedJobIds]);

  return { savedJobIds, addJob, removeJob, isSaved };
};
