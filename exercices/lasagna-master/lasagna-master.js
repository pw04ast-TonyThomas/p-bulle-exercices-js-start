/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 * @param {Number} preparationTime
 */

export function cookingStatus(preparationTime) {
    if (preparationTime == 0){
        return 'Lasagna is done.'
    } else if (!preparationTime) {
        return 'You forgot to set the timer.'
    } else {return 'Not done, please wait.'}
}

/**
 * 
 * @param {Array<string>} friendsList 
 * @param {Array<string>} myList 
 */

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1])
}

/**
 * 
 * @param {Array<string>} layers 
 * @param {Number} time 
 */

export function preparationTime(layers, time) {
    if (!time) time = 2

    return layers.length * time
}

/**
 * 
 * @param {Array<string>} layers 
 */

export function quantities(layers) {
    let noodles = 0;
    let sauce = 0;

    layers.forEach(layer => {
        if (layer == 'noodles') {
            noodles += 50
        } else if (layer == 'sauce') {
            sauce += 0.2
        }
    }) 

    return {noodles, sauce}
}

/**
 * 
 * @param {Object} recipe 
 * @param {Number} scale 
 */

export function scaleRecipe(recipe, scale) {
    const scaled = { ...recipe }
    const factor = scale / 2

    for (let ingredient in scaled) {
        scaled[ingredient] *= factor
    }
    return scaled
}