"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { CameraIcon, PlusIcon, WalletCardsIcon } from "lucide-react";
import Link from "next/link";

import { SongCard } from "@/app/components/song-card";
import { db, deleteSong } from "@/shared/db";
import { Button } from "@/shared/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/shared/ui/empty";

export default function Page() {
  const songs = useLiveQuery(() => db.songs.toArray());

  if (!songs) {
    return <div>Loading...</div>;
  }

  if (songs.length === 0) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <WalletCardsIcon />
          </EmptyMedia>
          <EmptyTitle>No Songs Yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t created any songs yet. Get started by creating your
            first song with chords.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/create">
                <PlusIcon />
                Create Song
              </Link>
            </Button>
            <Button variant="outline">
              <CameraIcon />
              Import Chords
            </Button>
            <Button asChild variant="outline">
              <Link href="/settings">Settings</Link>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-3xl">My Songs</h1>
          <p className="mt-1 text-muted-foreground">
            {songs.length} {songs.length === 1 ? "song" : "songs"} saved
          </p>
        </div>
        <Button asChild>
          <Link href="/create">
            <PlusIcon />
            Create Song
          </Link>
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {songs.map((song) => (
          <SongCard key={song.id} onDelete={deleteSong} song={song} />
        ))}
      </div>
    </main>
  );
}
