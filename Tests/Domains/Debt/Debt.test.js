const Debt = require('../../../Domains/Debt/Debt');
const Validation = require('../../../Util/Validation');

const error = new Error('Not allow zero')
const mockNotAllowZero = jest.spyOn(Validation, "NotAllowZero")
    .mockReturnValue();

test('pass for currentAssets 1300.00, currentLiability 800.00 expect 1.63', () => {
    expect(Debt.DebtRatio(1300.00, 800.00)).toBe("1.63");
});

test('pass for currentAssets 1300.00, currentLiability 700.00 expect 500.0', () => {
    expect(Debt.DebtRatio(1300.00, 700.00)).not.toBe("500.00");
});