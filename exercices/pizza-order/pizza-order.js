/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let totalPrice = 0;
  extras.forEach((extra) => {
    switch (extra) {
      case 'ExtraSauce':
        totalPrice++;
        break;
      case 'ExtraToppings' :
        totalPrice += 2;
        break;
      default:
        break;
      } 
    }
  ) 
  switch (pizza) {
    case 'Margherita':
      totalPrice += 7;
      break;
    case 'Caprese' :
      totalPrice += 9;
      break;
    case 'Formaggio' :
      totalPrice += 10;
      break;
    default:
      break;
  }

  return totalPrice;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let totalPrice = 0;

  pizzaOrders.forEach((pizzaOrder) => {
    for (let index = 0; index < pizzaOrder.extras.length; index++) {
      switch (pizzaOrder.extras[index]) {
        case 'ExtraSauce':
          totalPrice++;
          break;
        case 'ExtraToppings' :
          totalPrice += 2;
          break;
        default:
          break;
      } 
    }
    switch (pizzaOrder.pizza) {
    case 'Margherita':
      totalPrice += 7;
      break;
    case 'Caprese' :
      totalPrice += 9;
      break;
    case 'Formaggio' :
      totalPrice += 10;
      break;
    default:
      break;
    }
  })

  return totalPrice;
}
