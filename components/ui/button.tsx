import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[9px] font-sans font-semibold text-[14.5px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-br from-brass-light to-brass text-[#231705] shadow-[0_6px_20px_rgba(192,138,62,0.28)] hover:-translate-y-px hover:shadow-[0_8px_26px_rgba(192,138,62,0.4)]",
        ghost:
          "bg-transparent text-paper border border-paper/20 hover:border-paper/40 hover:bg-white/[0.03]",
        submit:
          "w-full bg-ink text-paper rounded-[10px] py-[15px] text-[15px] hover:-translate-y-px hover:bg-black",
      },
      size: {
        default: "px-[22px] py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
