const Container = ({ className = "", children }) => {
	return (
		<div className={`bg-background text-foreground px-8 py-12 md:px-16 lg:px-24 ${className}`}>
			{children}
		</div>
	);
};

export default Container;
