import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";
import SearchButton from "./Search";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between text-[#C9C9C9] text-2xl px-4 py-2 lg:px-20 lg:py-8">
      <Image
        src="/logo.png"
        alt="Bingeria Logo"
        width={256}
        height={256}
        className="h-12 w-auto object-contain sm:h-16"
      />
      <div className="flex items-center gap-4 lg:gap-8">
        <Link href="/">Katalog</Link>
        <Link href="/moja-lista">Moja Lista</Link>
        <Link href="/info">Info</Link>
        <Search className="text-white" />
      </div>
    </header>
  );
}
