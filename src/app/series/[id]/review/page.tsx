import { notFound } from "next/navigation";
import Link from "next/link";
import ReviewForm from "@/components/ReviewForm";
import { readWatchlist } from "@/lib/storage";

export const dynamic = "force-dynamic";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const showId = Number(id);
  const items = await readWatchlist();
  const item = items.find((entry) => entry.showId === showId);
  if (!item) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-8 flex flex-col gap-5">
      <Link
        href="/lista"
        className="px-4 py-2 bg-yellow-600 text-black font-bold rounded-full w-fit hover:bg-yellow-500"
      >
        Moja lista
      </Link>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl md:text-5xl uppercase font-bold">
          {item.review ? "Uredi recenziju" : "Napiši recenziju"}
        </h1>
        <p className="text-white/60">{item.name}</p>
      </div>
      <ReviewForm showId={item.showId} review={item.review} />
    </section>
  );
}
