import Link from "next/link";
import { Info } from "lucide-react";

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Info className="size-10 text-yellow-600" />
        <p className="text-lg md:text-4xl font-bold text-white">Info</p>
        <hr className="flex-1 h-px bg-[#504A79]/50 border-none" />
      </div>
      <nav className="flex flex-wrap gap-3">
        <Link
          href="/o-projektu"
          className="border border-white/30 px-4 py-3 rounded-xl bg-y hover:bg-yellow-600 text-white/70 text-sm"
        >
          O projektu
        </Link>
        <Link
          href="/pravila"
          className="border border-white/30 px-4 py-3 rounded-xl hover:bg-yellow-600 text-white/70 text-sm"
        >
          Pravila
        </Link>
      </nav>
      {children}
    </section>
  );
}
