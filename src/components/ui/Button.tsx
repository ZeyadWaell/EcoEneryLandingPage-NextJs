interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export default function Button({ variant, children, className = '' }: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-full text-lg transition duration-200';
  const variants = {
    primary: 'bg-[#2C3E50] text-white hover:bg-[#34495E]',
    secondary: 'border-2 border-[#2C3E50] text-[#2C3E50] hover:bg-gray-50'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}