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
	ads: IAdvertisementListModel[] = [];

	ngOnInit(): void {
		this.ads = this.getList();
	}

	getList(): IAdvertisementListModel[] {
		return [
			{
				id: "1",
				text: "Advertisement 1",
				image: "./assets/mfe2/adv1.jpg",
			},
			{
				id: "2",
				text: "Advertisement 2",
				image: "./assets/mfe2/adv2.jpg",
			},
			{
				id: "3",
				text: "Advertisement 3",
				image: "./assets/mfe2/adv3.jpg",
			},
		];
	}
}
