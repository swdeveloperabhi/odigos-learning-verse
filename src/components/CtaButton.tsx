
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const CtaButton = ({ 
  children, 
  variant = 'primary', 
  className,
  onClick
}: CtaButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "font-medium text-base rounded-lg py-2.5 px-5 transition-all duration-300",
        variant === 'primary' 
          ? "bg-odigos-purple hover:bg-odigos-darkPurple text-white" 
          : "bg-white border border-odigos-purple text-odigos-purple hover:bg-odigos-softPurple",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default CtaButton;
