import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, GitCommitHorizontal, MapPin } from "lucide-react";

const experiences = [
	{
		company: "Stoment Solutions Private Limited",
		role: "Founder & Product Engineer",
		location: "Saharanpur, Uttar Pradesh, India",
		period: "Mar 2021 — Jul 2023",
		type: "Founder",
		description:
			"Built and led Stoment, a location-based social networking platform focused on local content discovery, launched on the Google Play Store.",
		highlights: [
			"Identified gaps in existing social platforms and translated them into a location-based product.",
			"Designed and built the complete technical stack, including backend APIs, mobile interfaces, and deployment.",
			"Engineered a dynamic post-visibility algorithm and evolved the platform from anonymous to identity-based interactions.",
			"Scaled the platform to support 1,000+ active users while maintaining backend performance and reliability.",
		],
		tech: ["Backend APIs", "Algorithms", "Mobile", "Deployment"],
	},
	{
		company: "Om Nanotech Private Limited",
		role: "Web Developer Intern",
		location: "Noida, Uttar Pradesh, India",
		period: "Jun 2025 — Aug 2025",
		type: "Internship",
		description:
			"Worked across backend and frontend layers, contributing to APIs and reliable application integration.",
		highlights: [
			"Assisted in developing backend components and REST APIs.",
			"Worked on frontend and backend integration to maintain data consistency.",
			"Contributed to improving application reliability across integrated components.",
		],
		tech: ["REST APIs", "Frontend", "Backend", "Integration"],
	},
];

function Experience() {
	return (
		<section id="experience" className="relative z-10 overflow-hidden">
			<div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
				{/* Heading */}
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
							02 / Experience
						</span>
					</div>
					<h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
						Building things, <span className="text-primary">learning by shipping.</span>
					</h2>

					<p className="text-muted-foreground mt-5 text-base leading-7 sm:text-lg">
						A timeline of the products I've built, systems I've worked on, and problems
						I've had the opportunity to solve.
					</p>
				</motion.div>

				{/* Timeline */}
				<div className="relative">
					{/* Timeline line */}
					<div
						aria-hidden="true"
						className="bg-border absolute top-3 bottom-3 left-[11px] hidden w-px sm:block"
					/>

					<div className="space-y-12">
						{experiences.map((experience, index) => (
							<motion.article
								key={experience.company}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.15 }}
								transition={{
									duration: 0.55,
									delay: index * 0.12,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="relative sm:pl-12"
							>
								{/* Timeline node */}
								<div className="border-border bg-background absolute top-1.5 left-0 hidden h-6 w-6 items-center justify-center rounded-full border sm:flex">
									<div className="bg-primary h-2 w-2 rounded-full" />
								</div>

								{/* Card */}
								<div className="group border-border bg-card hover:border-primary/30 overflow-hidden rounded-2xl border transition-colors duration-200">
									{/* Card header */}
									<div className="border-border bg-muted/40 border-b px-5 py-5 sm:px-6">
										<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
											<div>
												<div className="mb-2 flex flex-wrap items-center gap-2">
													<span className="border-primary/20 bg-accent text-accent-foreground rounded-md border px-2 py-1 font-mono text-[10px] font-medium tracking-wider uppercase">
														{experience.type}
													</span>

													<span className="text-muted-foreground font-mono text-[10px]">
														commit_{String(index + 1).padStart(2, "0")}
													</span>
												</div>

												<h3 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
													{experience.company}
												</h3>

												<p className="text-primary mt-1 text-sm font-medium">
													{experience.role}
												</p>
											</div>

											<div className="text-muted-foreground shrink-0 font-mono text-xs">
												<div className="flex items-center gap-2">
													<CalendarDays className="h-3.5 w-3.5" />
													{experience.period}
												</div>

												<div className="mt-2 flex items-center gap-2">
													<MapPin className="h-3.5 w-3.5" />
													{experience.location}
												</div>
											</div>
										</div>
									</div>

									{/* Card body */}
									<div className="grid gap-8 px-5 py-6 lg:grid-cols-[1fr_0.35fr] lg:px-6">
										<div>
											<p className="text-muted-foreground mb-5 text-sm leading-6 sm:text-[15px]">
												{experience.description}
											</p>

											<div className="space-y-3">
												{experience.highlights.map((highlight) => (
													<div
														key={highlight}
														className="text-muted-foreground flex gap-3 text-sm leading-6"
													>
														<GitCommitHorizontal className="text-primary mt-1 h-4 w-4 shrink-0" />

														<span>{highlight}</span>
													</div>
												))}
											</div>
										</div>

										{/* Tech/context */}
										<div className="lg:border-border lg:border-l lg:pl-6">
											<div className="text-muted-foreground mb-3 flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase">
												<BriefcaseBusiness className="h-3.5 w-3.5" />
												Environment
											</div>

											<div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
												{experience.tech.map((technology) => (
													<span
														key={technology}
														className="border-border bg-muted text-muted-foreground group-hover:border-primary/20 group-hover:text-foreground rounded-md border px-2.5 py-1.5 font-mono text-[10px] transition-colors"
													>
														{technology}
													</span>
												))}
											</div>
										</div>
									</div>

									{/* Footer */}
									<div className="border-border text-muted-foreground flex items-center justify-between border-t px-5 py-3 font-mono text-[10px] sm:px-6">
										<span>$ git log --experience</span>

										<span className="flex items-center gap-1.5">
											<span className="bg-primary h-1.5 w-1.5 rounded-full" />
											{index === 0 ? "founder_mode" : "engineering_mode"}
										</span>
									</div>
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
