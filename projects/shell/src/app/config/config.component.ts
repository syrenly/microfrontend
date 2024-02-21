import { getManifest } from "@angular-architects/module-federation";
import { Component } from "@angular/core";
import { CustomManifest } from "../utils/config";

@Component({
	selector: "app-config",
	templateUrl: "./config.component.html",
})
export class ConfigComponent {
	manifest = getManifest<CustomManifest>();
}

