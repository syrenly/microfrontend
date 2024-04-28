import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "mfe2-root",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "mfe2";
}
