import Link from "next/link";
import ThemeToggleButton from "../ThemeToggleButton";
import { House, SquarePen, Star } from "lucide-react";

const Header = () => {
	return (
		<header
			className="border-b shadow"
			aria-label="app-header">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
				<Link href={"/"}>
					<h1
						className="text-2xl font-semibold"
						aria-label="App Name">
						Notes App
					</h1>
				</Link>

				{/* menu items  */}
				<nav className="items-center sm:flex sm:gap-8">
					<div className="hidden items-center gap-8 md:flex">
						<Link
							href={"/"}
							className="flex items-center gap-1.5">
							<House size={20} /> <span>Home</span>
						</Link>

						<Link
							href={"/create"}
							className="flex items-center gap-1.5">
							<SquarePen size={20} /> <span>Create Note</span>
						</Link>

						<Link
							href={"/starred"}
							className="flex items-center gap-1.5">
							<Star size={20} /> <span>Starred Notes</span>
						</Link>
					</div>
					{/* theme toggle button  */}
					<ThemeToggleButton />
				</nav>
			</div>
		</header>
	);
};

export default Header;
