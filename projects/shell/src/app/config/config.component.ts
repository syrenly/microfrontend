import { getManifest } from "@angular-architects/module-federation";
import { JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import { CustomManifest } from "mfe-common";

@Component({
	selector: "shell-config",
	templateUrl: "./config.component.html",
	standalone: true,
	imports: [JsonPipe],
})
export class ConfigComponent {
	manifest = getManifest<CustomManifest>();
}
