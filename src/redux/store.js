import {combineReducers, createStore} from "redux";
import {mealsReducer} from "./mealsReducer";

const reducers = combineReducers({
    meals: mealsReducer
})

export const store = createStore(reducers)