import { combineReducers, configureStore } from "@reduxjs/toolkit";
import catSlice from "./slices/cat-slice";


const rootReducer = combineReducers({
	data: catSlice
})

export const store = () => 
{
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']