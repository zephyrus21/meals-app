import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import { toggleFavorite } from '../store/actions/mealsAction';

const MealDetailsScreen = (props) => {
    const availableMeals = useSelector((state) => state.meals.meals);

    const mealId = props.route.params.mealId;

    const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
    }, [selectedMeal]);
    return (
        <ScrollView>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />
            <View style={styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordibility.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (
                <Text style={styles.listItem} key={ingredient}>
                    {ingredient}
                </Text>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map((step) => (
                <Text style={styles.listItem} key={step}>
                    {step}
                </Text>
            ))}
        </ScrollView>
    );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
});
