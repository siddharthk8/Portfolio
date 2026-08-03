import { motion } from "framer-motion";
import { ArrowUpRight, AtSign, MapPin, Terminal } from "lucide-react";

import Container from "@/components/Container";
import GithubIcon from "@/components/Icons/GithubIcon";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";

const contactLinks = [
	{
		label: "GitHub",
		value: "github.com/siddharthk8",
		href: "https://github.com/siddharthk8",
		icon: <GithubIcon size={24} color="grey" />,
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/siddharth-kumar-profile",
		href: "https://linkedin.com/in/siddharth-kumar-profile",
		icon: <LinkedInIcon size={20} color="grey" />,
	},
	{
		label: "Email",
		value: "contact@siddharthkr.com",
		href: "mailto:contact@siddharthkr.com",
		icon: <AtSign className="h-5 w-5" />,
	},
];

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const itemVariants = {
	hidden: {
		opacity: 0,
		y: 18,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export default function Contact() {
	return (
		<section id="contact" className="bg-background z-10 overflow-hidden">
			<Container className="px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="mx-auto w-full max-w-7xl"
				>
					{/* Main panel */}
					<motion.div
						variants={itemVariants}
						className="border-border bg-card relative w-full min-w-0 overflow-hidden rounded-2xl border sm:rounded-3xl"
					>
						{/* Technical background */}
						<div className="pointer-events-none absolute inset-0 overflow-hidden">
							<div className="bg-primary/10 absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl sm:-top-32 sm:-right-32 sm:h-80 sm:w-80" />

							<div className="bg-primary/5 absolute -bottom-28 -left-24 h-56 w-56 rounded-full blur-3xl sm:-bottom-40 sm:-left-32 sm:h-80 sm:w-80" />
						</div>

						<div className="relative grid min-w-0 lg:grid-cols-[1.25fr_0.75fr]">
							{/* Message */}
							<div className="min-w-0 p-5 sm:p-8 md:p-10 lg:p-14">
								<div className="mb-5 flex items-center gap-3 sm:mb-6">
									<div className="bg-primary h-px w-6 sm:w-8" />

									<span className="text-primary font-mono text-[10px] font-medium tracking-[0.16em] uppercase sm:text-xs sm:tracking-[0.2em]">
										05 / Contact
									</span>
								</div>

								<div className="flex items-center gap-2">
									<Terminal className="text-primary h-4 w-4 shrink-0" />

									<span className="text-muted-foreground font-mono text-[11px] sm:text-xs">
										connection.open()
									</span>
								</div>

								<h2 className="text-foreground mt-4 max-w-2xl text-3xl leading-[1.1] font-bold tracking-tight sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
									Let's build something{" "}
									<span className="text-primary">worth shipping.</span>
								</h2>

								<p className="text-muted-foreground mt-4 max-w-xl text-sm leading-6 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
									I'm interested in interesting engineering problems, full-stack
									products, backend systems, and practical AI. If you're building
									something ambitious, let's talk.
								</p>

								<motion.a
									href="mailto:contact@siddharthkr.com"
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.98 }}
									className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-colors sm:mt-8 sm:w-auto"
								>
									Start a conversation
									<ArrowUpRight className="h-4 w-4 shrink-0" />
								</motion.a>
							</div>

							{/* Status / links */}
							<div className="border-border min-w-0 border-t lg:border-t-0 lg:border-l">
								<div className="flex h-full min-w-0 flex-col">
									{/* Status */}
									<div className="border-border p-5 sm:p-8 md:p-10 lg:border-b lg:p-8">
										<div className="flex items-center justify-between gap-4">
											<span className="text-muted-foreground font-mono text-[9px] tracking-[0.14em] uppercase sm:text-[10px] sm:tracking-[0.18em]">
												Current status
											</span>

											<span className="flex shrink-0 items-center gap-2 font-mono text-[10px]">
												<span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
												<span className="text-primary">online</span>
											</span>
										</div>

										<div className="mt-5 sm:mt-6">
											<p className="text-foreground text-sm font-semibold">
												Open to interesting opportunities
											</p>

											<p className="text-muted-foreground mt-2 text-xs leading-5">
												Software engineering · Full-stack · Backend · AI/ML
											</p>
										</div>

										<div className="border-border mt-5 flex items-center gap-2 border-t pt-4 sm:mt-6">
											<MapPin className="text-muted-foreground h-3.5 w-3.5 shrink-0" />

											<span className="text-muted-foreground font-mono text-[10px]">
												India
											</span>
										</div>
									</div>

									{/* Links */}
									<div className="flex-1 p-5 sm:p-8 md:p-10 lg:p-8">
										<p className="text-muted-foreground mb-3 font-mono text-[9px] tracking-[0.14em] uppercase sm:mb-4 sm:text-[10px] sm:tracking-[0.18em]">
											Find me online
										</p>

										<div className="space-y-1.5 sm:space-y-2">
											{contactLinks.map((link) => {
												return (
													<motion.a
														key={link.label}
														href={link.href}
														target={
															link.href.startsWith("http")
																? "_blank"
																: undefined
														}
														rel={
															link.href.startsWith("http")
																? "noreferrer"
																: undefined
														}
														whileHover={{ x: 3 }}
														className="group hover:bg-secondary flex min-w-0 items-center gap-3 rounded-xl p-2 transition-colors sm:p-2.5"
													>
														<div className="border-border bg-background text-muted-foreground group-hover:border-primary/30 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors">
															{link.icon}
														</div>

														<div className="min-w-0 flex-1">
															<p className="text-foreground text-xs font-medium">
																{link.label}
															</p>

															<p className="text-muted-foreground mt-0.5 truncate font-mono text-[10px]">
																{link.value}
															</p>
														</div>

														<ArrowUpRight className="text-muted-foreground/40 group-hover:text-primary h-3.5 w-3.5 shrink-0 transition-colors" />
													</motion.a>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Closing line */}
					<motion.div
						variants={itemVariants}
						className="mt-6 flex flex-col gap-2 text-center sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-left"
					>
						<p className="text-muted-foreground font-mono text-[10px]">
							<span className="text-primary">~/siddharth</span> $
							<span className="text-foreground"> exit --portfolio</span>
						</p>

						<p className="text-muted-foreground text-[11px] leading-5 sm:text-xs">
							Building, learning, and improving — one project at a time.
						</p>
					</motion.div>
				</motion.div>
			</Container>
		</section>
	);
}
