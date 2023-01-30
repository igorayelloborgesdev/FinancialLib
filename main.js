const Depreciation = require('./Domains/Depreciation/Depreciation');
const WorkingCapital = require('./Domains/WorkingCapital/WorkingCapital');
const CurrentLiquidity = require('./Domains/CurrentLiquidity/CurrentLiquidity');
const Debt = require('./Domains/Debt/Debt');
const GrossIncome = require('./Domains/GrossIncome/GrossIncome');
const CashFlow = require('./Domains/CashFlow/CashFlow');
const Capitalization = require('./Domains/Capitalization/Capitalization');

module.exports = {
    Depreciation,
    WorkingCapital,
    CurrentLiquidity,
    Debt,
    GrossIncome,
    CashFlow,
    Capitalization
 }


// const nerdamer = require("./nerdamer/all");
// var result = nerdamer.solve('-250000+(50000/(1+x)^1)+(80000/(1+x)^2)+(90000/(1+x)^3)+(120000/(1+x)^4)', 'x');
// console.log(result.text())

// var ztable = require('ztable');
// var media = 174;
// var desvioPadrao = 8;
// var probabilidade = 180;

// var z = (probabilidade - media) / desvioPadrao
// console.log(ztable(z));