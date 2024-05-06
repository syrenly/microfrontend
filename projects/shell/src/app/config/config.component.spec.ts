import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ConfigComponent } from "./config.component";

describe("ConfigComponent", (): void => {
	let component: ConfigComponent;
	let fixture: ComponentFixture<ConfigComponent>;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [ConfigComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ConfigComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", (): void => {
		expect(component).toBeTruthy();
	});
});
