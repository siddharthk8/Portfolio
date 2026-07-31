import { Menu, Monitor, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router";

import useTheme from "@/shared/hooks/useTheme";

import HoverButton from "../Button/HoverButton";
import Logo from "../Logo";

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

	const mobileMenuRef = useRef(null);
	const mobileButtonRef = useRef(null);
	const themeMenuRef = useRef(null);

	const location = useLocation();
	const { theme, systemTheme, setTheme } = useTheme();

	const currentTheme = theme === "system" ? systemTheme : theme;
	const ThemeIcon = currentTheme === "dark" ? Moon : Sun;

	const themeItems = [
		{ name: "Light", value: "light", icon: Sun },
		{ name: "Dark", value: "dark", icon: Moon },
		{ name: "System", value: "system", icon: Monitor },
	];

	const navItems = [
		{
			name: "About",
			link: "#about",
		},
		{
			name: "Experience",
			link: "#experience",
		},
		{
			name: "Projects",
			link: "#projects",
		},
		{
			name: "Skills",
			link: "#skills",
		},
		{
			name: "Contact",
			link: "#contact",
		},
	];

	const handleLogoClick = () => {
		if (location.pathname === "/") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});

			window.history.replaceState(
				null,
				"",
				window.location.pathname + window.location.search,
			);
		}
	};

	const handleNavClick = () => {
		setIsMobileMenuOpen(false);
	};

	const toggleThemeMenu = () => {
		setIsThemeMenuOpen((value) => !value);
		setIsMobileMenuOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (themeMenuRef.current && !themeMenuRef.current.contains(event.target)) {
				setIsThemeMenuOpen(false);
			}

			if (
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target) &&
				mobileButtonRef.current &&
				!mobileButtonRef.current.contains(event.target)
			) {
				setIsMobileMenuOpen(false);
			}
		};

		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				setIsThemeMenuOpen(false);
				setIsMobileMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<nav
			className="border-border/60 bg-background/80 text-foreground supports-backdrop-filter:bg-background/60 fixed top-0 w-full border-b backdrop-blur-xl"
			style={{ height: "var(--header-height)" }}
		>
			<div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<button
					type="button"
					onClick={handleLogoClick}
					className="group flex shrink-0 cursor-pointer items-center gap-2"
					aria-label="Go to homepage"
				>
					<Logo className="h-8 w-12 overflow-hidden" />

					<span className="font-mono text-lg tracking-tight sm:text-xl">
						<span className="text-primary">Siddharth </span>
						<span className="text-foreground">Kr.</span>
					</span>
				</button>

				{/* Desktop Navigation */}
				<nav className="hidden items-center justify-center gap-8 md:flex lg:gap-10">
					{navItems.map((item) => (
						<NavLink
							key={item.name}
							to={item.link}
							replace
							className="group text-muted-foreground hover:text-foreground relative py-2 text-sm font-medium transition-colors duration-200"
						>
							{item.name}

							<span className="bg-primary absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 rounded-full transition-transform duration-200 group-hover:scale-x-100" />
						</NavLink>
					))}
				</nav>

				{/* Right Controls */}
				<div className="flex items-center gap-2">
					{/* Theme Switcher */}
					<div ref={themeMenuRef} className="relative">
						<HoverButton
							onClick={toggleThemeMenu}
							aria-label="Change theme"
							aria-expanded={isThemeMenuOpen}
						>
							<ThemeIcon className="text-foreground h-5 w-5" />
						</HoverButton>

						{isThemeMenuOpen && (
							<div className="border-border bg-popover text-popover-foreground absolute right-0 mt-2 w-40 rounded-lg border p-1.5 shadow-lg">
								{themeItems.map((item) => {
									const Icon = item.icon;
									const isSelected = theme === item.value;

									return (
										<button
											key={item.value}
											type="button"
											onClick={() => {
												setTheme(item.value);
												setIsThemeMenuOpen(false);
											}}
											className={`mt-1 flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
												isSelected
													? "bg-secondary text-foreground"
													: "text-muted-foreground hover:bg-secondary hover:text-foreground"
											}`}
										>
											<Icon className="h-4 w-4" />

											<span>{item.name}</span>

											{isSelected && (
												<span className="bg-primary ml-auto h-1.5 w-1.5 rounded-full" />
											)}
										</button>
									);
								})}
							</div>
						)}
					</div>

					{/* Mobile Menu */}
					<button
						ref={mobileButtonRef}
						type="button"
						onClick={() => setIsMobileMenuOpen((value) => !value)}
						className="text-muted-foreground hover:bg-secondary hover:text-foreground rounded-md p-2 transition-colors md:hidden"
						aria-label="Toggle navigation menu"
						aria-expanded={isMobileMenuOpen}
					>
						{isMobileMenuOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMobileMenuOpen && (
				<div
					ref={mobileMenuRef}
					className="border-border bg-background/95 border-t shadow-md backdrop-blur-xl md:hidden"
				>
					<div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
						<div className="flex flex-col">
							{navItems.map((item) => (
								<NavLink
									key={item.name}
									to={item.link}
									replace
									onClick={handleNavClick}
									className={({ isActive }) =>
										`border-l-2 px-4 py-3 text-sm font-medium transition-colors ${
											isActive
												? "border-primary bg-secondary/50 text-foreground"
												: "text-muted-foreground hover:border-border hover:bg-secondary/40 hover:text-foreground border-transparent"
										}`
									}
								>
									{item.name}
								</NavLink>
							))}
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
