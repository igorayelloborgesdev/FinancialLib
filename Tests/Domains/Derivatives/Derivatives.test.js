const Derivatives = require('../../../Domains/Derivatives/Derivatives');

test('pass for value 100000.00, futureRate 14.80, nDu 240, du 252 expect 87682.41', () => {
    expect(Derivatives.UnitPrice(100000.00, 14.80, 240, 252)).toBe("87682.41");
});
test('pass for value 100000.00, futureRate 14.90, nDu 240, du 252 expect 87609.73', () => {
    expect(Derivatives.UnitPrice(100000.00, 14.90, 240, 252)).toBe("87609.73");
});
test('pass for valueBought 87609.73, valueSold 87682.41, contracts 300.00 expect -21804.00', () => {
    expect(Derivatives.UnitPriceAdjust(87609.73, 87682.41, 300.00)).toBe("-21804.00");
});
test('pass for baseContract 1000000.00, exchangeRateEnd 5.70, exchangeRateForward 5.50 expect 200000.00', () => {
    expect(Derivatives.CurrencyForwardHedge(1000000.00, 5.70, 5.50)).toBe("200000.00");
});
test('pass for boughtContract 98000.00, currentContract 99500.00, point 1.00, contracts 200 expect 300000.00', () => {
    expect(Derivatives.BovespaFutureIndex(98000.00, 99500.00, 1.00, 200 )).toBe("300000.00");
});
