import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "w-full rounded-[9px] border border-paper-line bg-white px-[13px] py-[11px] font-sans text-[14px] text-ink outline-none transition-colors placeholder:text-ash-soft/60 focus:border-brass",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
