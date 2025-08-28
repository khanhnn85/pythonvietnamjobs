
"use client";

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, UploadCloud, CheckCircle, FileText } from 'lucide-react';
import type { Job } from '@/lib/jobs';
import { extractInfoFromCvAction, submitApplicationAction } from '@/app/actions';

interface ApplyDialogProps {
  job: Job;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Họ và tên phải có ít nhất 2 ký tự.' }),
  email: z.string().email({ message: 'Vui lòng nhập một địa chỉ email hợp lệ.' }),
  phoneNumber: z.string().min(8, { message: 'Số điện thoại không hợp lệ.' }),
  cv: z.instanceof(File, { message: 'Vui lòng tải lên CV của bạn.' }),
});

export default function ApplyDialog({ job, isOpen, onOpenChange }: ApplyDialogProps) {
  const { toast } = useToast();
  const [isProcessingCv, setIsProcessingCv] = useState(false);
  const [isSubmitting, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
    },
  });

  const handleCvChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    form.setValue('cv', file);
    setIsProcessingCv(true);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const dataUri = reader.result as string;
        const extractedInfo = await extractInfoFromCvAction(dataUri);
        
        if(extractedInfo.fullName) form.setValue('fullName', extractedInfo.fullName);
        if(extractedInfo.email) form.setValue('email', extractedInfo.email);
        if(extractedInfo.phoneNumber) form.setValue('phoneNumber', extractedInfo.phoneNumber);

        toast({
          title: 'Đã bóc tách thông tin từ CV!',
          description: 'Vui lòng kiểm tra và hoàn thiện thông tin bên dưới.',
        });
      };
    } catch (error) {
      toast({
        title: 'Lỗi',
        description: 'Không thể xử lý tệp CV. Vui lòng điền thông tin thủ công.',
        variant: 'destructive',
      });
    } finally {
      setIsProcessingCv(false);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
       const result = await submitApplicationAction({
            jobId: job.id,
            jobTitle: job.title,
            recruiterId: job.recruiterId,
            fullName: values.fullName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            cvFileName: values.cv.name,
       });

       if (result.success) {
            toast({
                title: 'Nộp đơn thành công!',
                description: 'Đơn ứng tuyển của bạn đã được gửi đến nhà tuyển dụng.',
            });
            onOpenChange(false);
            form.reset();
       } else {
            toast({
                title: 'Nộp đơn thất bại',
                description: result.error,
                variant: 'destructive',
            });
       }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Ứng tuyển vào vị trí: {job.title}</DialogTitle>
          <DialogDescription>
            Tải lên CV của bạn để bắt đầu. Chúng tôi sẽ cố gắng tự động điền thông tin giúp bạn.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="cv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tải lên CV (PDF, DOCX)</FormLabel>
                  <FormControl>
                     <div className="relative">
                        <Input
                            id="cv-upload"
                            type="file"
                            accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            onChange={handleCvChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            disabled={isProcessingCv}
                        />
                         <label htmlFor="cv-upload" className={`flex items-center justify-center w-full h-32 px-4 border-2 border-dashed rounded-md cursor-pointer ${form.watch('cv') ? 'border-primary' : ''}`}>
                            {isProcessingCv ? (
                                <div className="text-center">
                                    <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
                                    <p className="mt-2 text-sm text-muted-foreground">Đang xử lý CV...</p>
                                </div>
                            ) : form.watch('cv') ? (
                                <div className="text-center text-primary">
                                    <FileText className="mx-auto h-8 w-8" />
                                    <p className="mt-2 text-sm font-medium">{form.watch('cv').name}</p>
                                     <p className="mt-1 text-xs text-muted-foreground">Nhấp hoặc kéo để thay thế</p>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <UploadCloud className="mx-auto h-8 w-8 text-muted-foreground" />
                                    <p className="mt-2 text-sm text-muted-foreground">Nhấp để tải lên hoặc kéo và thả</p>
                                </div>
                            )}
                        </label>
                     </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Họ và tên</FormLabel>
                  <FormControl>
                    <Input placeholder="Nguyễn Văn A" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="ban@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số điện thoại</FormLabel>
                  <FormControl>
                    <Input placeholder="09xxxxxxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="ghost">Hủy</Button>
                </DialogClose>
                <Button type="submit" disabled={isSubmitting || isProcessingCv}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Gửi đơn ứng tuyển
                </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
