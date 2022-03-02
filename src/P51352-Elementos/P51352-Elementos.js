/* eslint-disable require-jsdoc */
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel García Hernández
 * @since Feb 19 2022
 * @desc This program reads two natural words (A, P or V) and shows the result
 *       of the battle having: The water (A) beats the stone (P) which in turn
 *       beats the wind (V) which beats the water.
 *       Execution: node <filename> A P
 * @see {@link https://jutge.org/problems/P51352}
 *
 */

'use strict';

const argv = require('../../node_modules/yargs')(process.argv.slice(2)).argv;

// Represents pairs of elements, where key wins value.
const VICTORY_RULES = {
  'A': 'P',
  'P': 'V',
  'V': 'A',
};

/**
 * Checks if the input is valid
 *
 * @param {Array} contendersArray
 * @returns {boolean} if the input is accepted or not
 */
const verifyInput = function(contendersArray) {
  if (!(contendersArray instanceof Array)) return false
  if (contendersArray.length != 2) return false;
  const allowed = Object.keys(VICTORY_RULES);
  for (let c of contendersArray) {
    if (!allowed.includes(c)) {
      return false;
    }
  }
  return true;
};

/**
 * Returns the result of a battle between two contenders
 *
 * @param {String} contenderA
 * @param {String} contenderB
 * @returns {number, string} the result of the battle
 */
const resolveBattle = function(contenderA, contenderB) {
  if (VICTORY_RULES[contenderA] === contenderB) {
    return 1;
  } else if (VICTORY_RULES[contenderB] === contenderA) {
    return 2;
  } else {
    return '-';
  }
};

/**
 * Returns the result of a battle between two contenders after verifying the input
 *
 * @param {String} contenderA
 * @param {String} contenderB
 * @returns {number, string} the result of the battle
 */
const newElementalBattle = function(contenderA, contenderB) {
  if(!verifyInput([contenderA, contenderB])) throw new Error('Invalid input');
  return resolveBattle(contenderA, contenderB);
}

function main() {
  const contendersArray = argv._;
  if (!verifyInput(contendersArray)) {
    console.log('The arguments must be A P or V');
    return;
  }
  const battleResult = resolveBattle(contendersArray[0], contendersArray[1]);
  console.log(battleResult);
}

if (require.main === module) {
  main();
}

exports.verifyInput = verifyInput;
exports.newElementalBattle = newElementalBattle;
exports.resolveBattle = resolveBattle;