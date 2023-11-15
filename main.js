//Domains
const Depreciation = require('./Domains/Depreciation/Depreciation');
const WorkingCapital = require('./Domains/WorkingCapital/WorkingCapital');
const CurrentLiquidity = require('./Domains/CurrentLiquidity/CurrentLiquidity');
const Debt = require('./Domains/Debt/Debt');
const GrossIncome = require('./Domains/GrossIncome/GrossIncome');
const CashFlow = require('./Domains/CashFlow/CashFlow');
const Capitalization = require('./Domains/Capitalization/Capitalization');
const RateOfReturn = require('./Domains/RateOfReturn/RateOfReturn');
const Stocks = require('./Domains/Stocks/Stocks');
const Currency = require('./Domains/Currency/Currency');
const Statistics = require('./Domains/Statistics/Statistics');
const Derivatives = require('./Domains/Derivatives/Derivatives');
const PerformanceMeasure = require('./Domains/PerformanceMeasure/PerformanceMeasure');
const BusinessValuation = require('./Domains/BusinessValuation/BusinessValuation');
const Bounds = require('./Domains/Bounds/Bounds');
//Classes
const BusinessValuationClass = require('./Classes/BusinessValuationClass');
const CashFlowAnalysisClass = require('./Classes/CashFlowAnalysisClass');
const WorkingCapitalRequirementClass = require('./Classes/WorkingCapitalRequirementClass');
const FreeCashFlowFirmClass = require('./Classes/FreeCashFlowFirmClass');
const CostOfDebtClass = require('./Classes/CostOfDebtClass');
const CostOfDebtResponseClass = require('./Classes/CostOfDebtResponseClass');

module.exports = {
    //Domains
    Depreciation,
    WorkingCapital,
    CurrentLiquidity,
    Debt,
    GrossIncome,
    CashFlow,
    Capitalization,
    RateOfReturn,
    Stocks,
    Currency,
    Statistics,
    Derivatives,
    PerformanceMeasure,
    BusinessValuation,
    Bounds,
    //Classes
    BusinessValuationClass,
    CashFlowAnalysisClass,
    WorkingCapitalRequirementClass,
    FreeCashFlowFirmClass,
    CostOfDebtClass,
    CostOfDebtResponseClass
 }