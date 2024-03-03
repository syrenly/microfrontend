import { Component, ViewChild, ViewContainerRef } from "@angular/core";
import { LazyComponent } from "../lazy/lazy.component";
@Component({
	selector: "mfe1-flights-search",
	templateUrl: "./flights-search.component.html",
	styleUrl: "./flights-search.component.scss",
	standalone: true,
})
export class FlightsSearchComponent {
	@ViewChild("viewContainer", { read: ViewContainerRef, static: true })
	viewContainer!: ViewContainerRef;

	search(): void {
		alert("Not implemented for this demo!");
	}

	terms(): void {
		this.viewContainer.createComponent(LazyComponent);
	}
}
