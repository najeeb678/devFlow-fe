import React from 'react';
import { 
  Plus, 
  MoreHorizontal, 
  Link as LinkIcon, 
  Paperclip, 
  Clock, 
  ArrowRight,
  CheckCircle2,
  XCircle,
  Search,
  Filter
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const KanbanColumn = ({ title, count, color, children }: any) => (
  <div className="flex flex-col gap-md min-h-[500px]">
    <div className={`flex items-center justify-between border-b-2 ${color} pb-xs px-xs`}>
      <div className="flex items-center gap-xs">
        <span className="text-label-md font-bold uppercase tracking-wider">{title}</span>
        <span className="text-on-surface-variant opacity-50 text-mono-sm text-[10px] bg-surface-container-high px-xs rounded font-bold">
          {count}
        </span>
      </div>
      <button className="text-on-surface-variant hover:text-primary">
        <MoreHorizontal className="w-4 h-4" />
      </button>
    </div>
    <div className="flex flex-col gap-sm">
      {children}
    </div>
  </div>
);

const JobCard = ({ company, role, date, logo, urgent, dragging, status, statusIcon: StatusIcon, salary }: any) => (
  <Card 
    className={`p-md ${dragging ? 'border-2 border-primary shadow-xl scale-105 -rotate-2 z-10 cursor-grabbing ring-4 ring-primary/10' : 'cursor-grab active:cursor-grabbing'}`} 
    hoverable={!dragging}
  >
    <div className="flex justify-between items-start mb-sm">
      <div className={`h-8 w-8 rounded flex items-center justify-center font-bold ${dragging ? 'bg-on-primary-fixed text-on-primary-fixed-variant' : 'bg-primary-fixed text-primary'}`}>
        {company[0]}
      </div>
      <div className="flex gap-xs items-center">
        {urgent && (
          <span className="px-xs py-[1px] bg-primary text-on-primary text-[10px] font-bold rounded uppercase">Urgent</span>
        )}
        {StatusIcon && <StatusIcon className="w-4 h-4 text-on-surface-variant" />}
        {!urgent && !StatusIcon && <LinkIcon className="w-4 h-4 text-on-surface-variant" />}
      </div>
    </div>
    <h3 className="text-[14px] font-bold text-on-surface">{company}</h3>
    <p className="text-body-md text-on-surface-variant mb-md font-medium">{role}</p>
    <div className="flex items-center justify-between border-t border-outline-variant pt-sm mt-sm">
      <span className="text-mono-sm text-on-surface-variant opacity-60 font-medium">{date}</span>
      {salary ? (
        <span className="text-label-md text-on-secondary-fixed font-bold">{salary}</span>
      ) : (
        <span className="text-primary"><ArrowRight className="w-4 h-4" /></span>
      )}
    </div>
  </Card>
);

export default function TrackerPage() {
  return (
    <div className="space-y-lg">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-headline-xl font-bold text-on-surface">Application Pipeline</h1>
          <p className="text-body-md text-on-surface-variant font-medium">Manage your career progression and track active opportunities.</p>
        </div>
        <Button variant="primary" size="md" className="gap-xs">
          <Plus className="w-4 h-4" />
          Add Application
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-md items-start overflow-x-auto pb-lg">
        {/* Wishlist */}
        <KanbanColumn title="Wishlist" count={4} color="border-primary-container">
          <JobCard company="Stripe" role="Product Engineer" date="12 Oct 2023" />
          <JobCard company="Airbnb" role="Senior UX Developer" date="15 Oct 2023" statusIcon={Paperclip} />
        </KanbanColumn>

        {/* Applied */}
        <KanbanColumn title="Applied" count={2} color="border-secondary-container">
          <JobCard company="Figma" role="Systems Engineer" date="08 Oct 2023" urgent />
        </KanbanColumn>

        {/* Interview */}
        <KanbanColumn title="Interview" count={3} color="border-primary-container">
          <JobCard company="Vercel" role="Frontend Lead" date="22 Oct 2023" dragging />
          <div className="opacity-40">
            <JobCard company="Google" role="Cloud Architect" date="20 Oct 2023" />
          </div>
        </KanbanColumn>

        {/* Offer */}
        <KanbanColumn title="Offer" count={1} color="border-green-500">
          <JobCard company="Netflix" role="Infrastructure Engineer" date="25 Oct 2023" statusIcon={CheckCircle2} salary="$185k+" />
        </KanbanColumn>

        {/* Rejected */}
        <KanbanColumn title="Rejected" count={1} color="border-error">
          <div className="grayscale opacity-70">
            <JobCard company="Meta" role="Fullstack Engineer" date="01 Oct 2023" statusIcon={XCircle} />
          </div>
        </KanbanColumn>
      </div>
    </div>
  );
}
