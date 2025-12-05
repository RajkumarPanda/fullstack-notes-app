import DisplayIndividualNote from "@/components/DisplayIndividualNote";
import { Card } from "@/components/shadcnui/card";
import getSingleNoteData from "@/hooks/serverActions/getSingleNoteData";

// Define param type
type NoteSlugPageParamsType = {
	params: { noteId: string };
};
const page = async ({ params }: NoteSlugPageParamsType) => {
	const { noteId } = await params;

	const { singleNoteData } = await getSingleNoteData(noteId);

	// If singleNoteData is undefined it will fallback to not found message
	if (!singleNoteData) {
		return (
			<>
				<section className="flex items-center justify-center">
					<p>Note not found🥲</p>
				</section>
			</>
		);
	}
	return (
		<>
			<section className="">
				<Card>
					<DisplayIndividualNote singleNoteData={singleNoteData} />
				</Card>
			</section>
		</>
	);
};

export default page;
