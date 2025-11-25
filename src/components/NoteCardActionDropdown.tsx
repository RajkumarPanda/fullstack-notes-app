"use client";

import { EllipsisVertical, SquarePen, Trash } from "lucide-react";
import { Button } from "./shadcnui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./shadcnui/dropdown-menu";

const NoteCardActionDropdown = () => {
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
							className="flex w-full cursor-pointer items-center justify-start gap-2 text-green-700">
							<SquarePen className="text-green-700" /> <>Edit</>
						</Button>
					</DropdownMenuItem>

					<DropdownMenuItem className="p-0">
						<Button
							variant={"outline"}
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
