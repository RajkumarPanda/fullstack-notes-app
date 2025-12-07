import NoteCard from "@/components/NoteCard";
import getAllNotes from "@/hooks/serverActions/getAllNotes";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Notes App",
	description: "Home page of the Fullstack Notes Application",
};

const page = async () => {
	const { allNotes, success } = await getAllNotes();

	// console.log(allNotes);

	if (!success || allNotes.length === 0) {
		return (
			<section className="flex h-[85dvh] w-full items-center justify-center">
				<h2 className="text-center text-2xl font-semibold text-gray-600">
					Failed to fetch😶‍🌫️ or notes are not available🥲.
				</h2>
			</section>
		);
	}

	return (
		<section className="grid h-auto gap-3 md:grid-cols-2 xl:grid-cols-3">
			{allNotes.map((note) => (
				<NoteCard
					key={note.id}
					note={note}
				/>
			))}
		</section>
	);
};

export default page;
