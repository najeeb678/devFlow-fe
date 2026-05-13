import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { CheckCircle2, XCircle } from 'lucide-react';

export const Pricing = () => {
  return (
    <section className="py-xl bg-surface-container-highest/30" id="pricing">
      <div className="max-w-max-width-content mx-auto px-md">
        <div className="text-center mb-xl">
          <h2 className="text-headline-lg mb-sm">Choose your path</h2>
          <p className="text-body-md text-on-surface-variant">Scale your career at your own pace.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg max-w-[800px] mx-auto">
          {/* Free Tier */}
          <Card className="flex flex-col h-full" hoverable={false}>
            <h3 className="text-headline-md mb-xs">Free</h3>
            <div className="flex items-baseline gap-xs mb-lg">
              <span className="text-headline-xl">$0</span>
              <span className="text-body-md text-on-surface-variant">/forever</span>
            </div>
            <ul className="space-y-sm mb-xl flex-1">
              {[
                { label: "1 Professional Portfolio", included: true },
                { label: "Basic Job Tracker (10 jobs)", included: true },
                { label: "AI Cover Letters", included: false }
              ].map((item, i) => (
                <li key={i} className={`flex items-center gap-sm text-body-md ${!item.included ? 'text-on-surface-variant/50' : ''}`}>
                  {item.included ? (
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  ) : (
                    <XCircle className="w-5 h-5" />
                  )}
                  {item.label}
                </li>
              ))}
            </ul>
            <Button variant="secondary" className="w-full">Get Started</Button>
          </Card>

          {/* Pro Tier */}
          <Card className="flex flex-col h-full border-primary relative overflow-hidden" hoverable={false}>
            <div className="absolute top-0 right-0 pro-gradient text-on-primary px-md py-xs text-label-md rounded-bl-lg font-semibold">
              Most Popular
            </div>
            <h3 className="text-headline-md mb-xs">Pro</h3>
            <div className="flex items-baseline gap-xs mb-lg">
              <span className="text-headline-xl">$12</span>
              <span className="text-body-md text-on-surface-variant">/month</span>
            </div>
            <ul className="space-y-sm mb-xl flex-1">
              {[
                "Unlimited Portfolios",
                "Unlimited Job Tracker",
                "Unlimited AI Cover Letters",
                "Custom Domains"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-sm text-body-md">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="pro" className="w-full">Upgrade to Pro</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
