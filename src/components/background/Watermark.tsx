import { cn } from "@/src/lib/utils";
import React, { HTMLAttributes } from "react";

interface WatermarkProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const Watermark = ({
  text,
  className,
  ...props
}: WatermarkProps): JSX.Element => {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-screen pointer-events-none -z-50 bg-transparent">
        <div
          {...props}
          className={cn(
            "absolute font-secondary text-[152px] font-black -z-10 text-[#fafafa] top-[68%] left-1/2",
            className
          )}
        >
          <p className="leading-none select-none uppercase">{text}</p>
        </div>
      </div>
    </>
  );
};

Watermark.displayName = "WaterMark";

export default Watermark;
