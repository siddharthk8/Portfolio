import { motion } from "framer-motion";
import {
	ArrowDown,
	ArrowUpRight,
	Braces,
	Check,
	Code2,
	GitBranch,
	GitCommitHorizontal,
	StarPlus,
	Terminal,
} from "lucide-react";

import Button from "@/components/Button";

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.09,
			delayChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: {
		opacity: 0,
		y: 14,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

const activity = [
	[1, 2, 1, 3, 0, 2, 1],
	[2, 3, 2, 1, 3, 2, 1],
	[0, 1, 3, 2, 3, 1, 2],
	[1, 3, 2, 3, 1, 2, 3],
	[2, 1, 2, 0, 3, 2, 1],
	[3, 2, 1, 3, 2, 3, 2],
	[1, 2, 3, 1, 2, 1, 3],
	[2, 3, 1, 2, 3, 2, 1],
	[0, 2, 2, 3, 1, 3, 2],
	[1, 3, 2, 1, 2, 3, 1],
	[2, 1, 3, 2, 1, 2, 3],
	[3, 2, 1, 3, 2, 1, 2],
	[2, 1, 2, 0, 3, 2, 1],
	[3, 2, 1, 3, 2, 3, 2],
	[1, 2, 3, 1, 2, 1, 3],
	[2, 1, 3, 2, 1, 2, 3],
	[3, 2, 1, 3, 2, 1, 2],
];

const activityClasses = {
	0: "bg-secondary",
	1: "bg-primary/20",
	2: "bg-primary/50",
	3: "bg-primary",
};

const Hero = () => {
	const scrollToProjects = () => {
		document.querySelector("#projects")?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<section
			id="hero"
			className="text-foreground relative z-10 flex min-h-[calc(100vh-var(--header-height))] items-center overflow-hidden"
		>
			{/* Subtle ambient light */}
			<motion.div
				animate={{
					opacity: [0.25, 0.4, 0.25],
					scale: [1, 1.05, 1],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="bg-primary/5 pointer-events-none absolute top-1/2 left-1/2 h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
			/>

			<div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
				<div className="grid items-center gap-14 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
					{/* LEFT */}

					<motion.div variants={containerVariants} initial="hidden" animate="visible">
						{/* Repository metadata */}
						<motion.div
							variants={itemVariants}
							className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px]"
						>
							<div className="text-muted-foreground flex items-center gap-1.5">
								<StarPlus className="text-primary h-3.5 w-3.5" />
								<span className="text-primary">OPEN TO OPPORTUNITIES</span>
							</div>
						</motion.div>

						<motion.div variants={itemVariants}>
							<div className="mb-6">
								<img
									src="/images/siddharth.jpeg"
									alt="Siddharth Kumar"
									className="border-border h-32 w-32 rounded-full border object-cover shadow-lg"
								/>
							</div>

							<h1 className="text-5xl leading-[0.95] font-bold tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
								Siddharth <span className="text-primary">Kumar</span>
							</h1>
						</motion.div>

						{/* README-style intro */}
						<motion.div variants={itemVariants} className="mt-7">
							<div className="text-muted-foreground mb-2 flex items-center gap-2 font-mono text-xs">
								<Braces className="text-primary h-3.5 w-3.5" />
								<span>README.md</span>
							</div>

							<p className="text-muted-foreground max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
								Computer Science student focused on{" "}
								<span className="text-foreground font-medium">
									building software that holds up in the real world
								</span>
								, from backend systems and APIs to full-stack applications and
								practical AI/ML.
							</p>
						</motion.div>

						{/* Actions */}
						<motion.div
							variants={itemVariants}
							className="mt-8 flex flex-wrap items-center gap-3"
						>
							<Button
								variant="primary"
								size="md"
								rightIcon={<ArrowDown className="h-4 w-4" />}
								onClick={scrollToProjects}
							>
								View Projects
							</Button>

							<Button
								variant="secondary"
								size="md"
								rightIcon={<ArrowUpRight className="h-4 w-4" />}
								onClick={() =>
									window.open(
										"https://github.com/siddharthk8",
										"_blank",
										"noopener,noreferrer",
									)
								}
							>
								GitHub
							</Button>
						</motion.div>
					</motion.div>

					{/* RIGHT */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.75,
							delay: 0.35,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="relative hidden lg:block"
					>
						{/* Repository card */}
						<div className="border-border bg-background overflow-hidden rounded-xl border shadow-2xl backdrop-blur-md">
							{/* Repository header */}
							<div className="border-border flex items-center justify-between border-b px-5 py-4">
								<div>
									<div className="text-foreground flex items-center gap-2 font-mono text-sm font-medium">
										<Code2 className="text-primary h-4 w-4" />
										Code Mechanic
									</div>

									<div className="text-muted-foreground mt-1 font-mono text-[12px]">
										software-engineer / portfolio
									</div>
								</div>

								<div className="border-border text-muted-foreground rounded-md border px-2 py-1 font-mono text-[11px]">
									PUBLIC
								</div>
							</div>

							{/* Repository body */}
							<div className="p-5">
								{/* Branch */}
								<div className="mb-5 flex items-center justify-between">
									<div className="border-border bg-secondary/40 flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-[12px]">
										<GitBranch className="text-primary h-3 w-3" />
										main
									</div>

									<span className="text-muted-foreground font-mono text-[11px]">
										ACTIVE DEVELOPMENT
									</span>
								</div>

								{/* Activity */}
								<div>
									<div className="mb-3 flex items-center justify-between">
										<span className="text-foreground font-mono text-xs">
											engineering activity
										</span>
									</div>

									<div className="flex gap-1">
										{activity.map((column, columnIndex) => (
											<div
												key={columnIndex}
												className="flex flex-1 flex-col gap-1"
											>
												{column.map((level, rowIndex) => (
													<motion.div
														key={rowIndex}
														initial={{
															opacity: 0,
															scale: 0.5,
														}}
														animate={{
															opacity: 1,
															scale: 1,
														}}
														transition={{
															delay:
																0.65 +
																columnIndex * 0.035 +
																rowIndex * 0.015,
															duration: 0.25,
														}}
														className={`aspect-square w-full rounded-[2px] ${activityClasses[level]}`}
													/>
												))}
											</div>
										))}
									</div>
								</div>

								{/* Divider */}
								<div className="border-border my-6 border-t" />

								{/* Recent activity */}
								<div>
									<div className="text-muted-foreground mb-3 font-mono text-[11px] tracking-wider uppercase">
										recent activity
									</div>

									<div className="space-y-3">
										<div className="flex items-start gap-3">
											<div className="bg-primary/10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md">
												<GitCommitHorizontal className="text-primary h-3.5 w-3.5" />
											</div>

											<div className="min-w-0">
												<div className="text-foreground font-mono text-[12px]">
													shipping scalable systems
												</div>

												<div className="text-muted-foreground mt-0.5 font-mono text-[11px]">
													full-stack · backend · cloud
												</div>
											</div>
										</div>

										<div className="flex items-start gap-3">
											<div className="bg-primary/10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md">
												<Braces className="text-primary h-3.5 w-3.5" />
											</div>

											<div className="min-w-0">
												<div className="text-foreground font-mono text-[12px]">
													experimenting with AI
												</div>

												<div className="text-muted-foreground mt-0.5 font-mono text-[11px]">
													LLMs · RAG · AWS Bedrock
												</div>
											</div>
										</div>

										<div className="flex items-start gap-3">
											<div className="bg-primary/10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md">
												<Check className="text-primary h-3.5 w-3.5" />
											</div>

											<div className="min-w-0">
												<div className="text-foreground font-mono text-[12px]">
													continuous learning
												</div>

												<div className="text-muted-foreground mt-0.5 font-mono text-[11px]">
													DSA · system design · architecture
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Repository footer */}
							<div className="border-border bg-secondary/20 flex items-center justify-between border-t px-5 py-3">
								<div className="text-muted-foreground flex items-center gap-2 font-mono text-[11px]">
									<span className="bg-primary h-1.5 w-1.5 rounded-full" />
									BUILDING
								</div>

								<div className="text-muted-foreground font-mono text-[11px]">
									README.md
								</div>
							</div>
						</div>

						{/* Terminal decoration */}
						<motion.div
							animate={{ y: [0, -5, 0] }}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="border-border bg-background absolute -right-5 -bottom-5 hidden w-52 rounded-lg border p-3 shadow-lg xl:block"
						>
							<div className="mb-2 flex items-center gap-2">
								<Terminal className="text-primary h-3 w-3" />

								<span className="text-muted-foreground font-mono text-[11px]">
									terminal
								</span>
							</div>

							<div className="font-mono text-[11px] leading-5">
								<div className="text-muted-foreground">
									<span className="text-primary">$</span> git status
								</div>

								<div className="text-primary">✓ working tree clean</div>
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Scroll cue */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5 }}
					className="text-muted-foreground absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase md:flex"
				>
					<span>explore more</span>

					<motion.span
						animate={{ y: [0, 4, 0] }}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						<ArrowDown className="h-3 w-3" />
					</motion.span>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
