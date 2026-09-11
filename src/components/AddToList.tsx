import { Bookmark } from "lucide-react";

export default function AddButton() {
  return (
    <button className="flex gap-2 px-4 py-2 bg-yellow-600 text-black font-bold rounded-full w-fit">
      <Bookmark /> Dodaj na listu
    </button>
  );
}
