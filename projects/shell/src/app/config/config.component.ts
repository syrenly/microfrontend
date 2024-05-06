import { getManifest } from "@angular-architects/module-federation";
import { JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import { CustomManifest } from "mfe-common";

@Component({
	selector: "shell-config",
	standalone: true,
	imports: [JsonPipe],
	templateUrl: "./config.component.html",
	styleUrl: "./config.component.scss",
})
export class ConfigComponent {
	manifest = getManifest<CustomManifest>();
}
