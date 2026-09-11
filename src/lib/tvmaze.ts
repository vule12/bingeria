import "server-only";
import { z } from "zod";
import type { Show, Episode } from "@/types/show";

const baseUrl = "https://api.tvmaze.com";

const showScheme = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  genres: z.array(z.string()),
  rating: z.object({ average: z.number().nullable() }),
  image: z.object({ medium: z.url(), original: z.url() }).nullable(),
  summary: z.string().nullable(),
  premiered: z.string().nullable(),
  status: z.string(),
});

const episodeScheme = z.object({
  id: z.number(),
  name: z.string(),
  season: z.number(),
  number: z.number().nullable(),
});

async function request(path: string, search = false) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...(search ? { cache: "no-store" } : { next: { revalidate: 3600 } }),
  });
  if (response.status === 404) {
    return null;
  }
  const data = response.json();
  return data;
}

export async function getShows(): Promise<Show[]> {
  return z.array(showScheme).parse(await request("/shows?page=0"));
}

export async function getEpisodes(id: number): Promise<Episode[]> {
  return z.array(episodeScheme).parse(await request(`/shows/${id}/episodes`));
}
