import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const Stack = createStackNavigator();

const MealsNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Category" component={CategoriesScreen} />
                <Stack.Screen name="Meals" component={CategoriesMealsScreen} />
                <Stack.Screen
                    name="Meal Details"
                    component={MealDetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MealsNavigator;
