import { getManifest, loadRemoteModule } from "@angular-architects/module-federation";
import { NgFor } from "@angular/common";
import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
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
	@ViewChild("viewContainer", { read: ViewContainerRef, static: true })
	viewContainer!: ViewContainerRef;

	remoteComponents: CustomRemoteConfig[] = [];
	remoteRoutes: CustomRemoteConfig[] = [];

	constructor(private router: Router) {}

	async ngOnInit(): Promise<void> {
		const manifest = getManifest<CustomManifest>();
		const routes = buildRoutes(manifest);
		this.router.resetConfig(routes);

		const remotes = Object.values(manifest);
		this.remoteRoutes = remotes.filter(r => r.exposedModule === "./routes");
		this.remoteComponents = remotes.filter(r => r.exposedModule === "./NearbyComponent");
	}

	renderComponent(index: number): void {
		this.viewContainer.clear();
		const { remoteEntry, remoteName, exposedModule, displayName } = this.remoteComponents[index];
		loadRemoteModule({
			type: "module",
			remoteEntry,
			exposedModule,
		}).then(c => this.viewContainer.createComponent(c[displayName]));
	}
}
