// @ts-nocheck

import React, { useState, useMemo } from "react";
import { ParagraphBlock } from "./elements/reader";
import HeadingBlock from "./elements/heading";
import { ListBlock, ListItem } from "./elements/list";
import QuoteBlock from "./elements/quote";
import InlineLinkBlock from "./elements/inlineLink";
import { CodeBlock, CodeLine } from "./elements/code";
import ImageBlock from "./elements/image";
import { StaticToolbar } from "./toolbar";

import { ElementTypeKeys, ParagraphType } from "@/types/slatejs-element-types";
import * as operator from "./handlers/operator";

import {
  Descendant,
  Editor,
  Transforms,
  Element as SlateElement,
  Path,
  Node,
  createEditor,
} from "slate";
import { Slate, Editable, ReactEditor, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { eventsHandler } from "./handlers/operator";
import {
  useDecorate,
  SetNodeToDecorations,
} from "./handlers/codeBlock/decorator";

interface editorProp {
  editor: Editor;
  initialValue: Descendant[];
  retriver?: (val: any) => void;
  readOnly?: boolean;
  customKeyBoardShortcuts?: [{ shortcut: string; handler: () => void }];
}

const withVoidsElems = (editor: Editor) => {
  const { isVoid } = editor;

  editor.isVoid = (element) => {
    return element.type === ElementTypeKeys.Image ||
      element.type === ElementTypeKeys.BlockLink
      ? true
      : isVoid(element);
  };
  return editor;
};

const withInlineElems = (editor: Editor) => {
  const { isInline } = editor;

  editor.isInline = (element) => {
    return element.type === ElementTypeKeys.InlineLink
      ? true
      : isInline(element);
  };
  return editor;
};


export function getEditor() {
  const editor: Editor = useMemo(
    () =>
      withInlineElems(withVoidsElems(withHistory(withReact(createEditor())))),
    []
  );
  return editor;
}

export default function TextEditor({
  editor,
  initialValue,
  retriver,
  readOnly,
  customKeyBoardShortcuts,
}: editorProp) {
  // useEffect(() => {
  //   if (!initialValue || !Array.isArray(initialValue)) {
  //     window.alert("Corrupt Data");
  //     return;
  //   }
  // }, [initialValue]);

  if (!initialValue || !Array.isArray(initialValue)) {
    return <span className="lekh-invalid-value">Invalid Value</span>;
  }

  const { isVoid, insertBreak, deleteBackward } = editor;

  editor.insertBreak = (...args) => {
    // @ts-ignore
    const parentPath = Path.parent(editor.selection.focus.path);
    const parentNode = Node.get(editor, parentPath);

    if (
      isVoid(parentNode as SlateElement) ||
      (parentNode as SlateElement).type === ElementTypeKeys.Heading ||
      (parentNode as SlateElement).type === ElementTypeKeys.Quote
    ) {
      const nextPath = Path.next(parentPath);
      const node: ParagraphType = {
        type: ElementTypeKeys.Paragraph,
        children: [{ text: "" }],
      };
      Transforms.insertNodes(editor, node, {
        at: nextPath,
        select: true, // Focus on this node once inserted
      });
    } else if ((parentNode as SlateElement).type === ElementTypeKeys.ListItem) {
      // console.log("trapped", !Node.string(parentNode));
      if (!Node.string(parentNode)) {
        operator.insertBlockAsNextElement(
          editor,
          ElementTypeKeys.Paragraph,
          Path.parent(parentPath)
        );
        Transforms.removeNodes(editor, { at: parentPath });
      } else {
        insertBreak(...args);
      }
    } else {
      insertBreak(...args);
    }
  };

  editor.deleteBackward = (...args) => {
    // @ts-ignore
    const parentPath = Path.parent(editor.selection.focus.path);
    const parentNode = Node.get(editor, parentPath);
    // console.log("dlb", parentNode, parentPath);

    if (parentPath[0] !== 0 && isVoid(parentNode as SlateElement)) {
      Transforms.removeNodes(editor, { at: parentPath });
    } else if (parentPath[0] === 0) {
      if (
        (parentNode as SlateElement).type !== ElementTypeKeys.ListItem &&
        !Node.string(parentNode).length
      ) {
        deleteBackwardForTopElements(editor, parentPath, Path.next(parentPath));
      } else {
        deleteBackward(...args);
      }
    } else if (parentPath[0] !== 0) {
      if (
        (parentNode as SlateElement).type === ElementTypeKeys.ListItem &&
        !Node.string(parentNode).length
      ) {
        const pn: Node = Node.get(editor, Path.parent(parentPath));
        // if no siblings
        if (
          (pn as SlateElement).type === ElementTypeKeys.List &&
          (pn as SlateElement).children.length === 1
        ) {
          // console.log("deleting", pn);
          Transforms.removeNodes(editor, { at: parentPath });
          Transforms.removeNodes(editor, { at: Path.parent(parentPath) });
        } else {
          deleteBackward(...args);
        }
      } else {
        deleteBackward(...args);
      }
    } else {
      deleteBackward(...args);
    }
  };

  function deleteBackwardForTopElements(
    editor: Editor,
    parentPath: Path,
    insertionPath: Path
  ) {
    Transforms.insertNodes(
      editor,
      { type: ElementTypeKeys.Paragraph, children: [] },
      { at: insertionPath }
    );
    Transforms.removeNodes(editor, { at: parentPath });
    ReactEditor.focus(editor);
  }

  // @ts-ignore
  const [_, setCurrentSelection] = useState(editor.selection);
  // @ts-ignore
  const decorate = useDecorate(editor);

  return (
    <Slate
      editor={editor}
      value={initialValue}
      onChange={(value) => {
        setCurrentSelection(editor.selection);
        const isAstChange = editor.operations.some(
          (op) => "set_selection" !== op.type
        );
        if (isAstChange) {
          // console.log("returning value", value);

          // Save the value to Local Storage.
          // const content = JSON.stringify(value);
          // localStorage.setItem("content", content);
          retriver && retriver(value);
        }
      }}
    >
      {/* <HoveringToolbar editor={editor} /> */}
      {!readOnly && (
        <div className="flex justify-center">
          <div className="sticky top-10 z-10 w-[770px]">
            <StaticToolbar editor={editor} />
          </div>
        </div>
      )}
      <SetNodeToDecorations />
      <div className="flex w-full justify-center pt-10">
        <Editable
          decorate={decorate}
          className="w-[768px]"
          renderElement={(props) => renderElement(props)}
          renderLeaf={renderLeaf}
          autoFocus
          readOnly={readOnly}
          // @ts-ignore
          onKeyDown={(e) => eventsHandler(editor, e, undefined)}
        />
      </div>
    </Slate>
  );
}

const renderElement = (props: any) => {
  switch (props.element.type) {
    case ElementTypeKeys.InlineLink:
      return <InlineLinkBlock {...props} />;
    case ElementTypeKeys.List:
      return <ListBlock {...props} />;
    case ElementTypeKeys.ListItem:
      return <ListItem {...props} />;
    case ElementTypeKeys.Heading:
      return <HeadingBlock {...props} />;
    case ElementTypeKeys.Quote:
      return <QuoteBlock {...props} />;
    case ElementTypeKeys.CodeLine:
      return <CodeLine {...props} />;
    case ElementTypeKeys.Image:
      return <ImageBlock {...props} />;
    case ElementTypeKeys.Code:
      return <CodeBlock {...props} />;
    default:
      return <ParagraphBlock {...props} />;
  }
};

const renderLeaf = ({ attributes, children, leaf }) => {
  const { text, ...rest } = leaf;

  if (leaf.bold) {
    children = <strong className="font-serif font-bold">{children}</strong>;
  }

  if (leaf.inlineCode) {
    children = (
      <code className=" rounded bg-red-50 pl-1 pr-2 font-serif font-medium italic text-red-600">
        {children}
      </code>
    );
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  if (leaf.highlight) {
    children = <mark className="bg-blue-100">{children}</mark>;
  }

  return (
    <span {...attributes} className={Object.keys(rest).join(" ")}>
      {children}
    </span>
  );
};
