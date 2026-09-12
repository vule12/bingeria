import type { WatchlistItem } from "@/types/watchList";

export type SortOrder = "date" | "rating";

export function sortWatchlist(
  items: readonly WatchlistItem[],
  order: SortOrder,
): WatchlistItem[] {
  return [...items].sort((a, b) => {
    if (order === "rating") {
      const difference = (b.review?.rating ?? -1) - (a.review?.rating ?? -1);
      if (difference !== 0) return difference;
    }
    return b.addedAt.localeCompare(a.addedAt) || a.showId - b.showId;
  });
}

export function getWatchlistStats(items: readonly WatchlistItem[]) {
  let reviewed = 0;
  let ratingTotal = 0;

  for (const item of items) {
    if (item.review) {
      reviewed += 1;
      ratingTotal += item.review.rating;
    }
  }

  return {
    total: items.length,
    reviewed,
    average: reviewed > 0 ? (ratingTotal / reviewed).toFixed(1) : null,
  };
}
