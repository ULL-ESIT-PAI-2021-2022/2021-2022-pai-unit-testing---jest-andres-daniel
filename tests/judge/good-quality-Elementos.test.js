const elements = require('../../src/P51352-Elementos/P51352-Elementos.js');

describe('Input Verifier works correctly', () => {
  test('The verifier should return true', () => {
    expect(elements.verifyInput(['A', 'P'])).toBe(true);
    expect(elements.verifyInput(['A', 'P'])).toBe(true);
    expect(elements.verifyInput(['V', 'V'])).toBe(true);
    // We could try every combination, but it will be unnecessary and inefficient
  });
  test('The verifier should return false', () => {
    expect(elements.verifyInput(['A', 'B'])).toBe(false);
    expect(elements.verifyInput([1, 'B'])).toBe(false);
    expect(elements.verifyInput([])).toBe(false);
    expect(elements.verifyInput()).toBe(false);
    expect(elements.verifyInput(['a', 'v'])).toBe(false);
    expect(elements.verifyInput(['A', 'B', 'C'])).toBe(false);
    expect(elements.verifyInput(['A', 'B', 'A'])).toBe(false);
  });
});
describe('The result of the elemental battle is correct', () => {
  test('The result is the expected', () => {
    expect(elements.newElementalBattle('A', 'P')).toBe(1);
    expect(elements.newElementalBattle('P', 'A')).toBe(2);
    expect(elements.newElementalBattle('A', 'A')).toBe('-');
  });
  test('The elemental battle should not begin', () => {
    const wrapper = function () {
      elements.newElementalBattle('Z', 'V');
    };
    expect(wrapper).toThrow('Invalid input');
  });
});
