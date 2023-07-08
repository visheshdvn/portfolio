import React from "react";
import { playfairDisplayFont } from "@/lib/fonts";
// import { useIsOverflow } from "@/utils/hasYOverflow";

interface LayoutType {
  heading: string;
  children?: JSX.Element;
  sectionRef?: React.RefObject<HTMLElement>;
  id?: string;
}

const HomeSections = ({ sectionRef, heading, children, id }: LayoutType) => {
  return (
    <>
      {/* head tags */}

      {/* body */}
      <section
        style={{ perspective: "500px" }}
        className="layout-screen snap-start snap-always pb-64"
        ref={sectionRef}
        id={id || ""}
      >
        <h1 className="font-medium text-7xl mb-[109px]">
          <span style={playfairDisplayFont.style}>{heading}</span>
        </h1>
        <div className="">{children}</div>
      </section>
    </>
  );
};

// const HomeSections = React.forwardRef<HTMLDivElement, LayoutType>(
//   (props, ref) => (
//     <section
//       style={{ perspective: "500px" }}
//       className="layout-screen snap-start snap-always pb-64"
//       id={props.id || ""}
//       ref={ref}
//     >
//       <h1 className="font-medium text-7xl mb-[109px]">
//         <span style={playfairDisplayFont.style}>{props.heading}</span>
//       </h1>
//       <div className="">{props.children}</div>
//     </section>
//   )
// );
// HomeSections.displayName = "HomeSections";

export default HomeSections;
