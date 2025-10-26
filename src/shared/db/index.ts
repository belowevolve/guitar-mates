import type { EntityTable } from "dexie";
import Dexie from "dexie";

export type Song = {
  id: string;
  title: string;
  lyrics: string;
};

type DbItem = { createdAt: string; updatedAt: string };

const db = new Dexie("app-db") as Dexie & {
  songs: EntityTable<
    Song & DbItem,
    "id" // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  songs: "++id, title, lyrics, createdAt, updatedAt", // primary key "id" (for the runtime!)
});

export function addSong(song: Omit<Song, "id">) {
  const now = new Date().toISOString();
  return db.songs.add({ ...song, createdAt: now, updatedAt: now });
}

export function updateSong(song: Song) {
  const now = new Date().toISOString();
  return db.songs.update(song.id, { ...song, updatedAt: now });
}

export function deleteSong(id: string) {
  return db.songs.delete(id);
}

export { db };
