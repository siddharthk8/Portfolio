function LinkedInIcon({ size = 24, color = "currentColor" }) {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 14 16"
			fill={color}
			role="img"
			xmlns="http://www.w3.org/2000/svg"
		>
			{" "}
			<path d="M0,16 L3,16 L3,6 L0,6 L0,16 Z M1.501,4.3 C2.495,4.3 3.3,3.494 3.3,2.5 C3.3,1.506 2.495,0.7 1.501,0.7 C0.508,0.7 -0.3,1.506 -0.3,2.5 C-0.3,3.494 0.508,4.3 1.501,4.3 Z" />{" "}
			<path d="M5,6 L7.827,6 L7.827,7.441 L7.858,7.441 C8.289,6.664 9.562,5.875 11.136,5.875 C14.157,5.875 15,7.792 15,10.45 L15,16 L12,16 L12,10.997 C12,9.525 11.469,8.5 10.227,8.5 C8.719,8.5 8,9.694 8,11.197 L8,16 L5,16 L5,6 Z" />{" "}
		</svg>
	);
}

export default LinkedInIcon;
