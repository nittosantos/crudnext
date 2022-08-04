interface InputProps {
  type?: "text" | "number";
  text: string;
  value: any;
  readOnly?: boolean;
  className?: string;
  onChange?: (value: any) => void;
}

export const Input = ({
  text,
  type,
  value,
  readOnly,
  onChange,
  className,
}: InputProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-2">{text}</label>
      <input
        className={`border border-purple-500 rounded-md 
          focus:outline-none bg-gray-50 px-4 py-2 ${
            !readOnly && "focus:bg-white"
          }`}
        type={type ?? "text"}
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};
