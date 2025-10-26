"use client";

import { CalendarIcon, MusicIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import type * as React from "react";

import type { Song } from "@/shared/db";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";

type SongCardProps = {
  song: Song;
  onDelete: (id: string) => void;
};

export const SongCard = ({ song, onDelete }: SongCardProps) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    onDelete(song.id);
  };

  // Extract first few lines of lyrics for preview
  const getLyricsPreview = (lyrics: string, maxLines = 3) => {
    const lines = lyrics.split("\n").filter((line) => line.trim());
    return lines.slice(0, maxLines).join("\n");
  };

  return (
    <Link href={`/song/${song.id}`}>
      <Card className="group relative h-full cursor-pointer p-4 transition-all hover:shadow-md">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <MusicIcon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold leading-tight">{song.title}</h3>
              <div className="mt-1 flex items-center gap-1 text-muted-foreground text-xs">
                <CalendarIcon className="h-3 w-3" />
                {song.createdAt.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
          <Button
            aria-label="Delete song"
            className="opacity-0 transition-opacity group-hover:opacity-100"
            onClick={handleDelete}
            size="icon-sm"
            type="button"
            variant="ghost"
          >
            <TrashIcon className="h-4 w-4 text-destructive" />
          </Button>
        </div>
        <div className="rounded-md bg-muted/50 px-3 py-2">
          <pre className="line-clamp-3 whitespace-pre-wrap font-mono text-muted-foreground text-xs">
            {getLyricsPreview(song.lyrics)}
          </pre>
        </div>
      </Card>
    </Link>
  );
};
