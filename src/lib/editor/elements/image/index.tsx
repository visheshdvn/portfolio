import React, { useState } from "react";
import { Transforms, Element as SlateElement } from "slate";
import { ReactEditor, useSlateStatic } from "slate-react";
import { useDropzone } from "react-dropzone";
import { useSelected, useReadOnly } from "slate-react";
// import { KeyPressEventHandler } from "../handlers/blockLink";
import { ElementTypeKeys } from "@/types/slatejs-element-types";

interface defaultElementType {
  attributes: any;
  children: any;
  element?: any;
}

//
// Image Element
//
const ImageBlock = ({
  children,
  attributes,
  element,
}: defaultElementType): JSX.Element => {
  const [files, setFiles] = useState<any>([]);
  const readOnly = useReadOnly();
  const [uiData, setUiData] = useState<{
    src: string;
    alt?: string;
    caption?: string;
  }>({
    src: element.src,
    alt: element.alt,
    caption: element.caption,
  });
  const selected = useSelected();
  const editor = useSlateStatic();

  const setProperty = (property: string, value: string) => {
    const path = ReactEditor.findPath(editor, element);
    Transforms.setNodes(
      editor,
      { [property]: value },
      {
        at: path,
        match: (n) =>
          SlateElement.isElement(n) && n.type === ElementTypeKeys.Image,
      }
    );
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];

      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <div
      {...attributes}
      contentEditable={false}
      className={`mb-10 ${
        !readOnly && selected && "rounded ring-2 ring-green-600 ring-offset-1"
      }`}
    >
      <span className="hidden">{children}</span>
      {!readOnly ? (
        !uiData.src ? (
          <>
            <div className="h-48 w-full rounded-sm bg-zinc-50 p-1 text-center md:h-56 xl:h-72">
              <div
                {...getRootProps({ className: "dropzone" })}
                className="flex h-full items-center justify-center rounded-sm border text-zinc-400"
              >
                <input {...getInputProps()} />
                <p className="xl:text-lg">
                  Drag & drop image here, or click to select file.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="relative mb-1 flex justify-center">
              <img src={uiData.src} alt={uiData.alt} className="" />
              <div className="absolute inset-0 transform bg-white opacity-0 transition-all duration-200 hover:opacity-90 dark:bg-black">
                <div className="font-primary absolute top-1/2 left-1/2 w-1/2 max-w-[220px] -translate-x-1/2 -translate-y-1/2 transform text-sm font-medium text-black dark:text-white">
                  <input
                    type="text"
                    placeholder="Alternate text."
                    className="creator-dashboard-input-image font-primary mt-1 mb-1 w-full border-b border-black bg-transparent pb-1 font-medium outline-none disabled:text-neutral-400 dark:border-neutral-400"
                    name="alt"
                    value={uiData.alt}
                    onChange={(e) => {
                      setUiData({ ...uiData, alt: e.target.value });
                      setProperty(e.target.name, e.target.value);
                    }}
                  />
                  <label
                    className={`dark-on-valid-label-image transform text-sm font-medium text-black opacity-0 transition-all duration-200`}
                  >
                    Alternate Text
                  </label>
                </div>
              </div>
            </div>
            <input
              type="text"
              value={uiData.caption}
              placeholder="Write image caption."
              name="caption"
              className="unstyled-input lb-imagecaption w-full bg-transparent text-center"
              onChange={(e) => {
                setUiData({ ...uiData, caption: e.target.value });
                setProperty(e.target.name, e.target.value);
              }}
            />
          </>
        )
      ) : null}

      {readOnly && (
        <figure className="flex justify-center">
          <img
            src={uiData.src}
            alt={uiData.alt.trim() || "LumBytes"}
            className=""
          />
          {(uiData.caption || "").trim().length > 0 && (
            <figcaption className="lb-imagecaption mt-1 text-center">
              {uiData.caption}
            </figcaption>
          )}
        </figure>
      )}
    </div>
  );
};

export default ImageBlock;
