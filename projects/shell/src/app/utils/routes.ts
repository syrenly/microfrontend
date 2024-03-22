import { loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";
import { CustomManifest } from "mfe-common";
import { APP_ROUTES } from "../app.routes";
/**
 * Method to merge static routes to the remote ones
 * @param options dictionary of remote configurations
 * @returns the resulted routes
 */
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
				loadChildren: (): Promise<any> =>
					loadRemoteModule({
						type: "manifest",
						remoteName: key,
						exposedModule: entry.exposedModule,
					}).then(m => m[entry.ngModuleName]),
			};
		});

	return [...APP_ROUTES, ...lazyRoutes];
}
