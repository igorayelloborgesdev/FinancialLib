const Stocks = require('../../../Domains/Stocks/Stocks');

test('pass for equityValue 5.0, share 2.0 expect 2.50', () => {
    expect(Stocks.EquityValueShare(5.0, 2.0)).toBe("2.50");
});

test('pass for equityValue 5.0, share 2.0 not expect 2.51', () => {
    expect(Stocks.EquityValueShare(5.0, 2.0)).not.toBe("2.51");
});