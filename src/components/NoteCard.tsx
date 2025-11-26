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

const NoteCard = () => {
	return (
		<>
			<div className="max-h-[250px] w-full shadow-md">
				<Card className="">
					<CardHeader className="grid grid-cols-4 items-center">
						<CardTitle className="col-span-3 truncate text-lg font-semibold">
							pal pal apl
						</CardTitle>

						<div className="flex justify-end gap-2">
							{/* star icon */}
							<Button
								variant={"ghost"}
								className="cursor-pointer">
								<Star />
							</Button>

							{/* 3 dots action icon  */}
							<NoteCardActionDropdown />
						</div>
					</CardHeader>

					<CardContent>
						<p className="line-clamp-4 text-justify text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
							laborum hic aliquid commodi consectetur rerum, molestias soluta
							unde omnis porro.
						</p>
					</CardContent>
					<CardFooter className="grid grid-cols-1 justify-items-end text-xs">
						<p>sunday,10:06 am</p>
						<p>24/10/2025</p>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default NoteCard;
