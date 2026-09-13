import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "./Search";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4 md:flex-row md:justify-between text-[#C9C9C9] text-2xl px-4 py-2 lg:px-20 lg:py-8">
      <Image
        src="/logo.png"
        alt="Bingeria Logo"
        width={256}
        height={256}
        className="h-12 w-auto object-contain md:h-16"
      />
      <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap lg:gap-8">
        <Link className="hover:text-yellow-500" href="/">
          Katalog
        </Link>
        <Link className="hover:text-yellow-500" href="/lista">
          Moja Lista
        </Link>
        <Link className="hover:text-yellow-500" href="/o-projektu">
          Info
        </Link>
        <Suspense fallback="Error">
          <SearchInput />
        </Suspense>
      </div>
    </header>
  );
}
