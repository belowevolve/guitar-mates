"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { ArrowLeftIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import { OfflineReadyButton } from "@/app/components/offline-indicator";
import { LyricsPreview } from "@/app/create/lyrics-preview";
import { db, deleteSong } from "@/shared/db";
import { Button } from "@/shared/ui/button";

export default function SongPage() {
  const params = useParams();
  const router = useRouter();

  const song = useLiveQuery(() => db.songs.get(params.id as string));

  if (!song) {
    return null;
  }

  const handleDelete = () => {
    deleteSong(song.id);
    toast.success("Song deleted successfully!");
    router.push("/");
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button asChild size="icon-sm" variant="ghost">
            <Link href="/">
              <ArrowLeftIcon />
            </Link>
          </Button>
          <div>
            <h1 className="font-bold text-3xl">{song.title}</h1>
            <p className="mt-1 text-muted-foreground text-sm">
              Created on{" "}
              {new Date(song.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <OfflineReadyButton songId={song.id} />
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
  );
}
