const Validation = require('../../Util/Validation');

module.exports = class Capitalization
{    
    static CapitalizationSimple(currentValue, interest)
    {     
        return (currentValue * (1 + (interest / 100.0))).toFixed(2);
    }
    static CapitalizationSimpleFees(currentValue, interest)
    {     
        return (currentValue * (interest / 100.0)).toFixed(2);
    }
    static CapitalizationSimpleInterest(currentValue, finalValue)
    {     
        Validation.NotAllowZero(currentValue);
        return (((finalValue - currentValue)/ currentValue) * 100.0).toFixed(2);
    }
    static CapitalizationSimplePeriod(currentValue, interest, period)
    {             
        return (currentValue + (currentValue * (interest / 100.0) * period)).toFixed(2);
    }
    static CapitalizationSimpleFeesPeriod(currentValue, interest, period)
    {             
        return (currentValue * (interest / 100.0) * period).toFixed(2);
    }
    static SimpleFeesPeriod(interest, period)
    {             
        return (((interest / 100.0) * period) * 100.0).toFixed(2);
    }
    static SimpleInterestPeriod(yearInterest, period)
    {             
        return (((yearInterest / 100.0) * period) * 100.0).toFixed(2);
    }
    static CapitalizationSimpleFutureValue(futureValue, interest, period)
    {     
        return (futureValue / (1 + (interest / 100.0) * period)).toFixed(2);
    }    
    static CapitalizationCompound(currentValue, interest, period)
    {             
        return (currentValue * Math.pow((1 + (interest / 100.0)), period)).toFixed(2);
    }
    static CapitalizationCompoundInterestPeriod(interest, period)
    {             
        return ((Math.pow((1 + (interest / 100.0)), period) - 1.0) * 100.00).toFixed(2);
    }
    static CapitalizationCompoundGetCurrentValue(futureValue, interest, period)
    {             
        return (futureValue / Math.pow((1 + (interest / 100.0)), period)).toFixed(2);
    }    
    static CapitalizationWithCumulativeInterest(currentValue, interestArray)
    {
        var valueNew = currentValue;
        interestArray.forEach(element => valueNew *= (1 + (element / 100.0)));
        return valueNew.toFixed(2);
    }
    static CumulativeInterestForValue(currentValue, futureValue)
    {        
        Validation.NotAllowZero(currentValue);
        return (((futureValue / currentValue) - 1) * 100.0).toFixed(2);
    }
    static CumulativeInterest(interestArray)
    {        
        var valueNew = 1.0;
        interestArray.forEach(element => valueNew *= (1 + (element / 100.0)));
        return ((valueNew - 1.0) * 100.0).toFixed(2);
    }
    static NominalYield(currentValue, futureValue)
    {
        Validation.NotAllowZero(currentValue);
        return (((futureValue / currentValue) - 1) * 100.0).toFixed(2);        
    }    
    static RealIncome(interest, inflation)
    {
        Validation.NumberNotAllow(-1.0, -1.0 * (inflation / 100.0));
        return ((((1.0 + (interest / 100.0))/(1.0 + (inflation/ 100.0))) - 1.0) * 100.0).toFixed(2);
    }
    static NominalInterestRate(realInterest, inflation)
    {        
        return ( (((1.0 + (realInterest / 100.0)) * (1.0 + (inflation / 100.0))) - 1.0) * 100.0).toFixed(2);        
    }
    static RealInterestRate(interest, period)
    {
        return ((Math.pow((1 + (interest / 100.0)), period) - 1) * 100.0).toFixed(2);
    }
    static RealInterestRateByCurrentValueFutureValueAndPeriod(currentValue, futureValue, period)
    {
        Validation.NotAllowZero(period);
        return ((((futureValue / currentValue) - 1.0) / period) * 100.0 ).toFixed(2);
    }
    static NominalInterestRateWithCurrentValue(currentValue, realInterest, inflation)
    {        
        return (currentValue * (1.0 + (((1.0 + (realInterest / 100.0)) * (1.0 + (inflation / 100.0))) - 1.0)) ).toFixed(2);        
    }
}