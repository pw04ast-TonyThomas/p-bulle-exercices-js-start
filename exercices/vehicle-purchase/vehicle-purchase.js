// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return kind == 'car' || kind == 'truck';
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  let text = ' is clearly the better choice.'; // DNRY 
  if (option1 < option2) {return option1 + text} else {return option2 + text} // Optimisation MAX.
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (age < 3) return originalPrice * 0.8
  else if (age > 10) return originalPrice * 0.5
  else return originalPrice * 0.7 // Déclarer les âges en tant que constantes prendrai de la place mémoire mais n'aiderai pas vraiment à la compréhension vu la simplicité du code
}
