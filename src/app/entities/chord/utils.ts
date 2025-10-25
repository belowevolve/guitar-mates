export type Point = {
  x: number;
  y: number;
};

export type Config = {
  origin: Point;
  axisOffset: Point;
  textYAxisOffset: number;
  crossOffset: number;
};

export function getPointCoordinates(point: Point, config: Config) {
  return {
    x: config.origin.x + config.axisOffset.x * point.x,
    y: config.origin.y + config.axisOffset.y * point.y,
  };
}

export function getTextCoordinates(point: Point, config: Config) {
  return {
    x: config.origin.x + config.axisOffset.x * point.x,
    y: config.origin.y + config.axisOffset.y * point.y + config.textYAxisOffset,
  };
}

export function getCrossCoordinates(point: Point, config: Config) {
  return {
    leftLine: {
      x1: config.origin.x + config.axisOffset.x * point.x - config.crossOffset,
      y1: config.origin.y + config.axisOffset.y * point.y - config.crossOffset,
      x2: config.origin.x + config.axisOffset.x * point.x + config.crossOffset,
      y2: config.origin.y + config.axisOffset.y * point.y + config.crossOffset,
    },
    rightLine: {
      x1: config.origin.x + config.axisOffset.x * point.x + config.crossOffset,
      y1: config.origin.y + config.axisOffset.y * point.y - config.crossOffset,
      x2: config.origin.x + config.axisOffset.x * point.x - config.crossOffset,
      y2: config.origin.y + config.axisOffset.y * point.y + config.crossOffset,
    },
  };
}

export function getMiddleCoordinates(pointA: Point, pointB: Point) {
  return {
    x: (pointA.x + pointB.x) / 2,
    y: (pointA.y + pointB.y) / 2,
  };
}
