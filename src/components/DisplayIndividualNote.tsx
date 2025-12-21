"use client";

import { MoveLeft, SquarePen } from "lucide-react";
import { CardContent, CardHeader } from "./shadcnui/card";
import { Button } from "./shadcnui/button";
import { Textarea } from "./shadcnui/textarea";
import { useRouter } from "next/navigation";

type DisplayIndividualNotePropsType = {
	singleNoteData: {
		id: string;
		noteTitle: string;
		noteBody: string;
	};
};
const DisplayIndividualNote = ({
	singleNoteData: { id, noteTitle, noteBody },
}: DisplayIndividualNotePropsType) => {
	// Initialize useRouter hook
	const { back, push } = useRouter();

	return (
		<>
			<CardHeader>
				<div className="flex items-center justify-between">
					{/* Back button  */}
					<button
						onClick={() => back()}
						className="hover:bg-secondary/50 cursor-pointer rounded-md p-2">
						<MoveLeft size={28} />
					</button>

					{/* Edit button  */}
					<Button
						onClick={() => push(`/note/${id}/edit`)}
						className="cursor-pointer bg-emerald-600 text-white hover:bg-emerald-700">
						<SquarePen />
						Edit
					</Button>
				</div>
			</CardHeader>
			<CardContent className="grid gap-4 font-semibold">
				<span>
					<label htmlFor="title">Title :</label>
					<Textarea
						id="title"
						value={noteTitle}
						readOnly
						className="mt-3 resize-none"
					/>
				</span>
				<span>
					<label htmlFor="Note"> Note :</label>
					<Textarea
						id="Note"
						value={noteBody}
						readOnly
						className="mt-3 h-[260px] resize-none"
					/>
				</span>
			</CardContent>
		</>
	);
};

export default DisplayIndividualNote;
