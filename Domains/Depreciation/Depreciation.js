const Validation = require('../../Util/Validation');

module.exports = class Depreciation
{    
    static DepreciationStraightLine(purchasePriceofAsset, salvageValue, estimatedUsefulLifeOfAsset)
    {
        Validation.NotAllowZero(estimatedUsefulLifeOfAsset);
        return ((purchasePriceofAsset - salvageValue)/estimatedUsefulLifeOfAsset).toFixed(2);
    }    
    static DepreciationStraightLineWithoutSalvageValue(purchasePriceofAsset, estimatedUsefulLifeOfAsset)
    {        
        Validation.NotAllowZero(estimatedUsefulLifeOfAsset);
        var salvageValue = purchasePriceofAsset/estimatedUsefulLifeOfAsset;
        return ((purchasePriceofAsset - salvageValue)/estimatedUsefulLifeOfAsset).toFixed(2);
    }
}