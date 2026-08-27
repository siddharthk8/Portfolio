import { Outlet } from "react-router";

import config from "@/core/config";
import MaintenancePage from "@/pages/MaintenancePage";

const RootLayout = () => {
	if (!config.maintenanceMode) {
		return (
			<div className="bg-background text-foreground min-h-screen">
				<MaintenancePage />
			</div>
		);
	}

	return <Outlet />;
};

export default RootLayout;
