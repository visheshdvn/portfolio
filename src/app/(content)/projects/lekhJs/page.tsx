"use client";

import React, { useEffect, useRef, useState } from "react";
import "@/src/styles/editor.css";
import { getEditor } from "@/src/lib/editor";
import { ElementTypeKeys } from "@/types/slatejs-element-types";
import { Descendant, Editor } from "slate";
import TextEditor from "@/src/lib/editor";

const LekhJs = () => {
  const codeGridRef = useRef(null);
  const codeBlockRef = useRef(null);

  useEffect(() => {
    if (codeGridRef.current) {
      const codeBox = codeGridRef.current as HTMLElement;
      const distanceFromBottom =
        window.innerHeight - codeBox.getBoundingClientRect().bottom;
      codeBox.style.minHeight =
        codeBox.offsetHeight + distanceFromBottom + "px";
    }
  }, [codeGridRef]);

  useEffect(() => {
    if (codeBlockRef.current) {
      const codeBlock = codeBlockRef.current as HTMLElement;
      codeBlock.scrollTop = codeBlock.scrollHeight;
    }
  });

  const [content, setContent] = useState<string>("");

  const initialValue: Descendant[] = [
    {
      type: ElementTypeKeys.Paragraph,
      children: [{ text: "" }],
    },
  ];
  const editor: Editor = getEditor();

  return (
    <div className="py-10">
      <div className="min-h-[80vh] bg-white px-5">
        <h1 className="text-center font-secondary font-bold text-[40px]">
          Lekh.js
        </h1>
        <p className="font-secondary font-medium text-base text-gray-600 text-center">
          A medium like text editor for React ecosystem built with Slate. &nbsp;
          (<span className="animate-pulse text-red-400">•</span> In active
          development)
        </p>
        <main className="grid grid-cols-2 gap-4 mt-5">
          <section className="">
            <h3 className="text-center font-secondary font-bold text-lg leading-none mb-5">
              TEXT
            </h3>
            <div>
              <TextEditor
                editor={editor}
                initialValue={initialValue}
                readOnly={false}
                // customKeyBoardShortcuts={[{ shortcut: "shift+alt+s" }]}
                retriver={(val) => {
                  setContent(JSON.stringify(val, null, 2));
                }}
              />
            </div>
          </section>
          <section ref={codeGridRef} className="">
            <h3 className="text-center font-secondary font-bold text-lg leading-none mb-5">
              OUTPUT
            </h3>
            <div
              ref={codeBlockRef}
              className="relative bg-neutral-900 h-full overflow-y-scroll"
            >
              <div className="absolute inset-x-0">
                {/* <p className="text-black">{content}</p> */}
                <pre className="text-white px-3">{content}</pre>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LekhJs;
