import React from "react";

interface defaultElementType {
  attributes: any;
  children: any;
  element?: any;
}

//
// Default / Paragraph Element
//
export const ParagraphBlock = (props: defaultElementType) => {
  return (
    <p className="lc-paragraph" {...props.attributes}>
      {props.children}
    </p>
  );
};
