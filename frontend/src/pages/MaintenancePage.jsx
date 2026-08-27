import { motion } from "framer-motion";
import { RefreshCw, Terminal, Wrench } from "lucide-react";

import Button from "@/components/Button";

const MaintenancePage = () => {
	const handleRefresh = () => {
		window.location.reload();
	};

	return (
		<section className="text-foreground relative flex min-h-screen items-center justify-center overflow-hidden">
			<div className="bg-primary/5 pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />

			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="relative w-full max-w-xl px-6 text-center"
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.4, delay: 0.1 }}
					className="bg-primary/10 mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-xl"
				>
					<Wrench className="text-primary h-5 w-5" />
				</motion.div>

				<div className="text-primary mb-4 flex items-center justify-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase">
					<span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
					maintenance_mode
				</div>

				<h1 className="text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
					We'll be back soon.
				</h1>

				<p className="text-muted-foreground mx-auto mt-5 max-w-md text-sm leading-6 sm:text-base">
					The site is currently undergoing some maintenance. We're making a few
					improvements and should be back shortly.
				</p>

				<div className="border-border bg-card mx-auto mt-8 max-w-md overflow-hidden rounded-xl border text-left shadow-sm">
					<div className="border-border bg-muted/40 flex items-center gap-2 border-b px-4 py-3">
						<div className="bg-destructive/60 h-2 w-2 rounded-full" />
						<div className="bg-primary/60 h-2 w-2 rounded-full" />
						<div className="bg-accent-foreground/40 h-2 w-2 rounded-full" />

						<div className="text-muted-foreground ml-auto flex items-center gap-1.5 font-mono text-[10px]">
							<Terminal className="h-3 w-3" />
							maintenance
						</div>
					</div>

					<div className="bg-background p-4 font-mono text-[11px] leading-6">
						<div className="text-muted-foreground">
							<span className="text-primary">$</span> system status
						</div>

						<div className="text-muted-foreground pl-4">
							site: <span className="text-foreground">temporarily offline</span>
						</div>

						<div className="text-muted-foreground pl-4">
							data: <span className="text-primary">safe</span>
						</div>

						<div className="text-primary pl-4">✓ maintenance in progress</div>
					</div>
				</div>

				<div className="mt-7 flex justify-center gap-3">
					<Button
						variant="primary"
						size="md"
						rightIcon={<RefreshCw className="h-3.5 w-3.5" />}
						onClick={handleRefresh}
					>
						Try Again
					</Button>
				</div>
			</motion.div>
		</section>
	);
};

export default MaintenancePage;
