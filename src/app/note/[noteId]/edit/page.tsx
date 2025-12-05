import EditNote from "@/components/EditNote";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Separator } from "@/components/shadcnui/separator";
import getSingleNoteData from "@/hooks/serverActions/getSingleNoteData";

// Define param type
type EditPageParamsType = {
	params: { noteId: string };
};

const page = async ({ params }: EditPageParamsType) => {
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
			<section className="flex items-center justify-center">
				<Card className="w-[600px]">
					<CardHeader className="flex justify-center">
						<CardTitle className="text-2xl font-semibold">
							Edit Your Note
						</CardTitle>
					</CardHeader>

					<Separator />

					<CardContent>
						<EditNote noteData={singleNoteData} />
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default page;
