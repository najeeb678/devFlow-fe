import React from 'react';
import { 
  Globe, 
  Mail, 
  GitBranch, 
  ExternalLink, 
  CheckCircle, 
  ShieldCheck,
  Search,
  Filter,
  Code
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const SkillPill = ({ label }: { label: string }) => (
  <span className="px-sm py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-label-md font-bold border border-outline-variant/30">
    {label}
  </span>
);

const PortfolioProjectCard = ({ title, description, image, tags }: any) => (
  <Card className="flex flex-col group overflow-hidden p-0 border-outline-variant hover:border-primary transition-colors duration-300" hoverable>
    <div className="aspect-video relative overflow-hidden bg-surface-container">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>
    <div className="p-lg flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-sm">
        <h3 className="text-headline-md font-bold text-on-surface">{title}</h3>
        <ExternalLink className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
      </div>
      <p className="text-body-md text-on-surface-variant mb-md flex-grow font-medium">
        {description}
      </p>
      <div className="flex flex-wrap gap-xs">
        {tags.map((tag: string) => (
          <span key={tag} className="bg-surface-container px-xs py-1 rounded text-[10px] font-mono-sm text-on-surface-variant border border-outline-variant font-bold uppercase">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </Card>
);

export default function PublicPortfolioPage() {
  return (
    <div className="min-h-screen bg-background font-body-md">
      {/* Top Navbar */}
      <nav className="bg-surface h-[64px] fixed top-0 left-0 w-full z-50 border-b border-outline-variant">
        <div className="flex items-center justify-between px-lg h-full max-w-[860px] mx-auto">
          <div className="flex items-center gap-sm">
            <span className="text-headline-md text-primary font-bold">DevFolio</span>
          </div>
          <div className="flex items-center gap-md">
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-150 text-body-md font-medium" href="#">Explore</a>
            <Button variant="primary" size="sm">
              Get DevFolio Pro
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-[64px] pb-xl max-w-[860px] mx-auto px-md">
        {/* Profile Section */}
        <section className="py-xl flex flex-col items-center text-center">
          <div className="relative group">
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-surface-container-high bg-surface-container-low shadow-sm">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi5v8NBSWim90LT4dgZn0g3LobnaalvXRZZ7dA9Vw8GF9o0Rzmxqtmt9nfk_-FNW1aHeJb4DiThZP59hY8jF3iLBeOsn6inivLe4Al3DGD-dwwaaDZ7uwwDwA7tn23mbfnkA5OnzIDYNXaoT5RDsG1dsA18bc_JdNaEEcTRWDrMTCQ7zKUAfophadUDYTdXXfKicClITbGnT5dY2FlQm9w6-BXAuUESriDhln2LcEacC8R7M5Sg1x9NMS1p5Xh7sgt8QwhSxnRfYg" 
                alt="User profile avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-white fill-white" />
            </div>
          </div>
          <div className="mt-md">
            <h1 className="text-headline-xl font-bold text-on-surface tracking-tight">Alex Sterling</h1>
            <p className="text-mono-sm text-primary uppercase tracking-widest mt-xs font-bold">@asterling_dev</p>
          </div>
          <div className="mt-md max-w-[600px]">
            <p className="text-body-lg text-on-surface-variant font-medium leading-relaxed">
              Full-stack engineer specializing in high-performance distributed systems and craft UI. Building tools that make developers more productive and systems more reliable.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-md mt-lg">
            <a className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all duration-200" href="#">
              <GitBranch className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all duration-200" href="#">
              <Globe className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all duration-200" href="#">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-sm mt-xl">
            {["TypeScript", "Rust", "Go", "React", "Kubernetes", "PostgreSQL"].map(skill => (
              <SkillPill key={skill} label={skill} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-lg border-t border-outline-variant/30 pt-xl">
          <div className="flex items-center justify-between mb-lg">
            <h2 className="text-headline-lg font-bold text-on-surface">Selected Projects</h2>
            <div className="flex gap-sm">
              <button className="p-sm text-on-surface-variant hover:text-primary transition-colors">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <PortfolioProjectCard 
              title="Lumina Engine"
              description="A high-performance rendering engine built from scratch in Rust, optimizing for low-latency visual data processing."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBrLU3H3wl0Shoc4bbSDSiPYUNWudgwRoY_T_6imntIgwYAot16uNfvpayzm_4-4je4zRHOLsHrL38_L0EfPv-jvJgYg_KwpF1R1onxoVGligDFfKmZs62zvOoSiT47CiKSI6O2fyqSdDmXsED8HRcbGGSH1bYx808oWXK8wgsx1gcMNoR2Mkm9GHQxBOdpT8MSNOMmMBPD0zgtw748Vt5Jnr6gvichLiL9fx5wXwU1lNWF6JiRzM0fl-fEpEA2Rt4NchntXzpWieg"
              tags={["RUST", "WASM"]}
            />
            <PortfolioProjectCard 
              title="InsightFlow"
              description="Real-time analytics platform for distributed microservices, providing deep observability into complex call chains."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDjc9YVa1U9uDWvfW_0F3V_1Aq69DcE7l5KgmGOiUBi0z0_mMywWWTVX20netmOvdXo9-Aj2GdfRBxQ-RKZqAk84u6aeWkw49EMK-zGrSbHkE1AeF7UO2CfRWSule7n66xHeLg9QkipFkvj4FXxhKmJFoh4G3tQeRSMgxIyPVF5p1zqMrsJtJqLd9levwd0VrrguC2SgAAwwaKaRi0ZGo0mnwAb698afh7_84DgIUQyqh6TnQmu4XtfkosqnqQ2bwzWwh2M75D2UD4"
              tags={["GO", "GRPC"]}
            />
            <PortfolioProjectCard 
              title="KubeShield"
              description="A security hardening suite for Kubernetes clusters that automates RBAC auditing and container scanning."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDPLUUAmfta_5P_E5fh-1IjHodotiCAVMJiNGZnYlulmUdR2oYibPkGyvUMJSi3uU_sTzcsLC2570Fo9zBispRRbuw5vf3zqeFeo9SwCq6RHFOQSRpAzVYgeh1BwdPLUBRtbXkUMFdZY5f9isNaVihCverXfHZptvQi5Bz3nYA5RKAaSl9nYbQ2hnc14ktQtK9w1Nf6pCQ6fksaDTCdKwsHnycZjbKUztT7XDdxeOp9xTediYoDds-b0ycrE0wWd3uNiO3VZLgCb4c"
              tags={["TYPESCRIPT", "DOCKER"]}
            />
            <PortfolioProjectCard 
              title="QuantTrace"
              description="Open-source library for quantitative backtesting of trading strategies with high-fidelity historical data."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCHJ_6fLryILjMZM3XZR7IVom2C5JxU6jiSiuJegPcZ0UuWfOcecHUTQlhpXvMKTHpKHLMDFt7mQ8dVDsi6nIEzaVGo0XNQbbu_gBG3kPxdAbztsqwHVHsbmEshxNUUh_nWf3Mzeut7EbKXskL_qfsa_xxbYvBtyRVCq05LH0H0N6ZsOcZUkOEjmaOnwu6xitrBI6FBw8cNDZXLM5sxgmQJ2Awdbw-z_X0Btn29rNv7FRsSN6mtlX6BOBTqBwhiBAowFhosMKbSsZs"
              tags={["PYTHON", "SQL"]}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-xl border-t border-outline-variant bg-surface py-lg">
        <div className="max-w-[860px] mx-auto px-md flex flex-col md:flex-row justify-between items-center gap-md text-on-surface-variant text-body-md font-medium">
          <p>© 2024 DevFolio Pro. Built with precision for engineers.</p>
          <div className="flex items-center gap-lg">
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
            <a className="hover:text-primary transition-colors" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
