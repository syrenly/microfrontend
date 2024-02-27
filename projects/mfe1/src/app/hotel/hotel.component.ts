import { NgFor } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MfeNearbyBase } from "mfe-common";
import { INearbyModel, Rate } from "projects/mfe-common/src/lib/models";

@Component({
	selector: "mfe1-hotel",
	standalone: true,
	imports: [NgFor],
	templateUrl: "./hotel.component.html",
	styleUrl: "./hotel.component.scss",
})
export class HotelComponent implements MfeNearbyBase, OnInit {
	hotels: INearbyModel[] = [];

	ngOnInit(): void {
		this.hotels = this.getNearbyList();
	}

	getNearbyList(): INearbyModel[] {
		return [
			{
				id: "1",
				distance: "10Km",
				rate: Rate.FourStars,
				text: "Hotel K",
			},
		];
	}
}
