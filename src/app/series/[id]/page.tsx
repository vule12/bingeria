import { notFound } from "next/navigation";
import SeriesPage from "@/components/SeriesPage";
import { getShow, getEpisodes, getShows } from "@/lib/tvmaze";

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
  const [show, episodes] = await Promise.all([
    getShow(Number(id)),
    getEpisodes(Number(id)),
  ]);
  if (!show) {
    notFound();
  }

  return <SeriesPage show={show} episodeCount={episodes.length} />;
}
