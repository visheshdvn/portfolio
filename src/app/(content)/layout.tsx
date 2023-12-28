import React from "react";

const ContentPagesLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return <div className="pt-[60px] container 2xl:px-0">{children}</div>;
};

export default ContentPagesLayout;
