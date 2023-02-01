const Validation = require('../../Util/Validation');

module.exports = class Stocks
{
    static EquityValueShare(equityValue, share)
    {
        Validation.NotAllowZero(share);
        return (equityValue/ share).toFixed(2);
    }
}