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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
  },
  Am: {
    name: "Am",
    crosses: [],
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
  },
  C5: {
    name: "C5",
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
    min: {
      text: "",
      x: -1,
      y: -1,
    },
    max: {
      text: "",
      x: -1,
      y: -1,
    },
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
