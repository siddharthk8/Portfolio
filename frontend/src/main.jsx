import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import BaseLayout from "@/layouts/BaseLayout";
import RootLayout from "@/layouts/RootLayout";
import ErrorPage from "@/pages/ErrorPage";
import NotFoundPage from "@/pages/NotFoundPage";

import App from "./App.jsx";

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <BaseLayout />,
				children: [
					{
						index: true,
						element: <App />,
					},
				],
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
