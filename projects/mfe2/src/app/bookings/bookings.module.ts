import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BookingsSearchComponent } from "./bookings-search/bookings-search.component";
import { FLIGHTS_ROUTES } from "./bookings.routes";

@NgModule({
    imports: [CommonModule, RouterModule.forChild(FLIGHTS_ROUTES), BookingsSearchComponent],
})
export class BookingsModule {}
