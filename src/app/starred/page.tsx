import NoteCard from "@/components/NoteCard";
import getStarredNotes from "@/hooks/serverActions/getStarredNotes";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Starred Notes | Notes App",
	description: "Starred notes page of the Fullstack Notes Application",
};

const page = async () => {
	const { starredNotes } = await getStarredNotes();

	// If no starred notes are found, display a fallback message
	if (starredNotes.length === 0) {
		return (
			<>
				<section className="flex h-[85dvh] items-center justify-center text-2xl font-semibold">
					<p>No starred notes found.</p>
				</section>
			</>
		);
	}

	return (
		<>
			<section className="grid h-auto gap-3 md:grid-cols-2 xl:grid-cols-3">
				{starredNotes?.map((note) => (
					<NoteCard
						key={note.id}
						note={note}
					/>
				))}
			</section>
		</>
	);
};

export default page;
