import { Component, ViewChild, ViewContainerRef } from "@angular/core";
import { LazyComponent } from "../lazy/lazy.component";
@Component({
	selector: "app-flights-search",
	templateUrl: "./flights-search.component.html",
	styleUrl: "./flights-search.component.scss",
	standalone: true,
})
export class FlightsSearchComponent {
	@ViewChild("viewContainer", { read: ViewContainerRef, static: true })
	viewContainer!: ViewContainerRef;

	constructor(private readonly viewContainerRef: ViewContainerRef) {}

	search(): void {
		alert("Not implemented for this demo!");
	}

	terms(): void {
		this.viewContainer.createComponent(LazyComponent);
	}
}
