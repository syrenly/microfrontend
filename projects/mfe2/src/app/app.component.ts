import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AdvertisementComponent } from "./advertisement/advertisement.component";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
	standalone: true,
	imports: [RouterOutlet, AdvertisementComponent],
})
export class AppComponent {}

