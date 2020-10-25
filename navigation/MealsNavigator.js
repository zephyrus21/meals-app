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

const MealsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MealsNavigator = () => {
    return (
        <MealsStack.Navigator
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
            <MealsStack.Screen name="Category" component={CategoriesScreen} />
            <MealsStack.Screen
                name="Meals"
                component={CategoriesMealsScreen}
                options={({ route }) => ({
                    title: route.params.headerTitle,
                })}
            />
            <MealsStack.Screen
                name="Meal Details"
                component={MealDetailsScreen}
                options={({ route }) => ({
                    title: route.params.headerTitle,
                    headerRight: () => route.params.headerButton,
                })}
            />
        </MealsStack.Navigator>
    );
};

const FavoritesStack = createStackNavigator();

const FavoritesNavigator = () => {
    return (
        <FavoritesStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.accentColor,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <FavoritesStack.Screen
                name="Favorites"
                component={FavoritesScreen}
                // options={({ route }) => ({
                //     title: route.params.headerTitle,
                // })}
            />
            <FavoritesStack.Screen
                name="Meal Details"
                component={MealDetailsScreen}
                options={({ route }) => ({
                    title: route.params.headerTitle,
                    headerRight: () => route.params.headerButton,
                })}
            />
        </FavoritesStack.Navigator>
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
                    component={FavoritesNavigator}
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
