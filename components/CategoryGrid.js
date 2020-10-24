import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

const CategoryGrid = (props) => {
    return (
        <View style={styles.gridItem}>
            <TouchableNativeFeedback onPress={props.onPress}>
                <View
                    style={{
                        ...styles.container,
                        ...{ backgroundColor: props.color },
                    }}
                >
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default CategoryGrid;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.6,
        textShadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    gridItem: {
        flex: 1,
        margin: 25,
        height: 100,
        //! for touch feedback to not show outside
        borderRadius: 10,
        elevation: 5,
        overflow: 'hidden',
    },
    title: {
        // fontFamily: 'open-sans-bold',
        fontSize: 19,
        textAlign: 'right',
    },
});
