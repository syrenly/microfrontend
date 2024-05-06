import { getManifest, loadRemoteModule } from "@angular-architects/module-federation";
import { NgFor } from "@angular/common";
import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { CustomManifest, CustomRemoteConfig } from "mfe-common";
import { buildRoutes } from "./app.routes";

@Component({
	selector: "shell-root",
	standalone: true,
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
	imports: [RouterLink, NgFor, RouterOutlet],
})
export class AppComponent implements OnInit, AfterViewInit {
	/** Where the remote component will be rendered */
	@ViewChild("viewContainer", { read: ViewContainerRef, static: true })
	viewContainer!: ViewContainerRef;
	/** Where the remote advertisement component will be rendered */
	@ViewChild("advertisementViewContainer", { read: ViewContainerRef, static: true })
	advertisementViewContainer!: ViewContainerRef;
	// Async Components:
	remoteComponents: CustomRemoteConfig[] = [];
	remoteRoutes: CustomRemoteConfig[] = [];
	advertisementComponents: CustomRemoteConfig[] = [];

	constructor(private router: Router) {}

	ngOnInit(): void {
		const manifest = getManifest<CustomManifest>();
		const routes = buildRoutes(manifest);
		this.router.resetConfig(routes);

		const remotes = Object.values(manifest);
		this.remoteRoutes = remotes.filter(r => r.exposedModule === "./routes");
		this.remoteComponents = remotes.filter(r => r.purpose !== "advertisement" && r.exposedModule !== "./routes");
		this.advertisementComponents = remotes.filter(r => r.purpose === "advertisement");
	}
	ngAfterViewInit(): void {
		this.renderAdvertisements();
	}
	/** Method to dynamically render the remote component */
	renderComponent(index: number): void {
		this.viewContainer.clear();
		const { remoteEntry, exposedModule, displayName } = this.remoteComponents[index];
		loadRemoteModule({
			type: "module",
			remoteEntry,
			exposedModule,
		}).then(c => this.viewContainer.createComponent(c[displayName]));
	}
	/** Method to dynamically render the advertisement remote component */
	private renderAdvertisements(): void {
		this.advertisementViewContainer.clear();
		const { remoteEntry, exposedModule, displayName } = this.advertisementComponents[0];
		loadRemoteModule({
			type: "module",
			remoteEntry,
			exposedModule,
		}).then(c => this.advertisementViewContainer.createComponent(c[displayName]));
	}
}
