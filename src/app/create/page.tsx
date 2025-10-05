"use client";

import { SearchIcon, XIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/shared/ui/button";
import { ButtonGroup } from "@/shared/ui/button-group";
import Chord from "@/shared/ui/chord/chord";
import { CHORDS } from "@/shared/ui/chord/chords";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/shared/ui/field";
import { InputGroup, InputGroupInput } from "@/shared/ui/input-group";
import { Textarea } from "@/shared/ui/textarea";

export default function CreatePage() {
  const [songTitle, setSongTitle] = React.useState("");
  const [lyrics, setLyrics] = React.useState("");
  return (
    <main>
      <form>
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
            </FieldGroup>
          </FieldSet>
          <Textarea
            onChange={(e) => setLyrics(e.target.value)}
            value={lyrics}
          />
          <Field position="bottom">
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
        <Chord chord={CHORDS.A} options={{ size: "small" }} />
      </form>
    </main>
  );
}
