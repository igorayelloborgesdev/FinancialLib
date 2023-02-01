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

module.exports = {
    Depreciation,
    WorkingCapital,
    CurrentLiquidity,
    Debt,
    GrossIncome,
    CashFlow,
    Capitalization,
    RateOfReturn,
    Stocks,
    Currency
 }

// var ztable = require('ztable');
// var media = 174;
// var desvioPadrao = 8;
// var probabilidade = 180;

// var z = (probabilidade - media) / desvioPadrao
// console.log(ztable(z));