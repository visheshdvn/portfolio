import React, { useRef, useEffect } from "react";
import { Transforms } from "slate";
import { ReactEditor, useSlateStatic } from "slate-react";

import { useReadOnly } from "slate-react";
// import { KeyPressEventHandler } from "../handlers/blockLink";

import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import "prismjs/themes/prism-okaidia.min.css";

const LANGTOSTRING = {
  Python: "py",
  JavaScript: "js",
  JSX: "jsx",
  TypeScript: "ts",
  TSX: "tsx",
  Java: "java",
  CSS: "css",
  SCSS: "scss",
  HTML: "html",
  Markdown: "md",
  PHP: "php",
  SQL: "sql",
};

const STRINGTOLANG = {
  py: "Python",
  js: "JavaScript",
  jsx: "JSX",
  ts: "TypeScript",
  tsx: "TSX",
  java: "Java",
  css: "CSS",
  html: "HTML",
  md: "Markdown",
  php: "PHP",
  sql: "SQL",
  scss: "SCSS",
};

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

//
// new code Block
//
export const CodeBlock = ({
  attributes,
  children,
  element,
}: defaultElementType) => {
  const editor = useSlateStatic();
  const codeWrapper = useRef(null);
  const codeWrapperParent = useRef(null);
  const setLanguage = (lang: string) => {
    const path = ReactEditor.findPath(editor, element);
    Transforms.setNodes(editor, { lang }, { at: path });
  };

  const ro = useReadOnly();
  function updateCustomProperty(property, value) {
    Transforms.setNodes(editor, { [property]: value });
  }

  function handleResize() {
    if (window.innerWidth < 640) {
      (codeWrapperParent.current as HTMLDivElement).style.height = `${
        Math.min(500, (codeWrapper.current as HTMLDivElement).scrollHeight) + 8
      }px`;
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <code
      spellCheck={false}
      lang={element.lang}
      className="relative mt-0 mb-10 block rounded bg-neutral-900 px-[5px] py-[13px] text-base leading-snug caret-neutral-200"
      {...attributes}
    >
      <div className="relative pl-2">
        <Listbox
          value={element.lang}
          onChange={(lang) => {
            updateCustomProperty("lang", lang);
            setLanguage(lang);
          }}
          disabled={ro}
        >
          <Listbox.Button className="font-primary flex items-center text-xs font-medium text-black">
            <span
              contentEditable={false}
              className="mr-2 font-semibold tracking-wider text-neutral-200"
            >
              {STRINGTOLANG[element.lang]}
            </span>
            {!ro && <ChevronDownIcon className="h-4 w-4 fill-neutral-200" />}
          </Listbox.Button>

          <Listbox.Options className="font-primary absolute bottom-full z-20 max-h-96 min-w-[200px] space-y-3 overflow-y-auto rounded border border-neutral-200 bg-white p-3 text-base font-medium text-neutral-600 outline-none dark:bg-zinc-800">
            {Object.keys(LANGTOSTRING).map((l) => (
              <Listbox.Option
                key={l}
                value={LANGTOSTRING[l]}
                className="cursor-pointer"
              >
                {l}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      {/* <div className="mt-3 max-h-[500px] overflow-y-hidden pl-6 text-black hover:overflow-y-scroll">
          {children}
        </div> */}
      <div
        ref={codeWrapperParent}
        className="relative mt-3 flow-root h-fit max-h-[500px] overflow-scroll pl-6 sm:block"
      >
        <div ref={codeWrapper} className="absolute text-black sm:static">
          {children}
        </div>
      </div>
    </code>
  );
};

//
// code line element
//
export const CodeLine = ({
  attributes,
  children,
  element,
}: defaultElementType) => {
  return (
    <div className="font-mono caret-neutral-200" {...attributes}>
      {children}
    </div>
  );
};
