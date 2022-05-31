export type ID = number;
export type URL = string;

export interface IState{
	page: number;
	favourites: ICat[];
}

export interface ICat {
	id: ID;
	breeds: any[];
	categories: any[];
	url: URL;
}