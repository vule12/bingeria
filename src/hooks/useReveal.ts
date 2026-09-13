import { useState } from "react";

export function useReveal() {
  const [revealed, setRevealed] = useState(false);

  return { revealed, reveal: () => setRevealed(true) };
}
