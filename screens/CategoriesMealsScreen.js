import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoriesMealsScreen = (props) => {
    const renderMealItem = (itemData) => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                affordibility={itemData.item.affordibility}
                complexity={itemData.item.complexity}
                onSelectMeal={() => {}}
            />
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
