import React, {useLayoutEffect} from 'react';
import {Image, ScrollView, StyleSheet, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {CustomHeaderButton} from "../components/HeaderButton";
import {MediumCustomText} from "../components/ui/MediumCustomText";
import {BoldCustomText} from "../components/ui/BoldCustomText";
import {useDispatch, useSelector} from "react-redux";
import {toggleFavorite} from "../redux/mealsReducer";

const ListItem = ({children}) => {
    return(
        <MediumCustomText style={styles.list}>
            {children}
        </MediumCustomText>
    )
}

export const MealDetailScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {id} = useRoute().params
    const favoritesMeals = useSelector(state => state.meals.favoriteMeals)
    const isFavorite = favoritesMeals.some(m => m.id === id)
    const meals = useSelector(state => state.meals.meals)
    const selectedMeal = meals.find(m => m.id === id)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title={'Favorite'}
                          iconName={isFavorite
                              ? 'ios-star'
                              : 'ios-star-outline'}
                          onPress={() => dispatch(toggleFavorite(id))} />
                </HeaderButtons>
            )
        })
    }, [navigation, isFavorite, selectedMeal])
    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <MediumCustomText>
                    {selectedMeal.duration}m
                </MediumCustomText>
                <MediumCustomText>
                    {selectedMeal.complexity.toUpperCase()}
                </MediumCustomText>
                <MediumCustomText>
                    {selectedMeal.affordability.toUpperCase()}
                </MediumCustomText>
            </View>
            <BoldCustomText style={styles.title}>
                Ingredients
            </BoldCustomText>
            {selectedMeal.ingredients.map(m => {
                return <ListItem key={m}>{m}</ListItem>
            })}
            <BoldCustomText style={styles.title}>
                Steps
            </BoldCustomText>
            {selectedMeal.steps.map(m => {
                return <ListItem key={m}>{m}</ListItem>
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 22,
        textAlign: 'center'
    },
    list: {
        marginVertical: 5,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})