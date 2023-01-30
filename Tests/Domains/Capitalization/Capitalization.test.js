const Capitalization = require('../../../Domains/Capitalization/Capitalization');

test('pass for currentValue 200.00, interest 7% expect 214.00', () => {
    expect(Capitalization.CapitalizationSimple(200.0, 7)).toBe("214.00");
});
test('pass for currentValue 200.00, interest 7% not expect 215.00', () => {
    expect(Capitalization.CapitalizationSimple(200.0, 7)).not.toBe("215.00");
});
test('pass for currentValue 100.00, interest 7% expect 7.00', () => {
    expect(Capitalization.CapitalizationSimpleFees(100.0, 7)).toBe("7.00");
});
test('pass for currentValue 100.00, interest 7% not expect 107.00', () => {
    expect(Capitalization.CapitalizationSimpleFees(100.0, 7)).not.toBe("107.00");
});
test('pass for currentValue 500.00, finalValue 750.00 expect 50.00', () => {
    expect(Capitalization.CapitalizationSimpleInterest(500.0, 750.0)).toBe("50.00");
});
test('pass for currentValue 500.00, finalValue 750.00 not expect 51.00', () => {
    expect(Capitalization.CapitalizationSimpleInterest(500.0, 750.0)).not.toBe("51.00");
});
test('pass for currentValue 100.00, interest 5.00, period 10.00 expect 150.00', () => {
    expect(Capitalization.CapitalizationSimplePeriod(100.0, 5.0, 10.0)).toBe("150.00");
});
test('pass for currentValue 100.00, interest 5.00, period 10.00 not expect 151.00', () => {
    expect(Capitalization.CapitalizationSimplePeriod(100.0, 5.0, 10.0)).not.toBe("151.00");
});
test('pass for currentValue 200.00, interest 10.00, period 6/12 expect 210.00', () => {
    expect(Capitalization.CapitalizationSimplePeriod(200.00, 10.00, (6/12))).toBe("210.00");
});
test('pass for interest 10.00, period 6/12 expect 5.00', () => {
    expect(Capitalization.SimpleFeesPeriod(10.00, (6/12))).toBe("5.00");
});
test('pass for yearInterest 12.00, period 72/365 expect 2.37', () => {
    expect(Capitalization.SimpleInterestPeriod(12.00, (72/365))).toBe("2.37");
});
test('pass for currentValue 100.0, interest 5, period 10.0 expect 162.89', () => {
    expect(Capitalization.CapitalizationCompound(100.00, 5.0, 10)).toBe("162.89");
});
test('pass for interest 10.00, period 2/12 expect 1.60', () => {
    expect(Capitalization.CapitalizationCompoundInterestPeriod(10.00, 2/12, 10)).toBe("1.60");
});
test('pass for futureValue 15000.00, interest 7.0, period 5 expect 10694.79', () => {
    expect(Capitalization.CapitalizationCompoundGetCurrentValue(15000.00, 7.0, 5)).toBe("10694.79");
});
test('pass for currentValue 100.00, interestArray [7.0, 5.0, 8.0, 6.0] expect 128.62', () => {
    expect(Capitalization.CapitalizationWithCumulativeInterest(100.00, [7.0, 5.0, 8.0, 6.0])).toBe("128.62");
});
test('pass for currentValue 100.00, futureValue 128.61 expect 28.61', () => {
    expect(Capitalization.CumulativeInterestForValue(100.00, 128.61)).toBe("28.61");
});
test('pass for interestArray [7.0, 5.0, 8.0, 6.0] expect 28.61', () => {
    expect(Capitalization.CumulativeInterest([7.0, 5.0, 8.0, 6.0])).toBe("28.62");
});
test('pass for currentValue 12500, futureValue 10000 expect 25.00', () => {
    expect(Capitalization.NominalYield(10000.00, 12500.00)).toBe("25.00");
});
test('pass for interest 25.0, inflation 9.2 expect 14.47', () => {
    expect(Capitalization.RealIncome(25.0, 9.2)).toBe("14.47");
});
test('pass for interest 14.47, period 1/2 expect 6.99', () => {
    expect(Capitalization.RealInterestRate(14.47, (1/2))).toBe("6.99");
});