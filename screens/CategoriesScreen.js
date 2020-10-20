import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = (itemData) => {
    return (
        <View styles={styles.gridItem}>
            <Text>{itemData.item.title}</Text>
        </View>
    );
};

const CategoriesScreen = (props) => {
    return (
        <FlatList
            numColumns={2}
            renderItem={renderGridItem}
            data={CATEGORIES}
        />
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 100,
    },
});
