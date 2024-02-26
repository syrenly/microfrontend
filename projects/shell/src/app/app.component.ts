import { getManifest } from "@angular-architects/module-federation";
import { NgFor } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { CustomManifest, CustomRemoteConfig } from "./utils/config";
import { buildRoutes } from "./utils/routes";

@Component({
	selector: "app-root",
	styleUrl: "./app.component.scss",
	templateUrl: "./app.component.html",
	standalone: true,
	imports: [RouterLink, NgFor, RouterOutlet],
})
export class AppComponent implements OnInit {
	remotes: CustomRemoteConfig[] = [];

	constructor(private router: Router) {}

	async ngOnInit(): Promise<void> {
		const manifest = getManifest<CustomManifest>();
		const routes = buildRoutes(manifest);
		this.router.resetConfig(routes);

		this.remotes = Object.values(manifest);
	}
}
