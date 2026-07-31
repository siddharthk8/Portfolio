function HoverButton({ children, className = "", ...props }) {
	return (
		<button
			aria-haspopup="true"
			className={`hover:bg-secondary rounded-lg p-1.5 transition-colors duration-150 sm:p-2 ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}

export default HoverButton;
