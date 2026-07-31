import { Outlet, ScrollRestoration } from "react-router";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const BaseLayout = () => {
	return (
		<div className="bg-background text-foreground flex min-h-screen w-full flex-col">
			<Header />

			{/* Header spacer */}
			<div style={{ height: "var(--header-height)" }} aria-hidden="true" />

			<main className="flex flex-1 flex-row">
				<div className="w-full">
					<Outlet />
				</div>
			</main>

			<Footer />
			<ScrollRestoration />
		</div>
	);
};

export default BaseLayout;
