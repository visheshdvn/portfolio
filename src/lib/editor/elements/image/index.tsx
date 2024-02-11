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
  const [files, setFiles] = useState<Array<any>>([]);
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

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      // const file = acceptedFiles[0];
      // console.log(acceptedFiles);

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
        files.length === 0 ? (
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
              {files.map((file) => (
                <img
                  key={file.name}
                  src={file.preview}
                  alt={uiData.alt}
                  className=""
                  onload={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                />
              ))}
              <div className="absolute inset-0 transform bg-white opacity-0 transition-all duration-200 hover:opacity-90 dark:bg-black">
                <button
                  className="absolute top-0 right-0 w-10 h-10 z-10"
                  onClick={() => {
                    setFiles([]);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="font-secondary absolute top-1/2 left-1/2 w-1/2 max-w-[220px] -translate-x-1/2 -translate-y-1/2 transform text-sm font-medium text-black dark:text-white">
                  <input
                    type="text"
                    placeholder="Alternate text."
                    className="creator-dashboard-input-image font-secondary mt-1 mb-1 w-full border-b border-black bg-transparent pb-1 font-medium outline-none disabled:text-neutral-400 dark:border-neutral-400"
                    name="alt"
                    value={uiData.alt}
                    spellCheck={false}
                    onChange={(e) => {
                      setUiData({ ...uiData, alt: e.target.value });
                      setProperty(e.target.name, e.target.value);
                    }}
                  />
                  <label
                    className={`dark-on-valid-label-image transform text-sm font-medium text-black opacity-0 transition-all duration-200 outline-none border-none`}
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
              spellCheck={false}
              className="unstyled-input lb-imagecaption w-full bg-transparent text-center outline-none font-secondary"
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
