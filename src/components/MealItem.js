import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {ResponsiveTouchableArea} from "./ui/ResponsiveTouchableArea";
import {MediumCustomText} from "./ui/MediumCustomText";

export const MealItem = ({title, image, duration, onSelectMeal, complexity, affordability}) => {
    return (
        <ResponsiveTouchableArea
            onPress={onSelectMeal}
            style={styles.mealItem}>
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{uri: image}} style={styles.bgImg}>
                        <View style={styles.titleContainer}>
                            <MediumCustomText style={styles.title} numberOfLines={1}>
                                {title}
                            </MediumCustomText>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <MediumCustomText>
                        {duration}m
                    </MediumCustomText>
                    <MediumCustomText>
                        {complexity.toUpperCase()}
                    </MediumCustomText>
                    <MediumCustomText>
                        {affordability.toUpperCase()}
                    </MediumCustomText>
                </View>
            </View>
        </ResponsiveTouchableArea>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'JBBold',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    bgImg: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    }
})