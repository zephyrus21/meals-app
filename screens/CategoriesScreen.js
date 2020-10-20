import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = (itemData) => {
    return (
        <TouchableOpacity>
            <View style={styles.gridItem}>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
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

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 25,
        height: 100,
    },
});

export default CategoriesScreen;
