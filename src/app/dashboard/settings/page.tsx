import React from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  Palette, 
  Shield, 
  LogOut,
  Camera,
  ChevronRight
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const SettingItem = ({ icon: Icon, title, description, children }: any) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between py-lg border-b border-outline-variant last:border-0 gap-md">
    <div className="flex gap-md items-start">
      <div className="p-sm bg-surface-container rounded-lg">
        <Icon className="w-5 h-5 text-on-surface-variant" />
      </div>
      <div>
        <h4 className="text-body-lg font-bold text-on-surface">{title}</h4>
        <p className="text-body-md text-on-surface-variant font-medium">{description}</p>
      </div>
    </div>
    <div className="flex-shrink-0">
      {children}
    </div>
  </div>
);

export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-lg">
      <div className="mb-xl">
        <h1 className="text-headline-xl font-bold text-on-surface">Settings</h1>
        <p className="text-body-lg text-on-surface-variant font-medium">Manage your account preferences and application configuration.</p>
      </div>

      <Card className="p-0 overflow-hidden" hoverable={false}>
        <div className="p-lg bg-surface-container-low border-b border-outline-variant">
          <h3 className="text-headline-md font-bold text-on-surface">Profile Information</h3>
        </div>
        <div className="p-lg space-y-xl">
          {/* Avatar Section */}
          <div className="flex items-center gap-xl">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-outline-variant bg-surface-container">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4brLTt_QMwisAXvx2HmXnk5ARsgbfuLMfpGTUdR0nJBIuRnMkDqjIoJL7t5cm-u7mK25cI0DGe_K5SkFYHIZopf3YWQuIfunKAOw6JDGRskOSuYkY_is_ZQFdBXLLX49-PTNQGJF9GEBcsURnKRLSUvizSWsL_SW6ztqNeDZIwOpXVXbVSlwj8PHw9_3O3hQIYWNzksVKqSo2hCVNW4SDWKtgHJdCZPGGsOeYqK8xWiDsoCFUOITY9Mm_DItiPaL-Jh0p6JCt8Ow" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute inset-0 bg-on-surface/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
                <Camera className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="space-y-sm">
              <h4 className="text-headline-md font-bold">Alex Sterling</h4>
              <p className="text-body-md text-on-surface-variant font-medium">Software Engineer @ Sterling Systems</p>
              <div className="flex gap-sm">
                <Button variant="outline" size="sm">Change Photo</Button>
                <Button variant="outline" size="sm" className="text-error hover:bg-error/10">Remove</Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <div className="space-y-xs">
              <label className="text-label-md font-bold text-on-surface-variant block">Full Name</label>
              <input 
                type="text" 
                defaultValue="Alex Sterling" 
                className="w-full h-10 px-md bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
              />
            </div>
            <div className="space-y-xs">
              <label className="text-label-md font-bold text-on-surface-variant block">Email Address</label>
              <input 
                type="email" 
                defaultValue="alex@sterling.dev" 
                className="w-full h-10 px-md bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
              />
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-0 overflow-hidden" hoverable={false}>
        <div className="p-lg bg-surface-container-low border-b border-outline-variant">
          <h3 className="text-headline-md font-bold text-on-surface">App Preferences</h3>
        </div>
        <div className="px-lg">
          <SettingItem 
            icon={Palette} 
            title="Appearance" 
            description="Choose how DevFolio Pro looks on your device."
          >
            <select className="bg-surface-container-low border border-outline-variant rounded-lg px-md py-sm focus:outline-none font-bold text-sm">
              <option>System Default</option>
              <option>Light Mode</option>
              <option>Dark Mode</option>
            </select>
          </SettingItem>

          <SettingItem 
            icon={Bell} 
            title="Notifications" 
            description="Manage how you receive alerts and updates."
          >
            <button className="text-primary font-bold text-sm hover:underline">Configure</button>
          </SettingItem>

          <SettingItem 
            icon={Shield} 
            title="Privacy & Security" 
            description="Control your data and account security settings."
          >
            <ChevronRight className="w-5 h-5 text-on-surface-variant" />
          </SettingItem>
        </div>
      </Card>

      <div className="flex justify-end gap-md pt-md">
        <Button variant="outline">Discard Changes</Button>
        <Button variant="primary">Save Preferences</Button>
      </div>

      <div className="pt-xl border-t border-outline-variant/30">
        <button className="flex items-center gap-md text-error font-bold hover:opacity-80 transition-opacity">
          <LogOut className="w-5 h-5" />
          Sign Out of Account
        </button>
      </div>
    </div>
  );
}
