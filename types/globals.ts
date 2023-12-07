import type { AppProps } from "next/app";
import type { NextComponentType } from "next";

/*
 * Topic options
 */
export interface TopicOptions {
  value: any;
  label: string;
}

/*
 * Custom App Props
 */

export type customFCProps = {
  customProps?: { displayNavBar?: boolean; navbarTheme?: "dark" | "light" };
};

export type CustomAppProps = AppProps & {
  Component: NextComponentType & customFCProps; // add auth type
};
