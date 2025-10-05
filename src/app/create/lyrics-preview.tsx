"use client";

import * as React from "react";

import { Chord } from "@/shared/ui/chord";
import { CHORDS, type ChordName } from "@/shared/ui/chord/chords";

type Notation = {
  type: "chord" | "text";
  name: string;
  position: number;
  length: number;
};

const parseLine = (line: string) => {
  const notations: Notation[] = [];
  const pattern = /\[([^\]]+)\]/g;
  let match: RegExpExecArray | null = pattern.exec(line);

  while (match !== null) {
    const name = match[1];
    const isChord = name in CHORDS;
    notations.push({
      type: isChord ? "chord" : "text",
      name,
      position: match.index,
      length: match[0].length,
    });
    match = pattern.exec(line);
  }

  const cleanText = line.replace(/\[([^\]]+)\]/g, "");
  return { cleanText, notations };
};

type LyricsPreviewProps = {
  lyrics: string;
};

export const LyricsPreview = ({ lyrics }: LyricsPreviewProps) => {
  if (!lyrics.trim()) {
    return (
      <div className="rounded-lg border border-dashed bg-gray-50 p-6 text-center text-gray-500">
        Type lyrics with [A], [Am], [C] for chords or [Verse 1] for labels
      </div>
    );
  }

  const lines = lyrics.split("\n");

  return (
    <div className="space-y-6 rounded-lg border p-6">
      <h3 className="font-semibold text-gray-900 text-lg">Preview</h3>
      <div className="space-y-4 font-mono text-sm">
        {lines.map((line, idx) => {
          const { cleanText, notations } = parseLine(line);

          let offset = 0;
          const adjusted = notations.map((notation) => {
            const pos = notation.position - offset;
            offset += notation.length;
            return { ...notation, pos };
          });

          const hasChords = adjusted.some((n) => n.type === "chord");

          return (
            <div className="relative" key={`${idx}-${line.slice(0, 10)}`}>
              {hasChords && (
                <div className="flex h-12 items-end">
                  {adjusted
                    .filter((n) => n.type === "chord")
                    .map((chord) => (
                      <div
                        className="absolute flex flex-col items-center"
                        key={`${idx}-${chord.name}-${chord.position}`}
                        style={{ left: `${chord.pos}ch` }}
                      >
                        <Chord
                          chord={CHORDS[chord.name as ChordName]}
                          options={{ size: "small" }}
                        />
                      </div>
                    ))}
                </div>
              )}
              <div>
                {adjusted.length === 0
                  ? cleanText || "\u00A0"
                  : adjusted.map((notation, nIdx) => {
                      const start = nIdx === 0 ? 0 : adjusted[nIdx - 1].pos;
                      const textBefore = cleanText.slice(start, notation.pos);
                      const isLast = nIdx === adjusted.length - 1;
                      const textAfter = isLast
                        ? cleanText.slice(notation.pos)
                        : "";

                      return (
                        <React.Fragment key={`${idx}-${nIdx}`}>
                          {textBefore}
                          {notation.type === "text" && (
                            <strong>{notation.name}</strong>
                          )}
                          {isLast && textAfter}
                        </React.Fragment>
                      );
                    })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
