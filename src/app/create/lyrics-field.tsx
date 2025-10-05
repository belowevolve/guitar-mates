"use client";

import * as React from "react";

import { FieldError } from "@/shared/ui/field";
import { Textarea } from "@/shared/ui/textarea";

import { LyricsPreview } from "./lyrics-preview";

export const LyricsField = () => {
  const [lyrics, setLyrics] = React.useState(
    "[Куплет 1]\n[Am]Мы так любим дешёвые драмы\nС неп[Bm]родуманными диалогами\nГде актёры немножечко переиграли\nСо вздохами, криками, стонами\nГде мы, не увлечённые ролью\nВ дурацких костюмах со скованной грацией\nОт бульварного прячемся шума\nВ обшарпанных декорациях\n\n[Припев]\nСцены ревности, сцены разлуки\nМы готовы, мы с текстом сверились\nМы как будто не знали друг друга\nМы как будто случайно встретились"
  );

  return (
    <>
      <Textarea
        id="lyrics"
        onChange={(e) => setLyrics(e.target.value)}
        placeholder="Enter lyrics with chord notations like [A], [Am], [C], etc."
        value={lyrics}
      />
      <FieldError errors={[]} />
      <LyricsPreview lyrics={lyrics} />
    </>
  );
};
