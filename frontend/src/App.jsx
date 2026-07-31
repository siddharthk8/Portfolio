import { useEffect } from "react";
import { useLocation } from "react-router";

import Background from "@/components/Background";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Experience from "@/components/Sections/Experience";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";

function App() {
	const location = useLocation();

	useEffect(() => {
		if (!location.hash) return;

		const element = document.querySelector(location.hash);

		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
			});
		}
	}, [location]);

	return (
		<div className="bg-background">
			<Background />
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
}

export default App;
