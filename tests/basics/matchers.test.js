/**
 * 
 * 
 */

describe('matchers', () => {


  test('toThrow', () => {
    const exceptionalFunction = function() {
      throw new EvalError('I am the best!');
    }


    const wrapper = function() {
      exceptionalFunction();
    }

    expect(wrapper).toThrow(EvalError);
    expect(wrapper).not.toThrow(SyntaxError);
  });
});
