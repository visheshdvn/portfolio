import React from "react";

const ContentPagesLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="pt-[60px] max-w-[1472px] xl:w-[77vw] mx-auto 2xl:px-0 lg:w-[80vw] md:w-[640px] px-3 md:px-0">
      {children}
    </div>
  );
};

export default ContentPagesLayout;
