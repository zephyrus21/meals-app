import React from 'react';

import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoriesMealsScreen = (props) => {
    const catId = props.route.params.categoryId;
    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );
    return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoriesMealsScreen;
