import Link from "next/link";
import { Clapperboard } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Clapperboard className=" text-yellow-600" width={64} height={64} />
      <h2 className="text-2xl font-bold">Series Couldn't Be Found</h2>
      <p className="text-white/75">
        This ID doesn't belong to any series. Find another title in the
        catalogue
      </p>
      <Link
        href="/"
        className="px-4 py-3 text-md text-black rounded-full bg-yellow-600"
      >
        Explore Catalogue
      </Link>
    </div>
  );
}
