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
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate('Meal Details', {
                        mealId: itemData.item.id,
                        headerTitle: itemData.item.title,
                    });
                }}
            />
        );
    };

    const catId = props.route.params.categoryId;
    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );
    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} renderItem={renderMealItem} />
        </View>
    );
};

export default CategoriesMealsScreen;

const styles = StyleSheet.create({
    container: { margin: 10 },
});
