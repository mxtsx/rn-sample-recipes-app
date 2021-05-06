import React from 'react';
import {Platform, StyleSheet, Text, View} from "react-native";
import {ResponsiveTouchableArea} from "./ui/ResponsiveTouchableArea";

export const CategoriesList = ({title, onPressHandler, color}) => {
    return (
        <ResponsiveTouchableArea
            style={styles.gridArea}
            onPress={onPressHandler}>
            <View style={{...styles.container, backgroundColor: color}}>
                <Text style={styles.title} numberOfLines={2}>
                    {title}
                </Text>
            </View>
        </ResponsiveTouchableArea>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 22,
        fontFamily: 'JBBold',
        textAlign: 'right'
    },
    gridArea: {
        flex: 1,
        height: 150,
        margin: 15,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        borderRadius: 10,
        elevation: 5
    }
})