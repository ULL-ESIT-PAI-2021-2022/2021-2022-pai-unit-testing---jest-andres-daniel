const elements = require('../../src/P51352-Elementos/P51352-Elementos.js');

test('p', () => {
    expect(elements.newElementalBattle('A', 'P')).toBe(1);
});
test('ip', () => {
    expect(elements.verifyInput(['A', 'B'])).toBe(false);
});
