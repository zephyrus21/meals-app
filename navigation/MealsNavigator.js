import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const MealsNavigator = () => {
    const headerStyle = {
        headerStyle: {
            backgroundColor: Colors.primaryColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Category"
                    component={CategoriesScreen}
                    options={headerStyle}
                />
                <Stack.Screen
                    name="Meals"
                    component={CategoriesMealsScreen}
                    options={
                        (({ route }) => ({
                            title: route.params.headerTitle,
                        }),
                        headerStyle)
                    }
                />
                <Stack.Screen
                    name="Meal Details"
                    component={MealDetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MealsNavigator;
