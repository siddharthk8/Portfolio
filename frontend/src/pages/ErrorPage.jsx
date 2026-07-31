import { AlertTriangle } from "lucide-react";

import Container from "@/components/Container";

function ErrorPage() {
	return (
		<div className="bg-background flex min-h-screen items-center justify-center">
			<Container>
				<div className="mx-auto max-w-xl text-center">
					<div className="mt-2 flex justify-center">
						<div className="bg-destructive/10 rounded-full p-4">
							<AlertTriangle className="text-destructive size-10" />
						</div>
					</div>

					<h1 className="text-foreground mt-6 text-4xl font-bold">
						Something went wrong
					</h1>

					<p className="text-muted-foreground mx-auto mt-4 max-w-md text-lg">
						We're sorry, but an unexpected error occurred. Please try refreshing the
						page or come back in a few moments.
					</p>
				</div>
			</Container>
		</div>
	);
}

export default ErrorPage;
