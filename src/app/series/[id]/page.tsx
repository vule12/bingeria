import { notFound } from "next/navigation";
import SeriesPage from "@/components/SeriesPage";
import { getShow, getEpisodes, getShows } from "@/lib/tvmaze";
import { readWatchlist } from "@/lib/storage";

export const revalidate = 3600;

export async function generateStaticParams() {
  return (await getShows())
    .slice(0, 10)
    .map((show) => ({ id: String(show.id) }));
}

export default async function Series({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [show, episodes, watchlist] = await Promise.all([
    getShow(Number(id)),
    getEpisodes(Number(id)),
    readWatchlist(),
  ]);
  if (!show) {
    notFound();
  }

  return (
    <SeriesPage
      show={show}
      episodeCount={episodes.length}
      isOnList={watchlist.some((item) => item.showId === show.id)}
    />
  );
}
