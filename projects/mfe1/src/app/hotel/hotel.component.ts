import { NgFor } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IListModel, MfeListBase, Purpose, Rate, RateComponent } from "mfe-common";

interface IHotelListModel extends IListModel {
	distance: string;
	rate: Rate;
}

@Component({
	selector: "mfe1-hotel",
	standalone: true,
	imports: [NgFor, RateComponent],
	templateUrl: "./hotel.component.html",
	styleUrl: "./hotel.component.scss",
})
export class HotelComponent implements MfeListBase, OnInit {
	purpose: Purpose = "hotel";
	hotels: IHotelListModel[] = [];

	ngOnInit(): void {
		this.hotels = this.getList();
	}

	getList(): IHotelListModel[] {
		return [
			{
				id: "1",
				distance: "10Km",
				rate: Rate.FourStars,
				text: "Hotel K",
			},
			{
				id: "2",
				distance: "15Km",
				rate: Rate.FiveStars,
				text: "Royal Hotel",
			},
			{
				id: "3",
				distance: "12Km",
				rate: Rate.TwoStars,
				text: "Spring Awakening B&B",
			},
		];
	}
}
