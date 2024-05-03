import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faStar as faStarOutlined } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { Rate } from "../models";

@Component({
	selector: "mfe-rate",
	standalone: true,
	imports: [FontAwesomeModule],
	templateUrl: "./rate.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RateComponent {
	@Input() rate: Rate = Rate.Unknown;
	faStarOutlined = faStarOutlined;
	faStarSolid = faStarSolid;
	Rate = Rate;
}
