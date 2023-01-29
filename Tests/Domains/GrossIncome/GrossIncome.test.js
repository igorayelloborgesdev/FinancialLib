const GrossIncome = require('../../../Domains/GrossIncome/GrossIncome');

test('pass for netSales 1000.00, costOfGoodsSold 800.00 expect 200.00', () => {
    expect(GrossIncome.GrossIncome(1000.00, 800.00)).toBe("200.00");
});

test('pass for netSales 1000.00, costOfGoodsSold 700.00 not expect 200.00', () => {
    expect(GrossIncome.GrossIncome(1000.00, 700.00)).not.toBe("200.00");
});

test('pass for value -5000.00, grossIncome 10000.00 expect 50.00', () => {
    expect(GrossIncome.VerticalAnalysis(-5000.00, 10000.00)).toBe("50.00");
});

test('pass for value -5000.00, grossIncome 10000.00 expect 40.00', () => {
    expect(GrossIncome.VerticalAnalysis(-5000.00, 10000.00)).not.toBe("40.00");
});

test.only('pass for currentValue 12000.00, previousValue 10000.00 expect 20.00', () => {
    expect(GrossIncome.HorizontalAnalysis(12000.00, 10000.00)).toBe("20.00");
});
