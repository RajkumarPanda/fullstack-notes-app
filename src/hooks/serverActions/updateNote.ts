"use server";

import prisma from "@/lib/prismaClient";
import { NoteFormFieldType } from "@/lib/types";
import { revalidatePath } from "next/cache";

const updateNote = async (id: string, noteData: NoteFormFieldType) => {
	const { noteTitle, noteBody } = noteData;
	try {
		await prisma.note.update({
			where: { id },
			data: {
				noteTitle,
				noteBody,
			},
		});

		// Revalidate the path to reflect changes
		revalidatePath("/");

		return { success: true, message: "Note updated successfully" };
	} catch (error) {
		console.error(`Failed to update note, error: ${error}`);
		return { success: false, message: "Failed to update note" };
	}
};

export default updateNote;
