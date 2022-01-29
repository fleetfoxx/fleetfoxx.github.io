import { time } from "console";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
`;

type Props = {
  width: number;
  height: number;
};

const AnimatedBackground = ({ width, height }: Props) => {
  const canvasElement = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = canvasElement.current!.getContext("2d");

    if (!context) {
      throw new Error("Failed to get canvas context.");
    }

    context.fillStyle = "white";
    context.strokeStyle = "white";

    let start: DOMHighResTimeStamp;
    let prevTimeStamp: DOMHighResTimeStamp;
    const pixels = [{ x: 150, y: 150 }];
    const maxPixels = 5000;

    const step = (timestamp: DOMHighResTimeStamp) => {
      if (start === undefined) {
        start = timestamp;
      }

      const elapsed = timestamp - start;

      if (prevTimeStamp !== timestamp && elapsed > 10) {
        // clear
        context.clearRect(0, 0, width, height);

        // generate
        const newPixel = { ...pixels[0] };
        const xMod = Math.random() < 0.5 ? -1 : 1;
        const yMod = Math.random() < 0.5 ? -1 : 1;
        const roll = Math.random();
        const dir = roll < 0.33 ? -1 : roll > 0.66 ? 1 : 0;

        if (dir === -1) {
          newPixel.x = clamp(newPixel.x + xMod, 0, width);
        } else if (dir === 1) {
          newPixel.y = clamp(newPixel.y + yMod, 0, height);
        } else {
          newPixel.x = clamp(newPixel.x + xMod, 0, width);
          newPixel.y = clamp(newPixel.y + yMod, 0, height);
        }

        // cleanup
        if (pixels.unshift(newPixel) > maxPixels) {
          pixels.pop();
        }

        // draw
        for (const pixel of pixels) {
          context.fillRect(pixel.x, pixel.y, 1, 1);
          context.stroke();
        }

        start = timestamp;
      }

      prevTimeStamp = timestamp;
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  return <Canvas ref={canvasElement} width="300" height="300" />;
};

const clamp = (value: number, min: number, max: number): number => {
  if (value > max) {
    return max;
  }

  if (value < min) {
    return min;
  }

  return value;
};

export default AnimatedBackground;
