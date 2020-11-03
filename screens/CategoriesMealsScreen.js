import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

const CategoriesMealsScreen = (props) => {
    const catId = props.route.params.categoryId;

    const availableMeals = useSelector((state) => state.meals.filterdMeals);

    const displayedMeals = availableMeals.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );
    return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoriesMealsScreen;
