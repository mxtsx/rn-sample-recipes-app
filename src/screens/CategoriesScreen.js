import React, {useLayoutEffect} from 'react';
import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {CategoriesList} from "../components/CategoriesList";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {CustomHeaderButton} from "../components/HeaderButton";

export const CategoriesScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Meal Categories',
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title={'Toggle Drawer'} iconName={'ios-menu'} onPress={ () => navigation.dispatch(DrawerActions.openDrawer())}/>
                </HeaderButtons>
            )
        })
    }, [navigation])

    const renderGridItem = (itemData) => {
        return <CategoriesList title={itemData.item.title}
                               color={itemData.item.color}
                               onPressHandler={() =>
                                   navigation.navigate('CategoryMeals',
                                   {id: itemData.item.id})}/>

    }
    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem}/>
    );
};