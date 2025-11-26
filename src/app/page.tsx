import NoteCard from "@/components/NoteCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nextjs Starter Frontend",
	description: "Production grade Next.js starter template",
};

const page = () => {
	return (
		<section className="grid h-auto gap-3 md:grid-cols-2 xl:grid-cols-3">
			<NoteCard />
			<NoteCard />
			<NoteCard />
			<NoteCard />
		</section>
	);
};

export default page;
