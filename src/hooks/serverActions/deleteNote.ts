"use server";

import prisma from "@/lib/prismaClientInstance";
import { revalidatePath } from "next/cache";

const deleteNote = async (noteId: string) => {
	try {
		await prisma.note.delete({
			where: { id: noteId },
		});

		// Revalidate the path to reflect changes
		revalidatePath("/");

		return { success: true, message: "Note deleted successfully" };
	} catch (error) {
		console.error(`Failed to delete note, error: ${error}`);
		return { success: false, message: "Failed to delete note" };
	}
};

export default deleteNote;
