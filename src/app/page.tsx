import { CameraIcon, WalletCardsIcon } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

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
          <Button>Create Card</Button>
          <Button variant="outline">
            <CameraIcon />
            Import Card
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  );
}
