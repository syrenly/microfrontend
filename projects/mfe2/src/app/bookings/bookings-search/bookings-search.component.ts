import { Component, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
	selector: "mfe2-bookings-search",
	styleUrl: "./bookings-search.component.scss",
	templateUrl: "./bookings-search.component.html",
	standalone: true,
})
export class BookingsSearchComponent {
	@ViewChild("viewContainer", { read: ViewContainerRef, static: true })
	viewContainer: ViewContainerRef | undefined;

	search(): void {
		alert("Not implemented for this demo!");
	}

	async terms(): Promise<void> {
		const comp = await import("../lazy/lazy.component").then(m => m.LazyComponent);
		this.viewContainer?.createComponent(comp);
	}
}
