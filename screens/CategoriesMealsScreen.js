import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoriesMealsScreen = (props) => {
    return (
        <View>
            <Text>Category Meals</Text>
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Meal Details')}
            />
        </View>
    );
};

export default CategoriesMealsScreen;

const styles = StyleSheet.create({});
