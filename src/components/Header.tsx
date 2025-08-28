
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Code2, Menu, Briefcase, Bookmark, Mail, LogOut, User, Send, CheckCircle, PlusCircle, LayoutDashboard, ShieldCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/use-auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const navLinks = [
  { href: '/', label: 'Tất cả việc làm', icon: Briefcase },
  { href: '/saved-jobs', label: 'Việc làm đã lưu', icon: Bookmark },
  { href: '/contact', label: 'Liên hệ', icon: Mail },
];

const RECRUITER_REQUEST_STATUS_KEY = 'recruiterRequestStatus';
const ADMIN_EMAILS = ['admin.vnjobshub@example.com', 'khanhnnvn@gmail.com'];


function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Code2 className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold tracking-tight">VN Jobs Hub</span>
    </Link>
  );
}

function NavLink({ href, label, icon: Icon, isRecruiterLink = false }: { href: string; label: string; icon: React.ElementType, isRecruiterLink?: boolean }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { user } = useAuth();
  
  if (isRecruiterLink && !user) {
    return null;
  }

  return (
    <Link href={href}>
       <span
          className={cn(
            'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
            isActive
              ? 'bg-primary/10 text-primary'
              : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
          )}
        >
          <Icon className="h-4 w-4" />
          {label}
        </span>
    </Link>
  );
}

function AuthNav() {
    const { user, signInWithGoogle, signOutUser } = useAuth();
    const [requestStatus, setRequestStatus] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const updateStatus = () => {
                setRequestStatus(localStorage.getItem(RECRUITER_REQUEST_STATUS_KEY));
            }
            updateStatus();

            window.addEventListener('storage', updateStatus);
            // Custom event to handle status changes within the same tab
            window.addEventListener('recruiterStatusChanged', updateStatus);


            return () => {
                window.removeEventListener('storage', updateStatus);
                window.removeEventListener('recruiterStatusChanged', updateStatus);
            };
        }
    }, [user]); // Rerun when user logs in/out

    if (user) {
      const isRequestPending = requestStatus === 'pending';
      const isRecruiter = requestStatus === 'approved';
      const isAdmin = user.email ? ADMIN_EMAILS.includes(user.email) : false;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'Người dùng'} />
                <AvatarFallback>
                    {user.displayName?.charAt(0).toUpperCase() ?? <User />}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.displayName}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {isAdmin && (
                 <DropdownMenuItem asChild>
                    <Link href="/admin">
                      <ShieldCheck className="mr-2 h-4 w-4" />
                      <span>Trang Admin</span>
                    </Link>
                 </DropdownMenuItem>
            )}
            {isRecruiter ? (
              <>
                 <DropdownMenuItem asChild>
                    <Link href="/recruiter-dashboard">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Bảng điều khiển</span>
                    </Link>
                 </DropdownMenuItem>
                 <DropdownMenuItem asChild>
                    <Link href="/post-job">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>Đăng tin mới</span>
                    </Link>
                 </DropdownMenuItem>
              </>
            ) : (
                <DropdownMenuItem asChild disabled={isRequestPending}>
                <Link href="/register-recruiter" className={cn(isRequestPending && "cursor-not-allowed")}>
                    {isRequestPending ? (
                        <CheckCircle className="mr-2 h-4 w-4" />
                    ) : (
                        <Send className="mr-2 h-4 w-4" />
                    )}
                    <span>
                        {isRequestPending ? 'Đã gửi yêu cầu' : 'Đăng ký làm nhà tuyển dụng'}
                    </span>
                </Link>
                </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => {
                signOutUser();
            }}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Đăng xuất</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  
    return (
      <Button onClick={signInWithGoogle}>
        Đăng nhập
      </Button>
    );
  }

function DesktopNav() {
  const recruiterNavLink = { href: '/recruiter-dashboard', label: 'Dành cho Nhà tuyển dụng', icon: Briefcase, isRecruiterLink: true };
  return (
    <nav className="hidden md:flex items-center gap-4">
      {navLinks.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
      <NavLink {...recruiterNavLink} />
    </nav>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const recruiterNavLink = { href: '/recruiter-dashboard', label: 'Dành cho Nhà tuyển dụng', icon: Briefcase, isRecruiterLink: true };

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Mở menu điều hướng</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0">
            <SheetHeader className="p-4 border-b">
                 <Logo />
                <SheetTitle className="sr-only">Menu Điều hướng</SheetTitle>
            </SheetHeader>
          <div className="p-4">
            <nav className="mt-2 flex flex-col gap-2">
              {[...navLinks, recruiterNavLink].map((link) => (
                <div key={link.href} onClick={() => setIsOpen(false)}>
                    <NavLink {...link} />
                </div>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}


export function Header() {
  const isMobile = useIsMobile();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
            <Logo />
            {isMobile ? null : <DesktopNav />}
        </div>
        <div className="flex items-center gap-2">
            <AuthNav />
            {isMobile ? <MobileNav /> : null}
        </div>
      </div>
    </header>
  );
}
