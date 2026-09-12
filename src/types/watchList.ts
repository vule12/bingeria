export interface Review {
  rating: number;
  episode: number;
  comment: string;
  spoilers: boolean;
}

export interface WatchlistItem {
  showId: number;
  name: string;
  image: string | null;
  genres: string[];
  addedAt: string;
  review: Review | null;
}

export interface ActionState {
  status: "idle" | "success" | "error";
  message: string;
}

export interface ReviewResult {
  success: boolean;
  message?: string;
}
