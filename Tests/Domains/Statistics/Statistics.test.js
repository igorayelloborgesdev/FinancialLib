const Statistics = require('../../../Domains/Statistics/Statistics');

test('pass for meanValuesArray [1,2,3,4] expect 2.50', () => {
    expect(Statistics.Mean([1,2,3,4])).toBe("2.50");
});
test('pass for meanValuesArray [1,2,3,4] not expect 2.51', () => {
    expect(Statistics.Mean([1,2,3,4])).not.toBe("2.51");
});
test('pass for meanValuesArray [5,8,10,7] expect 4.33', () => {
    expect(Statistics.Variance([5,8,10,7])).toBe("4.33");
});
test('pass for meanValuesArray [5,8,10,7] expect 4.31', () => {
    expect(Statistics.Variance([5,8,10,7])).not.toBe("4.31");
});
test('pass for meanValuesArray [5,8,10,7] expect 2.08', () => {
    expect(Statistics.StandardDeviation([5,8,10,7])).toBe("2.08");
});
test('pass for meanValuesArray [5,8,10,7] not expect 2.01', () => {
    expect(Statistics.StandardDeviation([5,8,10,7])).not.toBe("2.01");
});