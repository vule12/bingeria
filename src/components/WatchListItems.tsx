import type { WatchlistItem } from "@/types/watchList";
import Image from "next/image";
import { Pencil } from "lucide-react";
import RemoveButton from "./RemoveFromList";

export default function WatchListItems({ item }: { item: WatchlistItem }) {
  return (
    <div className="flex gap-5 p-4 border border-white/10 rounded-xl bg-white/5">
      <div className="relative w-24 shrink-0 aspect-2/3 rounded-lg overflow-hidden">
        <Image
          className="object-cover"
          src={item.image ?? "/posterPlaceholder.png"}
          alt={item.name}
          fill
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-xl text-white font-bold">{item.name}</h2>
        <p className="text-white/60 text-sm">{item.genres.join(" · ")}</p>
        <p className="text-white/50 text-sm">
          Dodano
          {new Intl.DateTimeFormat("hr-HR", { timeZone: "UTC" }).format(
            new Date(item.addedAt),
          )}
          {item.review ? `Ocjena ${item.review.rating}` : "Čeka prvu recenziju"}
        </p>
        <div className="flex justify-between items-center mt-1">
          <button
            type="button"
            className="flex gap-2 items-center text-yellow-600 font-bold"
          >
            <Pencil className="size-4" />
            {item.review ? "Uredi recenziju" : "Napiši recenziju"}
          </button>
          <RemoveButton showId={item.showId} />
        </div>
      </div>
    </div>
  );
}
