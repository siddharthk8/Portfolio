import { Loader2 } from "lucide-react";

const variants = {
	accent: "bg-accent text-accent-foreground hover:bg-accent/80",
	primary: "bg-primary text-primary-foreground hover:bg-primary/90",
	success: "bg-primary/15 text-primary hover:bg-primary/25",
	danger: "bg-destructive/15 text-destructive hover:bg-destructive/25",
	warning: "bg-accent text-accent-foreground hover:bg-accent/80",
	secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
	ghost: "bg-transparent text-foreground hover:bg-secondary",
};

const sizes = {
	sm: "h-8 px-3 text-xs gap-1.5 rounded-md",
	md: "h-10 px-5 text-sm gap-2 rounded-lg",
	lg: "h-12 px-6 text-base gap-2.5 rounded-xl",
};

export default function Button({
	children,
	type = "button",
	variant = "primary",
	size = "md",
	className = "",
	loading = false,
	loadingText = "Loading...",
	disabled = false,
	leftIcon = null,
	rightIcon = null,
	...props
}) {
	return (
		<button
			type={type}
			disabled={disabled || loading}
			className={`group focus-visible:ring-primary/30 relative inline-flex cursor-pointer items-center justify-center overflow-hidden border border-black/10 font-medium shadow-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none active:opacity-95 disabled:pointer-events-none disabled:opacity-60 dark:border-white/10 dark:hover:border-white/15 ${sizes[size]} ${variants[variant]} ${className}`}
			{...props}
		>
			{loading ? (
				<>
					<Loader2 className="h-4 w-4 animate-spin" />
					<span>{loadingText}</span>
				</>
			) : (
				<>
					{leftIcon && <span>{leftIcon}</span>}
					<span>{children}</span>
					{rightIcon && <span>{rightIcon}</span>}
				</>
			)}
		</button>
	);
}
