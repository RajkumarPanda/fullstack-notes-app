import EditNote from "@/components/EditNote";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Separator } from "@/components/shadcnui/separator";
import getSingleNoteData from "@/hooks/serverActions/getSingleNoteData";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Edit Note | Notes App",
	description: "Edit note page of the Fullstack Notes Application",
};

// Define param type
type EditPageParamsType = {
	params: Promise<{ noteId: string }>;
};

const page = async ({ params }: EditPageParamsType) => {
	const { noteId } = await params;

	const { singleNoteData, success, message } = await getSingleNoteData(noteId);

	// Fallback ui  if  failed to fetch the note
	if (!success) {
		return (
			<section className="flex h-[85dvh] w-full items-center justify-center">
				<p>{message}</p>
			</section>
		);
	}

	// Fallback ui  if singleNoteData is undefined
	if (singleNoteData === undefined) {
		return (
			<section className="flex h-[85dvh] w-full items-center justify-center">
				<p>Something went wrong😶‍🌫️,received undefined.</p>
			</section>
		);
	}

	return (
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
	);
};

export default page;
