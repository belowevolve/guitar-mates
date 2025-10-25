"use client";

import { FieldError } from "@/shared/ui/field";
import { Textarea } from "@/shared/ui/textarea";

import { LyricsPreview } from "./lyrics-preview";

type LyricsFieldProps = {
  lyrics: string;
  setLyrics: (lyrics: string) => void;
};

export const LyricsField = ({ lyrics, setLyrics }: LyricsFieldProps) => (
  <>
    <Textarea
      id="lyrics"
      onChange={(e) => setLyrics(e.target.value)}
      placeholder="Enter lyrics with chord notations like [A], [Am], [C], etc."
      value={lyrics}
    />
    <FieldError errors={[]} />
    <LyricsPreview lyrics={lyrics ?? ""} />
  </>
);
