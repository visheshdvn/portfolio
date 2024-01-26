import React from "react";
import { useSelected, useFocused, useReadOnly } from "slate-react";

interface defaultElementType {
  attributes: any;
  children: any;
  element?: any;
}

//
// Quote Element
//
const QuoteBlock = ({
  children,
  attributes,
  element,
}: defaultElementType): JSX.Element => {
  const selected = useSelected();
  const focused = useFocused();
  const readOnly = useReadOnly();

  return (
    <>
      <div
        className={`mb-10 transform overflow-hidden transition-shadow duration-200 ${
          selected && focused && "focus-rin"
        }`}
        {...attributes}
      >
        <div
          className={`flow-root w-full rounded-r border-l-[3px] border-zinc-800 py-4 px-6 dark:border-white ${
            !readOnly && "min-h-[100px"
          }`}
        >
          <div
            contentEditable={!readOnly}
            suppressContentEditableWarning
            className="need-dark-placeholder text-cente relative bg-transparent font-serif text-lg italic tracking-wide text-black outline-none dark:text-white md:text-xl"
          >
            <blockquote className="bg-transparent">{children}</blockquote>

            {(element.children.length === 0 ||
              element.children[0]?.text === "") && (
              <div
                contentEditable={false}
                className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full text-neutral-400"
              >
                Enter Quote
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteBlock;
