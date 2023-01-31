module.exports = class Validation
{    
    static NotAllowZero(value)
    {
        if(value == 0)
            throw new Error('Not allow zero');
    }
    static NumberNotAllow(notAllowedValue, value)
    {
        if(notAllowedValue == value)
            throw new Error('Value not allowed');
    }    
}