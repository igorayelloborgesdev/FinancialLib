const Validation = require('../../Util/Validation');

module.exports = class Capitalization
{
    static UnitPrice(value, futureRate, nDu, du)
    {     
        return (value/(Math.pow((1.0 + (futureRate/100.0)), (nDu/du))));
    }    
    static UnitPriceAdjust(valueBought, valueSold, contracts)
    {     
        return ((valueBought - valueSold) * contracts);
    }
    static CurrencyForwardHedge(baseContract, exchangeRateEnd, exchangeRateForward)
    {     
        return (baseContract * (exchangeRateEnd - exchangeRateForward));
    }    
    static BovespaFutureIndex(boughtContract, currentContract, point, contracts)
    {     
        return (((currentContract - boughtContract) * point) * contracts);
    }    
    static GuaranteedProfitMargins(soldContract, boughtContract, contractValue, margin, exchange)
    {
        return ((((soldContract - boughtContract) * contractValue) * (margin/ 100.0)) * exchange);
    }
    static ContractsHedge(value, current)
    {
        Validation.NotAllowZero(current);
        return value/ current;
    }
    static UnitPriceFuture(value, futureRate, nDu, du)
    {     
        return (value * (Math.pow((1.0 + (futureRate/100.0)), (nDu/du))));
    }
    static FutureCurrencyPricing(futureTax, days, daysTotal, exchangeTax, daysSequence, daysSequenceTotal, exchange)
    {
        Validation.NotAllowZero(daysTotal);
        Validation.NotAllowZero(daysSequenceTotal);
        return exchange * (Math.pow(((futureTax / 100.0) + 1.0), (days/ daysTotal)) / (((exchangeTax/ 100.0) * (daysSequence/ daysSequenceTotal))  + 1.0));
    }
    static TotalReturnSwap(liborInit, liborEnd)
    {
        return ((((liborEnd/ 100.0) + 1.0) * ((liborInit/ 100.0) + 1.0)) - 1.0) * 100.0;
    }
    static FixedPriceCalculation(value, YTM, period)
    {
        return value / (Math.pow((1.0 + (YTM / 100.0)), period));
    }


}