import { Component, OnInit } from "@angular/core";
import { IListModel, MfeListBase, Purpose } from "mfe-common";

interface IAdvertisementListModel extends IListModel {
	image: string;
}

@Component({
	selector: "mfe2-advertisement",
	standalone: true,
	imports: [],
	templateUrl: "./advertisement.component.html",
	styleUrl: "./advertisement.component.scss",
})
export class AdvertisementComponent implements MfeListBase, OnInit {
	purpose: Purpose = "advertisement";
	advs: IAdvertisementListModel[] = [];

	ngOnInit(): void {
		this.advs = this.getList();
	}

	getList(): IAdvertisementListModel[] {
		return [
			{
				id: "1",
				text: "Advertisement 1",
				image: "./assets/ads1.webp",
			},
			{
				id: "2",
				text: "Advertisement 2",
				image: "./assets/ads2.webp",
			},
			{
				id: "3",
				text: "Advertisement3",
				image: "./assets/ads3.webp",
			},
		];
	}
}
