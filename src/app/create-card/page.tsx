import { XIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/shared/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";

export default function CreateCardPage() {
  return (
    <main>
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="flex w-full items-center justify-between">
              Card details
              <Button aria-label="Close" asChild size="icon-sm" variant="ghost">
                <Link href="/">
                  <XIcon />
                </Link>
              </Button>
            </FieldLegend>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name on Card
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Card Number
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>
                  Enter your 16-digit card number
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>

          <Field position="bottom">
            <Button type="submit">Submit</Button>{" "}
          </Field>
        </FieldGroup>
      </form>
    </main>
  );
}
