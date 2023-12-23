module.exports = class Risk
{
    static SharpeRatio(averageReturn, risk)
    {             
        return ((averageReturn/ risk)/100.0).toFixed(2);
    }
    static Beta(companyPremium, marketPremium)
    {
        return (companyPremium/ marketPremium).toFixed(2);
    }
    static InvestedReturn(beta, marketPremium)
    {
        return (beta * marketPremium).toFixed(2);
    }
}