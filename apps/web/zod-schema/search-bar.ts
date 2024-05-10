import { z } from "@repo/common/zod";

export const searchBarSchema = z.object({
  query: z.string().min(2).max(50),
});
