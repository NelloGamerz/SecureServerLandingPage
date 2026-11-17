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
          "w-full rounded-[9px] border border-white/10 bg-white/[0.04] px-[13px] py-[11px] font-sans text-[14px] text-paper outline-none transition-colors placeholder:text-ash-soft/70 focus:border-cobalt-light aria-[invalid=true]:border-danger",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
