"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="#top"
          className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight"
          aria-label="Home"
        >
          <Image
            src="/avatar.jpg"
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9 rounded-full object-cover ring-1 ring-border"
          />
          <span className="hidden sm:inline">{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <Dialog.Content
                className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col gap-6 border-l border-border bg-background p-6 shadow-lg focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
                aria-describedby={undefined}
              >
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-mono text-sm font-semibold">
                    Menu
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="h-5 w-5" />
                    </Button>
                  </Dialog.Close>
                </div>
                <nav className="flex flex-col gap-1">
                  {siteConfig.nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-accent"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
