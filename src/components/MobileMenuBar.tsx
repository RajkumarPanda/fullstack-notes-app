"use client";

import { House, PencilLine, Star } from "lucide-react";
import Link from "next/link";

const MobileMenuBar = () => {
	return (
		<>
			<nav className="container mx-auto flex items-center justify-between px-6 py-3">
				<Link
					href={"/"}
					className="">
					<House size={23} />
				</Link>

				<Link
					href={"/create"}
					className="">
					<PencilLine size={23} />
				</Link>

				<Link
					href={"/starred"}
					className="">
					<Star size={23} />
				</Link>
			</nav>
		</>
	);
};

export default MobileMenuBar;
