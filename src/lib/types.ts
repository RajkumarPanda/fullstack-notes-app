import z from "zod";
import { noteFormFieldSchema } from "./zodSchema";

// Infer the  type from note form noteFormInput schema
export type NoteFormFieldType = z.infer<typeof noteFormFieldSchema>;
