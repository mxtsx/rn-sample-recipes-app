import React from 'react';
import {Platform, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";

export const ResponsiveTouchableArea = ({children, style, ...props}) => {
    let Area = TouchableOpacity
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        Area = TouchableNativeFeedback
    }
    return (
        <View style={{...style}}>
            <Area style={{...style}} {...props} activeOpacity={0.8}>
                {children}
            </Area>
        </View>
    )
}