import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pravila | Bingeria",
  description: "Pravila korištenja kataloga, liste i recenzija.",
};

export default function RulesPage() {
  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-3xl md:text-5xl uppercase font-bold">Pravila</h1>

      <h2 className="font-bold text-base">Podaci o serijama</h2>
      <p className="text-white/75 leading-7">
        Opisi, slike i ocjene serija vlasništvo su TVmazea i ovdje se prikazuju
        informativno. Ako je TVmaze nedostupan, katalog neće prikazati sadržaj.
      </p>

      <h2 className="font-bold text-base">Moja lista</h2>
      <p className="text-white/75 leading-7">
        Lista i recenzije spremaju se na poslužitelju i nisu vezane uz
        korisnički račun, pa ih vidi svatko tko otvori stranicu. Nemoj upisivati
        osobne podatke.
      </p>

      <h2 className="font-bold text-base">Recenzije</h2>
      <p className="text-white/75 leading-7">
        Recenziju možeš napisati samo za seriju koja je na listi. Ocjena ide od
        1 do 10, komentar mora imati najmanje 20 znakova, a recenzija označena
        kao spoiler najmanje 50 znakova.
      </p>
    </article>
  );
}
