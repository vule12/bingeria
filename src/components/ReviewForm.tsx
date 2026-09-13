"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { submitReview } from "@/actions/review";
import { reviewSchema, type ReviewInput } from "@/lib/reviewSchema";
import ErrorMessage from "@/components/ErrorMessage";
import type { Review } from "@/types/watchList";

export default function ReviewForm({
  showId,
  review,
}: {
  showId: number;
  review: Review | null;
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ReviewInput>({
    resolver: zodResolver(reviewSchema),
    defaultValues: review ?? {
      rating: undefined,
      episode: undefined,
      comment: "",
      spoilers: false,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const result = await submitReview(showId, data);
    if (!result.success) {
      setError("root", { message: result.message });
      return;
    }
    router.push("/lista");
  });

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="rating">Ocjena (1–10)</label>
        <input
          id="rating"
          type="number"
          min={1}
          max={10}
          className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-600"
          {...register("rating", { valueAsNumber: true })}
        />
        <ErrorMessage message={errors.rating?.message} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="episode">Do koje si epizode došao</label>
        <input
          id="episode"
          type="number"
          min={0}
          className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-600"
          {...register("episode", { valueAsNumber: true })}
        />
        <ErrorMessage message={errors.episode?.message} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="comment">Komentar</label>
        <textarea
          id="comment"
          rows={6}
          className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-600"
          {...register("comment")}
        />
        <ErrorMessage message={errors.comment?.message} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="spoilers" className="flex gap-2 items-center w-fit">
          <input
            id="spoilers"
            type="checkbox"
            className="size-4 accent-yellow-600"
            {...register("spoilers")}
          />
          Sadrži spojlere
        </label>
        <ErrorMessage message={errors.spoilers?.message} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 font-bold rounded-full w-fit bg-yellow-600 hover:bg-yellow-500 hover:cursor-pointer text-black disabled:opacity-60"
      >
        {isSubmitting ? "Spremam…" : "Spremi recenziju"}
      </button>

      <ErrorMessage role="status" message={errors.root?.message} />
    </form>
  );
}
