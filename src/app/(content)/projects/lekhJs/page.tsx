"use client";

import "@/src/styles/editor.css";
import { getEditor } from "@/src/lib/editor";
import { ElementTypeKeys } from "@/types/slatejs-element-types";
import React from "react";
import { Descendant, Editor } from "slate";
import TextEditor from "@/src/lib/editor";

const LekhJs = () => {
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
          A medium like text editor for React ecosystem built with Slate.
        </p>
        <main className="border grid grid-cols-2 gap-4 mt-5">
          <section className="bg-green-50">
            <h3 className="text-center font-secondary font-bold text-lg leading-none">
              TEXT
            </h3>
            <div>
              <TextEditor
                editor={editor}
                initialValue={initialValue}
                readOnly={false}
                // customKeyBoardShortcuts={[{ shortcut: "shift+alt+s" }]}
                retriver={(val) => {
                  //   dataStateUpdater((ps) => {
                  //     return {
                  //       ...ps,
                  //       content: val,
                  //     };
                  //   });
                  console.log(val);
                }}
              />
            </div>
          </section>
          <section className="bg-red-50">
            <h3 className="text-center font-secondary font-bold text-lg leading-none">
              OUTPUT
            </h3>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LekhJs;
