import type { ChordData } from ".";

export const CHORDS: Record<string, ChordData> = {
  A: {
    name: "A",
    crosses: [],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "1",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 1.5,
        text: "3",
      },
    ],
    lines: [],
  },
  Am: {
    name: "Am",
    crosses: [{ x: 0, y: 0 }],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 3,
        y: 1.5,
        text: "3",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  A5: {
    name: "A5",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
      {
        x: 2,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 3,
        y: 1.5,
        text: "3",
      },
    ],
    lines: [],
  },
  A7: {
    name: "A7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 1.5,
        text: "3",
      },
    ],
    lines: [],
  },
  A7sus4: {
    name: "A7sus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "1",
      },
      {
        x: 4,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [],
  },
  Am7: {
    name: "Am7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  Amaj7: {
    name: "Amaj7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
      {
        x: 4,
        y: 1.5,
        text: "3",
      },
    ],
    lines: [],
  },
  A6: {
    name: "A6",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  Asus2: {
    name: "Asus2",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 3,
        y: 1.5,
        text: "3",
      },
    ],
    lines: [],
  },
  Asus4: {
    name: "Asus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "1",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [],
  },
  Adim: {
    name: "Adim",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 3,
        y: 1.5,
        text: "3",
      },
      {
        x: 4,
        y: 0.5,
        text: "2",
      },
      {
        x: 5,
        y: 1.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Aaug: {
    name: "Aaug",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "4",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 1.5,
        text: "3",
      },
      {
        x: 5,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  Am6: {
    name: "Am6",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 3,
        y: 1.5,
        text: "3",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
      {
        x: 5,
        y: 1.5,
        text: "4",
      },
    ],
    lines: [],
  },
  A9: {
    name: "A9",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 5,
        y: 2.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 1.5,
        },
        end: {
          x: 4,
          y: 1.5,
        },
      },
    ],
  },
  Aadd9: {
    name: "Aadd9",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "1",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [],
  },
  "A/C#": {
    name: "A/C#",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "3",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 1.5,
        },
        end: {
          x: 4,
          y: 1.5,
        },
      },
    ],
  },
  "A/E": {
    name: "A/E",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 1.5,
        },
        end: {
          x: 4,
          y: 1.5,
        },
      },
    ],
  },
  Bb: {
    name: "Bb",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
      {
        text: "3",
        start: {
          x: 2,
          y: 2.5,
        },
        end: {
          x: 4,
          y: 2.5,
        },
      },
    ],
  },
  Bbm: {
    name: "Bbm",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 3,
        y: 2.5,
        text: "4",
      },
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  Bb5: {
    name: "Bb5",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
      {
        x: 2,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 0.5,
        text: "1",
      },
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 3,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Bb7: {
    name: "Bb7",
    crosses: [],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  Bb7sus4: {
    name: "Bb7sus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  Bbm7: {
    name: "Bbm7",
    crosses: [],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 3,
          y: 0.5,
        },
      },
    ],
  },
  Bbmaj7: {
    name: "Bbmaj7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  Bb6: {
    name: "Bb6",
    crosses: [],
    points: [],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 1,
          y: 0.5,
        },
      },
      {
        text: "3",
        start: {
          x: 2,
          y: 2.5,
        },
        end: {
          x: 5,
          y: 2.5,
        },
      },
    ],
  },
  Bbsus2: {
    name: "Bbsus2",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "2",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  Bbsus4: {
    name: "Bbsus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "2",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 3.5,
        text: "4",
      },
      {
        x: 5,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  Bbdim: {
    name: "Bbdim",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "1",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Bbaug: {
    name: "Bbaug",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "4",
      },
      {
        x: 3,
        y: 2.5,
        text: "2",
      },
      {
        x: 4,
        y: 2.5,
        text: "3",
      },
      {
        x: 5,
        y: 1.5,
        text: "1",
      },
    ],
    lines: [],
  },
  Bbm6: {
    name: "Bbm6",
    crosses: [],
    points: [
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 1,
          y: 0.5,
        },
      },
      {
        text: "3",
        start: {
          x: 2,
          y: 2.5,
        },
        end: {
          x: 3,
          y: 2.5,
        },
      },
    ],
  },
  Bb9: {
    name: "Bb9",
    crosses: [],
    points: [],
    lines: [
      {
        text: "2",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 1,
          y: 0.5,
        },
      },
      {
        text: "3",
        start: {
          x: 3,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  Bbadd9: {
    name: "Bbadd9",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 3,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  B: {
    name: "B",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "2",
      },
      {
        x: 3,
        y: 3.5,
        text: "3",
      },
      {
        x: 4,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  Bm: {
    name: "Bm",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
      {
        x: 4,
        y: 2.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  B5: {
    name: "B5",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
      {
        x: 2,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "1",
      },
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [],
  },
  B7: {
    name: "B7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 3,
        y: 1.5,
        text: "3",
      },
      {
        x: 5,
        y: 1.5,
        text: "4",
      },
    ],
    lines: [],
  },
  B7sus4: {
    name: "B7sus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "1",
      },
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 3,
        y: 1.5,
        text: "3",
      },
    ],
    lines: [],
  },
  Bm7: {
    name: "Bm7",
    crosses: [],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 3,
          y: 0.5,
        },
      },
    ],
    min: {
      text: "2",
      x: -0.5,
      y: 0.5,
    },
    max: {
      text: "5",
      x: -0.5,
      y: 3.5,
    },
  },
  Bmaj7: {
    name: "Bmaj7",
    crosses: [],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 2.5,
        text: "2",
      },
      {
        x: 4,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  B6: {
    name: "B6",
    crosses: [],
    points: [],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 1.5,
        },
        end: {
          x: 1,
          y: 1.5,
        },
      },
      {
        text: "3",
        start: {
          x: 2,
          y: 3.5,
        },
        end: {
          x: 5,
          y: 3.5,
        },
      },
    ],
  },
  Bsus2: {
    name: "Bsus2",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "2",
      },
      {
        x: 3,
        y: 3.5,
        text: "3",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  Bsus4: {
    name: "Bsus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "1",
      },
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Bdim: {
    name: "Bdim",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
      {
        x: 5,
        y: 0.5,
        text: "3",
      },
    ],
    lines: [],
  },
  Baug: {
    name: "Baug",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 0,
        y: 2.5,
        text: "3",
      },
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Bm6: {
    name: "Bm6",
    crosses: [],
    points: [
      {
        x: 4,
        y: 2.5,
        text: "2",
      },
      {
        x: 5,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 1.5,
        },
        end: {
          x: 1,
          y: 1.5,
        },
      },
      {
        text: "3",
        start: {
          x: 2,
          y: 3.5,
        },
        end: {
          x: 3,
          y: 3.5,
        },
      },
    ],
  },
  B9: {
    name: "B9",
    crosses: [],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [
      {
        text: "2",
        start: {
          x: 0,
          y: 1.5,
        },
        end: {
          x: 1,
          y: 1.5,
        },
      },
      {
        text: "3",
        start: {
          x: 3,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  Badd9: {
    name: "Badd9",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  C: {
    name: "C",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  Cm: {
    name: "Cm",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 4,
        y: 0.5,
        text: "2",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  C5: {
    name: "C5",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "1",
      },
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [],
    min: {
      text: "3",
      x: -0.5,
      y: 1.5,
    },
    max: {
      text: "5",
      x: -0.5,
      y: 3.5,
    },
  },
  C7: {
    name: "C7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 3,
        y: 2.5,
        text: "4",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  C7sus4: {
    name: "C7sus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "2",
      },
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 3,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 4,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  Cm7: {
    name: "Cm7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "2",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 0.5,
        },
        end: {
          x: 4,
          y: 0.5,
        },
      },
    ],
  },
  Cmaj7: {
    name: "Cmaj7",
    crosses: [],
    points: [
      {
        x: 0,
        y: 2.5,
        text: "3",
      },
      {
        x: 1,
        y: 2.5,
        text: "4",
      },
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [],
  },
  C6: {
    name: "C6",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "4",
      },
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 3,
        y: 1.5,
        text: "3",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  Csus2: {
    name: "Csus2",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Csus4: {
    name: "Csus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "2",
      },
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Cdim: {
    name: "Cdim",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 3,
        y: 1.5,
        text: "3",
      },
      {
        x: 4,
        y: 0.5,
        text: "2",
      },
      {
        x: 5,
        y: 1.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Caug: {
    name: "Caug",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 3,
          y: 0.5,
        },
        end: {
          x: 4,
          y: 0.5,
        },
      },
    ],
  },
  Cm6: {
    name: "Cm6",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 0.5,
        },
        end: {
          x: 4,
          y: 0.5,
        },
      },
    ],
  },
  C9: {
    name: "C9",
    crosses: [],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "1",
      },
    ],
    lines: [
      {
        text: "2",
        start: {
          x: 0,
          y: 2.5,
        },
        end: {
          x: 1,
          y: 2.5,
        },
      },
      {
        text: "3",
        start: {
          x: 3,
          y: 2.5,
        },
        end: {
          x: 5,
          y: 2.5,
        },
      },
    ],
  },
  "C/E": {
    name: "C/E",
    crosses: [],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  "C/G": {
    name: "C/G",
    crosses: [],
    points: [
      {
        x: 0,
        y: 2.5,
        text: "3",
      },
      {
        x: 1,
        y: 2.5,
        text: "4",
      },
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  Cadd9: {
    name: "Cadd9",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  "C#": {
    name: "C#",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "4",
      },
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 3,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  "C#m": {
    name: "C#m",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
      {
        x: 4,
        y: 1.5,
        text: "3",
      },
    ],
    lines: [],
  },
  "C#5": {
    name: "C#5",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
      {
        x: 2,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "1",
      },
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [],
    min: {
      text: "4",
      x: -0.5,
      y: 1.5,
    },
    max: {
      text: "6",
      x: -0.5,
      y: 3.5,
    },
  },
  "C#7": {
    name: "C#7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "3",
      },
      {
        x: 2,
        y: 2.5,
        text: "2",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
      {
        x: 4,
        y: 1.5,
        text: "1",
      },
    ],
    lines: [],
  },
  "C#7sus4": {
    name: "C#7sus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "2",
      },
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 4,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  "C#m7": {
    name: "C#m7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "2",
      },
      {
        x: 3,
        y: 3.5,
        text: "3",
      },
      {
        x: 5,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 1.5,
        },
        end: {
          x: 4,
          y: 1.5,
        },
      },
    ],
  },
  "C#maj7": {
    name: "C#maj7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "4",
      },
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 3,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  "C#6": {
    name: "C#6",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "2",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 1.5,
        text: "1",
      },
      {
        x: 5,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [],
  },
  "C#sus2": {
    name: "C#sus2",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "2",
      },
      {
        x: 3,
        y: 3.5,
        text: "3",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
    min: {
      text: "4",
      x: -0.5,
      y: 1.5,
    },
    max: {
      text: "6",
      x: -0.5,
      y: 3.5,
    },
  },
  "C#sus4": {
    name: "C#sus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
      {
        x: 2,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [
      {
        text: "2",
        start: {
          x: 4,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  "C#dim": {
    name: "C#dim",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "1",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  "C#aug": {
    name: "C#aug",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "4",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 1.5,
        text: "3",
      },
      {
        x: 5,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  "C#m6": {
    name: "C#m6",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "1",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [],
  },
  "C#9": {
    name: "C#9",
    crosses: [],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 1.5,
        text: "3",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  "C#add9": {
    name: "C#add9",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
    min: {
      text: "4",
      x: -0.5,
      y: 1.5,
    },
    max: {
      text: "6",
      x: -0.5,
      y: 3.5,
    },
  },
  D: {
    name: "D",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 1.5,
        text: "1",
      },
      {
        x: 4,
        y: 2.5,
        text: "3",
      },
      {
        x: 5,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [],
  },
  Dm: {
    name: "Dm",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 2.5,
        text: "3",
      },
      {
        x: 5,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  D5: {
    name: "D5",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [],
  },
  D7: {
    name: "D7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
      {
        x: 5,
        y: 1.5,
        text: "3",
      },
    ],
    lines: [],
  },
  D7sus4: {
    name: "D7sus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
      {
        x: 5,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [],
  },
  Dm7: {
    name: "Dm7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 4,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  Dmaj7: {
    name: "Dmaj7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [],
    lines: [
      {
        text: "1",
        start: {
          x: 3,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  D6: {
    name: "D6",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 1.5,
        text: "1",
      },
      {
        x: 5,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [],
  },
  Dsus2: {
    name: "Dsus2",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [],
  },
  Dsus4: {
    name: "Dsus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 1.5,
        text: "1",
      },
      {
        x: 4,
        y: 2.5,
        text: "3",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Ddim: {
    name: "Ddim",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
      {
        x: 5,
        y: 0.5,
        text: "2",
      },
    ],
    lines: [],
  },
  Daug: {
    name: "Daug",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "4",
      },
      {
        x: 3,
        y: 2.5,
        text: "2",
      },
      {
        x: 4,
        y: 2.5,
        text: "3",
      },
      {
        x: 5,
        y: 1.5,
        text: "1",
      },
    ],
    lines: [],
  },
  Dm6: {
    name: "Dm6",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  D9: {
    name: "D9",
    crosses: [],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "1",
      },
    ],
    lines: [
      {
        text: "2",
        start: {
          x: 0,
          y: 3.5,
        },
        end: {
          x: 1,
          y: 3.5,
        },
      },
      {
        text: "3",
        start: {
          x: 3,
          y: 3.5,
        },
        end: {
          x: 5,
          y: 3.5,
        },
      },
    ],
  },
  "D/A": {
    name: "D/A",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 1.5,
        text: "1",
      },
      {
        x: 4,
        y: 2.5,
        text: "3",
      },
      {
        x: 5,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [],
  },
  Dadd9: {
    name: "Dadd9",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
    min: {
      text: "5",
      x: -0.5,
      y: 1.5,
    },
    max: {
      text: "7",
      x: -0.5,
      y: 3.5,
    },
  },
  Eb: {
    name: "Eb",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 0,
        y: 2.5,
        text: "2",
      },
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Ebm: {
    name: "Ebm",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 2.5,
        text: "2",
      },
      {
        x: 4,
        y: 3.5,
        text: "4",
      },
      {
        x: 5,
        y: 1.5,
        text: "1",
      },
    ],
    lines: [],
  },
  Eb5: {
    name: "Eb5",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
      {
        x: 2,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Eb7: {
    name: "Eb7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Eb7sus4: {
    name: "Eb7sus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "2",
      },
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 4,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
    min: {
      text: "4",
      x: -0.5,
      y: 1.5,
    },
    max: {
      text: "6",
      x: -0.5,
      y: 3.5,
    },
  },
  Ebm7: {
    name: "Ebm7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 3,
        y: 2.5,
        text: "4",
      },
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 1.5,
        text: "3",
      },
    ],
    lines: [],
  },
  Ebmaj7: {
    name: "Ebmaj7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [
      {
        text: "3",
        start: {
          x: 3,
          y: 2.5,
        },
        end: {
          x: 5,
          y: 2.5,
        },
      },
    ],
  },
  Eb6: {
    name: "Eb6",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 0.5,
        text: "2",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Ebsus2: {
    name: "Ebsus2",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "0",
      },
      {
        x: 3,
        y: 2.5,
        text: "2",
      },
      {
        x: 4,
        y: 3.5,
        text: "3",
      },
      {
        x: 5,
        y: 0.5,
        text: "0",
      },
    ],
    lines: [],
  },
  Ebsus4: {
    name: "Ebsus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [
      {
        text: "4",
        start: {
          x: 4,
          y: 3.5,
        },
        end: {
          x: 5,
          y: 3.5,
        },
      },
    ],
  },
  Ebdim: {
    name: "Ebdim",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 3,
        y: 1.5,
        text: "3",
      },
      {
        x: 4,
        y: 0.5,
        text: "2",
      },
      {
        x: 5,
        y: 1.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Ebaug: {
    name: "Ebaug",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 0,
        y: 2.5,
        text: "3",
      },
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  Ebm6: {
    name: "Ebm6",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 5,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 0.5,
        },
        end: {
          x: 4,
          y: 0.5,
        },
      },
    ],
  },
  Eb9: {
    name: "Eb9",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "2",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 1.5,
        text: "1",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Ebadd9: {
    name: "Ebadd9",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
    min: {
      text: "6",
      x: -0.5,
      y: 1.5,
    },
    max: {
      text: "8",
      x: -0.5,
      y: 3.5,
    },
  },
  E: {
    name: "E",
    crosses: [],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 2,
        y: 1.5,
        text: "3",
      },
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  Em: {
    name: "Em",
    crosses: [],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 2,
        y: 1.5,
        text: "3",
      },
    ],
    lines: [],
  },
  E5: {
    name: "E5",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
      {
        x: 2,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 2,
        y: 1.5,
        text: "3",
      },
    ],
    lines: [],
  },
  E7: {
    name: "E7",
    crosses: [],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  E7sus4: {
    name: "E7sus4",
    crosses: [],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "1",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [],
  },
  Em7: {
    name: "Em7",
    crosses: [],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "1",
      },
    ],
    lines: [],
  },
  Emaj7: {
    name: "Emaj7",
    crosses: [],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "3",
      },
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 3,
        y: 0.5,
        text: "2",
      },
    ],
    lines: [],
  },
  E6: {
    name: "E6",
    crosses: [],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 2,
        y: 1.5,
        text: "3",
      },
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
      {
        x: 4,
        y: 1.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Esus2: {
    name: "Esus2",
    crosses: [],
    points: [
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
    min: {
      text: "2",
      x: -0.5,
      y: 0.5,
    },
    max: {
      text: "5",
      x: -0.5,
      y: 3.5,
    },
  },
  Esus4: {
    name: "Esus4",
    crosses: [],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 2,
        y: 1.5,
        text: "3",
      },
      {
        x: 3,
        y: 1.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Edim: {
    name: "Edim",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "1",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Eaug: {
    name: "Eaug",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 3,
          y: 0.5,
        },
        end: {
          x: 4,
          y: 0.5,
        },
      },
    ],
  },
  Em6: {
    name: "Em6",
    crosses: [],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "1",
      },
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 1.5,
        text: "3",
      },
    ],
    lines: [],
  },
  E9: {
    name: "E9",
    crosses: [],
    points: [
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
      {
        x: 4,
        y: 2.5,
        text: "4",
      },
      {
        x: 5,
        y: 1.5,
        text: "3",
      },
    ],
    lines: [
      {
        text: "2",
        start: {
          x: 1,
          y: 1.5,
        },
        end: {
          x: 2,
          y: 1.5,
        },
      },
    ],
  },
  Eadd9: {
    name: "Eadd9",
    crosses: [],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 2,
        y: 3.5,
        text: "4",
      },
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  "E/G#": {
    name: "E/G#",
    crosses: [],
    points: [
      {
        x: 0,
        y: 3.5,
        text: "4",
      },
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 2,
        y: 1.5,
        text: "3",
      },
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  "E/B": {
    name: "E/B",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 2,
        y: 1.5,
        text: "3",
      },
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  F: {
    name: "F",
    crosses: [],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 2,
        y: 2.5,
        text: "4",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  Fm: {
    name: "Fm",
    crosses: [],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 2,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  F5: {
    name: "F5",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
      {
        x: 2,
        y: 0,
      },
    ],
    points: [
      {
        x: 0,
        y: 0.5,
        text: "1",
      },
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 2,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  F7: {
    name: "F7",
    crosses: [],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  F7sus4: {
    name: "F7sus4",
    crosses: [],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 3,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  Fm7: {
    name: "Fm7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  Fmaj7: {
    name: "Fmaj7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  F6: {
    name: "F6",
    crosses: [],
    points: [
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
      {
        text: "3",
        start: {
          x: 1,
          y: 2.5,
        },
        end: {
          x: 2,
          y: 2.5,
        },
      },
    ],
  },
  Fsus2: {
    name: "Fsus2",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 3.5,
        text: "4",
      },
      {
        x: 5,
        y: 0.5,
        text: "2",
      },
    ],
    lines: [],
    min: {
      text: "3",
      x: -0.5,
      y: 0.5,
    },
    max: {
      text: "6",
      x: -0.5,
      y: 3.5,
    },
  },
  Fsus4: {
    name: "Fsus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 3,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 4,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  Fdim: {
    name: "Fdim",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
      {
        x: 5,
        y: 0.5,
        text: "2",
      },
    ],
    lines: [],
  },
  Faug: {
    name: "Faug",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "4",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 1.5,
        text: "3",
      },
      {
        x: 5,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  Fm6: {
    name: "Fm6",
    crosses: [],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "2",
      },
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  F9: {
    name: "F9",
    crosses: [],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 4,
          y: 0.5,
        },
      },
    ],
  },
  Fadd9: {
    name: "Fadd9",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  "F/A": {
    name: "F/A",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 2.5,
        text: "3",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 4,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  "F/C": {
    name: "F/C",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 2,
        y: 2.5,
        text: "4",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 4,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  "F#": {
    name: "F#",
    crosses: [],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "3",
      },
      {
        x: 2,
        y: 3.5,
        text: "4",
      },
      {
        x: 3,
        y: 2.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  "F#m": {
    name: "F#m",
    crosses: [],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "3",
      },
      {
        x: 2,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  "F#5": {
    name: "F#5",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
      {
        x: 2,
        y: 0,
      },
    ],
    points: [
      {
        x: 0,
        y: 1.5,
        text: "1",
      },
      {
        x: 1,
        y: 3.5,
        text: "3",
      },
      {
        x: 2,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [],
  },
  "F#7": {
    name: "F#7",
    crosses: [],
    points: [
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 3,
        y: 1.5,
        text: "2",
      },
      {
        x: 4,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
    min: {
      text: "2",
      x: -0.5,
      y: 0.5,
    },
    max: {
      text: "5",
      x: -0.5,
      y: 3.5,
    },
  },
  "F#7sus4": {
    name: "F#7sus4",
    crosses: [],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  "F#m7": {
    name: "F#m7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  "F#maj7": {
    name: "F#maj7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "4",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  "F#6": {
    name: "F#6",
    crosses: [],
    points: [
      {
        x: 3,
        y: 2.5,
        text: "2",
      },
      {
        x: 4,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
      {
        text: "3",
        start: {
          x: 1,
          y: 3.5,
        },
        end: {
          x: 2,
          y: 3.5,
        },
      },
    ],
  },
  "F#sus2": {
    name: "F#sus2",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 0,
        y: 1.5,
        text: "2",
      },
      {
        x: 1,
        y: 3.5,
        text: "3",
      },
      {
        x: 2,
        y: 3.5,
        text: "4",
      },
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  "F#sus4": {
    name: "F#sus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 4,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  "F#dim": {
    name: "F#dim",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 3,
        y: 1.5,
        text: "3",
      },
      {
        x: 4,
        y: 0.5,
        text: "2",
      },
      {
        x: 5,
        y: 1.5,
        text: "4",
      },
    ],
    lines: [],
  },
  "F#aug": {
    name: "F#aug",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "4",
      },
      {
        x: 3,
        y: 2.5,
        text: "2",
      },
      {
        x: 4,
        y: 2.5,
        text: "3",
      },
      {
        x: 5,
        y: 1.5,
        text: "1",
      },
    ],
    lines: [],
  },
  "F#m6": {
    name: "F#m6",
    crosses: [],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "2",
      },
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 4,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
  },
  "F#9": {
    name: "F#9",
    crosses: [],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 2.5,
        text: "2",
      },
      {
        x: 5,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 1.5,
        },
        end: {
          x: 4,
          y: 1.5,
        },
      },
    ],
  },
  "F#add9": {
    name: "F#add9",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 2.5,
        text: "2",
      },
      {
        x: 4,
        y: 1.5,
        text: "1",
      },
      {
        x: 5,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [],
  },
  G: {
    name: "G",
    crosses: [],
    points: [
      {
        x: 0,
        y: 2.5,
        text: "2",
      },
      {
        x: 1,
        y: 1.5,
        text: "1",
      },
      {
        x: 5,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [],
  },
  Gm: {
    name: "Gm",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [],
    lines: [
      {
        text: "1",
        start: {
          x: 3,
          y: 2.5,
        },
        end: {
          x: 5,
          y: 2.5,
        },
      },
    ],
  },
  G5: {
    name: "G5",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 4,
        y: 2.5,
        text: "2",
      },
      {
        x: 5,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [],
  },
  G7: {
    name: "G7",
    crosses: [],
    points: [
      {
        x: 0,
        y: 2.5,
        text: "3",
      },
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  G7sus4: {
    name: "G7sus4",
    crosses: [],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
    min: {
      text: "3",
      x: -0.5,
      y: 1.5,
    },
    max: {
      text: "5",
      x: -0.5,
      y: 3.5,
    },
  },
  Gm7: {
    name: "Gm7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 2.5,
        },
        end: {
          x: 5,
          y: 2.5,
        },
      },
    ],
  },
  Gmaj7: {
    name: "Gmaj7",
    crosses: [],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "4",
      },
      {
        x: 2,
        y: 2.5,
        text: "2",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
    min: {
      text: "3",
      x: -0.5,
      y: 1.5,
    },
    max: {
      text: "5",
      x: -0.5,
      y: 3.5,
    },
  },
  G6: {
    name: "G6",
    crosses: [],
    points: [
      {
        x: 0,
        y: 2.5,
        text: "3",
      },
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [],
  },
  Gsus2: {
    name: "Gsus2",
    crosses: [],
    points: [
      {
        x: 0,
        y: 2.5,
        text: "1",
      },
      {
        x: 4,
        y: 2.5,
        text: "2",
      },
      {
        x: 5,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [],
  },
  Gsus4: {
    name: "Gsus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 4,
        y: 0.5,
        text: "1",
      },
      {
        x: 5,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [],
  },
  Gdim: {
    name: "Gdim",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 1.5,
        text: "1",
      },
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Gaug: {
    name: "Gaug",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  Gm6: {
    name: "Gm6",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 0.5,
        text: "1",
      },
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "3",
        start: {
          x: 3,
          y: 2.5,
        },
        end: {
          x: 5,
          y: 2.5,
        },
      },
    ],
  },
  G9: {
    name: "G9",
    crosses: [],
    points: [
      {
        x: 0,
        y: 2.5,
        text: "4",
      },
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 3,
        y: 1.5,
        text: "3",
      },
      {
        x: 5,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [],
  },
  Gadd9: {
    name: "Gadd9",
    crosses: [],
    points: [
      {
        x: 0,
        y: 1.5,
        text: "2",
      },
      {
        x: 1,
        y: 0.5,
        text: "1",
      },
      {
        x: 5,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [],
    min: {
      text: "2",
      x: -0.5,
      y: 0.5,
    },
    max: {
      text: "5",
      x: -0.5,
      y: 3.5,
    },
  },
  "G/B": {
    name: "G/B",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "1",
      },
      {
        x: 4,
        y: 2.5,
        text: "3",
      },
      {
        x: 5,
        y: 2.5,
        text: "4",
      },
    ],
    lines: [],
  },
  "G/D": {
    name: "G/D",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 5,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [],
  },
  "G#": {
    name: "G#",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 5,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 0.5,
        },
        end: {
          x: 4,
          y: 0.5,
        },
      },
    ],
  },
  "G#m": {
    name: "G#m",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 1,
        y: 1.5,
        text: "2",
      },
      {
        x: 2,
        y: 0.5,
        text: "1",
      },
    ],
    lines: [
      {
        text: "4",
        start: {
          x: 3,
          y: 3.5,
        },
        end: {
          x: 5,
          y: 3.5,
        },
      },
    ],
  },
  "G#5": {
    name: "G#5",
    crosses: [],
    points: [
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
      {
        x: 4,
        y: 3.5,
        text: "3",
      },
      {
        x: 5,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [],
  },
  "G#7": {
    name: "G#7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 5,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 0.5,
        },
        end: {
          x: 4,
          y: 0.5,
        },
      },
    ],
  },
  "G#7sus4": {
    name: "G#7sus4",
    crosses: [],
    points: [
      {
        x: 1,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 0,
          y: 1.5,
        },
        end: {
          x: 5,
          y: 1.5,
        },
      },
    ],
    min: {
      text: "4",
      x: -0.5,
      y: 1.5,
    },
    max: {
      text: "6",
      x: -0.5,
      y: 3.5,
    },
  },
  "G#m7": {
    name: "G#m7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 3.5,
        },
        end: {
          x: 5,
          y: 3.5,
        },
      },
    ],
  },
  "G#maj7": {
    name: "G#maj7",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 5,
        y: 2.5,
        text: "3",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 0.5,
        },
        end: {
          x: 4,
          y: 0.5,
        },
      },
    ],
  },
  "G#6": {
    name: "G#6",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 0.5,
        },
        end: {
          x: 5,
          y: 0.5,
        },
      },
    ],
  },
  "G#sus2": {
    name: "G#sus2",
    crosses: [],
    points: [
      {
        x: 0,
        y: 3.5,
        text: "2",
      },
      {
        x: 4,
        y: 3.5,
        text: "3",
      },
      {
        x: 5,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 1,
          y: 0.5,
        },
        end: {
          x: 3,
          y: 0.5,
        },
      },
    ],
  },
  "G#sus4": {
    name: "G#sus4",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 4,
        y: 1.5,
        text: "2",
      },
      {
        x: 5,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 0.5,
        },
        end: {
          x: 3,
          y: 0.5,
        },
      },
    ],
  },
  "G#dim": {
    name: "G#dim",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 0.5,
        text: "1",
      },
      {
        x: 5,
        y: 0.5,
        text: "2",
      },
    ],
    lines: [],
  },
  "G#aug": {
    name: "G#aug",
    crosses: [
      {
        x: 0,
        y: 0,
      },
    ],
    points: [
      {
        x: 0,
        y: 3.5,
        text: "4",
      },
      {
        x: 1,
        y: 2.5,
        text: "3",
      },
      {
        x: 2,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 3,
          y: 0.5,
        },
        end: {
          x: 4,
          y: 0.5,
        },
      },
    ],
  },
  "G#m6": {
    name: "G#m6",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 5,
        y: 0.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 0.5,
        },
        end: {
          x: 3,
          y: 0.5,
        },
      },
    ],
  },
  "G#9": {
    name: "G#9",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 3,
        y: 2.5,
        text: "3",
      },
      {
        x: 5,
        y: 1.5,
        text: "2",
      },
    ],
    lines: [
      {
        text: "1",
        start: {
          x: 2,
          y: 0.5,
        },
        end: {
          x: 4,
          y: 0.5,
        },
      },
    ],
  },
  "G#add9": {
    name: "G#add9",
    crosses: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    points: [
      {
        x: 2,
        y: 3.5,
        text: "3",
      },
      {
        x: 3,
        y: 2.5,
        text: "2",
      },
      {
        x: 4,
        y: 1.5,
        text: "1",
      },
      {
        x: 5,
        y: 3.5,
        text: "4",
      },
    ],
    lines: [],
    min: {
      text: "4",
      x: -0.5,
      y: 1.5,
    },
    max: {
      text: "6",
      x: -0.5,
      y: 3.5,
    },
  },
} as const;

export type ChordName = keyof typeof CHORDS;
