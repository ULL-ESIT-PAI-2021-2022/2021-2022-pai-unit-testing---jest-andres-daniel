/**
 * It seems to work, right?
 */

const { absolute } = require('../../src/basics/absolute.js');

describe('I want to be good at testing', () => {
  test('All possible cases', () => {
    expect(absolute(-1)).toBe(1);
    expect(absolute(-23)).toBe(23);
    expect(absolute(-9)).toBe(9);
    expect(absolute(-3)).toBe(3);
    expect(absolute(-88)).toBe(88);
    expect(absolute(-20000000)).toBe(20000000);
  });

  test('It seems to work', () => {
    expect(absolute(4 - 6)).toBe(2);
  });
});
