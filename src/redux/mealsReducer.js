import {MEALS} from "../data/dummy-data";

const TOGGLE_FAVORITE = 'meals/TOGGLE_FAVORITE'
const SET_FILTERS = 'meals/SET_FILTERS'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

export const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const index = state.favoriteMeals.findIndex(m => m.id === action.payload.id)
            if(index >= 0) {
                const updatedFavMeals = [...state.favoriteMeals]
                updatedFavMeals.splice(index, 1)
                return {
                    ...state,
                    favoriteMeals: updatedFavMeals
                }
            } else {
                const meal = state.meals.find(m => m.id === action.payload.id)
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(meal)
                }
            }
        case SET_FILTERS:
            const appliedFilters = action.payload.filters
            const filteredMeals = state.meals.filter(m => {
                if(appliedFilters.glutenFree && !m.glutenFree) {
                    return false
                }
                if(appliedFilters.lactoseFree && !m.isLactoseFree) {
                    return false
                }
                if(appliedFilters.vegetarian && !m.isVegetarian) {
                    return false
                }
                if(appliedFilters.vegan && !m.isVegan) {
                    return false
                }
                return true
            })
            return {...state, filteredMeals: filteredMeals}
        default:
            return state
    }
}

export const toggleFavorite = (id) => ({type: TOGGLE_FAVORITE, payload: {id}})
export const setFilters = (filters) => ({type: SET_FILTERS, payload: {filters}})