import { convert } from "html-to-text";

export function summaryToText(summary: string | null): string {
  return summary
    ? convert(summary, {
        wordwrap: false,
        selectors: [
          { selector: "a", options: { ignoreHref: true } },
          { selector: "img", format: "skip" },
        ],
      }).trim()
    : "Opis još nije dostupan.";
}
