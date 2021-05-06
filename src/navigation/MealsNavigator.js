import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import React from 'react'
import {CategoryMealScreen} from "../screens/CategoryMealScreen";
import {MealDetailScreen} from "../screens/MealDetailScreen";
import {CategoriesScreen} from "../screens/CategoriesScreen";
import {Platform} from "react-native";
import {THEME} from "../theme";
import {enableScreens} from "react-native-screens";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FavoritesScreen} from "../screens/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {FiltersScreen} from "../screens/FiltersScreen";
import {MediumCustomText} from "../components/ui/MediumCustomText";

const headerStylesheet = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.PRIMARY_COLOR : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.PRIMARY_COLOR,
    headerTitleStyle: {
        fontFamily: 'JBMed'
    }
}

const bottomTabProperties = {
    activeTintColor: Platform.OS === 'android' ? '#fff' : THEME.PRIMARY_COLOR,
    activeBackgroundColor:  Platform.OS === 'android' ? THEME.PRIMARY_COLOR : "#fff",
    inactiveBackgroundColor:  Platform.OS === 'android' ? THEME.PRIMARY_COLOR : "#fff",
    labelStyle: {
        fontFamily: 'JBMed',
        fontSize: 13
    }
}

const materialBottomTabProperties = {
    barStyle: {
        backgroundColor: THEME.PRIMARY_COLOR,
    },
    activeColor: "#fff",
    shifting: true,
    sceneAnimationEnabled: true
}

const drawerNavigatorProperties = {
    backgroundColor: Platform.OS === 'android' ? THEME.PRIMARY_COLOR : "#fff"
}

const drawerNavigatorContentProperties = {
    activeTintColor: Platform.OS === 'android' ? "#fff" : THEME.PRIMARY_COLOR,
    labelStyle: {
        fontFamily: 'JBBold'
    },
    inactiveTintColor: Platform.OS === 'android' ? "lightgray" : "darkgray"
}

enableScreens()
const Stack = createStackNavigator()

const MealsNavigatorStack = () => {
    return(
        <Stack.Navigator screenOptions={headerStylesheet}>
            <Stack.Screen name={'Categories'} component={CategoriesScreen} />
            <Stack.Screen name={'CategoryMeals'} component={CategoryMealScreen} />
            <Stack.Screen name={'MealDetail'} component={MealDetailScreen} />
        </Stack.Navigator>
    )
}

const FiltersStack = () => {
    return(
        <Stack.Navigator screenOptions={headerStylesheet}>
            <Stack.Screen name={'Filters'} component={FiltersScreen} />
        </Stack.Navigator>
    )
}

const FavoritesStack = () => {
    return(
        <Stack.Navigator screenOptions={headerStylesheet}>
            <Stack.Screen name={'Favorites'} component={FavoritesScreen} />
            <Stack.Screen name={'MealDetail'} component={MealDetailScreen} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()

const MealsNavigatorIosTab = () => {
    return(
        <Tab.Navigator tabBarOptions={bottomTabProperties}>
            <Tab.Screen name="MealsStack"
                        component={MealsNavigatorStack}
                        options={{tabBarLabel: "All meals",
                            tabBarIcon: ({color}) => <Ionicons name={'ios-restaurant'} size={23} color={color} />}} />
            <Tab.Screen name="Favorites" component={FavoritesStack}
                        options={{tabBarLabel: "Favorites",
                tabBarIcon: ({color}) => <Ionicons name={'ios-star'} size={23} color={color} />}} />
        </Tab.Navigator>
    )
}

const MaterialTab = createMaterialBottomTabNavigator()

const MealsNavigatorMaterialTab = () => {
    return (
        <MaterialTab.Navigator {...materialBottomTabProperties}>
            <MaterialTab.Screen name="MealsStack"
                        component={MealsNavigatorStack}
                        options={{tabBarLabel: <MediumCustomText>All meals</MediumCustomText>,
                            tabBarIcon: ({color}) => <Ionicons name={'ios-restaurant'} size={23} color={color} />}} />
            <MaterialTab.Screen name="Favorites" component={FavoritesStack}
                        options={{tabBarLabel: <MediumCustomText>Favorites</MediumCustomText>,
                            tabBarIcon: ({color}) => <Ionicons name={'ios-star'} size={23} color={color} />}} />
        </MaterialTab.Navigator>
    )
}

const MealsNavigatorTab = () => {
    if(Platform.OS === 'android') {
        return <MealsNavigatorMaterialTab />
    } else {
        return <MealsNavigatorIosTab />
    }
}

const Drawer = createDrawerNavigator();

const MealsNavigatorDrawer = () => {
    return (
        <Drawer.Navigator drawerStyle={drawerNavigatorProperties} drawerContentOptions={drawerNavigatorContentProperties}>
            <Drawer.Screen name="Meals" component={MealsNavigatorTab} options={{drawerLabel: 'Meals'}} />
            <Drawer.Screen name="Filters" component={FiltersStack} options={{drawerLabel: 'Filters'}} />
        </Drawer.Navigator>
    );
}

export const MealsNavigator = () => {
    return(
        <NavigationContainer>
            <MealsNavigatorDrawer />
        </NavigationContainer>
    )
}