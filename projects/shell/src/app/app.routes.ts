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
	// {
	// 	path: "flights",
	// 	loadChildren: () =>
	// 		loadRemoteModule({
	// 			type: "manifest",
	// 			remoteName: "mfe1",
	// 			exposedModule: "./Module",
	// 		}).then(m => m.FlightsModule),
	// },
	// {
	// 	path: "bookings",
	// 	loadChildren: () =>
	// 		loadRemoteModule({
	// 			type: "manifest",
	// 			remoteName: "mfe2",
	// 			exposedModule: "./Module",
	// 		}).then(m => m.BookingsModule),
	// },
];
