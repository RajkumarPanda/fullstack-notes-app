import NoteForm from "@/components/NoteForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Separator } from "@/components/shadcnui/separator";

const page = () => {
	return (
		<>
			<div className="flex items-center justify-center">
				<Card className="w-[600px]">
					<CardHeader className="flex justify-center">
						<CardTitle className="text-2xl font-semibold">
							Add Your Note
						</CardTitle>
					</CardHeader>

					<Separator />
					<CardContent className="p-4">
						<NoteForm />
					</CardContent>
				</Card>
			</div>
		</>
	);
};

export default page;
