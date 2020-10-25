import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButtons';

import MealItem from './MealItem';

const MealList = (props) => {
    const renderMealItem = (itemData) => {
        const headerButton = (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Fav"
                    iconName="ios-star"
                    onPress={() => {
                        console.log('object');
                    }}
                />
            </HeaderButtons>
        );
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
                        headerButton: headerButton,
                    });
                }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList data={props.listData} renderItem={renderMealItem} />
        </View>
    );
};

export default MealList;

const styles = StyleSheet.create({
    container: { margin: 10 },
});
