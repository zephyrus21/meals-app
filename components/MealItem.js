import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    ImageBackground,
} from 'react-native';

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableNativeFeedback onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                            source={{ uri: props.image }}
                            style={styles.bgImage}
                        >
                            <Text numberOfLines={1} style={styles.title}>
                                {props.title}
                            </Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity}</Text>
                        <Text>{props.affordibility}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',
    },
});
