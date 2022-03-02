/**
 * Here are some of the most useful Jest matchers.
 * @see {@link https://jestjs.io/docs/expect}
 */

describe('Matchers', () => {
  test('Comparison', () => {
    expect(2 + 2).toBe(4);
    // Not can be used with any matcher.
    expect(5 % 2).not.toBe(0);
    expect(`I am ${21} years old`).toBe('I am 21 years old');
    // Watch out for mutable types.
    expect({a: 1, b: 2}).not.toBe({a: 1, b: 2});
    // Checks referential identities of objects. Is even stricter than ===.
    let dummy = {a: 1, b: 2};
    expect(dummy).toBe(dummy);

    // Compares the content and type. Works the same as ===.
    expect({a: 1, b: 2}).toEqual({a: 1, b: 2});

    // Watch out for floating point rounding.
    expect(0.1 + 0.2).not.toBe(0.3);
    expect(0.1 + 0.2).toBeCloseTo(0.3);

    expect(4).toBeGreaterThan(2);
    expect(4).toBeGreaterThanOrEqual(2);
    expect(-1).toBeLessThan(0);
    expect(-1).toBeLessThanOrEqual(0);
  });

  test('Null and Undefined', () => {
    let dummy = {a: 1, b: 2};
    expect(dummy).toBeDefined();
    expect(dummy).toHaveProperty('a');
    expect(dummy.unknown).toBeUndefined();

    expect('something').toBeTruthy();
    expect('').toBeFalsy();
    expect(null).toBeNull();
  });

  test('Arrays', () => {
    expect([6, 9, 1]).toContain(9);
    expect([6, 9, 1]).toHaveLength(3);
  });

  test('Exceptions', () => {
    // This is the function you want to test, it could be located elsewhere.
    const testedFunction = function () {
      throw new EvalError('I am the best!');
    };

    // Necessary, so Jest can catch exceptions.
    // Check out the docs: https://jestjs.io/docs/expect#tothrowerror
    const wrapper = function () {
      testedFunction();
    };

    // It should throw this kind of exception.
    expect(wrapper).toThrow(EvalError);
    // But not this one.
    expect(wrapper).not.toThrow(SyntaxError);
    // Checking error message.
    expect(wrapper).toThrow('I am the best!');
    expect(wrapper).toThrow(/I am/);
  });
});
