"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";

export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);
  const debouncedQuery = useDebounce(query);
  const syncedQuery = useRef(initialQuery);

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
    <form
      role="search"
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
  );
}
