'use server';

import { revalidatePath } from 'next/cache';
import { addWatchlistItem, removeWatchlistItem, saveReview } from '@/lib/storage';
import { getShow} from '@/lib/tvmaze';
import { reviewSchema, type ReviewInput } from '@/lib/reviewSchema';
import type { ActionState, ReviewResult } from '@/types/watchList';

export async function addToList(_previous: ActionState, formData: FormData): Promise<ActionState> {
  const id = Number(formData.get('showId'));
  if (!Number.isInteger(id) || id <= 0)
    return { status: 'error', message: 'Neispravna serija. Otvori ponovno njezine detalje.' };
  try {
    const show = await getShow(id);
    if (!show) return { status: 'error', message: 'Ova serija više nije dostupna.' };
    const result = await addWatchlistItem(show);
    revalidatePath('/lista');
    revalidatePath(`/series/${id}`);
    return {
      status: 'success',
      message:
        result === 'exists' ? 'Serija je već na tvojoj listi.' : 'Serija je dodana na tvoju listu.',
    };
  } catch {
    return {
      status: 'error',
      message:
        'Spremanje nije uspjelo. Provjeri vezu i dostupnost lokalne pohrane pa pokušaj ponovno.',
    };
  }
}

export async function removeFromList(
  _previous: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const id = Number(formData.get('showId'));
  if (!Number.isInteger(id) || id <= 0)
    return { status: 'error', message: 'Neispravna serija.' };
  try {
    await removeWatchlistItem(id);
    revalidatePath('/lista');
    revalidatePath(`/series/${id}`);
    revalidatePath(`/series/${id}/review`);
    return { status: 'success', message: 'Serija je uklonjena.' };
  } catch {
    return { status: 'error', message: 'Uklanjanje nije uspjelo. Pokušaj ponovno.' };
  }
}

export async function submitReview(
  showId: number,
  input: ReviewInput,
): Promise<ReviewResult> {
  const parsed = reviewSchema.safeParse(input);
  if (!parsed.success)
    return { success: false, message: 'Recenzija nije prošla provjeru. Ispravi polja i pokušaj ponovno.' };

  try {
    const saved = await saveReview(showId, parsed.data);
    if (!saved) return { success: false, message: 'Serija nije na tvojoj listi.' };
    revalidatePath('/lista');
    revalidatePath(`/series/${showId}`);
    revalidatePath(`/series/${showId}/review`);
    return { success: true };
  } catch {
    return { success: false, message: 'Spremanje recenzije nije uspjelo. Pokušaj ponovno.' };
  }
}