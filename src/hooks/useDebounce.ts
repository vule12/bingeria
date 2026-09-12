import { useEffect, useState } from "react";

export function useDebounce(value: string): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), 400);

    return () => clearTimeout(timer);
  }, [value]);

  return debouncedValue;
}
