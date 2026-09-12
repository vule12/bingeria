import type { Show } from "@/types/show";
import Image from "next/image";
import { Star, CalendarDays, Layers } from "lucide-react";
import AddButton from "./AddToList";
import Link from "next/link";
import { summaryToText } from "@/lib/catalogue";

interface SeriesPageProps {
  show: Show;
  episodeCount: number;
  isOnList: boolean;
}

export default function SeriesPage({
  show,
  episodeCount,
  isOnList,
}: SeriesPageProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link
        href="/"
        className="flex px-4 py-2 bg-yellow-600 text-black font-bold rounded-full w-fit mb-4"
      >
        Return
      </Link>
      <section className="grid grid-rows-2 md:grid-rows-none lg:grid-cols-[420px_1fr] gap-6">
        <div className="aspect-3/4 lg:aspect-2/3 lg:max-w-sm overflow-hidden rounded-2xl relative w-full">
          <Image
            src={show.image?.original ?? "/posterPlaceholder.png"}
            alt={show.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl lg:text-7xl uppercase font-bold tracking-wide">
            {show.name}
          </h1>
          <div className="flex gap-2">
            {show.genres.map((name) => (
              <p
                key={name}
                className="border border-white/30 px-3 py-1 w-fit rounded-full text-white/70 text-sm"
              >
                {name}
              </p>
            ))}
          </div>
          <div className="flex gap-6 border-y border-[#504A79]/50 py-3">
            <span className="flex items-center gap-2">
              <Star className="size-3 text-yellow-600 fill-yellow-600 lg:size-4" />
              <strong>{show.rating.average ?? "-"}</strong>
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="size-3 text-white/75 lg:size-4" />
              <p className="text-sm">
                {show.premiered
                  ? new Intl.DateTimeFormat("hr-HR", {
                      timeZone: "UTC",
                    }).format(new Date(show.premiered))
                  : "Premijera nije poznata"}
              </p>
            </span>
            <span className="flex items-center gap-2">
              <Layers className="size-3  text-white/75 lg:size-4" />
              <p className="text-sm">{episodeCount} episodes</p>
            </span>
          </div>
          <p className="font-bold text-base">O seriji</p>
          <p className="text-white/75 leading-7 text-base whitespace-pre-line">
            {summaryToText(show.summary)}
          </p>
          <div className="flex gap-6 items-center">
            <AddButton showId={show.id} isOnList={isOnList} />
            <Link
              href={`/series/${show.id}/review`}
              className="px-4 py-2 border border-white/75 text-md text-white/75 rounded-full"
            >
              Napiši recenziju
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
