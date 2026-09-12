import WatchListView from "@/components/WatchListView";
import { readWatchlist } from "@/lib/storage";

export default async function MyList() {
  const items = await readWatchlist();
  return (
    <section className="p-3 max-w-7xl mx-auto flex flex-col gap-4">
      <h1 className="text-xl md:text-6xl uppercase">My List</h1>
      <WatchListView items={items} />
    </section>
  );
}
