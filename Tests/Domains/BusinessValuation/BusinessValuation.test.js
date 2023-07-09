const BusinessValuation = require('../../../Domains/BusinessValuation/BusinessValuation');

test('pass for assets 200.00, debts 100.00 expect 100.00', () => {
    expect(BusinessValuation.Equity(200.0, 100.0)).toBe("100.00");
});

test('pass for assets 200.00, debts 100.00, stocksCount 50 expect 2.00', () => {
    expect(BusinessValuation.EquityValue(200.0, 100.0, 50)).toBe("2.00");
});

test('pass for stockPrice 2.00, stocksCount 100.00 expect 200.00', () => {
    expect(BusinessValuation.MarketCap(2.00, 100.00)).toBe("200.00");
});

test('pass for operatingCurrentAssets 900.00, currentOperatingLiabilities 600.00, noncurrentAssets 1000.00 expect 1300.00', () => {
    expect(BusinessValuation.InvestedCapital(900.00, 600.00, 1000.00)).toBe("1300.00");
});

test('pass for netDebt 200.00, netWorth 1100.00 expect 1300.00', () => {
    expect(BusinessValuation.InvestedCapital(200.00, 1100.00)).toBe("1300.00");
});

test('pass for marketCap 1000.00, netDebt 200.00 expect 1200.00', () => {
    expect(BusinessValuation.EnterpriseValue(1000.00, 200.00)).toBe("1200.00");
});

test('pass for stockPrice 2.00, stocksCount 100, netDebt 1000.00 expect 1200.00', () => {
    expect(BusinessValuation.EnterpriseValue(2.00, 100, 1000.00)).toBe("1200.00");
});

test('pass for price 2.04, book 3.72 expect 0.55', () => {
    expect(BusinessValuation.PriceToBookRatio(2.04, 3.72)).toBe("0.55");
});