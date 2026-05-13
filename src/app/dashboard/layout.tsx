'use client';

import React from 'react';
import { 
  LayoutDashboard, 
  UserCircle, 
  FolderOpen, 
  Briefcase, 
  FileText, 
  Settings,
  Bell,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

const NavItem = ({ href, icon: Icon, label }: NavItemProps) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link 
      href={href}
      className={`flex items-center gap-md px-md py-sm transition-all duration-200 ease-in-out rounded-lg ${
        active 
          ? 'text-primary font-bold border-l-2 border-primary bg-surface-container-lowest/50' 
          : 'text-on-surface-variant hover:bg-surface-container'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  );
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Dynamic title based on route
  const getTitle = () => {
    if (pathname === '/dashboard/projects') return 'Projects';
    if (pathname === '/dashboard/tracker') return 'Job Tracker';
    if (pathname === '/dashboard/portfolio') return 'Portfolio';
    if (pathname === '/dashboard/settings') return 'Settings';
    if (pathname === '/dashboard/letters') return 'Cover Letters';
    if (pathname === '/dashboard/letters/new') return 'New AI Cover Letter';
    return 'Dashboard Overview';
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-[240px] h-screen fixed left-0 top-0 bg-secondary-fixed flex flex-col py-md px-sm border-r border-outline-variant z-50 transition-all duration-200 ease-in-out">
        <div className="mb-xl px-md pt-lg">
          <Link href="/">
            <h1 className="text-headline-lg text-primary font-bold hover:opacity-80 transition-opacity cursor-pointer">DevFolio Pro</h1>
          </Link>
          <p className="text-body-md text-on-surface-variant font-medium">Software Engineer</p>
        </div>
        
        <nav className="flex-1 space-y-xs">
          <NavItem href="/dashboard" icon={LayoutDashboard} label="Dashboard" />
          <NavItem href="/dashboard/portfolio" icon={UserCircle} label="Portfolio" />
          <NavItem href="/dashboard/projects" icon={FolderOpen} label="Projects" />
          <NavItem href="/dashboard/tracker" icon={Briefcase} label="Job Tracker" />
          <NavItem href="/dashboard/letters" icon={FileText} label="Cover Letters" />
        </nav>

        <div className="mt-auto px-md pb-md space-y-md">
          <div className="p-md rounded-xl bg-surface-container border border-outline-variant text-center">
            <p className="text-label-md mb-sm font-bold text-on-surface">Ready for more?</p>
            <button className="w-full bg-primary text-white py-sm rounded-lg font-bold hover:opacity-90 transition-all text-label-md shadow-sm">
              Upgrade to Pro
            </button>
          </div>
          <NavItem href="/dashboard/settings" icon={Settings} label="Settings" />
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 ml-[240px]">
        {/* Top Header */}
        <header className="h-[64px] sticky top-0 bg-surface flex items-center justify-between px-lg border-b border-outline-variant z-40">
          <div className="flex items-center">
            <span className="text-headline-md text-primary font-bold">{getTitle()}</span>
          </div>
          <div className="flex items-center gap-md">
            <button className="p-sm text-on-surface-variant hover:text-primary transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4brLTt_QMwisAXvx2HmXnk5ARsgbfuLMfpGTUdR0nJBIuRnMkDqjIoJL7t5cm-u7mK25cI0DGe_K5SkFYHIZopf3YWQuIfunKAOw6JDGRskOSuYkY_is_ZQFdBXLLX49-PTNQGJF9GEBcsURnKRLSUvizSWsL_SW6ztqNeDZIwOpXVXbVSlwj8PHw9_3O3hQIYWNzksVKqSo2hCVNW4SDWKtgHJdCZPGGsOeYqK8xWiDsoCFUOITY9Mm_DItiPaL-Jh0p6JCt8Ow" 
                alt="User profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-lg max-w-max-width-content mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
