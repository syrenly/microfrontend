export interface INearbyModel {
	id: string;
	text: string;
	distance: string;
	rate: Rate;
	// component: Component;
}

export enum Rate {
	Unknown = 0,
	OneStar = 1,
	TwoStars = 2,
	ThreeStars = 3,
	FourStars = 4,
	FiveStars = 5,
}
