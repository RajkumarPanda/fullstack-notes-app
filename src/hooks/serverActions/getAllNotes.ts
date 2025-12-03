"use server";

import prisma from "@/lib/prismaClient";

const getAllNotes = async () => {
	try {
		// Fetch all notes from the database
		const allNotes = await prisma.note.findMany();

		return { allNotes, success: true, message: "Notes fetched successfully." };

		//
	} catch (error) {
		console.error(error);
		// Custom response for unsuccessful fetch
		return { allNotes: [], success: false, message: "Failed to fetch notes." };
	}
};

export default getAllNotes;
