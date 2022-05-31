import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../../types/cats";
import { IAddCatAction, IDeleteCatAction } from "../../types/actions";

const initObj: IState = {
	page: 1,
	favourites: []
}

const saveDataInLS = (state: IState) => {
	localStorage.setItem('state', JSON.stringify(state))
}

const initState: IState = localStorage.getItem('state') === null ? {...initObj} : JSON.parse(localStorage.getItem('state')!)

const catSlice = createSlice({
	name: 'cats',
	initialState: initState,
	reducers: {
		addCat(state, action: IAddCatAction) {
			state.favourites.push(action.payload)
			saveDataInLS(state)
		},
		deleteCat(state, action: IDeleteCatAction) {
			const index = state.favourites.findIndex(a => a.id === action.payload)
			state.favourites.splice(index, 1)
			saveDataInLS(state)
		},
		setPage(state, action: IDeleteCatAction) {
			state.page = action.payload
			saveDataInLS(state)
		}
	}
})

export default catSlice.reducer;
export const { addCat, deleteCat, setPage } = catSlice.actions;