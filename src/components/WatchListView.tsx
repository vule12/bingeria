"use client";

import type { WatchlistItem } from "@/types/watchList";
import {
  getWatchlistStats,
  sortWatchlist,
  type SortOrder,
} from "@/lib/watchlist";
import { Film, Calendar, ArrowDownWideNarrow } from "lucide-react";
import Link from "next/link";
import WatchListItems from "./WatchListItems";
import { useState } from "react";

export default function WatchListView({ items }: { items: WatchlistItem[] }) {
  const [order, setOrder] = useState<SortOrder>("date");
  const stats = getWatchlistStats(items);
  const ordered = sortWatchlist(items, order);
  const sortButton = (active: boolean) =>
    `flex gap-2 px-4 py-2 border rounded-full w-fit items-center ${
      active
        ? "bg-yellow-600 border-yellow-600 text-black hover:bg-yellow-500"
        : "border-white/30 text-white/75 hover:border-white/60"
    }`;
  return (
    <div className="flex flex-col gap-5">
      <section className="p-3 flex justify-between border w-full items-center rounded-lg bg-white/10 border-white/10">
        <span>
          <p className="text-yellow-600 text-4xl">{stats.total}</p>
          <p className="text-white/75">Moja Lista</p>
        </span>
        <span>
          <p className="text-yellow-600 text-4xl">{stats.reviewed}</p>
          <p className="text-white/75">Ocijenjeno</p>
        </span>
        <span>
          <p className="text-yellow-600 text-4xl">{stats.average ?? "-"}</p>
          <p className="text-white/75">Prosjecna ocjena</p>
        </span>
      </section>
      {items.length ? (
        <section className="flex gap-3 flex-col">
          <div className="flex justify-between items-center">
            <p className="text-2xl text-white">Tvoje Serije</p>
            <div className="flex gap-3">
              <button
                onClick={() => setOrder("date")}
                aria-pressed={order === "date"}
                className={sortButton(order === "date")}
              >
                <Calendar />
                Po datumu
              </button>
              <button
                onClick={() => setOrder("rating")}
                aria-pressed={order === "rating"}
                className={sortButton(order === "rating")}
              >
                <ArrowDownWideNarrow />
                Po ocjeni
              </button>
            </div>
          </div>
          {ordered.map((item) => (
            <WatchListItems key={item.showId} item={item} />
          ))}
        </section>
      ) : (
        <section className="flex flex-col items-center gap-6 border border-dashed border-white/20 p-10 rounded-xl">
          <Film className="text-yellow-600 size-10" />
          <p className="text-4xl">Svaka dobra lista počinje jednom serijom</p>
          <p className="text-xl text-white/70">
            Otvori seriju u katalogu i dodaj je na listu.
          </p>
          <Link
            href="/"
            className="px-4 py-3 text-md text-black rounded-full bg-yellow-600 hover:bg-yellow-500"
          >
            Istraži katalog
          </Link>
        </section>
      )}
    </div>
  );
}
