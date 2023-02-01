const Validation = require('../../Util/Validation');

module.exports = class Currency
{
    static CurrencyConverter(currency1, currency2)
    {     
        Validation.NotAllowZero(currency2);
        return (currency1/ currency2).toFixed(2);
    }
    static BigMacIndex(bigMacPrice, bigMacPriceUS, exchangeRate)
    {     
        Validation.NotAllowZero(bigMacPriceUS);
        Validation.NotAllowZero(exchangeRate);
        var breakEven = bigMacPrice/ bigMacPriceUS;
        var index = ((breakEven/ exchangeRate) - 1.0) * 100.0;
        return (index).toFixed(2);
    }
    static InterestRateParity(currentParity, inflation1, inflation2)
    {
        return (currentParity * ((1 + (inflation1/ 100.0))/ (1 + (inflation2/ 100.0)))).toFixed(2);
    }
}