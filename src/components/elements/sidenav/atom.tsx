import React, { useContext } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";
import { ThemeContext } from "@/src/context/theme";

const sideNavVariants = cva(
  [
    "fixed hidden lg:flex h-screen items-center pointer-events-none justify-center bg-transparent 2xl:w-[90px] w-16 z-40",
  ],
  {
    variants: {
      variant: {
        right: "right-0",
        left: "left-0",
      },
    },
    defaultVariants: {
      variant: "right",
    },
  }
);

export interface SideNavProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof sideNavVariants> {
  text: string;
  link: string;
}

const SideNav: React.FC<SideNavProps> = ({
  text,
  link,
  variant,
  className,
  ...props
}) => {
  // @ts-ignore
  const { theme } = useContext(ThemeContext);

  return (
    <div {...props} className={sideNavVariants({ variant, className })}>
      <Link href={link} className="-rotate-90 pointer-events-auto">
        <span
          className={cn(
            "text-sm font-bold uppercase tracking-[12px] font-secondary text-white leading-none",
            { "text-black": theme === "light" },
            className
          )}
        >
          {text}
        </span>
      </Link>
    </div>
  );
};

export default SideNav;
