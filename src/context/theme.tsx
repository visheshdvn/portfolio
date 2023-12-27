"use client";

import React, { useState, createContext } from "react";

type Themes = "dark" | "light";

export const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Themes>("dark");

  return (
    // @ts-ignore
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
