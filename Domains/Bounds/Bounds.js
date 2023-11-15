const Validation = require('../../Util/Validation');

module.exports = class Bounds
{
    static UnitaryPrice(faceValue, interest, days, daysDivide)//Present Price
    {      
        Validation.NotAllowZero(daysDivide);  
        return (faceValue/ Math.pow((1 + (interest / 100.0)), (days/ daysDivide)));
    }
    static Income(initValue, finalValue)
    {      
        Validation.NotAllowZero(initValue);  
        return ((finalValue/ initValue) - 1.0);
    }    
    static AnnualProfit(interest, days, daysDivide)
    {
        Validation.NotAllowZero(daysDivide);  
        return ((Math.pow((1 + (interest / 100.0)), (days/ daysDivide))) - 1);
    }
    static FutureValueFlowSum(faceValue, futureValue, interest, days, daysDivide)
    {        
        var valueSum = 0.0;
        for(var i = 0; i < days.length; i++)
        {            
            if(i == days.length - 1)
            {
                valueSum += this.UnitaryPrice(faceValue + futureValue, interest, days[i], daysDivide);
            }
            else
            {
                valueSum += this.UnitaryPrice(faceValue, interest, days[i], daysDivide);
            }
        }
        return valueSum;
    }
    static FutureValue(presentValue, interest, days, daysDivide)
    {
        Validation.NotAllowZero(interest);  
        return presentValue * Math.pow((1 + (interest / 100.0)), (days/ daysDivide));
    }
    static Inflation(currentValue, realInterest, inflationInterest)
    {
        return (currentValue) * (1 + (realInterest / 100.0)) * (1 + (inflationInterest / 100.0));
    }
    static CompareInflationAndPreFixed(realInterest, inflationInterest)
    {
        return (((1 + (realInterest / 100.0)) / (1 + (inflationInterest / 100.0))) - 1.0) * 100.0;
    }
    static NominalUpdatedValue(currentValue, sumInflation)
    {
        return currentValue * (1 + (sumInflation / 100.0));
    }
    static CertificateDeposit(interest, days, daysDivide, incomePercent, unitaryPrice)
    {        
        var finalValue = unitaryPrice;
        for(var i = 0; i < interest.length; i++)
        {            
            finalValue = (((Math.pow((1 + (interest[i] / 100.0)), (days/ daysDivide)) - 1.0) * (incomePercent / 100.0)) + 1.0) * finalValue;            
        }
        return finalValue;
    }
    static CalcInterest(presentValue, futureValue)
    {
        return ((futureValue/ presentValue) - 1.0) * 100.0;
    }
    static CalcMultipleInterest(interest, days, daysDivide)
    {
        var finalValue = 1.0;
        var daysSum = 0;
        for(var i = 0; i < interest.length; i++)
        {
            finalValue *= Math.pow((1 + (interest[i] / 100.0)), days[i]/ daysDivide);
            daysSum += days[i];
        }
        var finalInterest = (finalValue - 1.0) * 100.0;
        return ((Math.pow((1 + (finalInterest / 100.0)), daysDivide/ daysSum)) - 1.0) * 100.0;
    }
    static CalcInterestRate(interest, days, daysDivide)
    {
        return ((Math.pow((1 + (interest / 100.0)), days/ daysDivide)) - 1.0) * 100.0;
    }
}