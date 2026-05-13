import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export const Navbar = () => {
  return (
    <header className="h-[64px] fixed top-0 left-0 w-full bg-surface z-50 border-b border-outline-variant">
      <div className="flex items-center justify-between px-lg max-w-max-width-content mx-auto h-full w-full">
        <div className="flex items-center gap-md">
          <span className="text-headline-md text-primary font-semibold">DevFolio</span>
          <nav className="hidden md:flex items-center gap-lg ml-xl">
            <a className="text-on-surface-variant text-body-md hover:text-primary transition-colors duration-150" href="#features">Features</a>
            <a className="text-on-surface-variant text-body-md hover:text-primary transition-colors duration-150" href="#pricing">Pricing</a>
            <Link className="text-on-surface-variant text-body-md hover:text-primary transition-colors duration-150" href="/portfolio">Portfolio</Link>
          </nav>
        </div>
        <div className="flex items-center gap-sm">
          <Link href="/dashboard">
            <Button variant="secondary" size="sm" className="bg-transparent border-none">Log In</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="primary" size="sm">Sign Up Free</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
