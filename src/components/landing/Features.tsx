import React from 'react';
import { Card } from '../ui/Card';
import { Folder, FileText, Briefcase } from 'lucide-react';

export const Features = () => {
  return (
    <section className="py-xl bg-surface-container-low border-y border-outline-variant" id="features">
      <div className="max-width-content mx-auto px-md max-w-max-width-content">
        <div className="text-center mb-xl">
          <h2 className="text-headline-lg mb-sm">Built for the modern engineer</h2>
          <p className="text-body-md text-on-surface-variant">Precision tools to help you stand out from the noise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
          {/* Portfolio Builder */}
          <div className="md:col-span-8">
            <Card className="flex flex-col md:flex-row gap-lg items-center h-full">
              <div className="flex-1">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mb-md">
                  <Folder className="w-6 h-6" />
                </div>
                <h3 className="text-headline-md mb-xs">Portfolio Builder</h3>
                <p className="text-body-md text-on-surface-variant">
                  Generate stunning, minimalist portfolios from your GitHub repositories and side projects in seconds.
                </p>
              </div>
              <div className="flex-1 w-full h-[200px] bg-surface-container rounded-lg overflow-hidden relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqfFwPCO0EIN47_upWk_nYOmN_gx9EQMKPPCdKQMjvAlKe1cpLdAFuP493mVpkSxdLoUkrBGLMISxgXCTQQoRP6i7a90XREmGAbgfdbZeQxHGOS5curlhfFyIW09Ngd1G_y4jep5bn9nO71g_D1Hp0Kb9911ufN-hRbCzRNPqX6lHPEBazblY2-aS0JV1Hha5Ce-lvsIn_Uf2DwmPHlDXx5TXGxTjE0slLM4Ai6zJJ8PaVmwZW_r-BHmAGqy1g6sE16sZzRATeiHE" 
                  alt="Portfolio Builder Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          {/* AI Writing */}
          <div className="md:col-span-4">
            <Card className="h-full">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mb-md">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-headline-md mb-xs">AI Writing</h3>
              <p className="text-body-md text-on-surface-variant mb-md">
                Context-aware cover letters and project descriptions tailored to specific job postings.
              </p>
              <div className="space-y-xs">
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4 animate-pulse"></div>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </Card>
          </div>

          {/* Job Tracker */}
          <div className="md:col-span-12">
            <Card className="flex flex-col md:flex-row gap-xl items-center">
              <div className="flex-1 order-2 md:order-1 w-full space-y-md">
                <div className="flex items-center gap-sm p-sm bg-surface-container-low rounded-lg structural-border">
                  <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-[12px] font-bold">G</div>
                  <div className="flex-1">
                    <p className="text-label-md font-semibold">Google - Software Engineer</p>
                    <p className="text-mono-sm text-on-surface-variant">Applied 2d ago</p>
                  </div>
                  <span className="px-xs py-0.5 bg-secondary-fixed text-on-secondary-fixed text-[10px] rounded uppercase font-bold">Interviewing</span>
                </div>
                <div className="flex items-center gap-sm p-sm bg-surface-container-low rounded-lg opacity-60 structural-border">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-[12px] font-bold">A</div>
                  <div className="flex-1">
                    <p className="text-label-md font-semibold">Amazon - SDE II</p>
                    <p className="text-mono-sm text-on-surface-variant">Applied 5d ago</p>
                  </div>
                  <span className="px-xs py-0.5 bg-surface-variant text-on-surface-variant text-[10px] rounded uppercase font-bold">Applied</span>
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary mb-md">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-headline-md mb-xs">Job Tracker</h3>
                <p className="text-body-md text-on-surface-variant">
                  A Kanban-style tracker designed specifically for technical interview cycles, from initial screen to offer negotiation.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
