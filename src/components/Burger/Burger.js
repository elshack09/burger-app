import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) //abstracting keys of different objects and turn it to an array of the key
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                <BurgerIngredient key={igKey + i} type={igKey} />
                // unique key for each ingredient
            }) // blank 
            //JS object with 3 empty spaces
        })
        .reduce((arr, el) => {
            return arr.concat(el) //add given element to array
        }, []) // previous and current value
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />

            {transformedIngredients}
            {/* <BurgerIngredient type="cheese" />
        <BurgerIngredient type="meat" /> */}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;
