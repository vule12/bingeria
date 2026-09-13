"use client";

import { EyeOff } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import type { Review } from "@/types/watchList";

export default function ReviewCard({ review }: { review: Review }) {
  const { revealed, reveal } = useReveal();
  const hidden = review.spoilers && !revealed;

  return (
    <div className="relative mt-2 p-3 rounded-lg border border-white/10 bg-white/5">
      <div className={hidden ? "blur-sm select-none" : undefined}>
        <p className="text-white/60 text-sm">
          {`Ocjena ${review.rating}/10 · Epizoda ${review.episode}`}
        </p>
        <p className="text-white/85 wrap-break-word whitespace-pre-line">
          {review.comment}
        </p>
      </div>
      {hidden && (
        <button
          type="button"
          onClick={reveal}
          className="absolute inset-0 flex gap-2 items-center justify-center font-bold text-yellow-600 hover:cursor-pointer"
        >
          <EyeOff className="size-4" />
          Sadrži spojlere — prikaži
        </button>
      )}
    </div>
  );
}
