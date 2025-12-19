import NoteCard from "@/components/NoteCard";
import getAllNotes from "@/hooks/serverActions/getAllNotes";
import { Note } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Notes App",
	description: "Home page of the Fullstack Notes Application",
};

const page = async () => {
	const { allNotes, success, message } = await getAllNotes();
	// console.log(allNotes);

	// Fallback ui if failed to fetch notes
	if (!success) {
		return (
			<section className="flex h-[85dvh] w-full items-center justify-center">
				<h2 className="text-center text-2xl font-semibold text-gray-600">
					{message}
				</h2>
			</section>
		);
	}

	// Fallback ui if allNotes is undefined
	if (allNotes === undefined) {
		return (
			<section className="flex h-[85dvh] w-full items-center justify-center">
				<h2 className="text-center text-2xl font-semibold text-gray-600">
					Something went wrong😶‍🌫️,received undefined.
				</h2>
			</section>
		);
	}
	// Fallback ui if allNotes is empty
	if (allNotes.length === 0) {
		return (
			<section className="flex h-[85dvh] w-full items-center justify-center">
				<h2 className="text-center text-2xl font-semibold text-gray-600">
					No notes found,Create your first note!
				</h2>
			</section>
		);
	}

	return (
		<section className="grid h-auto gap-3 md:grid-cols-2 xl:grid-cols-3">
			{allNotes.map((note: Note) => (
				<NoteCard
					key={note.id}
					note={note}
				/>
			))}
		</section>
	);
};

export default page;
