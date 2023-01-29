const CashFlow = require('../../../Domains/CashFlow/CashFlow');

test('pass for cashFlowsFromOperations 1000.00, cashFlowsFromInvesting 800.00, cashFlowsFromFinancing 200.00 expect 2000.00', () => {
    expect(CashFlow.CashFlow(1000.00, 800.00, 200.00)).toBe("2000.00");
});

test('pass for cashFlowsFromOperations 1000.00, cashFlowsFromInvesting 800.00, cashFlowsFromFinancing 200.00 not expect 2200.00', () => {
    expect(CashFlow.CashFlow(1000.00, 800.00, 200.00)).not.toBe("2200.00");
});

test('pass for cashFlowsFromOperations 2000.00, revenue 1000.00 expect 2.00', () => {
    expect(CashFlow.CashFlowEfficiency(2000.00, 1000.00)).toBe("2.00");
});

test('pass for cashFlowsFromOperations 2000.00, revenue 1000.00 expect 2.00', () => {
    expect(CashFlow.CashFlowEfficiency(2000.00, 1000.00)).not.toBe("1.00");
});

test('pass for cashFlowsFromOperations 2000.00, cashFlowsFromInvesting 1000.00 expect 3000.00', () => {
    expect(CashFlow.FreeCashFlow(2000.00, 1000.00)).toBe("3000.00");
});

test('pass for cashFlowsFromOperations 2000.00, cashFlowsFromInvesting 1000.00 expect 3000.00', () => {
    expect(CashFlow.FreeCashFlow(2000.00, 1000.00)).not.toBe("0.00");
});