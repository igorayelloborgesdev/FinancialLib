const Depreciation = require('../../../Domains/Depreciation/Depreciation');
const Validation = require('../../../Util/Validation');

const error = new Error('Not allow zero')
const mockNotAllowZero = jest.spyOn(Validation, "NotAllowZero")
    .mockReturnValue();

test('pass for purchasePriceofAsset 100000.00, salvageValue 10000.00, estimatedUsefulLifeOfAsset 10.0 expect 9000.0', () => {
    expect(Depreciation.DepreciationStraightLine(100000.00, 10000.00, 10.0)).toBe("9000.00");
});

test('pass for purchasePriceofAsset 100000.00, estimatedUsefulLifeOfAsset 10.0 expect 9000.0', () => {
    expect(Depreciation.DepreciationStraightLineWithoutSalvageValue(100000.00, 10.0)).toBe("9000.00");
});