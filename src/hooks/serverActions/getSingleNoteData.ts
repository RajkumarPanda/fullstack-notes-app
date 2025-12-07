"use server";
import prisma from "@/lib/prismaClientInstance";

const getSingleNoteData = async (noteId: string) => {
	try {
		// Fetch all notes from the database
		const singleNoteData = await prisma.note.findUnique({
			where: { id: noteId },
		});

		if (!singleNoteData) {
			throw new Error("Note not found");
		}

		return {
			singleNoteData,
			success: true,
			message: "Note fetched successfully.",
		};
		//
	} catch (error) {
		console.error(error);
		// Custom response for unsuccessful fetch
		return { success: false, message: "Failed to fetch note." };
	}
};

export default getSingleNoteData;
