import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import HeaderButton from '../components/HeaderButtons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const MealsStack = createStackNavigator();

const MealsNavigator = (props) => {
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
            <MealsStack.Screen
                name="Category"
                component={CategoriesScreen}
                options={{
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title="Menu"
                                iconName="ios-menu"
                                onPress={() => {
                                    props.navigation.openDrawer();
                                }}
                            />
                        </HeaderButtons>
                    ),
                }}
            />
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

const FavoritesNavigator = (props) => {
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
                options={{
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title="Menu"
                                iconName="ios-menu"
                                onPress={() => {
                                    props.navigation.openDrawer();
                                }}
                            />
                        </HeaderButtons>
                    ),
                }}
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

const FilterStack = createStackNavigator();

const FilterNavigator = (props) => {
    return (
        <FilterStack.Navigator
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
            <FilterStack.Screen
                name="Filters"
                component={FiltersScreen}
                options={{
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title="Menu"
                                iconName="ios-menu"
                                onPress={() => {
                                    props.navigation.openDrawer();
                                }}
                            />
                        </HeaderButtons>
                    ),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title="Save"
                                iconName="ios-save"
                                onPress={() => {
                                    console.log('Saving!!!');
                                }}
                            />
                        </HeaderButtons>
                    ),
                }}
            />
        </FilterStack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

const MealsTabNavigator = () => {
    return (
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
    );
};

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: Colors.accentColor,
                }}
            >
                <Drawer.Screen
                    name="Meals"
                    component={MealsTabNavigator}
                    options={{
                        drawerLabel: 'Home',
                    }}
                />
                <Drawer.Screen name="Filter" component={FilterNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;
