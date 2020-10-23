import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const MealsNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.primaryColor,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen name="Category" component={CategoriesScreen} />
                <Stack.Screen
                    name="Meals"
                    component={CategoriesMealsScreen}
                    options={({ route }) => ({
                        title: route.params.headerTitle,
                    })}
                />
                <Stack.Screen
                    name="Meal Details"
                    component={MealDetailsScreen}
                    options={({ route }) => ({
                        title: route.params.headerTitle,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MealsNavigator;
