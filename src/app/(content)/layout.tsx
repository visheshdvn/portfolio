import React from "react";

const ContentPagesLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return <div className="pt-[60px] container border">{children}</div>;
};

export default ContentPagesLayout;
