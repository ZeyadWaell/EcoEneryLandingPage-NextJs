import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  href?: string;  // Optional href property for linking
}

export default function Button({ variant, children, className = '', href }: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-full text-lg transition duration-200';
  const variants = {
    primary: 'bg-[#2C3E50] text-white hover:bg-[#34495E]',
    secondary: 'border-2 border-[#2C3E50] text-[#2C3E50] hover:bg-gray-50'
  };

  // Conditionally render as 'a' tag if href is provided
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      className={`${baseStyles} ${variants[variant]} ${className}`}
      href={href}  // Only effective if Tag is 'a'
    >
      {children}
    </Tag>
  );
}
