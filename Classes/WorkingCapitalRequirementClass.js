const BusinessValuationClass = require('./BusinessValuationClass');

module.exports = class WorkingCapitalRequirementClass
{
    businessValuationObject;//BusinessValuationClass
    ebit;//float
    taxes;//float
    depreciation;//float
    immobilizedAssets;//float
    cash;//float
}