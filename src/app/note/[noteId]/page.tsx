import DisplayIndividualNote from "@/components/DisplayIndividualNote";
import { Card } from "@/components/shadcnui/card";
import getSingleNoteData from "@/hooks/serverActions/getSingleNoteData";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Read Note | Notes App",
	description:
		"Dynamically displaying single Note details based on the note ID in the Fullstack Notes Application",
};

// Define param type
type NoteSlugPageParamsType = {
	params: Promise<{ noteId: string }>;
};
const page = async ({ params }: NoteSlugPageParamsType) => {
	const { noteId } = await params;

	const { singleNoteData, success, message } = await getSingleNoteData(noteId);

	// fallback ui if fetching single note data is not successful
	if (!success) {
		return (
			<>
				<section className="flex h-[85dvh] w-full items-center justify-center">
					<p>{message}</p>
				</section>
			</>
		);
	}

	// Fallback ui  if singleNoteData is undefined
	if (singleNoteData === undefined) {
		return (
			<>
				<section className="flex h-[85dvh] w-full items-center justify-center">
					<p>Something went wrong😶‍🌫️,received undefined.</p>
				</section>
			</>
		);
	}

	return (
		<section className="">
			<Card>
				<DisplayIndividualNote singleNoteData={singleNoteData} />
			</Card>
		</section>
	);
};

export default page;
