import "server-only";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import type { WatchlistItem, Review } from "@/types/watchList";

interface ShowToSave {
  id: number;
  name: string;
  image: { original: string } | null;
  genres: string[];
}

function dataFile(): string {
  const filename = "watchlist.json";
  return join(process.cwd(), "data", filename);
}

function isFileError(error: unknown, code: string): boolean {
  return error instanceof Error && "code" in error && error.code === code;
}

export async function readWatchlist(): Promise<WatchlistItem[]> {
  const file = dataFile();
  try {
    const json = await readFile(file, "utf8");
    return JSON.parse(json) as WatchlistItem[];
  } catch (error) {
    if (isFileError(error, "ENOENT")) return [];
    throw error;
  }
}

async function writeWatchlist(items: WatchlistItem[]): Promise<void> {
  const file = dataFile();
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(items, null, 2), "utf8");
}

export async function addWatchlistItem(
  show: ShowToSave,
): Promise<"added" | "exists"> {
  const items = await readWatchlist();
  if (items.some((item) => item.showId === show.id)) return "exists";

  const newItem: WatchlistItem = {
    showId: show.id,
    name: show.name,
    image: show.image?.original ?? null,
    genres: show.genres,
    addedAt: new Date().toISOString(),
    review: null,
  };
  await writeWatchlist([...items, newItem]);
  return "added";
}

export async function saveReview(
  showId: number,
  review: Review,
): Promise<boolean> {
  const items = await readWatchlist();
  if (!items.some((item) => item.showId === showId)) return false;

  await writeWatchlist(
    items.map((item) => (item.showId === showId ? { ...item, review } : item)),
  );
  return true;
}

export async function removeWatchlistItem(id: number): Promise<void> {
  const items = await readWatchlist();
  await writeWatchlist(items.filter((item) => item.showId !== id));
}
