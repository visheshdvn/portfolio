"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { cn } from "@/src/lib/utils";
// import { motion } from "framer-motion";

const DARK_MODE_GRID_COLOR = "#202020";
const LIGHT_MODE_GRID_COLOR = "#F2F2F2";

export default function AnimatedBG() {
  const pathname = usePathname();
  const [colorMode, setColorMode] = useState<"dark" | "light">("dark");

  let canvasRef = useRef(null);

  const [canvasElem, setCanvalElem] = useState<HTMLCanvasElement | undefined>(
    undefined
  );
  const [context2D, setContext2D] = useState<CanvasRenderingContext2D | null>();

  const redrawCanvas = useCallback(() => {
    if (context2D && colorMode) {
      context2D.clearRect(0, 0, window.innerWidth, window.innerHeight);
      drawGrid(
        context2D,
        0,
        0,
        colorMode === "dark" ? DARK_MODE_GRID_COLOR : LIGHT_MODE_GRID_COLOR
      );
    }
  }, [context2D, colorMode]);

  // initialize the canvas
  useEffect(() => {
    if (canvasRef.current) {
      setCanvalElem(canvasRef?.current);
    }
  }, [canvasRef]);

  // if canvas element is initialized set context
  useEffect(() => {
    if (canvasElem) {
      canvasElem.width = window.innerWidth;
      canvasElem.height = window.innerHeight;
      setContext2D(canvasElem.getContext("2d"));
    }
  }, [canvasElem]);

  // set grid color on route change and draw canvas
  useEffect(() => {
    if (pathname === "/") {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }

    redrawCanvas();
  }, [pathname, context2D, redrawCanvas]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={cn("h-screen w-screen absolute -z-50", {
          "bg-black": colorMode === "dark",
          "bg-white": colorMode === "light",
        })}
      ></canvas>
    </>
  );
}

function drawGrid(
  ctx: CanvasRenderingContext2D,
  yStart: number = 0,
  xStart: number = 0,
  gridColor: string
) {
  // console.log(gridColor);

  ctx.lineWidth = 0.9;
  ctx.strokeStyle = gridColor;
  const SQUARE_SIDE = 104;
  // draw horizontal lines
  while (yStart < window.innerHeight) {
    // console.log("these lines");
    ctx.beginPath();
    ctx.moveTo(0, yStart);
    ctx.lineTo(window.innerWidth, yStart);
    ctx.stroke();

    yStart += SQUARE_SIDE;
  }

  //   draw vertical lines
  while (xStart < window.innerWidth) {
    ctx.beginPath();
    ctx.moveTo(xStart, 0);
    ctx.lineTo(xStart, window.innerHeight);
    ctx.stroke();

    xStart += SQUARE_SIDE;
  }
}
