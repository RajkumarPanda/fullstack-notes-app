import z from "zod";
import { noteFormFieldSchema } from "./zodSchema";

// Infer the  type from note form noteFormInput schema
export type NoteFormFieldType = z.infer<typeof noteFormFieldSchema>;

// Notes response type
export type Note = {
	id: string;
	noteTitle: string;
	noteBody: string;
	starred: boolean;
	createdAt: Date;
};
