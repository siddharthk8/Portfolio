import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, ExternalLink, GitCommit, Globe2, Sparkles } from "lucide-react";

import LawGenieSvg from "@/assets/projects/lawgenie.svg";
import RoundTableImage from "@/assets/projects/roundtable.png";
import SignalOpsSvg from "@/assets/projects/signalops.svg";
import Button from "@/components/Button";
import Container from "@/components/Container";

const projects = [
	{
		name: "SignalOps",
		shortName: "SO",
		logo: (
			<img
				src={SignalOpsSvg}
				alt={`SignalOps logo`}
				className="h-8 w-8 scale-[2.5] object-contain"
			/>
		),
		description:
			"AI-powered application log intelligence platform that transforms raw application logs into semantic events, correlated incidents, and operational intelligence.",
		role: "Backend · AI · Full Stack",
		status: "Live",
		liveUrl: "https://signalops.siddharthkr.com/",
		githubUrl: null,
		featured: true,
		technologies: ["Python", "FastAPI", "React", "SQLAlchemy", "AWS", "Bedrock"],
		metrics: [
			{ label: "REST APIs", value: "20+" },
			{ label: "Pipeline", value: "4-stage" },
			{ label: "AI", value: "Bedrock" },
		],
		languageComposition: [
			{ name: "Python", value: 62 },
			{ name: "JavaScript", value: 26 },
			{ name: "TypeScript", value: 11 },
			{ name: "Other", value: 1 },
		],
	},

	{
		name: "GyanSetu",
		shortName: "GS",
		logo: null,
		description:
			"A money-free micro-mentorship platform where users exchange knowledge through a community-driven Skill Credit economy.",
		role: "Full Stack",
		status: "Completed",
		liveUrl: null,
		githubUrl: "https://github.com/siddharthk8/GyanSetu",
		featured: false,
		technologies: ["Python", "Django", "DRF", "React", "Tailwind CSS"],
		metrics: [
			{ label: "Architecture", value: "REST" },
			{ label: "Model", value: "Credits" },
			{ label: "Frontend", value: "React" },
		],
		languageComposition: [
			{ name: "Python", value: 51 },
			{ name: "JavaScript", value: 48 },
			{ name: "Other", value: 1 },
		],
	},

	{
		name: "RoundTable",
		shortName: "RT",
		logo: (
			<img
				src={RoundTableImage}
				alt={`RountTable logo`}
				className="h-8 w-8 scale-125 object-contain"
			/>
		),
		description:
			"A structured social knowledge platform focused on communities, role-based collaboration, scalable feeds, and cloud-native data management.",
		role: "Full Stack · Cloud",
		status: "Live",
		liveUrl: "https://roundtable.siddharthkr.com/",
		githubUrl: "https://github.com/siddharthk8/RoundTable",
		featured: false,
		technologies: ["React", "AWS", "Cognito", "Amplify", "S3", "Lambda"],
		metrics: [
			{ label: "Auth", value: "Cognito" },
			{ label: "Storage", value: "S3" },
			{ label: "Cloud", value: "AWS" },
		],
		languageComposition: [
			{ name: "JavaScript", value: 92 },
			{ name: "TypeScript", value: 6 },
			{ name: "CSS", value: 2 },
		],
	},

	{
		name: "LawGenie AI",
		shortName: "LG",
		logo: (
			<img
				src={LawGenieSvg}
				alt={`LawGenie logo`}
				className="h-8 w-8 scale-125 object-contain"
			/>
		),
		description:
			"Full-stack legal research assistant combining document-aware Q&A, retrieval pipelines, LLM APIs, and a responsive React interface.",
		role: "Frontend · Backend · AI",
		status: "Live",
		liveUrl: "https://law-genie-ai.vercel.app/",
		githubUrl: "https://github.com/siddharthk8/LawGenie-AI",
		featured: false,
		technologies: ["React", "FastAPI", "MongoDB", "RAG", "LLM"],
		metrics: [
			{ label: "AI", value: "RAG" },
			{ label: "Backend", value: "FastAPI" },
			{ label: "Team", value: "Project Type" },
		],
		languageComposition: [
			{ name: "Python", value: 47 },
			{ name: "JavaScript", value: 45 },
			{ name: "CSS", value: 7 },
			{ name: "HTML", value: 1 },
		],
	},

	{
		name: "Banking System",
		shortName: "BK",
		logo: null,
		description:
			"A Java console banking application demonstrating layered architecture, DAO/service separation, session handling, validation, and CSV persistence.",
		role: "Java · Architecture",
		status: "Completed",
		liveUrl: null,
		githubUrl: "https://github.com/siddharthk8/Banking-System",
		featured: false,
		technologies: ["Java", "DAO", "Services", "CSV", "Validation"],
		metrics: [
			{ label: "Language", value: "Java" },
			{ label: "Storage", value: "CSV" },
			{ label: "Architecture", value: "Layered" },
		],
		languageComposition: [{ name: "Java", value: 100 }],
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
		y: 24,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.55,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

function ProjectLogo({ project }) {
	return (
		<div className="border-border bg-secondary flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border">
			{project.logo ? (
				project.logo
			) : (
				<span className="text-primary font-mono text-sm font-bold">
					{project.shortName}
				</span>
			)}
		</div>
	);
}

const LANGUAGE_COLORS = [
	"bg-yellow-500",
	"bg-blue-500",
	"bg-pink-500",
	"bg-orange-500",
	"bg-violet-500",
	"bg-sky-500",
	"bg-emerald-500",
];

const LANGUAGE_DOT_COLORS = [
	"bg-yellow-500",
	"bg-blue-500",
	"bg-pink-500",
	"bg-orange-500",
	"bg-violet-500",
	"bg-sky-500",
	"bg-emerald-500",
];

function LanguageComposition({ languages, featured = false }) {
	return (
		<div className="mt-5">
			{/* Header */}
			<div className="mb-3 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<BarChart3 className="text-primary h-3.5 w-3.5" />

					<span className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
						Language composition
					</span>
				</div>
			</div>

			{/* Language bar */}
			<div
				className={`bg-secondary/60 border-border flex w-full overflow-hidden rounded-md border ${
					featured ? "h-3.5" : "h-3"
				}`}
			>
				{languages.map((language, index) => (
					<motion.div
						key={language.name}
						initial={{ width: 0 }}
						whileInView={{ width: `${language.value}%` }}
						viewport={{ once: true }}
						transition={{
							duration: 0.8,
							delay: index * 0.05,
							ease: [0.22, 1, 0.36, 1],
						}}
						title={`${language.name}: ${language.value}%`}
						className={`${LANGUAGE_COLORS[index % LANGUAGE_COLORS.length]} h-full min-w-[2px] transition-opacity duration-200 hover:opacity-80`}
					/>
				))}
			</div>

			{/* Legend */}
			<div
				className={`mt-3 grid gap-x-4 gap-y-2 ${
					languages.length > 3 ? "grid-cols-2" : "grid-cols-2"
				}`}
			>
				{languages.map((language, index) => (
					<div
						key={language.name}
						className="flex min-w-0 items-center justify-between gap-2"
					>
						<div className="flex min-w-0 items-center gap-1.5">
							<span
								className={`${
									LANGUAGE_DOT_COLORS[index % LANGUAGE_DOT_COLORS.length]
								} h-1.5 w-1.5 shrink-0 rounded-full`}
							/>

							<span className="text-muted-foreground truncate font-mono text-[10px]">
								{language.name}
							</span>
						</div>

						<span className="text-foreground shrink-0 font-mono text-[10px] font-medium">
							{language.value}%
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

function ProjectCard({ project }) {
	return (
		<motion.article
			variants={itemVariants}
			className={`group border-border bg-card relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
				project.featured ? "lg:col-span-2" : ""
			}`}
		>
			{/* Top accent */}
			<div className="bg-primary absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

			<div className="flex flex-1 flex-col p-5 sm:p-6">
				{/* Header */}
				<div className="flex items-start justify-between gap-4">
					<div className="flex min-w-0 items-center gap-3">
						<ProjectLogo project={project} />

						<div className="min-w-0">
							<div className="flex items-center gap-2">
								<h3 className="text-card-foreground truncate text-base font-semibold sm:text-lg">
									{project.name}
								</h3>

								{project.featured && (
									<Sparkles className="text-primary h-4 w-4 shrink-0" />
								)}
							</div>

							<p className="text-muted-foreground mt-0.5 text-xs">{project.role}</p>
						</div>
					</div>

					<span
						className={`shrink-0 rounded-full px-2 py-1 font-mono text-[10px] font-medium tracking-wide uppercase ${
							project.status === "Live"
								? "bg-primary/10 text-primary"
								: "bg-secondary text-muted-foreground"
						}`}
					>
						{project.status}
					</span>
				</div>

				{/* Description */}
				<p className="text-muted-foreground mt-5 max-w-2xl text-sm leading-6">
					{project.description}
				</p>

				{/* Metrics */}
				<div className="border-border mt-5 grid grid-cols-3 divide-x border-y py-3">
					{project.metrics.map((metric) => (
						<div key={metric.label} className="min-w-0 px-3 first:pl-0 last:pr-0">
							<p className="text-card-foreground truncate font-mono text-sm font-semibold">
								{metric.value}
							</p>

							<p className="text-muted-foreground mt-0.5 truncate text-[10px] tracking-wider uppercase">
								{metric.label}
							</p>
						</div>
					))}
				</div>

				{/* Language Composition */}
				<LanguageComposition
					languages={project.languageComposition}
					featured={project.featured}
				/>

				{/* Technologies */}
				<div className="mt-auto pt-5">
					<div className="flex flex-wrap gap-1.5">
						{project.technologies.map((technology) => (
							<span
								key={technology}
								className="bg-secondary text-secondary-foreground rounded-md px-2 py-1 font-mono text-[10px]"
							>
								{technology}
							</span>
						))}
					</div>
				</div>

				{/* Actions */}
				<div className="mt-5 flex items-center gap-2">
					{project.liveUrl && project.liveUrl !== "#" && (
						<Button
							size="sm"
							variant="primary"
							rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
							onClick={() =>
								window.open(project.liveUrl, "_blank", "noopener,noreferrer")
							}
						>
							Live Project
						</Button>
					)}

					{project.githubUrl && (
						<Button
							size="sm"
							variant="secondary"
							leftIcon={<GitCommit className="h-3.5 w-3.5" />}
							onClick={() =>
								window.open(project.githubUrl, "_blank", "noopener,noreferrer")
							}
						>
							Source
						</Button>
					)}

					{!project.liveUrl && !project.githubUrl && (
						<div className="text-muted-foreground flex items-center gap-2 text-xs">
							<Globe2 className="h-3.5 w-3.5" />
							<span>Private / academic project</span>
						</div>
					)}
				</div>
			</div>
		</motion.article>
	);
}

export default function Projects() {
	return (
		<section id="projects" className="bg-background z-10">
			<Container className="py-20 sm:py-24 lg:py-28">
				<div className="mx-auto max-w-7xl">
					{/* Section heading */}
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
								03 / Projects
							</span>
						</div>

						<div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
							<div>
								<h2 className="text-foreground max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
									Things I've <span className="text-primary">built.</span>
								</h2>

								<p className="text-muted-foreground mt-4 max-w-2xl text-base leading-7 sm:text-lg">
									A collection of systems, products, and experiments where
									software engineering meets real-world problems.
								</p>
							</div>

							<div className="border-border bg-card flex w-fit items-center gap-3 rounded-lg border px-3 py-2">
								<div className="bg-primary h-2 w-2 animate-pulse rounded-full" />

								<span className="text-muted-foreground font-mono text-xs">
									{projects.length} projects · continuously building
								</span>
							</div>
						</div>
					</motion.div>

					{/* Projects */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-80px" }}
						className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
					>
						{projects.map((project) => (
							<ProjectCard key={project.name} project={project} />
						))}
					</motion.div>

					{/* Footer note */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.5 }}
						onClick={() => {
							window.open(
								"https://github.com/siddharthk8",
								"_blank",
								"noopener,noreferrer",
							);
						}}
						className="mt-10 flex cursor-pointer items-center justify-center"
					>
						<div className="text-muted-foreground flex items-center gap-2 font-mono text-xs">
							<ExternalLink className="h-3.5 w-3.5" />
							<span>More projects are constantly being built.</span>
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	);
}
