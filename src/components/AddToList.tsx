"use client";

import { Bookmark } from "lucide-react";
import { addToList } from "@/actions/watchlist";
import { useActionState } from "react";
import type { ActionState } from "@/types/watchList";

const initial: ActionState = { status: "idle", message: " " };

export default function AddButton({
  showId,
  isOnList,
}: {
  showId: number;
  isOnList: boolean;
}) {
  const [state, action, pending] = useActionState(
    addToList,
    initial,
    `/series/${showId}`,
  );
  const added = isOnList || state.status === "success";
  return (
    <form action={action} className="flex flex-col gap-1">
      <input type="hidden" name="showId" value={showId} />
      <button
        type="submit"
        disabled={pending || added}
        className={`flex gap-2 px-4 py-2 text-black font-bold rounded-full w-fit disabled:opacity-60 ${
          added ? "bg-green-600" : "bg-yellow-600"
        }`}
      >
        <Bookmark />{" "}
        {added ? "Dodano" : pending ? "Dodajem…" : "Dodaj na listu"}
      </button>
      {state.status === "error" && (
        <p role="status" className="text-sm text-red-400">
          {state.message}
        </p>
      )}
    </form>
  );
}
