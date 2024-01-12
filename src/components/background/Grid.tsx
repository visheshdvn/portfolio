"use client";

import React, {
  useEffect,
  useRef,
  useCallback,
  useContext,
  useLayoutEffect,
} from "react";
import { cn } from "@/src/lib/utils";
import { ThemeContext } from "@/src/context/theme";

const DARK_MODE_GRID_COLOR = "#222222";
const LIGHT_MODE_GRID_COLOR = "#F2F2F2";

export default function AnimatedBG() {
  // @ts-ignore
  const { theme } = useContext(ThemeContext);
  let canvasRef = useRef(null);

  // prepare context and draw the canvas
  const redrawCanvas = useCallback(() => {
    if (canvasRef.current && theme) {
      const canvasElem = canvasRef.current as HTMLCanvasElement;
      const context2D = canvasElem.getContext("2d");

      if (context2D) {
        canvasElem.width = window.innerWidth;
        canvasElem.height = window.innerHeight;
        context2D.clearRect(0, 0, window.innerWidth, window.innerHeight);
        drawGrid(
          context2D,
          0,
          0,
          theme === "dark" ? DARK_MODE_GRID_COLOR : LIGHT_MODE_GRID_COLOR
        );
      }
    }
  }, [canvasRef, theme]);

  // hook to handle window resizing
  useLayoutEffect(() => {
    window.addEventListener("resize", redrawCanvas);
    return () => window.removeEventListener("resize", redrawCanvas);
  }, [redrawCanvas]);

  // set grid color on route change and draw canvas
  useEffect(() => {
    redrawCanvas();
  }, [theme, redrawCanvas]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={cn("h-screen w-screen fixed -z-50", {
          "bg-black": theme === "dark",
          "bg-white": theme === "light",
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
  ctx.lineWidth = 0.8;
  ctx.strokeStyle = gridColor;
  let SQUARE_SIDE;
  if (window.innerWidth > 1536) {
    SQUARE_SIDE = 104;
  } else if (window.innerWidth > 1024) {
    SQUARE_SIDE = 80;
  } else {
    SQUARE_SIDE = 60;
  }
  // draw horizontal lines
  while (yStart < window.innerHeight) {
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
