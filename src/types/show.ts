export type Show = {
  id: number;
  name: string;
  genres: string[];
  rating: { average: number | null };
  image: { medium: string; original: string } | null;
  summary: string | null;
  premiered: string | null;
  status: string;
};

export type Episode = {
  id: number;
  name: string;
  season: number;
  number: number | null;
};
