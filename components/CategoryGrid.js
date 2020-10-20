import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CategoryGrid = (props) => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onPress}>
            <View>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CategoryGrid;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 25,
        height: 100,
    },
});
