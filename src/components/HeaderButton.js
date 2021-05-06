import React from 'react';
import {HeaderButton} from "react-navigation-header-buttons";
import {Ionicons} from "@expo/vector-icons";
import {THEME} from "../theme";
import {Platform} from "react-native";

export const CustomHeaderButton = (props) => {
    return <HeaderButton {...props}
                         color={Platform.OS === 'ios'
                             ? THEME.PRIMARY_COLOR
                             : '#fff'}
                         iconSize={23}
                         IconComponent={Ionicons} />
}