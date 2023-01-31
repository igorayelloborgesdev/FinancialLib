module.exports = class StringFormat
{    
    static RemoveChar(value, valueReplace, valueToReplace = '')
    {
        return value.replace(valueReplace, valueToReplace);
    }
    static RemoveCharArray(value, valueReplaceArray, valueToReplace = '')
    {
        valueReplaceArray.forEach(element => value = value.replace(element, valueToReplace));                
        return value;
    }
    static SplitString(value, valueToSplit)
    {        
        return value.split(valueToSplit);        
    }
}