'use client';

import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Plus, 
  Terminal, 
  Brush, 
  X,
  Lock,
  History,
  Search
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function NewLetterPage() {
  return (
    <div className="max-w-[800px] mx-auto py-xl">
      {/* Header */}
      <div className="mb-xl text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-container text-on-primary-container mb-md">
          <Sparkles className="w-7 h-7" />
        </div>
        <h2 className="text-headline-xl font-bold text-on-surface mb-xs">Craft the Perfect Story</h2>
        <p className="text-body-lg text-on-surface-variant font-medium">Let AI weave your unique experiences into a compelling cover letter tailored to your dream role.</p>
      </div>

      {/* Form Card */}
      <Card className="p-lg space-y-lg bg-white" hoverable={false}>
        {/* Basic Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="space-y-xs">
            <label className="text-label-md font-bold text-on-surface-variant block ml-xs">Job Title</label>
            <input 
              type="text" 
              className="w-full h-10 bg-surface-container-low border border-outline-variant rounded-lg px-md font-medium focus:border-primary focus:ring-0 outline-none transition-all" 
              placeholder="e.g. Senior Frontend Engineer" 
            />
          </div>
          <div className="space-y-xs">
            <label className="text-label-md font-bold text-on-surface-variant block ml-xs">Company Name</label>
            <input 
              type="text" 
              className="w-full h-10 bg-surface-container-low border border-outline-variant rounded-lg px-md font-medium focus:border-primary focus:ring-0 outline-none transition-all" 
              placeholder="e.g. TechFlow Systems" 
            />
          </div>
        </div>

        {/* Job Description Area */}
        <div className="space-y-xs">
          <div className="flex justify-between items-center ml-xs">
            <label className="text-label-md font-bold text-on-surface-variant">Job Description</label>
            <span className="text-mono-sm text-outline opacity-70 font-medium">Paste the full text from the job listing</span>
          </div>
          <textarea 
            className="w-full h-[200px] bg-surface-container-low border border-outline-variant rounded-lg p-md font-medium focus:border-primary focus:ring-0 outline-none transition-all resize-none" 
            placeholder="The job description will help the AI understand exactly what the hiring manager is looking for..."
          />
        </div>

        {/* Link Projects Section */}
        <div className="space-y-md pt-md border-t border-outline-variant">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-headline-md font-bold text-on-surface">Link Projects</h3>
              <p className="text-body-md text-on-surface-variant font-medium">Select portfolio pieces for context</p>
            </div>
            <Button variant="outline" size="sm" className="gap-sm border-outline-variant">
              <Plus className="w-4 h-4" />
              Browse Portfolio
            </Button>
          </div>
          
          {/* Selected Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {[
              { title: "CloudScale SaaS Dashboard", stack: "React, Node.js, AWS", icon: Terminal },
              { title: "PixelPerfect Design System", stack: "Tailwind, Figma, Storybook", icon: Brush },
            ].map((proj, i) => (
              <div key={i} className="p-md border border-outline-variant rounded-lg bg-surface-container-lowest flex items-center gap-md group hover:border-primary transition-all cursor-pointer">
                <div className="w-12 h-12 rounded bg-secondary-fixed flex-shrink-0 flex items-center justify-center">
                  <proj.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-body-md font-bold truncate text-on-surface">{proj.title}</h4>
                  <p className="text-label-md text-on-surface-variant truncate font-medium">{proj.stack}</p>
                </div>
                <button className="text-outline hover:text-error transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-lg flex items-center justify-center">
          <Button variant="primary" size="lg" className="rounded-full px-[40px] h-[48px] gap-md group shadow-md">
            <Sparkles className="w-5 h-5" />
            Generate with AI
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>

      {/* Footer Meta */}
      <div className="mt-lg flex items-center justify-center gap-xl opacity-60">
        <div className="flex items-center gap-xs text-mono-sm font-bold">
          <Lock className="w-4 h-4" />
          SECURE GENERATION
        </div>
        <div className="flex items-center gap-xs text-mono-sm font-bold">
          <History className="w-4 h-4" />
          AUTO-SAVED AT 14:20
        </div>
      </div>
    </div>
  );
}
