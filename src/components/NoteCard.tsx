"use client";

import { Star } from "lucide-react";
import { Button } from "./shadcnui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./shadcnui/card";
import NoteCardActionDropdown from "./NoteCardActionDropdown";
import { Note } from "@/lib/types";
import { useState } from "react";
import toggleStarredIcon from "@/hooks/serverActions/toggleStarredIcon";

const NoteCard = ({ note }: { note: Note }) => {
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
			<div className="max-h-[250px] w-full shadow-md">
				<Card className="">
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
							<NoteCardActionDropdown />
						</div>
					</CardHeader>

					<CardContent>
						<p className="line-clamp-4 text-justify text-sm">{note.noteBody}</p>
					</CardContent>
					<CardFooter className="grid grid-cols-1 justify-items-end text-xs">
						<p>
							{weekDayName},{time}
						</p>
						<p>{date}</p>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default NoteCard;
