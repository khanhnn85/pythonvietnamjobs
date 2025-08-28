import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/Header';
import { AuthProvider } from '@/hooks/use-auth';

export const metadata: Metadata = {
  title: {
    default: 'Việc làm Python Việt Nam | Python Viet Nam Jobs',
    template: '%s | Python Viet Nam Jobs',
  },
  description: 'Nền tảng tìm kiếm việc làm Python hàng đầu tại Việt Nam. Kết nối cộng đồng lập trình Python Việt Nam với các cơ hội nghề nghiệp tốt nhất tại TP.HCM, Hà Nội, Đà Nẵng.',
  keywords: ['Việc làm Python Việt Nam', 'Python Viet Nam Jobs', 'Lập trình Python Việt Nam', 'Cộng đồng Python Việt Nam', 'Tuyển dụng Python', 'Việc làm IT'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AuthProvider>
            <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
            </div>
            <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
