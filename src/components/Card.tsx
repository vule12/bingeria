import type { Show } from "@/types/show";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

interface ShowCardProps {
  show: Show;
  priority?: boolean;
}

export default function Card({ show, priority = false }: ShowCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <Link href={`/series/${show.id}`}>
        <div className="relative aspect-3/4 rounded-2xl">
          <Image
            className="object-cover hover:opacity-80"
            src={show.image?.original ?? "/posterPlaceholder.png"}
            alt={show.name}
            fill
            priority={priority}
          />
          <span className="absolute p-2 left-0 bottom-0 flex items-center gap-2 text-xl bg-black/80 rounded-tr-xl">
            <Star className="size-5 text-yellow-600 fill-yellow-600" />
            {show.rating.average ?? "-"}
          </span>
        </div>
      </Link>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-white font-bold">{show.name}</h2>
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
      </div>
    </div>
  );
}
