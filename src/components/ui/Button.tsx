import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'pro';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-on-primary structural-border border-primary hover:bg-primary/90",
    secondary: "bg-surface-container text-on-surface structural-border structural-border-hover",
    outline: "bg-transparent text-primary structural-border border-primary/20 hover:bg-primary/5",
    pro: "pro-gradient text-on-primary border-none hover:opacity-90"
  };

  const sizes = {
    sm: "h-[32px] px-sm text-label-md",
    md: "h-[36px] px-md text-label-md",
    lg: "h-[48px] px-xl text-headline-md"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
