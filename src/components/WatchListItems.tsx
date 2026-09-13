import type { WatchlistItem } from "@/types/watchList";
import Image from "next/image";
import Link from "next/link";
import { Pencil } from "lucide-react";
import RemoveButton from "./RemoveFromList";
import ReviewCard from "./ReviewCard";

export default function WatchListItems({ item }: { item: WatchlistItem }) {
  return (
    <div className="flex gap-5 p-4 border border-white/10 rounded-xl bg-white/5">
      <Link
        href={`/series/${item.showId}`}
        className="block relative w-24 shrink-0 aspect-2/3 rounded-lg overflow-hidden"
      >
        <Image
          className="object-cover hover:opacity-80"
          src={item.image ?? "/posterPlaceholder.png"}
          alt={item.name}
          fill
        />
      </Link>
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <h2 className="text-xl text-white font-bold">
          <Link href={`/series/${item.showId}`} className="hover:text-yellow-500">
            {item.name}
          </Link>
        </h2>
        <p className="text-white/60 text-sm">{item.genres.join(" · ")}</p>
        <p className="text-white/50 text-sm">
          {`Dodano ${new Intl.DateTimeFormat("hr-HR", {
            timeZone: "UTC",
          }).format(new Date(item.addedAt))} · ${
            item.review ? `Ocjena ${item.review.rating}` : "Čeka prvu recenziju"
          }`}
        </p>
        {item.review && <ReviewCard review={item.review} />}
        <div className="flex justify-between items-center mt-1">
          <Link
            href={`/series/${item.showId}/review`}
            className="flex gap-2 items-center text-yellow-600 font-bold hover:text-yellow-500"
          >
            <Pencil className="size-4" />
            {item.review ? "Uredi recenziju" : "Napiši recenziju"}
          </Link>
          <RemoveButton showId={item.showId} />
        </div>
      </div>
    </div>
  );
}
