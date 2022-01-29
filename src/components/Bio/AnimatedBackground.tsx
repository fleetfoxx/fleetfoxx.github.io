import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
`;

const Canvas = styled.canvas`
  border-radius: 20rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
`;

const ModeSelector = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 0.8rem;

  & > button {
    background: none;
    color: inherit;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    letter-spacing: inherit;
    cursor: pointer;
  }
`;

const Mode = {
  wander: "wander",
  lines: "lines",
};

type Point = {
  x: number;
  y: number;
};

type Props = {
  width: number;
  height: number;
  initialMode?: keyof typeof Mode;
};

const AnimatedBackground = ({
  width,
  height,
  initialMode = "wander",
}: Props) => {
  const canvasElement = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    const context = canvasElement.current!.getContext("2d");
    let requestId: number | null = null;

    if (!context) {
      throw new Error("Failed to get canvas context.");
    }

    context.fillStyle = "white";
    context.strokeStyle = "white";
    context.lineCap = "round";

    const speed_ms = 50;
    let start: DOMHighResTimeStamp;
    let prevTimeStamp: DOMHighResTimeStamp;
    const points: Point[] = [{ x: width / 2, y: height / 2 }];

    const step = (timestamp: DOMHighResTimeStamp) => {
      if (start === undefined) {
        start = timestamp;
      }

      const elapsed = timestamp - start;

      if (prevTimeStamp !== timestamp && elapsed > speed_ms) {
        // clear
        context.clearRect(0, 0, width, height);

        drawBorder(context, width, height, 4);

        switch (mode) {
          case "wander":
            wander(context, points, width, height);
            break;
          case "lines":
            lines(context, points, width, height);
            break;
        }

        start = timestamp;
      }

      prevTimeStamp = timestamp;
      requestId = requestAnimationFrame(step);
    };

    requestId = requestAnimationFrame(step);

    return () => {
      if (requestId) {
        cancelAnimationFrame(requestId);
        requestId = null;
      }
    };
  }, [mode, width, height]);

  return (
    <Wrapper>
      <Canvas ref={canvasElement} width="300" height="300" />
      <ModeSelector>
        <button onClick={() => setMode("wander")} type="button">
          wander
        </button>
        <span>·</span>
        <button onClick={() => setMode("lines")} type="button">
          bolt
        </button>
      </ModeSelector>
    </Wrapper>
  );
};

const drawBorder = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  padding: number,
  fill: boolean = false
) => {
  context.strokeStyle = "white";
  context.fillStyle = "white";

  const center = {
    x: width / 2,
    y: height / 2,
  };

  const radius = (width - padding) / 2;

  context.beginPath();
  context.arc(center.x, center.y, radius, 0, Math.PI * 2);
  context.fill();

  if (!fill) {
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(center.x + 2, center.y, radius - 1, 0, Math.PI * 2);
    context.fill();
    context.globalCompositeOperation = "source-over";
  }
};

const wander = (
  context: CanvasRenderingContext2D,
  points: Point[],
  width: number,
  height: number
) => {
  const maxPoints = 5000;

  // generate
  const newPoint = { ...points[0] };
  const xMod = Math.random() < 0.5 ? -1 : 1;
  const yMod = Math.random() < 0.5 ? -1 : 1;
  const roll = Math.random();
  const dir = roll < 0.33 ? -1 : roll > 0.66 ? 1 : 0;

  if (dir === -1) {
    newPoint.x = clamp(newPoint.x + xMod, 0, width);
  } else if (dir === 1) {
    newPoint.y = clamp(newPoint.y + yMod, 0, height);
  } else {
    newPoint.x = clamp(newPoint.x + xMod, 0, width);
    newPoint.y = clamp(newPoint.y + yMod, 0, height);
  }

  addPoint(points, newPoint, maxPoints);

  // draw
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const opacity = (maxPoints - i) / maxPoints;
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillRect(point.x, point.y, 1, 1);
    context.stroke();
  }
};

const lines = (
  context: CanvasRenderingContext2D,
  points: Point[],
  width: number,
  height: number
) => {
  const maxPoints = 20;
  const maxLineWidth = 5;

  // generate
  const newPoint = {
    x: getRandomInt(0, width),
    y: getRandomInt(0, height),
  };

  addPoint(points, newPoint, maxPoints);

  // draw
  for (let i = 1; i < points.length; i++) {
    const opacity = (maxPoints - i) / maxPoints;
    context.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
    context.lineWidth = maxLineWidth - i;
    context.beginPath();
    context.moveTo(points[i - 1].x, points[i - 1].y);
    context.lineTo(points[i].x, points[i].y);
    context.stroke();
  }
};

const addPoint = (points: Point[], newPoint: Point, maxPoints: number) => {
  // cleanup
  if (points.unshift(newPoint) > maxPoints) {
    points.pop();
  }
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

/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values */
const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

export default AnimatedBackground;
