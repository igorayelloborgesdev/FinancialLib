var gaussian = require('gaussian');
var formula = require('@formulajs/formulajs');

module.exports = class Statistics
{
    static Mean(meanValuesArray)
    {             
        return (meanValuesArray.reduce((a, b) => a + b, 0)/ meanValuesArray.length).toFixed(2);
    }
    static Variance(meanValuesArray)
    {             
        var mean = this.Mean(meanValuesArray);
        var valueNew = 0.0;
        meanValuesArray.forEach(element => valueNew += Math.pow((element - mean), 2));
        return (valueNew / (meanValuesArray.length - 1)).toFixed(2);
    }
    static StandardDeviation(meanValuesArray)
    {                            
        return Math.sqrt(this.Variance(meanValuesArray)).toFixed(2);
    }
    static NormalDistributionLowerTail(meanValuesArray, probabilityValue)
    {                            
        var mean = this.Mean(meanValuesArray);
        var variance = this.Variance(meanValuesArray);
        var distribution = gaussian(mean, variance);        
        return (distribution.cdf(probabilityValue) * 100.0).toFixed(2);
    }
    static NormalDistributionUpperTail(meanValuesArray, probabilityValue)
    {                            
        return (100.0 - this.NormalDistributionLowerTail(meanValuesArray, probabilityValue)).toFixed(2);
    }
    static NormalDistributionInverse(meanValuesArray, percentValue)
    {                            
        var mean = this.Mean(meanValuesArray);
        var standardDeviation = this.StandardDeviation(meanValuesArray);        
        var percent = percentValue / 100.0;
        return (formula.NORMINV(percent, mean, standardDeviation)).toFixed(2);
    }

}