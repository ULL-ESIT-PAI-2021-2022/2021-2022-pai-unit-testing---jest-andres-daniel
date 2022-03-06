/**
 * This is an effective test suite.
 */

const { absolute } = require('../../src/basics/absolute.js');

describe('I want to be good at testing', () => {
  test('General cases: positive values', () => {
    expect(absolute(5)).toBe(5);
    expect(absolute(4)).toBe(4);
    expect(absolute(88)).toBe(88);
  });

  test('General cases: negative values', () => {
    expect(absolute(-5)).toBe(5);
    expect(absolute(-4)).toBe(4);
    expect(absolute(-88)).toBe(88);
  });

  test('Edge cases: zero', () => {
    expect(absolute(0)).toBe(0);
  });

  test('Edge cases: great values', () => {
    expect(absolute(1000000000)).toBe(1000000000);
    expect(absolute(-1000000000)).toBe(1000000000);
  });

  test('Sanity checks: properties', () => {
    const x = -272;
    const y = 727
    expect(absolute(absolute(x))).toBe(x);
    expect(absolute(absolute(y))).toBe(y);
    expect(absolute(x + y)).toBeLessThanOrEqual(absolute(x) + absolute(y));
  });
});
