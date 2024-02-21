import { Component, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
	selector: "app-bookings-search",
	templateUrl: "./bookings-search.component.html",
})
export class BookingsSearchComponent {
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
