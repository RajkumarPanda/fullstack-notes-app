"use client";

import toggleStarredIcon from "@/hooks/serverActions/toggleStarredIcon";
import { Note } from "@/lib/types";
import { ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import NoteCardActionDropdown from "./NoteCardActionDropdown";
import { Button } from "./shadcnui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./shadcnui/card";
import { useRouter } from "next/navigation";

const NoteCard = ({ note }: { note: Note }) => {
	// Initialize useRouter hook
	const { push } = useRouter();

	const [isStarred, setIsStarred] = useState<boolean>(note.starred);
	const [isLoading, setIsLoading] = useState(false);

	// Convert ISO string to Date object
	const dateObj = new Date(note.createdAt);

	// Get the date ,time and day name
	const date = dateObj.toLocaleDateString("en-GB");
	const time = dateObj
		.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		})
		.toLowerCase();
	const weekDayName = dateObj.toLocaleDateString("en-US", {
		weekday: "short",
	});

	// Toggle Star icon Handler Function
	const toggleStarredHandlerFunc = async () => {
		setIsLoading(true);

		const newStarredValue = !isStarred; // Flip the starred value

		// Invoked the toggle starred icon function
		const { success } = await toggleStarredIcon(note.id, newStarredValue);

		if (success) {
			setIsStarred(newStarredValue); // Update the local state
		}

		setIsLoading(false);
	};

	return (
		<>
			<div className="">
				<Card className="max-h-[260px] w-full shadow-md">
					<CardHeader className="grid grid-cols-4 items-center">
						<CardTitle className="col-span-3 truncate text-lg font-semibold">
							{note.noteTitle}
						</CardTitle>

						<div className="flex justify-end gap-2">
							{/* star icon */}
							<Button
								variant={"ghost"}
								className="cursor-pointer"
								onClick={toggleStarredHandlerFunc}
								disabled={isLoading}>
								{isStarred ? (
									<Star className="fill-amber-400 text-amber-400" />
								) : (
									<Star />
								)}
							</Button>

							{/* 3 dots action icon  */}
							<NoteCardActionDropdown noteId={note.id} />
						</div>
					</CardHeader>

					<CardContent className="text-sm">
						<p className="line-clamp-4 text-justify text-sm">{note.noteBody}</p>
					</CardContent>

					<CardFooter className="flex justify-between">
						<div className="text-xs">
							<p>
								{weekDayName},{time}
							</p>
							<p>{date}</p>
						</div>

						<Button
							onClick={() => push(`/note/${note.id}`)}
							className="bg-foreground/80 text-background cursor-pointer text-sm">
							Read More
							<ArrowRight />
						</Button>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default NoteCard;
