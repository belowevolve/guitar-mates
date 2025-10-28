"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { ArrowLeftIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, ViewTransition } from "react";
import { toast } from "sonner";

import { LyricsPreview } from "@/app/create/lyrics-preview";
import { db, deleteSong } from "@/shared/db";
import { Button } from "@/shared/ui/button";

export default function SongPage() {
  const [id, setId] = useState<string | null>(null);
  useEffect(() => {
    setId(location.hash.slice(1));
  }, []);
  const router = useRouter();

  const song = useLiveQuery(() => (id ? db.songs.get(id) : undefined), [id]);

  if (!song) {
    return (
      <ViewTransition enter="slide-in" exit="slide-out">
        <main className="px-4 py-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button asChild size="icon-sm" variant="ghost">
                <Link href="/">
                  <ArrowLeftIcon />
                </Link>
              </Button>
              <div>
                <ViewTransition name={`title-${id}`}>
                  <h1 className="font-bold text-3xl">...</h1>
                </ViewTransition>
                <p className="mt-1 text-muted-foreground text-sm">
                  Created on ...
                </p>
              </div>
            </div>
          </div>
        </main>
      </ViewTransition>
    );
  }

  const handleDelete = () => {
    deleteSong(song.id);
    toast.success("Song deleted successfully!");
    router.back();
  };

  return (
    <ViewTransition enter="slide-in" exit="slide-out">
      <main className="min-h-dvh px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button asChild size="icon-sm" variant="ghost">
              <Link href="/">
                <ArrowLeftIcon />
              </Link>
            </Button>
            <div>
              <ViewTransition name={`title-${song.id}`}>
                <h1 className="font-bold text-3xl">{song.title}</h1>
              </ViewTransition>
              <ViewTransition name={`createdAt-${song.id}`}>
                <p className="mt-1 text-muted-foreground text-sm">
                  Created on{" "}
                  {new Date(song.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </ViewTransition>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={handleDelete} type="button" variant="destructive">
              <TrashIcon />
              Delete Song
            </Button>
          </div>
        </div>
        <div className="mx-auto max-w-4xl">
          <LyricsPreview lyrics={song.lyrics} />
        </div>
      </main>
    </ViewTransition>
  );
}
