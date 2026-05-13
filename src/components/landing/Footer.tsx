import React from 'react';
import { Globe, Share2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface py-xl">
      <div className="max-w-max-width-content mx-auto px-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-xl mb-xl">
          <div className="col-span-1 md:col-span-1">
            <span className="text-headline-md text-white mb-md block font-semibold">DevFolio</span>
            <p className="text-body-md text-outline-variant">
              Elevating software engineering careers through precision tools and AI-driven insights.
            </p>
          </div>
          <div>
            <h5 className="text-label-md text-white mb-md uppercase tracking-wider">Product</h5>
            <ul className="space-y-sm text-outline-variant text-body-md">
              <li><a className="hover:text-white transition-colors" href="#">Features</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-label-md text-white mb-md uppercase tracking-wider">Resources</h5>
            <ul className="space-y-sm text-outline-variant text-body-md">
              <li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-label-md text-white mb-md uppercase tracking-wider">Legal</h5>
            <ul className="space-y-sm text-outline-variant text-body-md">
              <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-xl border-t border-outline/30 flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-mono-sm text-outline-variant">© 2024 DevFolio Pro. All rights reserved.</p>
          <div className="flex gap-md">
            <Globe className="w-5 h-5 text-outline-variant hover:text-white cursor-pointer transition-colors" />
            <Share2 className="w-5 h-5 text-outline-variant hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};
