"use server";

import prisma from "@/lib/prismaClient";
import { NoteFormFieldType } from "@/lib/types";

const createNote = async (note: NoteFormFieldType) => {
	const { noteTitle, noteBody } = note;
	try {
		await prisma.note.create({
			data: {
				noteTitle,
				noteBody,
			},
		});
		// Custom  response message for successful creation
		return { success: true, message: "Note created successfully" };
	} catch (error) {
		console.error(error);
		// Custom  response message for failed creation
		return { success: false, message: "Failed to create note", error: error };
	}
};

export default createNote;
