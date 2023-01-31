const FinancialLib = require('./main');

// console.log(FinancialLib.RateOfReturn.MinimumAcceptableRateOfReturn([50000.00, 80000.00, 90000.00, 120000.00], 15.0, 200000.00));
// console.log(FinancialLib.RateOfReturn.InternalRateOfReturn([50000.00, 80000.00, 90000.00, 120000.00], 250000.00));
// console.log(FinancialLib.RateOfReturn.MinimumAcceptableRateOfReturn([50000.00, 80000.00, 90000.00, 120000.00], 15.0, 250000.00));
console.log(FinancialLib.RateOfReturn.NetPresentValue([50000.00, 80000.00, 90000.00, 120000.00], 15.0, 250000.00));