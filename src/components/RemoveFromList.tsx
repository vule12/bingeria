"use client";

import { Trash2 } from "lucide-react";
import { removeFromList } from "@/actions/watchlist";
import { useActionState } from "react";
import type { ActionState } from "@/types/watchList";

const initial: ActionState = { status: "idle", message: " " };

export default function RemoveButton({ showId }: { showId: number }) {
  const [state, action, pending] = useActionState(
    removeFromList,
    initial,
    "/lista",
  );
  return (
    <form action={action} className="flex flex-col gap-1">
      <input type="hidden" name="showId" value={showId} />
      <button
        type="submit"
        disabled={pending}
        className="flex gap-2 items-center px-4 py-2 font-bold rounded-full w-fit bg-yellow-600 hover:bg-yellow-500 hover:cursor-pointer text-black disabled:opacity-60"
      >
        <Trash2 className="size-4" />
        {pending ? "Uklanjam…" : "Ukloni"}
      </button>
      {state.status === "error" && (
        <p role="status" className="text-sm text-red-400">
          {state.message}
        </p>
      )}
    </form>
  );
}
