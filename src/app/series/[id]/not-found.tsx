import Link from "next/link";
import { Clapperboard } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Clapperboard className=" text-yellow-600" width={64} height={64} />
      <h2 className="text-2xl font-bold">Serija nije pronađena.</h2>
      <p className="text-white/75">
        Ovaj ID ne pripada dostupnoj seriji. Pronađi drugi naslov u katalogu.
      </p>
      <Link
        href="/"
        className="px-4 py-3 text-md text-black rounded-full bg-yellow-600"
      >
        Istraži katalog
      </Link>
    </div>
  );
}
