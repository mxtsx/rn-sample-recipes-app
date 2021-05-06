import React from 'react';
import {MealList} from "../components/MealList";
import {useSelector} from "react-redux";

export const FavoritesScreen = () => {
    const displayedMeals = useSelector(state => state.meals.favoriteMeals)

    return <MealList displayedMeals={displayedMeals} noMealsText={'Add your favorite meals!'}/>
}