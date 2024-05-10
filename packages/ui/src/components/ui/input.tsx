import * as React from "react";
import type { LucideIcon } from "@repo/common/lucide-react";

import { cn } from "~ui/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

const InputWithIcon = React.forwardRef<
  HTMLInputElement,
  InputProps & { Icon: LucideIcon; iconClassName?: string }
>(({ className, type, Icon, iconClassName, ...props }, ref) => {
  return (
    <div
      className={cn(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full items-center gap-x-2 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
    >
      <input
        type={type}
        className={cn("flex-grow border-none outline-none")}
        {...props}
      />
      <Icon className={cn(iconClassName)} />
    </div>
  );
});
Input.displayName = "Input";
InputWithIcon.displayName = "InputWithIcon";

export { Input, InputWithIcon };
