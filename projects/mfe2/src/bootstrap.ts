import { enableProdMode, importProvidersFrom } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { APP_ROUTES } from "./app/app.routes";
import { provideRouter } from "@angular/router";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";

if (environment.production) {
	enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule),
        provideRouter(APP_ROUTES)
    ]
})
	.catch(err => console.error(err));
