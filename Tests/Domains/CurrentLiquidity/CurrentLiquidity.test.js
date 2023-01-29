const CurrentLiquidity = require('../../../Domains/CurrentLiquidity/CurrentLiquidity');
const Validation = require('../../../Util/Validation');

const error = new Error('Not allow zero')
const mockNotAllowZero = jest.spyOn(Validation, "NotAllowZero")
    .mockReturnValue();

test('pass for currentAssets 1300.00, currentLiability 800.00 expect 1.63', () => {
    expect(CurrentLiquidity.CurrentLiquidity(1300.00, 800.00)).toBe("1.63");
});

test('pass for currentAssets 1300.00, currentLiability 700.00 expect 500.0', () => {
    expect(CurrentLiquidity.CurrentLiquidity(1300.00, 700.00)).not.toBe("500.00");
});