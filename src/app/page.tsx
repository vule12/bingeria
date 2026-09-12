import Card from "@/components/Card";
import Break from "@/components/Break";
import { getShows, searchShows } from "@/lib/tvmaze";

interface Props {
  searchParams: Promise<{ q?: string | string[] }>;
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const query =
    (Array.isArray(params.q) ? params.q[0] : params.q)?.trim().slice(0, 200) ??
    "";
  const shows = query
    ? await searchShows(query)
    : (await getShows()).slice(0, 24);
  const cardShows = shows.map((show, index) => (
    <Card key={show.id} show={show} priority={index < 4} />
  ));

  return (
    <main className="">
      <Break />
      <div className="grid grid-cols-1 gap-8 pt-8 px-4 md:grid-cols-2 lg:grid-cols-4">
        {cardShows}
      </div>
    </main>
  );
}
