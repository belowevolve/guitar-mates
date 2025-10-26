"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { ArrowLeftIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import { LyricsPreview } from "@/app/create/lyrics-preview";
import { db, deleteSong } from "@/shared/db";
import { Button } from "@/shared/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/shared/ui/empty";

export default function SongPage() {
  const params = useParams();
  const router = useRouter();

  const song = useLiveQuery(() => db.songs.get({ id: Number(params.id) }));

  if (!song) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyTitle>Song Not Found</EmptyTitle>
          <EmptyDescription>
            The song you&apos;re looking for doesn&apos;t exist.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button asChild>
            <Link href="/">
              <ArrowLeftIcon />
              Back to Home
            </Link>
          </Button>
        </EmptyContent>
      </Empty>
    );
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
        <Button onClick={handleDelete} type="button" variant="destructive">
          <TrashIcon />
          Delete Song
        </Button>
      </div>
      <div className="mx-auto max-w-4xl">
        <LyricsPreview lyrics={song.lyrics} />
      </div>
    </main>
  );
}
