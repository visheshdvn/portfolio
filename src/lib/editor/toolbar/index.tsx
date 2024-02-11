import React from "react";
import {
  Editor,
  Transforms,
  Element as SlateElement,
  Range,
  Node,
  Path,
} from "slate";
import { ToolbarButton } from "../elements/toolbar";
import {
  ElementTypeKeys,
  InlineLinkType,
  InlinePropsKeys,
  ListTypeVariants,
} from "@/types/slatejs-element-types";
import {
  pushNode,
  transformNode,
  toggleMark,
  isMarkActive,
} from "../handlers/operator";
import { ReactEditor } from "slate-react";

interface ToolbarProps {
  editor: Editor;
}

export const StaticToolbar = ({ editor }: ToolbarProps) => {
  return (
    <section className="flex h-16 w-full items-center rounded border-b border-neutral-200 px-5 justify-center">
      <div className="flex space-x-5">
        <ToolbarButton
          title="ctrl+alt+b"
          value={InlinePropsKeys.Bold}
          active={isMarkActive(editor, InlinePropsKeys.Bold)}
          clickHandler={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMark(editor, InlinePropsKeys.Bold);
          }}
        />
        <ToolbarButton
          title="ctrl+alt+i"
          value={InlinePropsKeys.Italic}
          active={isMarkActive(editor, InlinePropsKeys.Italic)}
          clickHandler={() => toggleMark(editor, InlinePropsKeys.Italic)}
        />
        <ToolbarButton
          title="ctrl+alt+u"
          value={InlinePropsKeys.Underline}
          active={isMarkActive(editor, InlinePropsKeys.Underline)}
          clickHandler={() => toggleMark(editor, InlinePropsKeys.Underline)}
        />
        <ToolbarButton
          title="ctrl+alt+l"
          value={InlinePropsKeys.InlineCode}
          active={isMarkActive(editor, InlinePropsKeys.InlineCode)}
          clickHandler={() => toggleMark(editor, InlinePropsKeys.InlineCode)}
        />
        <ToolbarButton
          title="ctrl+alt+h"
          value={InlinePropsKeys.Highlight}
          active={isMarkActive(editor, InlinePropsKeys.Highlight)}
          clickHandler={() => toggleMark(editor, InlinePropsKeys.Highlight)}
        />
        <ToolbarButton
          value={ElementTypeKeys.InlineLink}
          active={false}
          clickHandler={() => toggleInlineLink(editor)}
        />
      </div>
      <div className="mx-5 h-[18px] border-r border-neutral-300"></div>
      <div className="flex space-x-5">
        {/* <ToolbarButton
          value={ElementTypeKeys.Paragraph}
          active={false}
          clickHandler={() =>
            pushNode(editor, ElementTypeKeys.Paragraph, false)
          }
        /> */}
        <ToolbarButton
          title="shift+alt+h"
          value={ElementTypeKeys.Heading}
          active={false}
          clickHandler={() => transformNode(editor, ElementTypeKeys.Heading)}
        />
        <ToolbarButton
          title="shift+alt+q"
          value={ElementTypeKeys.Quote}
          active={false}
          clickHandler={() =>
            transformNode(editor, ElementTypeKeys.Quote, false)
          }
        />
        <ToolbarButton
          title="shift+alt+i"
          value={ElementTypeKeys.Image}
          active={false}
          clickHandler={() => transformNode(editor, ElementTypeKeys.Image)}
        />
        <ToolbarButton
          title="shift+alt+l"
          value={ElementTypeKeys.List}
          active={false}
          clickHandler={() => transformNode(editor, ElementTypeKeys.List)}
        />
        <ToolbarButton
          title="shift+alt+c"
          value={ElementTypeKeys.Code}
          active={false}
          clickHandler={() => transformNode(editor, ElementTypeKeys.Code)}
        />
      </div>
    </section>
  );
};

function toggleInlineLink(editor: Editor) {
  if (editor.selection) {
    // if (isLinkActive(editor)) {
    //   unwrapLink(editor);
    // }
    // ReactEditor.focus(editor);
    const { selection } = editor;
    const isCollapsed = selection && Range.isCollapsed(selection);

    const node: InlineLinkType = {
      type: ElementTypeKeys.InlineLink,
      url: "",
      children: [{ text: "" }],
    };

    if (isCollapsed) {
      Transforms.insertNodes(editor, node);
    } else {
      Transforms.wrapNodes(editor, node, { split: true });
      Transforms.collapse(editor, { edge: "end" });
      // Transforms.insertNodes(editor, node, { at: selection.focus.path });
      // Transforms.unwrapNodes(editor, { split: true });
    }
  }
}
