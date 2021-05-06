import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import {CATEGORIES} from "../data/dummy-data";
import {MealList} from "../components/MealList";
import {useSelector} from "react-redux";
import {MediumCustomText} from "../components/ui/MediumCustomText";

export const CategoryMealScreen = () => {
    const navigation = useNavigation()
    const {id} = useRoute().params;
    const selectedCategory = CATEGORIES.find(cat => cat.id === id)
    const meals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = meals.filter(m => m.categoryIds.indexOf(id) >= 0)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedCategory.title
        })
    }, [navigation])
    return <MealList displayedMeals={displayedMeals} noMealsText={'No meals was found :('}/>
}