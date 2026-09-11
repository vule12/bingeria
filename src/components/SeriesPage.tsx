import Image from "next/image";
import { Star, CalendarDays, Layers } from "lucide-react";
import AddButton from "./AddToList";
import Link from "next/link";

export default function SeriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <section className="grid grid-cols-2 gap-6">
        <div className="aspect-2/3 max-w-sm overflow-hidden rounded-2xl relative">
          <Image
            src="/temp/breakingBad.jpg"
            alt="Breaking Bad"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl uppercase font-bold tracking-wide">
            Breaking Bad
          </h1>
          <p className="border border-white/30 px-3 py-1 w-fit rounded-full text-white/70 text-sm">
            Crime
          </p>
          <div className="flex gap-6 border-y border-[#504A79]/50 py-3">
            <span className="flex items-center gap-2">
              <Star className="size-3 text-yellow-600 fill-yellow-600 lg:size-4" />
              <strong>8.8</strong>
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="size-3 text-white/75 lg:size-4" />
              <p className="text-sm">22.09.2011.</p>
            </span>
            <span className="flex items-center gap-2">
              <Layers className="size-3  text-white/75 lg:size-4" />
              <p className="text-sm">103 epizoda</p>
            </span>
          </div>
          <p className="font-bold text-base">O seriji</p>
          <p className="text-white/75 leading-7 text-base">
            You are being watched. The government has a secret system, a machine
            that spies on you every hour of tevery day. I know because I built
            it. I designed the Machine to detect actos of terror but it sees
            everything. Violent crimes involving ordinary people. People like
            oyu. Crimes the government considered "irrelevant."
          </p>
          <div className="flex gap-6 items-center">
            <AddButton />
            <Link
              href="/series/32/review"
              className="px-4 py-2 border border-white:75 text-md text-white:75 rounded-full"
            >
              Napiši recenziju
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
