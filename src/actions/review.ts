import { ReviewInput, reviewSchema } from "@/lib/reviewSchema";
import { saveReview } from "@/lib/storage";
import { ReviewResult } from "@/types/watchList";
import { revalidatePath } from "next/cache";

export async function submitReview(
  showId: number,
  input: ReviewInput,
): Promise<ReviewResult> {
  const parsed = reviewSchema.safeParse(input);
  if (!parsed.success)
    return {
      success: false,
      message:
        "Recenzija nije prošla provjeru. Ispravi polja i pokušaj ponovno.",
    };

  try {
    const saved = await saveReview(showId, parsed.data);
    if (!saved)
      return { success: false, message: "Serija nije na tvojoj listi." };
    revalidatePath("/lista");
    revalidatePath(`/series/${showId}`);
    revalidatePath(`/series/${showId}/review`);
    return { success: true };
  } catch {
    return {
      success: false,
      message: "Spremanje recenzije nije uspjelo. Pokušaj ponovno.",
    };
  }
}
