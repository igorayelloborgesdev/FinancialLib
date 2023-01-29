const Validation = require('../../Util/Validation');

module.exports = class CurrentLiquidity
{    
    static CurrentLiquidity(currentAssets, currentLiability)
    {
        Validation.NotAllowZero(currentLiability);
        return (currentAssets / currentLiability).toFixed(2);
    }
}