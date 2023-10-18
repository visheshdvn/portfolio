import { TbChevronDown } from "react-icons/tb";

import React from "react";
import { cn } from "@/src/lib/utils";

export const ChevronDown = ({
  className,
  ...props
}: {
  [x: string]: any;
  className?: string;
}) => {
  return (
    <TbChevronDown
      className={cn("h-4 w-4 transition-transform duration-200", className)}
      {...props}
    />
  );
};
