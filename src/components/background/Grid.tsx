"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
// import { motion } from "framer-motion";

export default function AnimatedBG() {
  const pathname = usePathname();
  const [gridColor, setGridColor] = useState("#f2f2f2");

  let canvasRef = useRef(null);

  const [canvasElem, setCanvalElem] = useState<HTMLCanvasElement | undefined>(
    undefined
  );
  const [context2D, setContext2D] = useState<CanvasRenderingContext2D | null>();

  const redrawCanvas = useCallback(() => {
    if (context2D && gridColor) {
      context2D.clearRect(0, 0, window.innerWidth, window.innerHeight);
      drawGrid(context2D, 0, 0, gridColor);
    }
  }, [context2D, gridColor]);

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
      setGridColor("#202020");
    } else {
      setGridColor("#f2f2f2");
    }

    redrawCanvas();
  }, [pathname, context2D, gridColor, redrawCanvas]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={clsx("h-screen w-screen absolute")}
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
