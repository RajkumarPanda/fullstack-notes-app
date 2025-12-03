"use server";

import prisma from "@/lib/prismaClient";

const toggleStarredIcon = async (noteId: string, newStarredValue: boolean) => {
	try {
		await prisma.note.update({
			where: { id: noteId },
			data: { starred: newStarredValue },
		});

		return { success: true, message: "Starred status updated successfully" };
	} catch (error) {
		console.error(`failed to update, error: ${error}`);
		return { success: false, message: "Failed to update starred status" };
	}
};

export default toggleStarredIcon;
