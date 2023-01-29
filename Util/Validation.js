module.exports = class Depreciation
{    
    static NotAllowZero(value)
    {
        if(value == 0)
            throw new Error('Not allow zero');
    }    
}