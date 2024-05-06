import { TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const route = {
	data: {
		path: "path",
		loadChildren: (): Promise<Routes> => new Promise((): void => {}),
	},
};

describe("AppComponent", (): void => {
	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [AppComponent],
			providers: [Router, { provide: ActivatedRoute, useValue: route }],
		}).compileComponents();
	});

	it("should create the app", (): void => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});
