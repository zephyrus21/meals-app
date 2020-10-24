import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Meals') {
                            iconName = 'ios-restaurant';
                        } else if (route.name === 'Favorites') {
                            iconName = 'ios-star';
                        }

                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: Colors.accentColor,
                }}
            >
                <Tab.Screen name="Meals" component={MealsNavigator} />
                <Tab.Screen name="Favorites" component={FavoritesScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MealsTabNavigator;
