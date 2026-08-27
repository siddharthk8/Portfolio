const config = {
	maintenanceMode: String(import.meta.env.VITE_MAINTENANCE_MODE) === "true",
};

export default config;
