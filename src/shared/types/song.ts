export type Song = {
  id: string;
  title: string;
  lyrics: string;
  createdAt: string;
  updatedAt: string;
};

export type SongInput = {
  title: string;
  lyrics: string;
};
