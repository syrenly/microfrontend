import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "mfe1-flights",
	standalone: true,
	imports: [RouterOutlet],
	providers: [],
	templateUrl: "./flights.component.html",
	styleUrl: "./flights.component.scss",
})
export class FlightsComponent {}
