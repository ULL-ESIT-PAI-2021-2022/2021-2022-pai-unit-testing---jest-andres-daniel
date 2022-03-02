const elements = require('../../src/P51352-Elementos/P51352-Elementos.js');

describe('Input Verifier works correctly', () => {
  test('The verifier should return true', () => {
    expect(elements.verifyInput(['A', 'P'])).toBe(true);
    expect(elements.verifyInput(['A', 'A'])).toBe(true);
    expect(elements.verifyInput(['V', 'P'])).toBe(true);
    expect(elements.verifyInput(['V', 'P'])).toBe(true);
    expect(elements.verifyInput(['A', 'V'])).toBe(true);
    expect(elements.verifyInput(['V', 'V'])).toBe(true);
    // We could try every combination, but it will be unnecessary and inefficient
  });
  test('The verifier should return false', () => {
    expect(elements.verifyInput(['A', 'B'])).toBe(false);
  });
});
describe('The result of the elemental battle is correct', () => {
  test('The result is the expected', () => {
    expect(elements.newElementalBattle('A', 'P')).toBe(1);
    expect(elements.newElementalBattle('P', 'A')).toBe(2);
    expect(elements.newElementalBattle('A', 'A')).toBe('-');
  });
});
