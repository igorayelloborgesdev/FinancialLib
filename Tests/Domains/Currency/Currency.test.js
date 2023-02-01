const Currency = require('../../../Domains/Currency/Currency');

test('pass for currency1 1.00, currency2 0.20 expect 5.00', () => {
    expect(Currency.CurrencyConverter(1.00, 0.20)).toBe("5.00");
});
test('pass for currency1 1.00, currency2 0.20 expect 5.01', () => {
    expect(Currency.CurrencyConverter(1.00, 0.20)).not.toBe("5.01");
});
test('pass for bigMacPrice 22.90, bigMacPriceUS 5.81, exchangeRate 5.31 expect -25.77', () => {
    expect(Currency.BigMacIndex(22.90, 5.81, 5.31)).toBe("-25.77");
});
test('pass for bigMacPrice 22.90, bigMacPriceUS 5.81, exchangeRate 5.31 not expect -25.71', () => {
    expect(Currency.BigMacIndex(22.90, 5.81, 5.31)).not.toBe("-25.71");
});
test.only('pass for currentParity 4.00, inflation1 5.0, inflation2 2.0 expect 4.12', () => {
    expect(Currency.InterestRateParity(4.00, 5.0, 2.0)).toBe("4.12");
});
test.only('pass for currentParity 4.00, inflation1 5.0, inflation2 2.0 not expect 4.10', () => {
    expect(Currency.InterestRateParity(4.00, 5.0, 2.0)).not.toBe("4.10");
});