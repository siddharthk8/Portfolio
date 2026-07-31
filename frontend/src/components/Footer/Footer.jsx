export default function Footer() {
	return (
		<footer className="border-border bg-background text-muted-foreground z-20 border-t">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm sm:flex-row sm:px-6 lg:px-8">
				<span>
					© 2026 <span className="text-foreground font-medium">Siddharth Kr.</span>. All
					rights reserved.
				</span>

				<span>
					<span className="text-foreground/80">Built with care by</span>{" "}
					<span className="text-primary font-medium">Siddharth</span>
				</span>
			</div>
		</footer>
	);
}
