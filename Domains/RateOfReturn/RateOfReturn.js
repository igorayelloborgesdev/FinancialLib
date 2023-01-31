const StringFormat = require('../../Util/StringFormat');
const nerdamer = require("../../nerdamer/all");

module.exports = class RateOfReturn
{     
    static InternalRateOfReturn(cashFlowArray, currentValue = 0.00)
    {
        var textExp = `-${currentValue}`;
        for(var i = 0; i < cashFlowArray.length; i++)        
            textExp += `+(${cashFlowArray[i]}/(1+x)^${i + 1})`;                    
        var result = nerdamer.solve(textExp, 'x').text();
        result = StringFormat.RemoveCharArray(result, ['[',']']);                
        return (StringFormat.SplitString(result, ',')[0] * 100.0).toFixed(2);
    }
    static MinimumAcceptableRateOfReturn(cashFlowArray, interest)
    {
        var valueNew = 0.0;        
        for(var i = 0; i < cashFlowArray.length; i++)        
            valueNew += (cashFlowArray[i]/ Math.pow((1 + (interest / 100.0)), (i + 1)));        
        return valueNew;
    }
    static NetPresentValue(cashFlowArray, interest, currentValue = 0.00)
    {             
        return (this.MinimumAcceptableRateOfReturn(cashFlowArray, interest) - currentValue).toFixed(2);
    }
}