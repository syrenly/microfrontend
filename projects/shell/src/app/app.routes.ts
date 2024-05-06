import { loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";
import { CustomManifest } from "mfe-common";
import { ConfigComponent } from "./config/config.component";
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES: Routes = [
	{
		path: "",
		component: HomeComponent,
		pathMatch: "full",
	},
	{
		path: "config",
		component: ConfigComponent,
	},
];
/** Add this routes to APP_ROUTES if you need to implement a static import (you will need other changes) */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ROUTES_FOR_STATIC_IMPORT: Routes = [
	{
		path: "flights",
		loadChildren: (): Promise<Routes> =>
			loadRemoteModule({
				type: "manifest",
				remoteName: "mfe1",
				exposedModule: "./Module",
			}).then(m => m.FlightsModule),
	},
	{
		path: "bookings",
		loadChildren: (): Promise<Routes> =>
			loadRemoteModule({
				type: "manifest",
				remoteName: "mfe2",
				exposedModule: "./Module",
			}).then(m => m.BookingsModule),
	},
];

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
				loadChildren: (): Promise<Routes> =>
					loadRemoteModule({
						type: "manifest",
						remoteName: key,
						exposedModule: entry.exposedModule,
					}).then(m => m[entry.ngModuleName]),
			};
		});

	return [...APP_ROUTES, ...lazyRoutes];
}
