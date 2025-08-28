"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Code2, Menu, Briefcase, Bookmark, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'All Jobs', icon: Briefcase },
  { href: '/saved-jobs', label: 'Saved Jobs', icon: Bookmark },
  { href: '/contact', label: 'Contact', icon: Mail },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Code2 className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold tracking-tight">VN Jobs Hub</span>
    </Link>
  );
}

function NavLink({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) {
  const pathname = usePathname();
  const isActive = pathname === href;

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

function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-4">
      {navLinks.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
    </nav>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          <div className="p-4">
            <Logo />
            <nav className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => (
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
        <Logo />
        {isMobile ? <MobileNav /> : <DesktopNav />}
      </div>
    </header>
  );
}
