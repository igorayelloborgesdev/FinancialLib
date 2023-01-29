const Validation = require('../../Util/Validation');

module.exports = class GrossIncome
{    
    static GrossIncome(netSales, costOfGoodsSold)
    {     
        return (netSales - costOfGoodsSold).toFixed(2);
    }
    static VerticalAnalysis(value, grossIncome)
    {
        Validation.NotAllowZero(grossIncome);        
        return ((value / grossIncome) * 100.0).toFixed(2);
    }
    static GrossMargin(price, cost)
    {     
        Validation.NotAllowZero(revenue);
        return ((price - cost)/price).toFixed(2);
    }
    static EBIT(netIncome, interest, taxes)
    {             
        return (netIncome + interest + taxes).toFixed(2);
    }
    static EBITMargin(netIncome, interest, taxes, grossIncome)
    {             
        Validation.NotAllowZero(grossIncome);
        return (this.EBIT(netIncome, interest, taxes)/grossIncome).toFixed(2);
    }
    static ProfitMargin(sales, totalExpenses, revenue)
    {             
        Validation.NotAllowZero(revenue);
        return ((100.0 * (sales - totalExpenses))/revenue).toFixed(2);
    }
    static ProfitMarginWithProfit(profit, revenue)
    {             
        Validation.NotAllowZero(revenue);
        return ((100.0 * profit)/revenue).toFixed(2);
    }
    static HorizontalAnalysis(currentValue, previousValue)
    {
        Validation.NotAllowZero(previousValue);        
        return (((currentValue / previousValue) -1.0) * 100.0).toFixed(2);
    }
    static EBITDA(netIncome, interest, taxes, depreciationAmortization)
    {             
        return (this.EBIT(netIncome, interest, taxes) + depreciationAmortization).toFixed(2);
    }
    static EBITDAMargin(netIncome, interest, taxes, depreciationAmortization, totalRevenue)
    {             
        Validation.NotAllowZero(totalRevenue);
        return ((this.EBIT(netIncome, interest, taxes) + depreciationAmortization)/totalRevenue).toFixed(2);
    }
}