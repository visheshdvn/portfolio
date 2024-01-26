import React from "react";
import { Path, Transforms, Element as SlateElement } from "slate";
import { useSlateStatic } from "slate-react";

import { useSelected, useReadOnly } from "slate-react";
import {
  ElementTypeKeys,
  ListTypeVariants,
} from "@/types/slatejs-element-types";

interface defaultElementType {
  attributes: any;
  children: any;
  element?: any;
}

interface ReadOnly {
  readOnly: boolean;
}

interface CustomPropertyUpdater {
  updateCustomProperty: (property, value, at?) => void;
}

interface CustomListPropertySetter {
  updateListPoints: (value: string, index: number) => void;
}

//
// list
//
export const ListBlock = ({
  attributes,
  children,
  element,
}: defaultElementType & ReadOnly) => {
  const selected = useSelected();
  const readOnly = useReadOnly();
  const editor = useSlateStatic();

  function ucp(property, value) {
    Transforms.setNodes(
      editor,
      { [property]: value },
      {
        at: Path.parent(editor.selection?.focus.path),
        match: (n) =>
          SlateElement.isElement(n) && n.type === ElementTypeKeys.List,
      }
    );
  }

  return (
    <ul
      {...attributes}
      className={`list-parent relative mb-10 transform rounded py-2 pl-10 font-serif text-lg transition-shadow duration-200 ${
        element.variant === ListTypeVariants.Ordered
          ? "list-decimal"
          : "list-disc"
      } ${
        selected && !readOnly && "ring-green-600 ring-offset-1 hover:ring-2"
      }`}
    >
      {!readOnly && selected && (
        <div
          contentEditable={false}
          className="list-toolbar absolute bottom-full left-1/2 z-20 flex -translate-x-1/2 transform items-center space-x-4 rounded bg-black px-3 py-1 text-white"
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              ucp("variant", ListTypeVariants.Unordered);
            }}
            className="h-6 w-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="1 0 47 47"
              className="fill-white"
            >
              <path d="M18.85 38.1v-3H42v3Zm0-12.6v-3H42v3Zm0-12.65v-3H42v3Zm-9.4 27.1q-1.4 0-2.4-.95t-1-2.4q0-1.4.975-2.375Q8 33.25 9.45 33.25q1.4 0 2.35 1 .95 1 .95 2.4 0 1.35-.975 2.325-.975.975-2.325.975Zm0-12.6q-1.4 0-2.4-.975T6.05 24q0-1.4 1-2.375 1-.975 2.4-.975 1.35 0 2.325.975.975.975.975 2.375t-.975 2.375q-.975.975-2.325.975ZM9.4 14.7q-1.4 0-2.375-.975-.975-.975-.975-2.375t.975-2.375Q8 8 9.4 8t2.375.975q.975.975.975 2.375t-.975 2.375Q10.8 14.7 9.4 14.7Z" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              ucp("variant", ListTypeVariants.Ordered);
            }}
            className="h-6 w-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="1 0 47 47"
              className="fill-white"
            >
              <path d="M6 44v-3h5v-1.5H8v-3h3V35H6v-3h6q.85 0 1.425.575Q14 33.15 14 34v2q0 .85-.575 1.425Q12.85 38 12 38q.85 0 1.425.575Q14 39.15 14 40v2q0 .85-.575 1.425Q12.85 44 12 44Zm0-14v-5.5q0-.85.575-1.425Q7.15 22.5 8 22.5h3V21H6v-3h6q.85 0 1.425.575Q14 19.15 14 20v3.5q0 .85-.575 1.425-.575.575-1.425.575H9V27h5v3Zm3-14V7H6V4h6v12Zm9.45 21.55v-3H42v3Zm0-12.15v-3H42v3Zm0-12.15v-3H42v3Z" />
            </svg>
          </button>
        </div>
      )}
      <div className="space-y-5">{children}</div>
    </ul>
  );
};

//
// Bulleted list
//
export const ListItem = ({
  attributes,
  children,
  element,
}: defaultElementType) => {
  return (
    <li
      {...attributes}
      className="p-0 font-serif text-lg md:text-xl md:leading-8"
    >
      {children}
    </li>
  );
};
