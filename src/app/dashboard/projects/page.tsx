import React from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  LayoutGrid, 
  List, 
  ChevronDown, 
  Star, 
  Link as LinkIcon, 
  Code,
  FolderArchive
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const ProjectCard = ({ title, description, tags, version, image, starred, lastUpdated }: any) => (
  <Card className="flex flex-col group overflow-hidden p-0" hoverable>
    <div className="h-48 relative overflow-hidden bg-surface-container">
      <img src={image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={title} />
      {version && (
        <div className="absolute top-md right-md bg-surface-container-lowest/90 backdrop-blur-sm px-sm py-[2px] rounded-full border border-outline-variant">
          <span className="text-mono-sm text-primary font-bold">{version}</span>
        </div>
      )}
    </div>
    <div className="p-lg flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-sm">
        <h3 className="text-headline-md font-bold text-on-surface">{title}</h3>
        <Star className={`w-5 h-5 ${starred ? 'text-primary fill-primary' : 'text-on-surface-variant hover:text-primary transition-colors cursor-pointer'}`} />
      </div>
      <p className="text-body-md text-on-surface-variant mb-md flex-1 font-medium">
        {description}
      </p>
      <div className="flex flex-wrap gap-sm mb-lg">
        {tags.map((tag: string) => (
          <span key={tag} className="px-sm py-[2px] bg-secondary-fixed text-on-secondary-fixed text-label-md rounded border border-outline-variant/30 font-semibold">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-md border-t border-outline-variant">
        <div className="flex items-center gap-md">
          <a className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs text-label-md font-bold" href="#">
            <LinkIcon className="w-4 h-4" />
            Demo
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs text-label-md font-bold" href="#">
            <Code className="w-4 h-4" />
            Source
          </a>
        </div>
        <span className="text-mono-sm text-on-surface-variant opacity-60 font-medium">{lastUpdated}</span>
      </div>
    </div>
  </Card>
);

export default function ProjectsPage() {
  return (
    <div className="space-y-lg">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-headline-xl font-bold text-on-surface">Projects</h1>
          <p className="text-body-md text-on-surface-variant font-medium">Manage and showcase your technical work and repositories.</p>
        </div>
        <Button variant="primary" size="md" className="gap-sm">
          <Plus className="w-4 h-4" />
          Add Project
        </Button>
      </div>

      <div className="bg-surface-container-low border border-outline-variant rounded-xl p-md flex flex-col md:flex-row items-center justify-between gap-md">
        <div className="flex items-center gap-md w-full md:w-auto">
          <button className="flex items-center gap-sm px-md py-sm bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md text-on-surface-variant hover:border-outline transition-colors font-medium">
            Tech Stack
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-sm px-md py-sm bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md text-on-surface-variant hover:border-outline transition-colors font-medium">
            Sort: Recently Added
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center bg-surface-container border border-outline-variant rounded-lg p-[2px]">
          <button className="p-sm rounded-md bg-surface-container-lowest text-primary">
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button className="p-sm rounded-md text-on-surface-variant hover:bg-surface-container-high">
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        <ProjectCard 
          title="Nexus Analytics Core"
          description="A high-performance data processing engine built for real-time telemetry and predictive user behavior modeling."
          tags={["React", "Go", "PostgreSQL"]}
          version="v2.4.0"
          starred
          lastUpdated="2 days ago"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAELvPD5NfNzl2y5VOgDPpiT9lZ8fXfq-d6SmVF1PZAMP9s3sQi_GLhEFCMAOqzO6i6RO_KnS15QuYmAes79PVLb2p7rsH9nVpd6UoPESL3DMkNXjD22pB4hCOexX7VOXh_EzzC3tLhNZi3_OFZ3rlvontjRpWcWf5ZbIhXUtPpHkE7Fe66FSKi8UEkisd7WyyJm2LcoMiIfEvqWMU7p2NbcsrSKCGyxfJbNxF9inuqOSDs1oAbHByOYWRolXLE_iiwaa1F0FKorAM"
        />
        <ProjectCard 
          title="CloudGuard Sentinel"
          description="Automated security audit tool for multi-cloud infrastructure, featuring instant vulnerability patching."
          tags={["Python", "AWS", "Terraform"]}
          lastUpdated="1 week ago"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDfAQVV0TBPECHo-jbh1PZ6zyNrfXyhW4QgJtSdVL5Ztvd3Lp0U1knO3LdA7fP2dP5oBR8_WH-wJqOA4iTPPQFq2n98iAjtPobKFGlP-m4X7_SyiezAsCh7s2Hjj-1bpS94EYZ7NBOTzclTO_0mAqLc4br3nntChbQgphGsv4DQ_P3G0un2hLe6pf6yFBAk24o9MY1VG_O4a6sGPm7wd6Tk-sXPK1ARWsMTT_wzGLF8c7ja1ygojb1oFXD28zHW15tdqtulaC8dYKE"
        />
        <ProjectCard 
          title="SwiftFlow Mobile"
          description="A productivity-focused mobile application for project management on the go."
          tags={["SwiftUI", "Firebase"]}
          lastUpdated="2 weeks ago"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuClNBhG7EWxs_Tj1CSA8_D7tJGdJhaMzm721IwTb_DVw5zRIaotw77FLHNjq7-OyMOCP6Pqnb9dLuzLQhVK4XaBS1HjVDReetMRKCBfx3ugwdFJDqsVgmmMGbDK_q_kCpO9iRrKle1k-5eU3wNI0J1CQXmatyI2xmqOzyt2eqrX5NPhNrUBFSwf6W3Dvdbi15BgsqWKNckTa-KA1x8-xh5vMGo05YWTMLOz-iQTQ2KpTcVsEMiAc9BK70gKpYZKWAKEj8LQEXaKNeQ"
        />
      </div>

      {/* Empty State Mockup (Hidden) */}
      <div className="hidden flex flex-col items-center justify-center py-xl bg-surface-container rounded-xl border-2 border-dashed border-outline-variant mt-lg text-center">
        <FolderArchive className="w-12 h-12 text-on-surface-variant mb-md" />
        <h3 className="text-headline-md font-bold text-on-surface">No projects found</h3>
        <p className="text-body-md text-on-surface-variant mb-lg font-medium">Try adjusting your filters or add a new project.</p>
        <Button variant="primary">Clear Filters</Button>
      </div>
    </div>
  );
}
