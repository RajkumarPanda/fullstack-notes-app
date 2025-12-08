import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { ReactNode } from "react";
import "./globals.css";
import MobileMenuBar from "@/components/MobileMenuBar";

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					<Header />

					<main className="mb-[7dvh] h-auto p-5 select-none md:m-0">
						{children}
					</main>

					<footer className="bg-background text-foreground fixed bottom-0 flex h-[7dvh] w-full border-t shadow-2xl md:hidden">
						<MobileMenuBar />
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
