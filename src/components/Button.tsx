interface ButtonProps {
  className?: string;
  color?: "green" | "blue" | "gray";
  children: React.ReactNode;
}

export const Button = ({ children, className, color }: ButtonProps) => {
  const colorDefault = color ?? "gray";
  return (
    <button
      className={`bg-gradient-to-r from-${colorDefault}-400 to-${colorDefault}-700 text-white 
      px-4 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};
