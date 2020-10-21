import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoriesMealsScreen = (props) => {
    const renderMealItem = (itemData) => {
        return (
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        );
    };
    const catId = props.route.params.categoryId;
    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );
    return (
        <View>
            <FlatList data={displayedMeals} renderItem={renderMealItem} />
        </View>
    );
};

export default CategoriesMealsScreen;

const styles = StyleSheet.create({});
