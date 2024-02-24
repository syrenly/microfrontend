import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
// import { BookingsModule } from './bookings/bookings.module';
import { APP_ROUTES } from "./app.routes";

@NgModule({
    imports: [
        BrowserModule,
        // BookingsModule,
        RouterModule.forRoot(APP_ROUTES),
        HomeComponent,
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
