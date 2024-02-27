import { loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";
import { APP_ROUTES } from "../app.routes";
import { CustomManifest } from "./config";

export function buildRoutes(options: CustomManifest): Routes {
	const lazyRoutes: Routes = Object.keys(options)
		.filter(key => {
			const entry = options[key];
			return entry["exposedModule"] === "./routes";
		})
		.map(key => {
			const entry = options[key];
			return {
				path: entry.routePath,
				loadChildren: () =>
					loadRemoteModule({
						type: "manifest",
						remoteName: key,
						exposedModule: entry.exposedModule,
					}).then(m => m[entry.ngModuleName]),
			};
		});

	return [...APP_ROUTES, ...lazyRoutes];
}
