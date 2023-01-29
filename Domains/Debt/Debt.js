const Validation = require('../../Util/Validation');

module.exports = class Debt
{    
    static DebtRatio(currentLiabilities, noncurrentLiabilities, totalAssets)
    {
        Validation.NotAllowZero(totalAssets);
        return ((currentLiabilities - noncurrentLiabilities) / totalAssets).toFixed(2);
    }
    static DebtRatioWithTotalDebt(totalDebt, totalAssets)
    {
        Validation.NotAllowZero(totalAssets);
        return (totalDebt / totalAssets).toFixed(2);
    }
    static DebtRatioOnerous(currentLiabilitiesloanAndFinancing, nonCurrentLiabilitiesloanAndFinancing, totalAssets)
    {
        Validation.NotAllowZero(totalAssets);
        return ((currentLiabilitiesloanAndFinancing + nonCurrentLiabilitiesloanAndFinancing)/totalAssets).toFixed(2);
    }
    static DebtRatioOnerousWithSumOfLiabilitiesloanAndFinancing(sumOfLiabilitiesloanAndFinancing, totalAssets)
    {
        Validation.NotAllowZero(totalAssets);
        return (sumOfLiabilitiesloanAndFinancing/totalAssets).toFixed(2);
    }
}