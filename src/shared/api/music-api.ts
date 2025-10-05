import { tFetch } from "../utils/tfetch";

export function searchLyrics(title: string) {
  return tFetch<{
    artistName: string;
    trackName: string;
    trackId: string;
    searchEngine: string;
    artworkUrl: string;
    lyrics: string;
  }>(`/musicmatch/lyrics?title=${title}`);
}
