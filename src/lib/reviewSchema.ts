import { z } from "zod";

export const reviewSchema = z
  .object({
    rating: z
      .number({ error: "Ocjena je obavezna." })
      .int({ error: "Ocjena mora biti cijeli broj." })
      .min(1, { error: "Ocjena ide od 1 do 10." })
      .max(10, { error: "Ocjena ide od 1 do 10." }),
    episode: z
      .number({ error: "Epizoda je obavezna." })
      .int({ error: "Epizoda mora biti cijeli broj." })
      .min(0, { error: "Epizoda ne može biti negativna." }),
    comment: z
      .string()
      .min(20, { error: "Komentar mora imati najmanje 20 znakova." }),
    spoilers: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.spoilers && data.comment.length < 50) {
      ctx.addIssue({
        code: "custom",
        path: ["comment"],
        message:
          "Recenzija sa spojlerima mora imati najmanje 50 znakova komentara.",
      });
    }
  });

export type ReviewInput = z.infer<typeof reviewSchema>;
