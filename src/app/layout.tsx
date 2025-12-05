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

					<main className="px-10 py-5 select-none">{children}</main>

					<footer className="bg-background text-foreground fixed bottom-0 flex h-[8dvh] w-full border-t shadow-2xl md:hidden">
						<MobileMenuBar />
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
