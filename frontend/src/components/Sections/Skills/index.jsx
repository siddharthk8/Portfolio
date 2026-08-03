import { motion, useReducedMotion } from "framer-motion";
import {
	ArrowUpRight,
	BrainCircuit,
	Cloud,
	Code2,
	Database,
	GitBranch,
	Layers3,
	Server,
	StarCheck,
} from "lucide-react";

import Container from "@/components/Container";

const stackGroups = [
	{
		id: "languages",
		number: "01",
		title: "Languages",
		icon: Code2,
		description: "The languages behind most of my problem-solving and application work.",
		featured: true,
		skills: ["Java", "Python", "JavaScript", "SQL", "C"],
	},

	{
		id: "backend",
		number: "02",
		title: "Backend",
		icon: Server,
		description: "APIs and services with an emphasis on clean structure and reliability.",
		featured: true,
		skills: ["Django", "Django REST Framework", "FastAPI"],
	},

	{
		id: "frontend",
		number: "03",
		title: "Frontend",
		icon: Layers3,
		description: "Responsive interfaces that stay maintainable as products grow.",
		skills: ["React", "Tailwind CSS", "Redux"],
	},

	{
		id: "ai",
		number: "04",
		title: "AI Engineering",
		icon: BrainCircuit,
		description: "Practical AI features rather than AI for the sake of AI.",
		skills: ["LLM Integration", "RAG", "AWS Bedrock"],
	},

	{
		id: "cloud",
		number: "05",
		title: "Cloud (AWS)",
		icon: Cloud,
		featured: true,
		description: "Deploying and connecting application infrastructure on Amazon Web Services.",
		skills: ["EC2", "S3", "Route 53", "IAM", "RDS"],
	},

	{
		id: "data",
		number: "06",
		title: "Data",
		icon: Database,
		description: "Application data, persistence, and the systems around it.",
		skills: ["MySQL", "SQLAlchemy"],
	},
];

const supportingStack = ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA"];

const engineeringAreas = [
	{
		label: "Backend systems",
		description: "APIs · architecture · reliability",
	},
	{
		label: "Full-stack products",
		description: "React · Django · FastAPI",
	},
	{
		label: "Cloud applications",
		description: "AWS · deployment · services",
	},
	{
		label: "Applied AI",
		description: "LLMs · RAG · Bedrock",
	},
];

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.06,
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
			duration: 0.45,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

function StackItem({ skill }) {
	return (
		<span className="border-border bg-background text-foreground/80 hover:border-primary/30 hover:text-foreground inline-flex min-h-8 items-center rounded-lg border px-2.5 py-1.5 font-mono text-[10px] transition-colors">
			{skill}
		</span>
	);
}

function StackCard({ group }) {
	const Icon = group.icon;
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.article
			variants={itemVariants}
			whileHover={
				shouldReduceMotion
					? undefined
					: {
							y: -3,
						}
			}
			transition={{
				duration: 0.25,
				ease: [0.22, 1, 0.36, 1],
			}}
			className={`group border-border bg-card hover:border-primary/20 relative min-w-0 overflow-hidden rounded-2xl border transition-[border-color,box-shadow] duration-300 hover:shadow-lg ${
				group.featured ? "sm:col-span-2 lg:col-span-1" : ""
			}`}
		>
			{/* Accent */}
			<div className="bg-primary absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

			{/* Mobile layout */}
			<div className="p-4 sm:p-5">
				<div className="flex min-w-0 items-start gap-3">
					{/* Icon */}
					<div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300">
						<Icon className="h-4 w-4" />
					</div>

					{/* Title */}
					<div className="min-w-0 flex-1">
						<div className="flex items-center gap-2">
							<span className="text-muted-foreground/50 font-mono text-[9px] tracking-[0.15em]">
								{group.number}
							</span>

							<span className="bg-border h-px w-3" />

							{group.featured && (
								<span className="text-primary font-mono text-[8px] tracking-[0.12em] uppercase">
									Core
								</span>
							)}
						</div>

						<h3 className="text-card-foreground mt-1 truncate text-sm font-semibold sm:text-base">
							{group.title}
						</h3>
					</div>

					<StarCheck className="text-muted-foreground/20 group-hover:text-primary hidden h-4 w-4 shrink-0 transition-colors sm:block" />
				</div>

				{/* Description */}
				<p className="text-muted-foreground mt-3 text-xs leading-5 sm:mt-4">
					{group.description}
				</p>

				{/* Skills */}
				<div className="mt-4 flex flex-wrap gap-1.5">
					{group.skills.map((skill) => (
						<StackItem key={skill} skill={skill} />
					))}
				</div>
			</div>
		</motion.article>
	);
}

function EngineeringArea({ area, index }) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			initial={{
				opacity: 0,
				x: shouldReduceMotion ? 0 : 12,
			}}
			whileInView={{
				opacity: 1,
				x: 0,
			}}
			viewport={{ once: true, amount: 0.5 }}
			transition={{
				duration: shouldReduceMotion ? 0 : 0.35,
				delay: shouldReduceMotion ? 0 : index * 0.07,
			}}
			className="group/area border-border bg-background hover:border-primary/30 relative overflow-hidden rounded-xl border p-4 transition-colors"
		>
			<div className="mb-4 flex items-center justify-between">
				<span className="text-muted-foreground/50 font-mono text-[9px]">0{index + 1}</span>

				<span className="bg-primary/20 group-hover/area:bg-primary h-1.5 w-1.5 rounded-full transition-colors" />
			</div>

			<p className="text-foreground text-sm font-medium">{area.label}</p>

			<p className="text-muted-foreground mt-1.5 font-mono text-[9px] leading-4">
				{area.description}
			</p>
		</motion.div>
	);
}

