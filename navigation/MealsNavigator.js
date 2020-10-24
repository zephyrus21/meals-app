import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MealsNavigator = () => {
    return (
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
                    headerRight: () => route.params.headerButton,
                })}
            />
        </Stack.Navigator>
    );
};

const MealsTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator activeColor="white" shifting={true}>
                <Tab.Screen
                    name="Meals"
                    component={MealsNavigator}
                    options={{
                        tabBarColor: Colors.primaryColor,
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                name="ios-restaurant"
                                size={26}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={FavoritesScreen}
                    options={{
                        tabBarColor: Colors.accentColor,
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="ios-star" size={26} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MealsTabNavigator;
