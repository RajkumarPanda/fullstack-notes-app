"use client";

import { EllipsisVertical, SquarePen, Trash } from "lucide-react";
import { Button } from "./shadcnui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./shadcnui/dropdown-menu";
import deleteNote from "@/hooks/serverActions/deleteNote";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const NoteCardActionDropdown = ({ noteId }: { noteId: string }) => {
	// Initialze the useRouter hook
	const { push } = useRouter();

	// Delete note handler function
	const deleteNoteHandler = async () => {
		const { success, message } = await deleteNote(noteId); // Invoke the function

		if (!success) {
			return toast.error(message);
		}

		toast.success(message);
	};
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant={"ghost"}
						className="cursor-pointer">
						<EllipsisVertical />
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent className="grid grid-cols-1 gap-1">
					<DropdownMenuItem className="p-0">
						<Button
							variant={"outline"}
							onClick={() => push(`/note/${noteId}/edit`)} //Redirect to the edit page
							className="flex w-full cursor-pointer items-center justify-start gap-2 text-green-700">
							<SquarePen className="text-green-700" /> <>Edit</>
						</Button>
					</DropdownMenuItem>

					<DropdownMenuItem className="p-0">
						<Button
							variant={"outline"}
							onClick={deleteNoteHandler}
							className="flex w-full cursor-pointer items-center justify-start gap-2 text-red-700">
							<Trash className="text-red-700" />
							<>Delete</>
						</Button>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};

export default NoteCardActionDropdown;
