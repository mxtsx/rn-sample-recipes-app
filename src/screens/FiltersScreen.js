import React, {useCallback, useLayoutEffect, useState} from 'react';
import {Platform, StyleSheet, Switch, Text, View} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {CustomHeaderButton} from "../components/HeaderButton";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {BoldCustomText} from "../components/ui/BoldCustomText";
import {THEME} from "../theme";
import {useDispatch} from "react-redux";
import {setFilters} from "../redux/mealsReducer";

const FilterSwitch = ({label, value, setValue}) => {
    return(
        <View style={styles.filterContainer}>
            <Text style={styles.label}>
                {label}
            </Text>
            <Switch value={value}
                    thumbColor={Platform.OS === 'android' ? THEME.PRIMARY_COLOR : ''}
                    trackColor={{true: THEME.PRIMARY_COLOR, false: '#ccc'}}
                    onValueChange={newValue => setValue(newValue)} />
        </View>
    )
}

export const FiltersScreen = () => {
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const saveFiltersHandler = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegetarian: isVegetarian,
            vegan: isVegan,
        }
        dispatch(setFilters(appliedFilters))
    }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Filters',
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title={'Toggle Drawer'} iconName={'ios-menu'} onPress={ () => navigation.dispatch(DrawerActions.openDrawer())}/>
                </HeaderButtons>
            )
        })
    }, [navigation])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title={'Toggle Drawer'} iconName={'ios-save'} onPress={saveFiltersHandler}/>
                </HeaderButtons>
            )
        })
    }, [navigation, saveFiltersHandler])

    return (
        <View style={styles.container}>
            <BoldCustomText style={styles.title}>Available Filters / Restrictions</BoldCustomText>
            <FilterSwitch label={'Gluten-free'} value={isGlutenFree} setValue={setIsGlutenFree}/>
            <FilterSwitch label={'Lactose-free'} value={isLactoseFree} setValue={setIsLactoseFree}/>
            <FilterSwitch label={'Vegetarian'} value={isVegetarian} setValue={setIsVegetarian}/>
            <FilterSwitch label={'Vegan'} value={isVegan} setValue={setIsVegan}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    label: {
        fontSize: 18
    }
})