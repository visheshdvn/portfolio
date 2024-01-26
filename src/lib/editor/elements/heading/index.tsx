import React from "react";
import { useSelected, useReadOnly, useSlateStatic } from "slate-react";
import { Transforms } from "slate";

import { HeadingType, HeadingVariants } from "@/types/slatejs-element-types";

interface defaultElementType {
  attributes: any;
  children: any;
  element?: any;
}

const HeadingBlock = ({
  attributes,
  children,
  element,
}: defaultElementType): JSX.Element => {
  const selected = useSelected();
  const readOnly = useReadOnly();

  const editor = useSlateStatic();
  function ucp(property, value) {
    Transforms.setNodes(editor, { [property]: value });
  }

  const headingToolbar = (
    <div
      contentEditable={false}
      className={`absolute bottom-full left-1/2 z-20 hidden -translate-x-1/2 transform bg-black px-4 py-2 ${
        selected && "heading-toolbar"
      }`}
    >
      <div className="flex justify-between space-x-2 text-white">
        <button
          className="flex h-5 w-5 items-center justify-center border-none outline-none"
          onClick={() => {
            ucp("variant", HeadingVariants.Large);
          }}
        >
          H1
        </button>
        <button
          className="flex h-5 w-5 items-center justify-center border-none outline-none"
          onClick={() => {
            ucp("variant", HeadingVariants.Medium);
          }}
        >
          H2
        </button>
        <button
          className="flex h-5 w-5 items-center justify-center border-none outline-none"
          onClick={() => {
            ucp("variant", HeadingVariants.Small);
          }}
        >
          H3
        </button>
      </div>
    </div>
  );

  const Markup = () => {
    switch ((element as HeadingType).variant) {
      case HeadingVariants.Medium:
        return (
          <h3 className="font-open-sans-condensed pt-2 text-[28px] font-bold leading-tight">
            <span>{children}</span>
          </h3>
        );
      case HeadingVariants.Small:
        return (
          <h4 className="font-open-sans-condensed pt-2 text-2xl font-bold leading-tight">
            <span>{children}</span>
          </h4>
        );
      default:
        return (
          <h2 className="font-open-sans-condensed pt-2 text-4xl font-bold leading-tight">
            <span>{children}</span>
          </h2>
        );
    }
  };

  return (
    <>
      {!readOnly && (
        <div
          {...attributes}
          className={`heading relative mb-4 transform transition-shadow duration-200 ${
            selected &&
            "ring-green-600 ring-offset-1 hover:rounded hover:ring-2"
          }`}
        >
          {headingToolbar}
          <Markup />
        </div>
      )}
      {readOnly && (
        <div {...attributes} className="mb-4">
          <Markup />
        </div>
      )}
    </>
  );
};

export default HeadingBlock;
