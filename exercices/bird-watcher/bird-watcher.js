// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let nbOfBirds = 0;
  for (let i = 0; i < birdsPerDay.length; i++) nbOfBirds += birdsPerDay[i];
  return nbOfBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  // let slicedArray = birdsPerDay.slice((week - 1) * 7 - 1, week * 7 - 1)
  let nbOfBirds = 0;
  // for (let i = 0; i < slicedArray.length; i++) nbOfBirds += slicedArray[i];
  for (let index = (week - 1) * 7; index < week * 7; index++) {
    nbOfBirds += birdsPerDay[index]
  }
  return nbOfBirds
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 == 0) birdsPerDay[i]++
  }
}
