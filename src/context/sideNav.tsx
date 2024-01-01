"use client";

import React, { useState, createContext } from "react";

export type SideNavDataType = {
  right: {
    link: string;
    text: string;
  } | null;
  left: {
    link: string;
    text: string;
  } | null;
};

export const SideNavContext = createContext<SideNavDataType | null>(null);

export const SideNavProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [navData, setNavData] = useState<SideNavDataType>({
    right: { link: "/about", text: "ABOUT" },
    left: null,
  });
  return (
    <SideNavContext.Provider
      // @ts-ignore
      value={{ navData, setNavData }}
    >
      {children}
    </SideNavContext.Provider>
  );
};
