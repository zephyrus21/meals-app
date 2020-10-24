import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryGrid from '../components/CategoryGrid';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGrid
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={() =>
                    props.navigation.navigate('Meals', {
                        categoryId: itemData.item.id,
                        headerTitle: itemData.item.title,
                    })
                }
            />
        );
    };

    return (
        <FlatList
            numColumns={2}
            renderItem={renderGridItem}
            data={CATEGORIES}
        />
    );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
