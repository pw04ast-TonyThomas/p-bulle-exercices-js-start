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

export function addSecretIngredient() {
    throw new Error('Remove this line and implement the function');
}

export function preparationTime() {
    throw new Error('Remove this line and implement the function');
}

export function quantities() {
    throw new Error('Remove this line and implement the function');
}

export function scaleRecipe() {
    throw new Error('Remove this line and implement the function');
}