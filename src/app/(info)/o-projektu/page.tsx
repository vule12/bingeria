import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O projektu | Bingeria",
  description: "Što je Bingeria i odakle dolaze podaci o serijama.",
};

export default function AboutPage() {
  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-3xl md:text-5xl uppercase font-bold">O projektu</h1>
      <p className="text-white/75 leading-7">
        Bingeria je katalog serija u kojem možeš pregledati popularne naslove,
        pretražiti seriju po imenu i otvoriti njezinu stranicu s ocjenom,
        datumom premijere, žanrovima i brojem epizoda.
      </p>
      <p className="text-white/75 leading-7">
        Podaci o serijama dolaze s javnog TVmaze API-ja.
      </p>
      <p className="text-white/75 leading-7">
        Serije koje te zanimaju možeš spremiti na Moju listu i svakoj
        spremljenoj seriji dodati recenziju s ocjenom, brojem odgledanih epizoda
        i komentarom.
      </p>
    </article>
  );
}
