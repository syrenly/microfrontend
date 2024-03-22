import { loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";
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
const ROUTES_FOR_STATIC_IMPORT: Routes = [
	{
		path: "flights",
		loadChildren: (): Promise<any> =>
			loadRemoteModule({
				type: "manifest",
				remoteName: "mfe1",
				exposedModule: "./Module",
			}).then(m => m.FlightsModule),
	},
	{
		path: "bookings",
		loadChildren: (): Promise<any> =>
			loadRemoteModule({
				type: "manifest",
				remoteName: "mfe2",
				exposedModule: "./Module",
			}).then(m => m.BookingsModule),
	},
];
