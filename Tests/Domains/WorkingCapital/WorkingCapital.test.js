const WorkingCapital = require('../../../Domains/WorkingCapital/WorkingCapital');

test('pass for currentAssets 1300.00, currentLiability 800.00 expect 500.0', () => {
    expect(WorkingCapital.WorkingCapital(1300.00, 800.00)).toBe("500.00");
});

test('pass for currentAssets 1300.00, currentLiability 700.00 expect 500.0', () => {
    expect(WorkingCapital.WorkingCapital(1300.00, 700.00)).not.toBe("500.00");
});