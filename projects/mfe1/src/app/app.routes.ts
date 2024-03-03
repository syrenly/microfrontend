import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES: Routes = [
	{
		path: "",
		component: HomeComponent,
		pathMatch: "full",
	},
	{
		path: "flights",
		loadChildren: () => import("./flights/flights.routes").then(r => r.FLIGHTS_ROUTES),
	},
];
