import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card = ({ children, className = '', hoverable = true }: CardProps) => {
  return (
    <div className={`bg-surface-container-lowest p-lg rounded-lg structural-border ${hoverable ? 'structural-border-hover transition-all duration-200' : ''} ${className}`}>
      {children}
    </div>
  );
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'pro';
  className?: string;
}

export const Badge = ({ children, variant = 'primary', className = '' }: BadgeProps) => {
  const variants = {
    primary: "bg-primary-fixed text-on-primary-fixed border-primary/20",
    secondary: "bg-secondary-fixed text-on-secondary-fixed border-secondary/20",
    pro: "pro-gradient text-on-primary border-none"
  };

  return (
    <span className={`inline-flex items-center gap-xs px-sm py-[2px] rounded-full text-label-md structural-border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
