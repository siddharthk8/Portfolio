import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import BaseLayout from "@/layouts/BaseLayout";
import ErrorPage from "@/pages/ErrorPage";
import NotFoundPage from "@/pages/NotFoundPage";

import App from "./App.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		errorElement: <ErrorPage />,
		children: [
			// HomePage
			{
				index: true,
				element: <App />,
			},
			// 404
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
