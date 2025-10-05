import { CameraIcon, WalletCardsIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/shared/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/shared/ui/empty";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <WalletCardsIcon />
        </EmptyMedia>
        <EmptyTitle>No Chords Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any chords yet. Get started by creating your
          first chord.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/create">Create Chords</Link>
          </Button>
          <Button variant="outline">
            <CameraIcon />
            Import Chords
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  );
}
