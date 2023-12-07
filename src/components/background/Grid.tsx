"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
// import { motion } from "framer-motion";

export default function AnimatedBG() {
  let canvasRef = useRef(null);

  const [canvasElem, setCanvalElem] = useState<HTMLCanvasElement | undefined>(
    undefined
  );
  const [context2D, setContext2D] = useState<CanvasRenderingContext2D | null>();

  useEffect(() => {
    if (canvasRef.current) {
      setCanvalElem(canvasRef?.current);
    }
  }, [canvasRef]);

  useEffect(() => {
    if (canvasElem) {
      canvasElem.width = window.innerWidth;
      canvasElem.height = window.innerHeight;
      setContext2D(canvasElem.getContext("2d"));
    }
  }, [canvasElem]);

  // drawing grid
  if (context2D) {
    drawGrid(context2D, 0, 0);
  }

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
  xStart: number = 0
) {
  ctx.lineWidth = 0.9;
  ctx.strokeStyle = "#181818";
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
