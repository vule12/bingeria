import Card from "@/components/Card";
import Break from "@/components/Break";
import { getShows } from "@/lib/tvmaze";

export default async function Home() {
  const shows = (await getShows()).slice(0, 24);
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
