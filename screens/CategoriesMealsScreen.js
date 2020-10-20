import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesMealsScreen = (props) => {
    const catId = props.route.params.categoryId;
    const selectedCategory = CATEGORIES.find((c) => c.id === catId);
    return (
        <View>
            <Text>Category Meals</Text>
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Meal Details')}
            />
            <Text>ItemId: {catId}</Text>
            <Text>{selectedCategory.title}</Text>
        </View>
    );
};

export default CategoriesMealsScreen;

const styles = StyleSheet.create({});
