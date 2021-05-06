import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import {MealItem} from "./MealItem";
import {useNavigation} from "@react-navigation/native";
import {MediumCustomText} from "./ui/MediumCustomText";

export const MealList = ({displayedMeals, noMealsText}) => {
    const navigation = useNavigation()
    const renderMealItem = (itemData) => {
        return <MealItem title={itemData.item.title}
                         duration={itemData.item.duration}
                         complexity={itemData.item.complexity}
                         image={itemData.item.imageUrl}
                         affordability={itemData.item.affordability}
                         onSelectMeal={() =>
                             navigation.navigate('MealDetail',
                                 {id: itemData.item.id})}/>
    }
    let content = <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                style={{width: '100%'}}
                renderItem={renderMealItem}/>
        </View>
    if(!displayedMeals.length || !displayedMeals) {
        content = <MediumCustomText style={styles.emptyList}>{noMealsText}</MediumCustomText>
    }
    return <>{content}</>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyList: {
        paddingVertical: 15,
        textAlign: 'center',
        fontSize: 20
    }
})