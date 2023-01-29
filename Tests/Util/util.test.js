const Validation = require('../../Util/Validation');

test('pass a number different from zero', () => {
    expect(() => Validation.NotAllowZero(1)).not.toThrow();
});

test('pass a zero value', () => {
    expect(() => Validation.NotAllowZero(0)).toThrow();
});