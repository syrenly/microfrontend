import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "mfe2-home",
	templateUrl: "./home.component.html",
	standalone: true,
	imports: [RouterLink],
})
export class HomeComponent {}
