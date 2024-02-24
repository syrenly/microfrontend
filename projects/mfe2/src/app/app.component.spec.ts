import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", (): void => {
	beforeEach(async((): void => {
		TestBed.configureTestingModule({
    declarations: [AppComponent],
}).compileComponents();
	}));

	it("should create the app", (): void => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it("should render title", () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector(".content span").textContent).toContain("mfe2 app is running!");
	});
});
