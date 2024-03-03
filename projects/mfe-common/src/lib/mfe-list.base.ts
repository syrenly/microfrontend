import { IListModel } from "./models";
import { Purpose } from "./types";

export abstract class MfeListBase {
	abstract purpose: Purpose;
	abstract getList(): IListModel[];
}
