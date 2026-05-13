import React from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Card';
import { Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-[120px] pb-xl md:pb-[120px] px-md">
      <div className="max-w-max-width-content mx-auto text-center">
        <div className="inline-block mb-md">
          <Badge variant="primary">
            <Sparkles className="w-4 h-4" />
            Now with AI cover letters
          </Badge>
        </div>
        
        <h1 className="text-[48px] md:text-[64px] font-semibold leading-tight mb-md tracking-tight text-on-background">
          Your portfolio. Your story.<br />
          <span className="text-primary">Your next job.</span>
        </h1>
        
        <p className="text-body-lg text-on-surface-variant max-w-[640px] mx-auto mb-xl">
          The precision-engineered workspace for software engineers to manage their professional presence and streamline their career growth.
        </p>
        
        <div className="flex flex-wrap justify-center gap-md mb-xl">
          <Button variant="primary" size="lg">Get Started Now</Button>
          <Button variant="secondary" size="lg">Watch Demo</Button>
        </div>

        {/* Dashboard Mockup */}
        <div className="mt-xl relative rounded-xl structural-border bg-surface-container-lowest p-sm overflow-hidden shadow-sm">
          <div className="bg-surface-container rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
            {/* Placeholder for mockup - in a real app this would be an image or a complex component */}
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBTENkFpNZXmcbYlneUpd6-dKDQ7badUlcFLkJ_VHj6wg8cH_rETJAXe5FQfFhk61WU7GhM5jdMSuRKf9Ak4ZC0zb57Njm81BA4uc_j1JFI2yHA_FAnzInyUsvdS8jIOP7kaTWimHwBjrEDQXSzMjz4GKH2HF1m2cNZZ1egHfMr8E9-iuJdWtJ5Oy0FxLuTXy39W5I_slfQtYXvrGPI5mDOMp7VMWP6XakToMApgrZQkw8h4GskEfj3IBNUXm4fm9hUI43s5QPGdo" 
              alt="DevFolio Dashboard Mockup"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
