export default function Footer() {
	return (
		<footer className="border-border/60 bg-background/80 text-foreground supports-backdrop-filter:bg-background/60 border-t backdrop-blur-xl">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm sm:flex-row sm:px-6 lg:px-8">
				<span>
					© 2026 <span className="text-foreground font-medium">Siddharth Kumar</span>
				</span>

				<span>
					<span className="text-muted-foreground">Designed & built by </span>
					<span className="text-primary font-medium">Siddharth</span>
				</span>
			</div>
		</footer>
	);
}
