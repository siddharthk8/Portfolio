import { motion } from "framer-motion";
import { BrainCircuit, Code2, GitBranch, Server, Sparkles } from "lucide-react";

const aboutHighlights = [
	{
		icon: Code2,
		title: "Build",
		description:
			"Full-stack applications with a focus on maintainability, performance, and clean architecture.",
	},
	{
		icon: Server,
		title: "Engineer",
		description:
			"Backend services and REST APIs designed to remain reliable as systems and requirements grow.",
	},
	{
		icon: BrainCircuit,
		title: "Explore",
		description:
			"AI and ML through practical experimentation, especially LLM integration and RAG-based systems.",
	},
];

const profileStats = [
	{ label: "focus", value: "Full-Stack / Backend" },
	{ label: "learning", value: "AI / ML" },
	{ label: "mindset", value: "Builder" },
	{ label: "status", value: "open_to_build" },
];

const terminalLines = [
	{
		prompt: "$",
		command: "whoami",
		output: "siddharth-kumar",
	},
	{
		prompt: "$",
		command: "cat focus.txt",
		output: "scalable systems • APIs • AI",
	},
	{
		prompt: "$",
		command: "git status",
		output: "learning + building",
	},
];

function About() {
	return (
		<section id="about" className="relative z-10 overflow-hidden">
			<div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
				{/* Section heading */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5 }}
					className="mb-14 max-w-2xl"
				>
					<div className="mb-4 flex items-center gap-3">
						<div className="bg-primary h-px w-8" />

						<span className="text-primary font-mono text-xs font-medium tracking-[0.2em] uppercase">
							01 / About
						</span>
					</div>

					<h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
						More than just <span className="text-primary">writing code.</span>
					</h2>

					<p className="text-muted-foreground mt-5 text-base leading-7 sm:text-lg">
						I enjoy understanding how things work, turning ideas into software, and
						continuously improving the systems I build.
					</p>
				</motion.div>

				<div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-20">
					{/* Left: Story */}
					<motion.div
						initial={{ opacity: 0, x: -25 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					>
						<div className="text-muted-foreground space-y-6 text-[15px] leading-7 sm:text-base">
							<p>
								I'm{" "}
								<span className="text-foreground font-medium">Siddharth Kumar</span>
								, a Computer Science student and software engineer interested in
								building reliable software from the ground up.
							</p>

							<p>
								My interests sit somewhere between{" "}
								<span className="text-foreground">
									full-stack development, backend engineering, system design,
								</span>{" "}
								and <span className="text-foreground">AI-powered applications</span>
								. I like working across the stack and understanding how the pieces
								fit together rather than treating them as isolated components.
							</p>

							<p>
								I'm particularly curious about what happens beyond the happy path —
								scalability, failure handling, API design, data flow, performance,
								and the decisions that make software easier to change six months
								later.
							</p>
						</div>

						{/* Engineering principles */}
						<div className="mt-10 grid gap-3 sm:grid-cols-3">
							{aboutHighlights.map((item, index) => {
								const Icon = item.icon;

								return (
									<motion.div
										key={item.title}
										initial={{ opacity: 0, y: 15 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, amount: 0.2 }}
										transition={{
											duration: 0.45,
											delay: index * 0.08,
										}}
										className="group border-border bg-card hover:border-primary/30 rounded-xl border p-4 transition-colors duration-200"
									>
										<div className="mb-3 flex items-center justify-between">
											<div className="bg-accent text-accent-foreground flex h-8 w-8 items-center justify-center rounded-lg">
												<Icon className="h-4 w-4" />
											</div>

											<span className="text-muted-foreground font-mono text-[10px]">
												0{index + 1}
											</span>
										</div>

										<h3 className="text-foreground text-sm font-semibold">
											{item.title}
										</h3>

										<p className="text-muted-foreground mt-1.5 text-xs leading-5">
											{item.description}
										</p>
									</motion.div>
								);
							})}
						</div>
					</motion.div>

					{/* Right: Developer profile */}
					<motion.div
						initial={{ opacity: 0, x: 25 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: 0.6,
							delay: 0.1,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="lg:pt-2"
					>
						<div className="border-border bg-card overflow-hidden rounded-2xl border shadow-sm">
							{/* Terminal header */}
							<div className="border-border bg-muted/60 flex items-center justify-between border-b px-4 py-3">
								<div className="flex items-center gap-2">
									<div className="bg-destructive/70 h-2.5 w-2.5 rounded-full" />
									<div className="bg-primary/70 h-2.5 w-2.5 rounded-full" />
									<div className="bg-accent-foreground/50 h-2.5 w-2.5 rounded-full" />
								</div>

								<div className="text-muted-foreground flex items-center gap-2 font-mono text-[10px]">
									<GitBranch className="h-3 w-3" />
									main
								</div>
							</div>

							{/* Terminal content */}
							<div className="bg-background p-5 font-mono text-xs sm:p-6">
								<div className="text-muted-foreground mb-6 flex items-center gap-2">
									<Sparkles className="text-primary h-3.5 w-3.5" />
									<span>~/siddharth</span>
								</div>

								<div className="space-y-4">
									{terminalLines.map((line) => (
										<div key={line.command}>
											<div className="flex flex-wrap gap-2">
												<span className="text-primary">{line.prompt}</span>
												<span className="text-foreground">
													{line.command}
												</span>
											</div>

											<div className="text-muted-foreground mt-1 pl-4">
												{line.output}
											</div>
										</div>
									))}
								</div>

								<div className="border-border mt-7 border-t pt-5">
									<div className="grid grid-cols-2 gap-x-6 gap-y-4">
										{profileStats.map((stat) => (
											<div key={stat.label}>
												<div className="text-muted-foreground text-[10px] tracking-wider uppercase">
													{stat.label}
												</div>

												<div className="text-foreground mt-1 text-xs">
													{stat.value}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Small status line */}
						<div className="text-muted-foreground mt-3 flex items-center justify-between px-1 font-mono text-[10px]">
							<span>last_updated: 2026</span>

							<span className="flex items-center gap-1.5">
								<span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
								actively_building
							</span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default About;
