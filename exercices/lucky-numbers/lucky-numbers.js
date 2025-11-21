// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(array1.join('')) + Number(array2.join('')) // Le Join les mets ensemble en string avec aucun espace ('') et ensuite les additionne en nombres. 
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let valueString = value.toString();
  let part1 = valueString.slice(0, Math.ceil(valueString.length / 2));
  let part2 = valueString.slice(valueString.length / 2, valueString.length).split("").reverse().join("");
  return (part1 == part2)
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) return 'Required field'
  else if (Number.isNaN(Number(input)) || String(input).includes('0',)) return 'Must be a number besides 0'
  return ''
}
