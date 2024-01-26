import type { AppProps } from "next/app";
import type { NextComponentType } from "next";
import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";
import { HistoryEditor } from "slate-history";
import {
  ParagraphType,
  ImageType,
  QuoteType,
  CustomText,
  BlockLinkType,
  InlineLinkType,
  HeadingType,
  ListType,
  ListItemType,
  CodeType,
  CodeLineType
} from "./slatejs-element-types";

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


/*
 * slatejs type declarations
 */
declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element:
      | ParagraphType
      | InlineLinkType
      | ImageType
      | QuoteType
      | BlockLinkType
      | HeadingType
      | ListType
      | ListItemType
      | CodeType
      | CodeLineType;
    Text: CustomText;
  }
}
