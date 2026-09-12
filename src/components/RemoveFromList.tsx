"use client";

import { Trash2 } from "lucide-react";
import { removeFromList } from "@/actions/watchlist";
import { useActionState } from "react";
import type { ActionState } from "@/types/watchList";

const initial: ActionState = { status: "idle", message: " " };

export default function RemoveButton({ showId }: { showId: number }) {
  const [, action, pending] = useActionState(removeFromList, initial, "/mylist");
  return (
    <form action={action}>
      <input type="hidden" name="showId" value={showId} />
      <button
        type="submit"
        disabled={pending}
        className="flex gap-2 items-center text-white/60 disabled:opacity-60"
      >
        <Trash2 className="size-4" />
        {pending ? "Uklanjam…" : "Ukloni"}
      </button>
    </form>
  );
}
