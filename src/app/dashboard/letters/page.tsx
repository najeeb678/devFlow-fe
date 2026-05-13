import React from 'react';
import { 
  PlusCircle, 
  MoreVertical, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Plus
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const LetterCard = ({ company, role, date, content, status, statusColor, statusText }: any) => (
  <Card className="p-lg flex flex-col hover:border-primary transition-all cursor-pointer h-full" hoverable>
    <div className="flex justify-between items-start mb-md">
      <div className="flex flex-col">
        <span className="text-mono-sm text-on-surface-variant opacity-60 font-medium">{date}</span>
        <h3 className="text-headline-md font-bold text-on-surface mt-xs">{role}</h3>
        <span className="text-body-md text-primary font-bold">{company}</span>
      </div>
      <span className={`px-sm py-xs rounded-full text-label-md font-bold ${statusColor}`}>
        {statusText}
      </span>
    </div>
    <p className="text-body-md text-on-surface-variant line-clamp-4 flex-1 font-medium">
      {content}
    </p>
    <div className="mt-lg pt-md border-t border-outline-variant flex justify-between items-center">
      <div className="flex items-center gap-xs">
        {status === 'draft' ? (
          <>
            <AlertCircle className="w-4 h-4 text-error" />
            <span className="text-mono-sm text-error font-bold">Unfinished</span>
          </>
        ) : status === 'exported' ? (
          <>
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-mono-sm text-green-600 font-bold">Exported</span>
          </>
        ) : (
          <span className="text-mono-sm text-on-surface-variant font-medium">Last edited 2d ago</span>
        )}
      </div>
      <button className="text-on-surface-variant hover:text-primary">
        <MoreVertical className="w-5 h-5" />
      </button>
    </div>
  </Card>
);

export default function LettersPage() {
  return (
    <div className="space-y-lg">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-lg mb-xl">
        <div>
          <h1 className="text-headline-xl font-bold text-on-surface">Manage Applications</h1>
          <p className="text-body-lg text-on-surface-variant mt-xs font-medium">Track and generate tailored cover letters for your job search.</p>
        </div>
        <Link href="/dashboard/letters/new">
          <Button variant="primary" size="md" className="gap-sm">
            <PlusCircle className="w-5 h-5" />
            Generate New Cover Letter
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        <LetterCard 
          company="Vercel"
          role="Backend Developer"
          date="Oct 24, 2023"
          status="saved"
          statusText="Saved"
          statusColor="bg-blue-50 text-primary"
          content="I am writing to express my strong interest in the Backend Developer position at Vercel. As a long-time admirer of Vercel's commitment to the developer experience and performance, I am excited about the possibility of contributing to the infrastructure that powers the modern web..."
        />
        <LetterCard 
          company="TechFlow Inc."
          role="Senior Frontend Engineer"
          date="Oct 22, 2023"
          status="draft"
          statusText="Draft"
          statusColor="bg-gray-100 text-on-surface-variant"
          content="With over 6 years of experience building scalable design systems and highly interactive user interfaces, I was thrilled to see the opening for a Senior Frontend Engineer at TechFlow Inc. Your recent work on the decentralized workflow engine aligns perfectly with my passion for..."
        />
        <LetterCard 
          company="Stripe"
          role="Full Stack Engineer"
          date="Oct 18, 2023"
          status="saved"
          statusText="Saved"
          statusColor="bg-blue-50 text-primary"
          content="Enclosed is my application for the Full Stack Engineer role at Stripe. Stripe’s mission to increase the GDP of the internet has always resonated with my professional goals of building tools that solve complex economic problems through elegant code. My background in financial systems..."
        />
        <LetterCard 
          company="Linear"
          role="Lead Product Engineer"
          date="Oct 15, 2023"
          status="exported"
          statusText="Saved"
          statusColor="bg-blue-50 text-primary"
          content="Linear has redefined what it means to build software with focus and speed. As an engineer who values precision and minimalism, I am incredibly motivated to join the team as a Lead Product Engineer. I have spent the last three years refining my craft in systems that prioritize..."
        />

        {/* Suggestion Card */}
        <div className="bg-surface-container-low border border-dashed border-outline-variant rounded-xl p-lg flex flex-col items-center justify-center text-center gap-md min-h-[220px]">
          <div className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center border border-outline-variant">
            <Plus className="w-6 h-6 text-outline" />
          </div>
          <div>
            <h4 className="text-headline-md font-bold text-on-surface">New Opportunity?</h4>
            <p className="text-label-md text-on-surface-variant font-medium">Click to generate a tailored letter for your next big role.</p>
          </div>
          <Link href="/dashboard/letters/new">
            <button className="text-primary text-label-md font-bold hover:underline">Start drafting</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
