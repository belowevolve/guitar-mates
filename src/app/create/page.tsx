"use client";

import { SearchIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";

import { addSong } from "@/shared/db";
import { Button } from "@/shared/ui/button";
import { ButtonGroup } from "@/shared/ui/button-group";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/shared/ui/field";
import { InputGroup, InputGroupInput } from "@/shared/ui/input-group";

import { LyricsField } from "./lyrics-field";

export default function CreatePage() {
  const router = useRouter();
  const [songTitle, setSongTitle] = React.useState("");
  const [lyrics, setLyrics] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!songTitle.trim()) {
      toast.error("Please enter a song title");
      return;
    }

    if (!lyrics.trim()) {
      toast.error("Please enter lyrics");
      return;
    }

    await addSong({ title: songTitle, lyrics });
    toast.success("Song saved successfully!");
    router.push("/");
  };

  return (
    <main>
      <form className="pb-20" onSubmit={handleSubmit}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="flex w-full items-center justify-between">
              Song tabs
              <Button aria-label="Close" asChild size="icon-sm" variant="ghost">
                <Link href="/">
                  <XIcon />
                </Link>
              </Button>
            </FieldLegend>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="song-title">Song title</FieldLabel>
                <ButtonGroup>
                  <InputGroup>
                    <InputGroupInput
                      id="song-title"
                      onChange={(e) => setSongTitle(e.target.value)}
                      placeholder="Song title"
                      required
                      value={songTitle}
                    />
                  </InputGroup>
                  <Button
                    onClick={() => {
                      toast.success("Will be implemented soon...");
                      // const response = await searchLyrics(
                      //   encodeURIComponent(songTitle)
                      // );
                      // if (response.success) {
                      //   setLyrics(decodeURIComponent(response.result.lyrics));
                      // }
                    }}
                    type="button"
                    variant="outline"
                  >
                    <SearchIcon />
                  </Button>
                </ButtonGroup>
              </Field>
              <Field>
                <FieldLabel htmlFor="lyrics">Lyrics</FieldLabel>
                <LyricsField lyrics={lyrics} setLyrics={setLyrics} />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field position="bottom">
            <Button type="submit">Save Song</Button>
          </Field>
        </FieldGroup>
      </form>
    </main>
  );
}
