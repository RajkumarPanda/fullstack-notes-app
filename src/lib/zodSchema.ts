import z from "zod";

export const noteFormFieldSchema = z.object({
	noteTitle: z
		.string()
		.min(5, { error: "The title must be 5 or more characters long" })
		.max(50, { error: "The title must be 20 or less characters" }),
	noteBody: z
		.string()
		.min(3, { error: "The content must be 10 or more characters" }),
});
