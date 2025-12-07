"use server";

import prisma from "@/lib/prismaClientInstance";
import { revalidatePath } from "next/cache";

const toggleStarredIcon = async (noteId: string, newStarredValue: boolean) => {
	try {
		await prisma.note.update({
			where: { id: noteId },
			data: { starred: newStarredValue },
		});

		// Revalidate the paths
		revalidatePath("/");
		revalidatePath("/starred");

		return { success: true, message: "Starred status updated successfully" };
	} catch (error) {
		console.error(`failed to update, error: ${error}`);
		return { success: false, message: "Failed to update starred status" };
	}
};

export default toggleStarredIcon;
