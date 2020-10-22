import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableNativeFeedback onPress={props.onSelectMeal}>
                <View>
                    <View style={styles.mealRow}>
                        <Text>{props.title}</Text>
                    </View>
                    <View style={styles.mealRow}></View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: 'grey',
    },
    mealRow: {
        flexDirection: 'row',
    },
});
