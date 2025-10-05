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
        <EmptyTitle>No Cards Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any cards yet. Get started by creating your
          first card.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/create-card">Create Card</Link>
          </Button>
          <Button variant="outline">
            <CameraIcon />
            Import Card
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  );
}
