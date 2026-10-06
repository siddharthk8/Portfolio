function Background() {
	return (
		<div
			className="pointer-events-none fixed inset-x-0 top-[var(--header-height)] bottom-0 z-0 overflow-hidden"
			aria-hidden="true"
		>
			{/* Very subtle ambient color */}
			<div
				className="absolute -top-40 left-1/2 h-[520px] w-[1000px] -translate-x-1/2 blur-[140px]"
				style={{
					background:
						"radial-gradient(ellipse, color-mix(in srgb, var(--color-primary) 7%, transparent) 0%, transparent 70%)",
				}}
			/>

			<svg
				className="absolute inset-0 h-full w-full"
				viewBox="0 0 1440 900"
				preserveAspectRatio="none"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					{/* Main emerald gradient */}
					<linearGradient
						id="emerald-flow"
						x1="0"
						y1="0"
						x2="1440"
						y2="0"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stopColor="var(--color-primary)" stopOpacity="0" />
						<stop offset="0.25" stopColor="var(--color-primary)" stopOpacity="0.12" />
						<stop offset="0.5" stopColor="var(--color-primary)" stopOpacity="0.32" />
						<stop offset="0.72" stopColor="var(--color-primary)" stopOpacity="0.14" />
						<stop offset="1" stopColor="var(--color-primary)" stopOpacity="0" />
					</linearGradient>

					{/* Secondary neutral gradient */}
					<linearGradient
						id="neutral-flow"
						x1="0"
						y1="0"
						x2="1440"
						y2="0"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stopColor="var(--color-foreground)" stopOpacity="0" />
						<stop
							offset="0.35"
							stopColor="var(--color-foreground)"
							stopOpacity="0.035"
						/>
						<stop
							offset="0.55"
							stopColor="var(--color-foreground)"
							stopOpacity="0.12"
						/>
						<stop
							offset="0.75"
							stopColor="var(--color-foreground)"
							stopOpacity="0.035"
						/>
						<stop offset="1" stopColor="var(--color-foreground)" stopOpacity="0" />
					</linearGradient>

					{/* Soft emerald glow */}
					<filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
						<feGaussianBlur stdDeviation="10" />
					</filter>
				</defs>

				<path
					d="M-160 190C120 40 350 55 565 190C770 320 910 350 1125 220C1300 115 1450 105 1600 155"
					stroke="url(#emerald-flow)"
					strokeWidth="1.2"
				/>

				<path
					d="M-160 215C120 65 350 80 565 215C770 345 910 375 1125 245C1300 140 1450 130 1600 180"
					stroke="url(#emerald-flow)"
					strokeWidth="0.8"
				/>

				<path
					d="M-160 240C120 90 350 105 565 240C770 370 910 400 1125 270C1300 165 1450 155 1600 205"
					stroke="url(#emerald-flow)"
					strokeWidth="0.7"
				/>

				<path
					d="M-160 265C120 115 350 130 565 265C770 395 910 425 1125 295C1300 190 1450 180 1600 230"
					stroke="url(#neutral-flow)"
					strokeWidth="0.8"
				/>

				<path
					d="M-160 290C120 140 350 155 565 290C770 420 910 450 1125 320C1300 215 1450 205 1600 255"
					stroke="url(#neutral-flow)"
					strokeWidth="0.6"
				/>

				<path
					d="M-200 690C90 555 315 565 525 680C750 805 900 830 1110 690C1300 565 1460 560 1650 650"
					stroke="url(#emerald-flow)"
					strokeWidth="1"
				/>

				<path
					d="M-200 720C90 585 315 595 525 710C750 835 900 860 1110 720C1300 595 1460 590 1650 680"
					stroke="url(#emerald-flow)"
					strokeWidth="0.75"
				/>

				<path
					d="M-200 750C90 615 315 625 525 740C750 865 900 890 1110 750C1300 625 1460 620 1650 710"
					stroke="url(#neutral-flow)"
					strokeWidth="0.8"
				/>

				<path
					d="M-160 190C120 40 350 55 565 190C770 320 910 350 1125 220C1300 115 1450 105 1600 155"
					stroke="var(--color-primary)"
					strokeOpacity="0.10"
					strokeWidth="8"
					filter="url(#soft-glow)"
				/>
			</svg>

			{/* Fade edges into the page */}
			<div
				className="absolute inset-0"
				style={{
					background: `
						linear-gradient(
							to bottom,
							transparent 0%,
							transparent 65%,
							var(--color-background) 100%
						),
						linear-gradient(
							to right,
							var(--color-background) 0%,
							transparent 18%,
							transparent 82%,
							var(--color-background) 100%
						)
					`,
					opacity: 0.75,
				}}
			/>
		</div>
	);
}

export default Background;
