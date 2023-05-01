const Validation = require('../../Util/Validation');

module.exports = class PerformanceMeasure
{
    static SharpeRatio(portfolioReturn, riskFreeRatio, standardDeviation)
    {
        Validation.NotAllowZero(standardDeviation);
        return (((portfolioReturn - riskFreeRatio)/ 100.0)/ (standardDeviation/ 100.0)).toFixed(2);
    }
    static TreynorRatio(portfolioReturn, riskFreeRate, portfolioBeta)
    {
        Validation.NotAllowZero(portfolioBeta);
        return (((portfolioReturn/ 100.0) - (riskFreeRate/ 100.0))/ portfolioBeta).toFixed(2);
    }
    static AlphaJensen(portfolioReturn, riskFreeRate, portfolioBeta, marketReturn)
    {
        return (portfolioReturn - (riskFreeRate + portfolioBeta * (marketReturn - riskFreeRate))).toFixed(2);
    }
    static Beta(covariance, variance)
    {
        Validation.NotAllowZero(variance);
        return covariance/ variance;
    }
    static TrackingError(alpha, risk)
    {
        Validation.NotAllowZero(risk);
        return alpha/ risk;
    }
}