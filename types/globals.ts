import type { AppProps } from "next/app";
import type { NextComponentType } from "next";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      email: string;
      username: string;
      firstname: string;
      lastname: string;
    };
  }
}

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
