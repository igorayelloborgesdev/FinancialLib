module.exports = class WorkingCapital
{    
    static WorkingCapital(currentAssets, currentLiability)
    {        
        return (currentAssets - currentLiability).toFixed(2);
    }
}