"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";

export function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const debouncedQuery = useDebounce(query);
  const syncedQuery = useRef(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (initialQuery !== syncedQuery.current) {
      syncedQuery.current = initialQuery;
      setQuery(initialQuery);
      return;
    }

    const cleanedQuery = debouncedQuery.trim();
    if (cleanedQuery === syncedQuery.current) return;

    syncedQuery.current = cleanedQuery;
    const url = cleanedQuery
      ? `/?${new URLSearchParams({ q: cleanedQuery })}`
      : "/";
    router.replace(url, { scroll: false });
  }, [debouncedQuery, initialQuery, router]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Pretraži serije"
        aria-expanded={open}
        className={`rounded-xl border border-line bg-panel p-3 text-accent ${
          open ? "hidden" : "md:hidden"
        }`}
      >
        <Search className="size-5" />
      </button>
      <form
        role="search"
        className={`w-full md:block md:w-auto ${open ? "block" : "hidden"}`}
        onSubmit={(event) => {
          event.preventDefault();
          const cleanedQuery = query.trim();
          const url = cleanedQuery
            ? `/?${new URLSearchParams({ q: cleanedQuery })}`
            : "/";
          router.replace(url, { scroll: false });
        }}
      >
        <label htmlFor="search" className="sr-only">
          Pretraži serije
        </label>
        <div className="flex min-h-16 items-center gap-3 rounded-xl border border-line bg-panel px-4 focus-within:border-accent sm:px-5">
          <Search className="size-5 shrink-0 text-accent" />
          <input
            ref={inputRef}
            id="search"
            name="q"
            type="search"
            maxLength={200}
            autoComplete="off"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Pronađi svoju sljedeću seriju…"
            className="min-w-0 flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-muted focus-visible:outline-none sm:text-base"
          />
        </div>
      </form>
    </>
  );
}
