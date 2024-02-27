import { INearbyModel } from "./models";

export abstract class MfeNearbyBase {
	abstract getNearbyList(): INearbyModel[];
}
