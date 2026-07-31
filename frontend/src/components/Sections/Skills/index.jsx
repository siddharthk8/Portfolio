import { motion } from "framer-motion";
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
		skills: ["Django", "Django REST", "FastAPI"],
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
		title: "Cloud",
		icon: Cloud,
		description: "Deploying and connecting application infrastructure on AWS.",
		skills: ["AWS", "EC2", "S3", "RDS"],
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

const supportingStack = [
	"Git",
	"GitHub",
	"REST APIs",
	"React Router",
	"Postman",
	"VS Code",
	"IntelliJ IDEA",
];

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

function StackItem({ skill, index }) {
	return (
		<div className="group/skill hover:bg-secondary/60 flex min-w-0 items-center gap-3 rounded-lg px-2 py-2 transition-colors">
			<span className="text-muted-foreground/40 group-hover/skill:text-primary w-4 shrink-0 font-mono text-[9px] transition-colors">
				{String(index + 1).padStart(2, "0")}
			</span>

			<span className="bg-border group-hover/skill:bg-primary h-1 w-1 shrink-0 rounded-full transition-colors" />

			<span className="text-foreground/80 group-hover/skill:text-foreground truncate text-xs font-medium transition-colors">
				{skill}
			</span>
		</div>
	);
}

function StackCard({ group }) {
	const Icon = group.icon;

	return (
		<motion.article
			variants={itemVariants}
			className="group border-border bg-card relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
		>
			{/* subtle engineering signal */}
			<div className="bg-primary absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

			<div className="p-5 sm:p-6">
				<div className="flex items-start justify-between gap-4">
					<div className="flex min-w-0 items-center gap-3">
						<div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
							<Icon className="h-4.5 w-4.5" />
						</div>

						<div className="min-w-0">
							<div className="flex items-center gap-2">
								<span className="text-muted-foreground font-mono text-[9px] tracking-[0.18em] uppercase">
									{group.number}
								</span>

								<span className="bg-border h-px w-4" />
							</div>

							<h3 className="text-card-foreground mt-1 truncate text-sm font-semibold">
								{group.title}
							</h3>
						</div>
					</div>

					<StarCheck className="text-muted-foreground/30 group-hover:text-primary h-4 w-4 shrink-0 transition-colors duration-300" />
				</div>

				<p className="text-muted-foreground mt-4 min-h-[48px] text-xs leading-5">
					{group.description}
				</p>

				<div className="border-border mt-5 border-t pt-4">
					<div className="grid grid-cols-2 gap-1">
						{group.skills.map((skill, index) => (
							<StackItem key={skill} skill={skill} index={index} />
						))}
					</div>
				</div>
			</div>
		</motion.article>
	);
}

export default function Skills() {
	return (
		<section id="skills" className="bg-background z-10">
			<Container className="py-20 sm:py-24 lg:py-28">
				<div className="mx-auto max-w-7xl">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5 }}
						className="mb-12"
					>
						<div className="mb-4 flex items-center gap-3">
							<div className="bg-primary h-px w-8" />

							<span className="text-primary font-mono text-xs font-medium tracking-[0.2em] uppercase">
								04 / Skills
							</span>
						</div>

						<div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
							<div>
								<h2 className="text-foreground max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
									The stack I <span className="text-primary">build with.</span>
								</h2>

								<p className="text-muted-foreground mt-4 max-w-2xl text-base leading-7 sm:text-lg">
									A focused view of the technologies I actually use across
									projects — not an exhaustive list of everything I've ever
									touched.
								</p>
							</div>

							<div className="border-border bg-card flex w-fit items-center gap-2 rounded-lg border px-3 py-2">
								<GitBranch className="text-primary h-3.5 w-3.5" />

								<span className="text-muted-foreground font-mono text-xs">
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
						viewport={{ once: true, margin: "-80px" }}
						className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
					>
						{stackGroups.map((group) => (
							<StackCard key={group.id} group={group} />
						))}
					</motion.div>

					{/* Engineering profile */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.5 }}
						className="border-border bg-card relative mt-6 overflow-hidden rounded-2xl border"
					>
						{/* technical grid */}
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

						<div className="relative grid lg:grid-cols-[0.85fr_1.15fr]">
							{/* Profile */}
							<div className="border-border border-b p-6 lg:border-r lg:border-b-0 lg:p-8">
								<div className="flex items-center gap-2">
									<BrainCircuit className="text-primary h-4 w-4" />

									<span className="text-primary font-mono text-[10px] tracking-[0.18em] uppercase">
										Engineering profile
									</span>
								</div>

								<h3 className="text-card-foreground mt-4 max-w-sm text-2xl font-bold tracking-tight">
									Built around systems, not just interfaces.
								</h3>

								<p className="text-muted-foreground mt-3 max-w-md text-sm leading-6">
									I gravitate toward projects where frontend, backend, cloud, and
									AI have to work together as one system.
								</p>

								<div className="border-border mt-6 flex items-center gap-3 border-t pt-5">
									<div className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
										<ArrowUpRight className="h-4 w-4" />
									</div>

									<div>
										<p className="text-card-foreground text-xs font-semibold">
											Learning through building
										</p>

										<p className="text-muted-foreground mt-0.5 text-[11px]">
											The stack grows with the problems.
										</p>
									</div>
								</div>
							</div>

							{/* Areas */}
							<div className="p-6 lg:p-8">
								<div className="mb-5 flex items-center justify-between">
									<span className="text-muted-foreground font-mono text-[10px] tracking-[0.18em] uppercase">
										Current focus
									</span>

									<span className="text-muted-foreground/50 font-mono text-[10px]">
										4 areas
									</span>
								</div>

								<div className="grid gap-3 sm:grid-cols-2">
									{engineeringAreas.map((area, index) => (
										<motion.div
											key={area.label}
											initial={{ opacity: 0, x: 12 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.35,
												delay: index * 0.07,
											}}
											className="border-border bg-background group/area hover:border-primary/30 rounded-xl border p-4 transition-colors"
										>
											<div className="mb-3 flex items-center justify-between">
												<span className="text-muted-foreground font-mono text-[9px]">
													0{index + 1}
												</span>

												<div className="bg-primary/10 h-1.5 w-1.5 rounded-full" />
											</div>

											<p className="text-foreground text-sm font-medium">
												{area.label}
											</p>

											<p className="text-muted-foreground mt-1.5 font-mono text-[9px]">
												{area.description}
											</p>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</motion.div>

					{/* Supporting stack */}
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.45 }}
						className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
					>
						<div>
							<p className="text-foreground text-sm font-semibold">
								Supporting toolkit
							</p>

							<p className="text-muted-foreground mt-1 text-xs">
								Tools that sit around the main stack.
							</p>
						</div>

						<div className="flex flex-wrap gap-2 sm:justify-end">
							{supportingStack.map((technology) => (
								<span
									key={technology}
									className="border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground rounded-lg border px-2.5 py-1.5 font-mono text-[10px] transition-colors"
								>
									{technology}
								</span>
							))}
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	);
}
