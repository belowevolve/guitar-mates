import "./styles.css";

import type { Point } from "./utils";
import {
  getCrossCoordinates,
  getMiddleCoordinates,
  getPointCoordinates,
  getTextCoordinates,
} from "./utils";

type ChordPoint = Point & {
  text: string;
};

type ChordLine = {
  start: Point;
  end: Point;
  text: string;
};

export type ChordData = {
  name: string;
  points: ChordPoint[];
  lines: ChordLine[];
  crosses: Point[];
  min?: ChordPoint;
  max?: ChordPoint;
};

type ChordOptions = {
  size: "small" | "large";
};

type ChordProps = {
  chord: ChordData;
  options: ChordOptions;
};

// Constants for chord grid dimensions
const GRID_WIDTH = 6;
const GRID_HEIGHT = 5;
const GRID_START_X = 0;
const GRID_START_Y = 0;
const GRID_END_X = 5;
const GRID_END_Y = 4;

const chordConfig = {
  small: {
    container: {
      width: 42,
      height: 48,
      radius: 3,
      isShowText: false,
    },

    title: {
      x: 23,
      y: 9.333_333_333_333_334,
      fontSize: 9,
    },

    origin: {
      x: 8,
      y: 12,
    },

    axisOffset: {
      x: 6,
      y: 8,
    },

    crossOffset: 2,

    textYAxisOffset: 3.5,
    leftOffset: 7,
  },
  large: {
    container: {
      width: 90,
      height: 86,
      radius: 6,
      isShowText: true,
    },

    title: {
      x: 46,
      y: 15.333_333_333_333_332,
      fontSize: 13,
    },

    origin: {
      x: 16,
      y: 20,
    },

    axisOffset: {
      x: 12,
      y: 14,
    },

    crossOffset: 4,

    textYAxisOffset: 3.5,
    leftOffset: 14,
  },
};

const defaultChord: ChordData = {
  crosses: [],
  name: "",
  points: [],
  lines: [],
};

const defaultOptions: ChordOptions = {
  size: "large",
};

export const Chord = ({
  chord = defaultChord,
  options = defaultOptions,
}: ChordProps) => {
  const { name, points, lines, crosses, min, max } = chord;

  // Configuration
  const config = chordConfig[options.size];

  // Calculate max and min
  const minPoint = min ? getTextCoordinates(min, config) : null;
  const maxPoint = max ? getTextCoordinates(max, config) : null;

  return (
    <svg
      className="ge-chord relative"
      height={config.container.height}
      style={{ left: `-${config.leftOffset}px` }}
      width={config.container.width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{`Guitar chord diagram for ${name}`}</title>
      {/*Horizontal lines*/}
      {Array.from({ length: GRID_HEIGHT }, (_, num) => {
        const startPoint = getPointCoordinates(
          { x: GRID_START_X, y: num },
          config
        );
        const endPoint = getPointCoordinates({ x: GRID_END_X, y: num }, config);
        return (
          <line
            className="ge-chord-line"
            key={`horizontal-${num}`}
            x1={startPoint.x}
            x2={endPoint.x}
            y1={startPoint.y}
            y2={endPoint.y}
          />
        );
      })}
      {/*Vertical lines*/}
      {Array.from({ length: GRID_WIDTH }, (_, num) => {
        const startPoint = getPointCoordinates(
          { x: num, y: GRID_START_Y },
          config
        );
        const endPoint = getPointCoordinates({ x: num, y: GRID_END_Y }, config);
        return (
          <line
            className="ge-chord-line"
            key={`vertical-${num}`}
            x1={startPoint.x}
            x2={endPoint.x}
            y1={startPoint.y}
            y2={endPoint.y}
          />
        );
      })}
      {/*Points*/}
      {points.map((point) => {
        const calculatedPoint = getPointCoordinates(point, config);
        const textPoint = getTextCoordinates(point, config);
        return (
          <g className="ge-chord-point" key={`point-${point.x}-${point.y}`}>
            <circle
              cx={calculatedPoint.x}
              cy={calculatedPoint.y}
              fill="#555555"
              r={config.container.radius}
              stroke="none"
            />
            {config.container.isShowText && (
              <text x={textPoint.x} y={textPoint.y}>
                {point.text}
              </text>
            )}
          </g>
        );
      })}

      {/*Barre*/}
      {lines.map((line) => {
        const startPoint = getPointCoordinates(line.start, config);
        const endPoint = getPointCoordinates(line.end, config);
        const middlePoint = getMiddleCoordinates(startPoint, endPoint);

        return (
          <g className="ge-chord-barre" key={line.text}>
            <line
              strokeWidth={config.container.radius}
              x1={startPoint.x}
              x2={endPoint.x}
              y1={startPoint.y}
              y2={endPoint.y}
            />
            <circle
              cx={middlePoint.x}
              cy={middlePoint.y}
              r={config.container.radius}
            />
            {config.container.isShowText && (
              <text
                x={middlePoint.x}
                y={middlePoint.y + config.textYAxisOffset}
              >
                {line.text}
              </text>
            )}
          </g>
        );
      })}

      {/*Name of this chord*/}
      <text
        className="ge-chord-name"
        fontSize={config.title.fontSize}
        x={config.title.x}
        y={config.title.y}
      >
        {name}
      </text>

      {/*Crosses on the top of left*/}
      {crosses.map((point) => {
        const calculatedCross = getCrossCoordinates(point, config);

        return (
          <g key={`cross-${point.x}-${point.y}`}>
            <line
              className="ge-chord-line"
              x1={calculatedCross.leftLine.x1}
              x2={calculatedCross.leftLine.x2}
              y1={calculatedCross.leftLine.y1}
              y2={calculatedCross.leftLine.y2}
            />
            <line
              className="ge-chord-line"
              x1={calculatedCross.rightLine.x1}
              x2={calculatedCross.rightLine.x2}
              y1={calculatedCross.rightLine.y1}
              y2={calculatedCross.rightLine.y2}
            />
          </g>
        );
      })}

      {/*Min*/}
      {min && minPoint && (
        <text className="ge-chord-min" x={minPoint.x} y={minPoint.y}>
          {min.text}
        </text>
      )}

      {/*Max*/}
      {max && maxPoint && (
        <text className="ge-chord-max" x={maxPoint.x} y={maxPoint.y}>
          {max.text}
        </text>
      )}
    </svg>
  );
};
