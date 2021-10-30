import {combineReducers} from "redux";
import {homeReducer} from "./homeReducer";

export const rootReducer = combineReducers({
    home:homeReducer
})


export type RootState = ReturnType<typeof rootReducer>