export default function Skills() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section id="skills" className="bg-background z-10 overflow-hidden">
			<Container className="px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
				<div className="mx-auto w-full max-w-7xl">
					{/* Header */}
					<motion.div
						initial={{
							opacity: 0,
							y: shouldReduceMotion ? 0 : 18,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						viewport={{
							once: true,
							margin: "-100px",
						}}
						transition={{
							duration: shouldReduceMotion ? 0 : 0.5,
						}}
						className="mb-9 sm:mb-12"
					>
						<div className="mb-4 flex items-center gap-3">
							<div className="bg-primary h-px w-6 sm:w-8" />

							<span className="text-primary font-mono text-[10px] font-medium tracking-[0.16em] uppercase sm:text-xs sm:tracking-[0.2em]">
								04 / Skills
							</span>
						</div>

						<div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
							<div className="min-w-0">
								<h2 className="text-foreground max-w-3xl text-3xl leading-[1.1] font-bold tracking-tight sm:text-4xl lg:text-5xl">
									The stack I <span className="text-primary">build with.</span>
								</h2>

								<p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7 lg:text-lg">
									A focused view of the technologies I actually use across
									projects — not an exhaustive list of everything I've ever
									touched.
								</p>
							</div>

							<div className="border-border bg-card flex w-fit max-w-full items-center gap-2 rounded-lg border px-3 py-2">
								<GitBranch className="text-primary h-3.5 w-3.5 shrink-0" />

								<span className="text-muted-foreground truncate font-mono text-[10px] sm:text-xs">
									stack = evolving
								</span>
							</div>
						</div>
					</motion.div>

					{/* Primary stack */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="show"
						viewport={{
							once: true,
							margin: "-80px",
						}}
						className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
					>
						{stackGroups.map((group) => (
							<StackCard key={group.id} group={group} />
						))}
					</motion.div>

					{/* Engineering profile */}
					<motion.div
						initial={{
							opacity: 0,
							y: shouldReduceMotion ? 0 : 20,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						viewport={{
							once: true,
							margin: "-80px",
						}}
						transition={{
							duration: shouldReduceMotion ? 0 : 0.5,
						}}
						className="border-border bg-card relative mt-5 overflow-hidden rounded-2xl border sm:mt-6"
					>
						{/* Technical grid */}
						<div className="pointer-events-none absolute inset-0 opacity-[0.025]">
							<div
								className="h-full w-full"
								style={{
									backgroundImage:
										"linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
									backgroundSize: "28px 28px",
								}}
							/>
						</div>

						{/* Primary accent */}
						<div className="bg-primary absolute top-0 left-0 h-full w-px" />

						<div className="relative grid lg:grid-cols-[0.85fr_1.15fr]">
							{/* Profile */}
							<div className="border-border border-b p-5 sm:p-6 lg:border-r lg:border-b-0 lg:p-8">
								<div className="flex items-center gap-2">
									<div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
										<BrainCircuit className="h-4 w-4" />
									</div>

									<span className="text-primary font-mono text-[9px] tracking-[0.18em] uppercase sm:text-[10px]">
										Engineering profile
									</span>
								</div>

								<h3 className="text-card-foreground mt-4 max-w-sm text-xl leading-tight font-bold tracking-tight sm:text-2xl">
									Built around systems,
									<br className="hidden sm:block" /> not just interfaces.
								</h3>

								<p className="text-muted-foreground mt-3 max-w-md text-sm leading-6">
									I gravitate toward projects where frontend, backend, cloud, and
									AI have to work together as one system.
								</p>

								<div className="border-border mt-5 flex items-center gap-3 border-t pt-4 sm:mt-6 sm:pt-5">
									<div className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
										<ArrowUpRight className="h-4 w-4" />
									</div>

									<div className="min-w-0">
										<p className="text-card-foreground text-xs font-semibold">
											Learning through building
										</p>

										<p className="text-muted-foreground mt-0.5 truncate text-[11px]">
											The stack grows with the problems.
										</p>
									</div>
								</div>
							</div>

							{/* Current focus */}
							<div className="p-5 sm:p-6 lg:p-8">
								<div className="mb-4 flex items-center justify-between sm:mb-5">
									<span className="text-muted-foreground font-mono text-[9px] tracking-[0.18em] uppercase sm:text-[10px]">
										Current focus
									</span>

									<span className="text-muted-foreground/40 font-mono text-[9px]">
										04 areas
									</span>
								</div>

								<div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
									{engineeringAreas.map((area, index) => (
										<EngineeringArea
											key={area.label}
											area={area}
											index={index}
										/>
									))}
								</div>
							</div>
						</div>
					</motion.div>

					{/* Supporting stack */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							delay: shouldReduceMotion ? 0 : 0.15,
							duration: shouldReduceMotion ? 0 : 0.45,
						}}
						className="border-border mt-5 rounded-2xl border border-dashed p-4 sm:mt-6 sm:p-5"
					>
						<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
							<div className="min-w-0">
								<div className="flex items-center gap-2">
									<div className="bg-primary h-1.5 w-1.5 rounded-full" />

									<p className="text-foreground text-sm font-semibold">
										Supporting toolkit
									</p>
								</div>

								<p className="text-muted-foreground mt-1 text-xs">
									Tools that sit around my main stack.
								</p>
							</div>

							<div className="flex flex-wrap gap-1.5 sm:max-w-2xl sm:justify-end">
								{supportingStack.map((technology) => (
									<span
										key={technology}
										className="border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground rounded-lg border px-2.5 py-1.5 font-mono text-[9px] transition-colors sm:text-[10px]"
									>
										{technology}
									</span>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	);
}
