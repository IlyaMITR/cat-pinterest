import { ICat, ID } from "./cats";

interface IAction{
	type: string;
}

export interface IAddCatAction extends IAction{
	payload: ICat;
}

export interface IDeleteCatAction extends IAction{
	payload: ID;
}

export interface ISetPageAction extends IAction{
	payload: number;
}