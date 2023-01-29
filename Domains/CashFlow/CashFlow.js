const Validation = require('../../Util/Validation');

module.exports = class CashFlow
{    
    static CashFlow(cashFlowsFromOperations, cashFlowsFromInvesting, cashFlowsFromFinancing)
    {     
        return (cashFlowsFromOperations + cashFlowsFromInvesting + cashFlowsFromFinancing).toFixed(2);
    }
    static CashFlowEfficiency(cashFlowsFromOperations, revenue)
    {     
        Validation.NotAllowZero(revenue);
        return (cashFlowsFromOperations / revenue).toFixed(2);
    }
    static FreeCashFlow(cashFlowsFromOperations, cashFlowsFromInvesting)
    {          
        return (cashFlowsFromOperations + cashFlowsFromInvesting).toFixed(2);
    }
}