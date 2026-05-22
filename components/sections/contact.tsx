"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, Phone, Send } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/site";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  const [pending, setPending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", website: "" },
  });

  const onSubmit = async (data: ContactInput) => {
    setPending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        toast.error(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      toast.success("Message sent — I'll get back to you soon.");
      reset();
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let&rsquo;s talk"
      description="Recruiting, freelance, or just want to chat about Next.js / AI agents — drop a line. I read every message."
    >
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          {/* Honeypot — hidden from users, attractive to bots */}
          <div className="hidden" aria-hidden>
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("website")}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={!!errors.name}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-xs text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="What&rsquo;s on your mind?"
              aria-invalid={!!errors.message}
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={pending} size="lg">
            {pending ? "Sending…" : (
              <>
                Send message <Send className="h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        <aside className="space-y-6 self-start rounded-2xl border border-border bg-card p-6">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Direct
            </h3>
            <div className="mt-3 space-y-3 text-sm">
              <a
                href={siteConfig.links.email}
                className="flex items-center gap-3 text-foreground transition-colors hover:text-muted-foreground"
              >
                <Mail className="h-4 w-4" /> {siteConfig.email}
              </a>
              <p className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4" /> {siteConfig.phone}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Elsewhere
            </h3>
            <div className="mt-3 flex gap-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-border p-2 transition-colors hover:bg-accent"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-border p-2 transition-colors hover:bg-accent"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
