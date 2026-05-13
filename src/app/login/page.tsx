import React from 'react';
import { 
  Terminal, 
  ArrowRight, 
  Mail, 
  Lock, 
  Eye,
  GitBranch
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-md bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(at 0% 0%, rgba(31, 84, 211, 0.03) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(98, 9, 211, 0.03) 0px, transparent 50%)' }}></div>
      </div>

      <div className="w-full max-w-[440px] flex flex-col items-center animate-in fade-in duration-500">
        {/* Brand Identity */}
        <div className="mb-xl flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg mb-md shadow-sm">
            <Terminal className="w-7 h-7 text-on-primary fill-on-primary" />
          </div>
          <h2 className="text-headline-lg font-bold text-primary">DevFolio Pro</h2>
          <p className="text-body-md text-on-surface-variant mt-xs font-medium">Precision tools for modern engineers</p>
        </div>

        {/* Auth Card */}
        <main className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-lg md:p-xl shadow-sm transition-all duration-200">
          <div className="mb-lg">
            <h1 className="text-headline-xl font-bold text-on-surface">Welcome back</h1>
            <p className="text-body-md text-on-surface-variant mt-xs font-medium">Please enter your credentials to access your dashboard.</p>
          </div>

          <form className="space-y-md">
            {/* Email Input */}
            <div className="space-y-xs">
              <label className="text-label-md font-bold text-on-surface-variant">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-sm top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors w-5 h-5" />
                <input 
                  className="w-full h-10 pl-10 pr-md bg-surface-container-low border border-outline-variant rounded-lg font-medium text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                  id="email" 
                  name="email" 
                  placeholder="name@company.com" 
                  type="email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-xs">
              <div className="flex justify-between items-center">
                <label className="text-label-md font-bold text-on-surface-variant">Password</label>
                <a className="text-label-md font-bold text-primary hover:opacity-80 transition-opacity" href="#">Forgot password?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-sm top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors w-5 h-5" />
                <input 
                  className="w-full h-10 pl-10 pr-10 bg-surface-container-low border border-outline-variant rounded-lg font-medium text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  type="password"
                />
                <button className="absolute right-sm top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant transition-colors" type="button">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Link href="/dashboard" className="block">
              <Button variant="primary" className="w-full h-10 gap-sm mt-lg active:scale-[0.98]">
                <span>Log in</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </form>

          {/* Divider */}
          <div className="relative my-xl flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-outline-variant"></span>
            </div>
            <span className="relative bg-surface-container-lowest px-md text-label-md font-bold text-outline uppercase tracking-wider">Or continue with</span>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-md">
            <button className="h-10 flex items-center justify-center gap-sm border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low rounded-lg transition-all text-label-md font-bold text-on-surface-variant active:scale-[0.98]">
              <img 
                alt="Google" 
                className="w-4 h-4" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoBcI8m_i1wBrBWEC7oBL-F0Wy723ZmxRyH-j-V_-qVWRVGDVIqtvgp1FhOTN7WHJtGr5KwdP5DkOU0CvncZqMl2Pw5NV9gvgtiLQtBKDbp79aQrLrvgEMkqK8QQqEDSgUNbvC_HQSCCBtnTRR9zUmpiM_SKQ9XPdjFZKOwyZTwbOftz_tAa7lmNXle5ls7cVjwvS9EMG6DHdjJsZ6RE-7wGLXWSnB83G0jZG42r6PJ1ZN_zUKq3QIGY6_sJMh94Q8oUW30XAIfr8" 
              />
              <span>Google</span>
            </button>
            <button className="h-10 flex items-center justify-center gap-sm border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low rounded-lg transition-all text-label-md font-bold text-on-surface-variant active:scale-[0.98]">
              <GitBranch className="w-5 h-5 text-on-surface" />
              <span>GitHub</span>
            </button>
          </div>
        </main>

        {/* Footer Link */}
        <p className="mt-lg text-body-md text-on-surface-variant font-medium">
          Don't have an account? 
          <Link className="text-primary font-bold hover:underline ml-1" href="/signup">Sign up for free</Link>
        </p>

        {/* Decorative Element */}
        <div className="mt-xl opacity-20 hidden md:block">
          <div className="flex gap-xs items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-secondary-container"></div>
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
