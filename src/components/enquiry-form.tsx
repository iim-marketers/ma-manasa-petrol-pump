"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { enquiryTopics } from "@/lib/site";
import { cn } from "@/lib/utils";

type Errors = { name?: string; phone?: string };

const fieldClass =
  "h-auto w-full rounded-[4px] border border-hairline bg-paper px-3.5 py-3 text-[0.94rem] " +
  "focus-visible:border-hp-blue focus-visible:ring-3 focus-visible:ring-hp-blue/15";

const labelClass =
  "mb-1.5 block font-display text-[0.65rem] font-extrabold tracking-[0.14em] text-ink-mute uppercase";

export function EnquiryForm({ className }: { className?: string }) {
  const [topic, setTopic] = useState<string>(enquiryTopics[0]);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Tell us who to ask for.";
    if (!phone) next.phone = "We need a number to call back on.";
    else if (phone.replace(/\D/g, "").length < 10)
      next.phone = "That does not look like a 10-digit mobile number.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      toast.error("Check the highlighted fields");
      return;
    }

    // Demo only — wire this to an API route, email service or WhatsApp
    // before going live.
    setSent(
      `Enquiry noted, ${name.split(" ")[0]}. We will call you back on ${phone}.`,
    );
    toast.success("Enquiry noted", {
      description: `About: ${topic}. We will call you back shortly.`,
    });
    form.reset();
  }

  return (
    <div
      className={cn(
        "rounded-lg border border-hairline bg-concrete p-6 sm:p-8",
        className,
      )}
    >
      <h3 className="font-display text-[1.32rem] font-extrabold tracking-[-0.02em]">
        Send an enquiry
      </h3>
      <p className="mt-1.5 mb-6 text-[0.89rem] text-ink-mute">
        Bulk diesel, fleet accounts, PUC timings or anything else — tell us what you need
        and we will call you back.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="name" className={labelClass}>
              Your name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Full name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={fieldClass}
            />
            {errors.name ? (
              <p id="name-error" className="mt-1.5 text-[0.78rem] font-medium text-hp-red">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <Label htmlFor="phone" className={labelClass}>
              Phone number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="10-digit mobile"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={fieldClass}
            />
            {errors.phone ? (
              <p id="phone-error" className="mt-1.5 text-[0.78rem] font-medium text-hp-red">
                {errors.phone}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <Label htmlFor="topic" className={labelClass}>
            What do you need?
          </Label>
          <Select value={topic} onValueChange={(value) => setTopic(String(value))}>
            <SelectTrigger id="topic" className={cn(fieldClass, "justify-between")}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {enquiryTopics.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message" className={labelClass}>
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a bit more"
            className={cn(fieldClass, "min-h-24 resize-y")}
          />
        </div>

        <Button type="submit" variant="hp" size="sign" className="w-full">
          <Send aria-hidden="true" />
          Send enquiry
        </Button>

        {sent ? (
          <p
            role="status"
            className="flex items-start gap-2.5 rounded-[4px] bg-hp-blue px-4 py-3.5 text-[0.89rem] font-semibold text-white"
          >
            <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {sent}
          </p>
        ) : null}
      </form>
    </div>
  );
}
