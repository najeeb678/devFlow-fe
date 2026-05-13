import React from 'react';
import { 
  Search, 
  X, 
  PlusCircle, 
  Brain, 
  ArrowRight,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function OnboardingPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center">
      {/* Top AppBar */}
      <header className="w-full h-[64px] bg-surface flex items-center justify-between px-lg border-b border-outline-variant">
        <div className="flex items-center gap-sm">
          <span className="text-headline-md text-primary font-bold">DevFolio</span>
        </div>
        <div className="flex items-center gap-md">
          <Link href="/dashboard">
            <button className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors">Save & Exit</button>
          </Link>
        </div>
      </header>

      <main className="w-full max-w-[640px] px-md py-xl flex flex-col gap-xl">
        {/* Progress Stepper */}
        <div className="w-full flex flex-col gap-sm">
          <div className="flex justify-between items-center mb-xs">
            <span className="text-label-md text-primary uppercase tracking-wider font-bold">Step 2 of 3</span>
            <span className="text-label-md text-on-surface-variant font-bold">Adding Skills</span>
          </div>
          <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-500" style={{ width: '66%' }}></div>
          </div>
        </div>

        {/* Onboarding Card */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg flex flex-col gap-lg shadow-sm">
          {/* Step Header */}
          <div className="flex flex-col gap-xs">
            <h1 className="text-headline-lg font-bold text-on-surface">Technical Arsenal</h1>
            <p className="text-body-md text-on-surface-variant font-medium">Identify the technologies you use most frequently. This helps us tailor project suggestions and your public profile.</p>
          </div>

          {/* Input Section */}
          <div className="flex flex-col gap-md">
            <div className="flex flex-col gap-xs">
              <label className="text-label-md font-bold text-on-surface-variant ml-xs">Search and add skills</label>
              <div className="relative group">
                <input 
                  className="w-full h-10 bg-surface-container-low border border-outline-variant rounded px-md font-medium text-body-md focus:outline-none focus:border-primary transition-colors pr-10" 
                  placeholder="e.g. TypeScript, GraphQL, Docker..." 
                  type="text"
                />
                <div className="absolute right-sm top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <Search className="w-5 h-5 text-outline" />
                </div>
              </div>
            </div>

            {/* Current Tags */}
            <div className="flex flex-wrap gap-sm">
              {['React', 'Next.js', 'Tailwind CSS'].map(skill => (
                <span key={skill} className="inline-flex items-center gap-xs px-sm py-[4px] bg-primary/10 border border-primary/20 text-primary rounded-full text-label-md font-bold">
                  {skill}
                  <button className="hover:text-on-primary-fixed transition-colors">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Suggestions Section */}
          <div className="flex flex-col gap-sm">
            <h3 className="text-label-md text-outline uppercase tracking-tight font-bold">Suggested for you</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-sm">
              {['Node.js', 'PostgreSQL', 'AWS', 'Figma', 'TypeScript', 'Docker'].map(skill => (
                <button key={skill} className="flex items-center justify-between px-sm py-sm border border-outline-variant rounded bg-surface-container-low hover:border-outline transition-colors text-left group">
                  <span className="text-body-md text-on-surface font-medium">{skill}</span>
                  <PlusCircle className="w-4 h-4 text-outline group-hover:text-primary transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Visual Context Card */}
          <div className="mt-md p-md bg-secondary-fixed rounded-lg border border-outline-variant flex gap-md items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-outline-variant flex-shrink-0">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-body-md text-on-surface font-bold">Why add skills?</p>
              <p className="text-label-md text-on-surface-variant font-medium">Our engine uses these to match you with high-signal job opportunities and open-source contributors.</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-md pt-lg border-t border-outline-variant">
            <button className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors px-md py-sm font-bold">
              Skip for now
            </button>
            <div className="flex gap-sm">
              <Button variant="outline" className="h-10 px-lg border-outline-variant">
                Back
              </Button>
              <Link href="/dashboard">
                <Button variant="primary" className="h-10 px-lg gap-xs">
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Preview */}
        <div className="hidden md:flex flex-col items-center gap-sm opacity-50">
          <p className="text-label-md text-on-surface-variant uppercase tracking-widest font-bold">Profile Preview</p>
          <div className="w-full p-md bg-surface-container rounded-lg border border-outline-variant flex flex-col gap-sm">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 rounded-full bg-surface-dim overflow-hidden border border-outline-variant">
                <img 
                  alt="Preview Avatar" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7qIv3k3VsrFSX-rvzHHLaobVCUKoKDGLQzmoABf75ebdmLAwtO6G5CZBWevZwA2GAb2B1vrMsyRoqgEf7EILR_Xk33RMOF08vEcbthCDfZXHNLd4r0aaF0EaAUkSQF2HjA_CK6ZbDN-sk1UbKL83afar--P08T8MLfr5p0lc0aFJRu9UjkEhur6Gk77TYI3D0JoXiAjYAJjehemOQoJZ8CwW2yr0mkikiibllTI75veqjNCCfhKqrrWXUDReRi80VFfk7cuMEalc" 
                />
              </div>
              <div className="flex flex-col">
                <div className="h-3 w-24 bg-surface-dim rounded"></div>
                <div className="h-2 w-16 bg-surface-variant rounded mt-1"></div>
              </div>
            </div>
            <div className="flex gap-xs mt-xs">
              <div className="h-4 w-12 bg-primary/20 rounded-full"></div>
              <div className="h-4 w-14 bg-primary/20 rounded-full"></div>
              <div className="h-4 w-10 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Pro Tip Section */}
      <div className="fixed bottom-lg right-lg hidden xl:block w-[300px]">
        <div className="relative p-lg bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-md">
          <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="relative flex flex-col gap-sm">
            <span className="text-label-md text-primary font-bold">PRO TIP</span>
            <h4 className="text-body-md font-bold text-on-surface">Keep it specific</h4>
            <p className="text-label-md text-on-surface-variant font-medium">Instead of just "Coding", list "TypeScript" or "Python". Specificity leads to 3x higher profile engagement from recruiters.</p>
            <div className="mt-sm rounded overflow-hidden border border-outline-variant">
              <img 
                className="w-full h-24 object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA405tqxA_hs2iHjm8HF0sYygWx1g-AgkqMT_lENzC8XgDHqX0OHiR-Bzx9xAW8oB5aisjuLFCBKk0-NJ2_U09LD3ZUaRXUjfcRfWmq7tZ52oARifIImLSQxYWt0vgas-p0WjvF9iXZEfdrFmLqxoHJObOtgK91QGEeO0KjvlRle4Oae_hgAEbzX-iFMdp-acQdlFElwK8orhcPiffb3IvoEkiOYWatmeGOHVQ3HUTpSAYtmcdbh5mY0lm4fcSzyKbFKo6qdzUozvk" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
