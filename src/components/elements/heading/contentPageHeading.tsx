import { cn } from "@/src/lib/utils";
import React, { HTMLAttributes, ReactNode } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

const ContentPageHeading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, text, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(
          "font-primary pt-1 font-medium 3xl:text-9xl 2xl:text-[120px] md:text-[112px] lg:text-9xl 2xl:leading-none xl:leading-none lg:leading-none md:leading-none 3xl:mb-20 mx-auto 2xl:mb-16 xl:mb-14 md:mb-16",
          className
        )}
      >
        {text}
      </h1>
    );
  }
);

ContentPageHeading.displayName = "ContentPageHeading";

export default ContentPageHeading;
