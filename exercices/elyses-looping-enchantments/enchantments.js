// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let nbOfCardsOfType = 0;
  stack.forEach((value) => value == card ? nbOfCardsOfType++ : nbOfCardsOfType); // l'operateur ternaire est plus propre qu'un If ici.
  return nbOfCardsOfType;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let nbOfCardsOfType = 0;
  stack.forEach((value) => value % 2 !== Number(type) ? nbOfCardsOfType++ : nbOfCardsOfType); // Le modulo fait un check si le type est pour paire ou non, en faisant Number(type), si il est false c'est 0, sinon c'est 1.
  return nbOfCardsOfType;
}
