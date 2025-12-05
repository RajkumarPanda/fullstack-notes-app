"use server";

import prisma from "@/lib/prismaClient";

const getStarredNotes = async () => {
	try {
		// Fetch all starred notes from the database
		const starredNotes = await prisma.note.findMany({
			where: {
				starred: true,
			},
		});

		return {
			starredNotes,
			success: true,
			message: "Starred notes fetched successfully.",
		};

		//
	} catch (error) {
		console.error(error);
		// Custom response for unsuccessful fetch
		return {
			starredNotes: [],
			success: false,
			message: "Failed to fetch starred notes.",
		};
	}
};

export default getStarredNotes;
