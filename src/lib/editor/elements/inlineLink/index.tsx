import { ElementTypeKeys } from "@/types/slatejs-element-types";
import React, { useState, ChangeEvent } from "react";
import { Transforms, Element as SlateElement } from "slate";
import { useSlateStatic } from "slate-react";

import { useSelected, useReadOnly } from "slate-react";

interface defaultElementType {
  attributes: any;
  children: any;
  element?: any;
}

//
// Image Element
//
const InlineLinkBlock = ({
  children,
  attributes,
  element,
}: defaultElementType): JSX.Element => {
  const selected = useSelected();
  const readOnly = useReadOnly();
  const [values, setValues] = useState({
    url: element.url || "#",
  });

  const editor = useSlateStatic();

  const ucp = (property: string, value: string) => {
    Transforms.setNodes(
      editor,
      { [property]: value },
      {
        match: (n) =>
          SlateElement.isElement(n) && n.type === ElementTypeKeys.InlineLink,
      }
    );
  };

  const EditableMarkup = ({ el }) => {
    return (
      <>
        {/* <span className="border-dashed border-blue-800 text-blue-800 border-b">{el}</span> */}
        <span className="decoration-wavy underline decoration-blue-700 text-blue-700">
          {el}
        </span>
        <div
          contentEditable={false}
          className={`absolute bottom-[100%] left-1/2 -translate-x-1/2 transform items-center justify-center overflow-hidden rounded transition-all duration-200 ${
            selected ? "inline-link-url-field flex flex-col" : "hidden"
          }`}
        >
          <div className="rounded bg-black py-[2px] px-2">
            <input
              type="text"
              name="url"
              className="unstyled-input font-primary appearance-none bg-transparent p-2 text-sm text-white"
              placeholder="Enter link"
              value={values.url}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                e.preventDefault();
                setValues({
                  ...values,
                  [e.target.name]: e.target.value,
                });
                ucp("url", e.target.value);
              }}
            />
          </div>
          <div className="flex h-2 w-full justify-center">hvkjv</div>
        </div>
      </>
    );
  };

  const ReadOnlyMarkup = ({ el }) => {
    return (
      <>
        <a
          href={values.url}
          target="_blank"
          className="text-inline-link-color underline"
        >
          {el}
        </a>
      </>
    );
  };

  return (
    <span
      {...attributes}
      className={`inline-link-parent relative transform transition-shadow duration-200 ${
        !readOnly && selected && "rounded ring-green-600 hover:ring-2"
      }`}
    >
      {!readOnly && <EditableMarkup el={children} />}
      {readOnly && <ReadOnlyMarkup el={children} />}
    </span>
  );
};

export default InlineLinkBlock;
