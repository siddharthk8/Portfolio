function Background() {
	return (
		<div
			className="pointer-events-none fixed inset-x-0 top-[var(--header-height)] bottom-0 z-0 opacity-[0.05]"
			aria-hidden="true"
			style={{
				backgroundImage: `
					linear-gradient(to right, currentColor 1px, transparent 1px),
					linear-gradient(to bottom, currentColor 1px, transparent 1px)
				`,
				backgroundSize: "48px 48px",
			}}
		/>
	);
}

export default Background;
