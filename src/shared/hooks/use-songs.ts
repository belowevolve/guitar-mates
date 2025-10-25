"use client";

import { useCallback } from "react";

import type { Song, SongInput } from "@/shared/types/song";

import { useLocalStorage } from "./use-local-storage";

export const useSongs = () => {
  const [songs, setSongs] = useLocalStorage<Song[]>("songs", []);

  const addSong = useCallback(
    (input: SongInput) => {
      const newSong: Song = {
        id: crypto.randomUUID(),
        title: input.title,
        lyrics: input.lyrics,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setSongs((prev) => [newSong, ...prev]);
      return newSong;
    },
    [setSongs]
  );

  const updateSong = useCallback(
    (id: string, input: Partial<SongInput>) => {
      setSongs((prev) =>
        prev.map((song) =>
          song.id === id
            ? {
                ...song,
                ...input,
                updatedAt: new Date().toISOString(),
              }
            : song
        )
      );
    },
    [setSongs]
  );

  const deleteSong = useCallback(
    (id: string) => {
      setSongs((prev) => prev.filter((song) => song.id !== id));
    },
    [setSongs]
  );

  const getSong = useCallback(
    (id: string) => songs.find((song) => song.id === id),
    [songs]
  );

  return {
    songs,
    addSong,
    updateSong,
    deleteSong,
    getSong,
  };
};
