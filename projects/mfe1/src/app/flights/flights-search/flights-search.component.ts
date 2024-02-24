import { Component, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
    selector: "app-flights-search",
    templateUrl: "./flights-search.component.html",
    standalone: true,
})
export class FlightsSearchComponent {
	@ViewChild("vc", { read: ViewContainerRef, static: true })
	viewContainer: ViewContainerRef | undefined;

	search(): void {
		alert("Not implemented for this demo!");
	}

	async terms(): Promise<void> {
		const comp = await import("../lazy/lazy.component").then(m => m.LazyComponent);

		this.viewContainer?.createComponent(comp);
	}
}
