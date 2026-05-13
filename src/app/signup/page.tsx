import React from 'react';
import { 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-md bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#E5E3DE 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.4 }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-fixed rounded-full blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-fixed rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <main className="w-full max-w-[440px] animate-in fade-in duration-500">
        {/* Logo Branding */}
        <div className="flex flex-col items-center mb-lg">
          <div className="flex items-center gap-xs mb-xs">
            <Terminal className="w-8 h-8 text-primary fill-primary" />
            <span className="text-headline-lg font-bold text-primary">DevFolio Pro</span>
          </div>
          <p className="text-body-md text-on-surface-variant font-medium text-center">Precision for high-performance engineers.</p>
        </div>

        {/* Registration Card */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-xl shadow-sm">
          <header className="mb-lg">
            <h1 className="text-headline-lg font-bold text-on-surface mb-xs">Create your account</h1>
            <p className="text-body-md text-on-surface-variant font-medium">Join the community of elite software developers.</p>
          </header>

          <form className="space-y-md">
            {/* Full Name */}
            <div className="flex flex-col gap-xs">
              <label className="text-label-md font-bold text-on-surface-variant px-xs">Full Name</label>
              <input 
                className="h-10 px-md rounded bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-0 transition-colors duration-200 outline-none font-medium text-body-md" 
                placeholder="John Doe" 
                type="text"
              />
            </div>

            {/* Username */}
            <div className="flex flex-col gap-xs">
              <label className="text-label-md font-bold text-on-surface-variant px-xs">Username</label>
              <div className="relative">
                <input 
                  className="w-full h-10 px-md pr-xl rounded bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-0 transition-colors duration-200 outline-none font-medium text-body-md" 
                  placeholder="johndoe_dev" 
                  type="text"
                />
                <div className="absolute right-md top-1/2 -translate-y-1/2 flex items-center gap-xs">
                  <CheckCircle2 className="w-4 h-4 text-green-600 fill-green-600" />
                  <span className="text-mono-sm font-bold text-green-600">Available</span>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-xs">
              <label className="text-label-md font-bold text-on-surface-variant px-xs">Email Address</label>
              <input 
                className="h-10 px-md rounded bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-0 transition-colors duration-200 outline-none font-medium text-body-md" 
                placeholder="john@example.com" 
                type="email"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-xs">
              <label className="text-label-md font-bold text-on-surface-variant px-xs">Password</label>
              <input 
                className="h-10 px-md rounded bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-0 transition-colors duration-200 outline-none font-medium text-body-md" 
                placeholder="••••••••" 
                type="password"
              />
              {/* Password Strength Bar */}
              <div className="mt-xs">
                <div className="flex items-center justify-between mb-xs">
                  <span className="text-label-md font-bold text-on-surface-variant">Password strength</span>
                  <span className="text-label-md font-bold text-primary">Strong</span>
                </div>
                <div className="grid grid-cols-4 gap-xs h-[4px]">
                  <div className="bg-primary rounded-full"></div>
                  <div className="bg-primary rounded-full"></div>
                  <div className="bg-primary rounded-full"></div>
                  <div className="bg-outline-variant rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-sm pt-xs">
              <input type="checkbox" className="mt-[3px] rounded-sm border-outline-variant text-primary focus:ring-primary h-4 w-4 cursor-pointer" />
              <p className="text-body-md text-on-surface-variant font-medium">
                I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
              </p>
            </div>

            {/* CTA Button */}
            <Link href="/onboarding" className="block">
              <Button variant="primary" className="w-full h-10 gap-xs mt-lg border border-primary/20">
                Create account
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </form>

          {/* Footer Link */}
          <footer className="mt-xl pt-lg border-t border-outline-variant text-center">
            <p className="text-body-md text-on-surface-variant font-medium">
              Already have an account? 
              <Link className="text-primary font-bold hover:underline ml-xs" href="/login">Log in here</Link>
            </p>
          </footer>
        </div>

        {/* Visual Anchor */}
        <div className="mt-lg flex justify-center opacity-60">
          <img 
            alt="Launch icon" 
            className="grayscale w-12 h-12" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5tcPyG6iNR3RWBWuzJrYs7ul3-kt_527LCgiC1Uk7DRV6YhAVuaupR6MTk94OXeArOqCcNY7TXC0NNDMO_VeE2owQuOGF2Q5VyI2pnfwNcvqW4unPaj0aSmmONQqriYxi1wAjZC2YReoKrFXU59do-24ckhb7FxSopuynpQ8YQ6banfm7sqrHrNKTXiEOdnnBQR3WaK-H6QO6zD7tfeZuTXSP7NfL_LD7FlOhye2xBbCEZTMVtyrRVldg-oqv0zuD0BltWizQxiA" 
          />
        </div>
      </main>
    </div>
  );
}
