"use client";

import { useLocalStorage } from "@/shared/hooks/use-local-storage";
import { FieldError } from "@/shared/ui/field";
import { Textarea } from "@/shared/ui/textarea";

import { LyricsPreview } from "./lyrics-preview";

export const LyricsField = () => {
  const [lyrics, setLyrics] = useLocalStorage(
    "lyrics",
    "[Куплет 1]\n[Am]Мы так[C5] любим дешёвые драмы\nС неп[Bm]родуманными диалогами\nГде актёры немножечко переиграли\nСо вздохами, криками, стонами\nГде мы, не увлечённые ролью\nВ дурацких костюмах со скованной грацией\nОт бульварного прячемся шума\nВ обшарпанных декорациях\n\n[Припев]\nСцены ревности, сцены разлуки\nМы готовы, мы с текстом сверились\nМы как будто не знали друг друга\nМы как будто случайно встретились",
    { initializeWithValue: false }
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
      <LyricsPreview lyrics={lyrics ?? ""} />
    </>
  );
};
