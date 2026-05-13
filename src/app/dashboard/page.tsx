import React from 'react';
import { 
  Folder, 
  Send, 
  RefreshCcw, 
  TrendingUp,
  PlusSquare,
  Edit,
  BarChart2,
  Share2,
  Building2,
  Palette,
  ChevronRight,
  Copy
} from 'lucide-react';
import { Card } from '@/components/ui/Card';

const MetricCard = ({ title, value, subtext, icon: Icon, iconColor = "text-primary", trend }: any) => (
  <Card className="p-lg" hoverable={false}>
    <div className="flex justify-between items-start mb-sm">
      <span className="text-on-surface-variant text-label-md font-semibold">{title}</span>
      <Icon className={`w-5 h-5 ${iconColor}`} />
    </div>
    <div className="text-headline-xl font-bold">{value}</div>
    {trend ? (
      <div className={`flex items-center text-sm mt-xs ${trend.positive ? 'text-green-600' : 'text-red-600'}`}>
        <TrendingUp className="w-3.5 h-3.5 mr-1" />
        <span className="text-mono-sm font-semibold">{trend.text}</span>
      </div>
    ) : (
      <div className="text-on-surface-variant text-mono-sm mt-xs">{subtext}</div>
    )}
  </Card>
);

const QuickActionButton = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <button className="w-full flex items-center justify-between p-md border border-outline-variant rounded-lg hover:border-outline transition-all group">
    <div className="flex items-center gap-md">
      <Icon className="w-5 h-5 text-primary" />
      <span className="text-body-md font-medium">{label}</span>
    </div>
    <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
  </button>
);

export default function DashboardPage() {
  return (
    <div className="space-y-lg">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
        <MetricCard 
          title="Total Projects" 
          value="8" 
          subtext="Archived: 2" 
          icon={Folder} 
        />
        <MetricCard 
          title="Applications Sent" 
          value="24" 
          subtext="+3 this week" 
          icon={Send} 
        />
        <MetricCard 
          title="Interviews" 
          value="4" 
          subtext="Next: Monday 2PM" 
          icon={RefreshCcw} 
          iconColor="text-amber-500"
        />
        <MetricCard 
          title="Portfolio Views" 
          value="137" 
          icon={BarChart2} 
          iconColor="text-green-500"
          trend={{ positive: true, text: "12% from last week" }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
        {/* Application Status Chart Mockup */}
        <div className="col-span-12 md:col-span-8">
          <Card className="h-full" hoverable={false}>
            <div className="flex justify-between items-center mb-xl">
              <h3 className="text-headline-md font-bold">Application Status</h3>
              <div className="flex gap-md">
                <div className="flex items-center gap-xs">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  <span className="text-label-md text-on-surface-variant font-medium">Active</span>
                </div>
                <div className="flex items-center gap-xs">
                  <span className="w-3 h-3 bg-secondary-container rounded-full"></span>
                  <span className="text-label-md text-on-surface-variant font-medium">Archived</span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between h-48 gap-xl px-md">
              {[
                { day: 'Mon', active: 60, archived: 20 },
                { day: 'Tue', active: 85, archived: 40 },
                { day: 'Wed', active: 45, archived: 30 },
                { day: 'Thu', active: 95, archived: 50 },
                { day: 'Fri', active: 70, archived: 15 },
              ].map((data, i) => (
                <div key={i} className="flex flex-col items-center flex-1 h-full">
                  <div className="w-full flex justify-center gap-xs items-end h-full">
                    <div className="w-6 bg-primary rounded-t" style={{ height: `${data.active}%` }}></div>
                    <div className="w-6 bg-secondary-container rounded-t" style={{ height: `${data.archived}%` }}></div>
                  </div>
                  <span className="text-mono-sm text-on-surface-variant mt-sm font-medium">{data.day}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="col-span-12 md:col-span-4">
          <Card className="h-full" hoverable={false}>
            <h3 className="text-headline-md font-bold mb-lg">Quick Actions</h3>
            <div className="space-y-sm">
              <QuickActionButton icon={PlusSquare} label="New Project" />
              <QuickActionButton icon={Edit} label="Log Application" />
              <QuickActionButton icon={BarChart2} label="View Analytics" />
              <QuickActionButton icon={Share2} label="Export Resume" />
            </div>
          </Card>
        </div>
      </div>

      {/* Share Portfolio Card */}
      <div className="relative overflow-hidden bg-primary text-on-primary p-xl rounded-xl border border-primary-container">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white"></circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)"></rect>
          </svg>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-lg">
          <div>
            <h2 className="text-headline-lg font-bold mb-xs">Share Your Portfolio</h2>
            <p className="text-body-md opacity-90 max-w-xl">
              Your professional portfolio is live and ready for the world. Share your personalized URL with recruiters and hiring managers to showcase your best work.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-md rounded-lg flex items-center gap-md border border-white/20 self-start md:self-center">
            <span className="text-mono-sm select-all font-medium">devfolio.pro/johndoe_dev</span>
            <button className="p-sm hover:bg-white/20 rounded transition-colors" title="Copy to clipboard">
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        {/* Recent Job Activity */}
        <Card className="p-lg" hoverable={false}>
          <h3 className="text-headline-md font-bold mb-lg">Recent Tracker Updates</h3>
          <div className="space-y-md">
            {[
              { role: "Senior Frontend Engineer", company: "Stripe", time: "2h ago", status: "In Review", icon: Building2 },
              { role: "Product Developer", company: "Airbnb", time: "5h ago", status: "Technical", icon: Palette },
            ].map((update, i) => (
              <div key={i} className="flex items-start gap-md pb-md border-b border-outline-variant last:border-0 last:pb-0">
                <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center flex-shrink-0">
                  <update.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-body-md font-bold">{update.role}</span>
                    <span className="text-mono-sm text-on-surface-variant font-medium">{update.time}</span>
                  </div>
                  <p className="text-body-md text-on-surface-variant">{update.company} • Applied</p>
                  <div className="mt-xs inline-flex items-center px-sm py-[2px] bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {update.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Project Health */}
        <Card className="p-lg" hoverable={false}>
          <div className="flex justify-between items-center mb-lg">
            <h3 className="text-headline-md font-bold">Project Health</h3>
            <button className="text-primary text-label-md font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-lg">
            {[
              { name: "E-commerce Backend", progress: 92 },
              { name: "Portfolio Template 2.0", progress: 45 },
              { name: "React Component Library", progress: 78 },
            ].map((project, i) => (
              <div key={i}>
                <div className="flex justify-between mb-xs">
                  <span className="text-body-md font-medium">{project.name}</span>
                  <span className="text-mono-sm text-on-surface-variant font-medium">{project.progress}% Done</span>
                </div>
                <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
