import React, { useState } from "react";
import { Path, Transforms, Element as SlateElement } from "slate";
import { ReactEditor, useSlateStatic } from "slate-react";

import uploadImage from "@/utils/uploadImage/uploader";
import { useDropzone } from "react-dropzone";
import { useSelected, useFocused, useReadOnly } from "slate-react";
// import { KeyPressEventHandler } from "../handlers/blockLink";
import { ElementTypeKeys } from "@/types/slatejs-element-types";

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
    <p
      placeholder="Click here to write something amazing"
      className="lc-paragraph need-placeholder"
      {...props.attributes}
    >
      {props.children}
    </p>
  );
};
