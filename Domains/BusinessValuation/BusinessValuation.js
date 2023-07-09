const Validation = require('../../Util/Validation');
const GrossIncome = require('../../Domains/GrossIncome/GrossIncome');
const CashFlowAnalysisClass = require('../../Classes/CashFlowAnalysisClass');
const FreeCashFlowFirmClass = require('../../Classes/FreeCashFlowFirmClass');
const CostOfDebtResponseClass = require('../../Classes/CostOfDebtResponseClass');

module.exports = class BusinessValuation
{
    static Equity(assets, debts)
    {        
        return (assets - debts).toFixed(2);
    }    
    static EquityValue(assets, debts, stocksCount)
    {        
        Validation.NotAllowZero(stocksCount);
        return (this.Equity(assets, debts) / stocksCount).toFixed(2);
    }
    static MarketCap(stockPrice, stocksCount)
    {                
        return (stockPrice * stocksCount).toFixed(2);
    }
    static WorkingCapitalRequirement(operatingCurrentAssets, currentOperatingLiabilities)
    {                
        return (operatingCurrentAssets - currentOperatingLiabilities).toFixed(2);
    }
    static InvestedCapital(operatingCurrentAssets, currentOperatingLiabilities, noncurrentAssets)
    {           
        return ((this.WorkingCapitalRequirement(operatingCurrentAssets, currentOperatingLiabilities) * 1.0) + noncurrentAssets).toFixed(2);
    }
    static InvestedCapital(netDebt, netWorth)
    {           
        return (netDebt + netWorth).toFixed(2);
    }
    static EnterpriseValue(marketCap, netDebt)
    {           
        return (marketCap + netDebt).toFixed(2);
    }
    static EnterpriseValue(stockPrice, stocksCount, netDebt)
    {               
        return ((this.MarketCap(stockPrice, stocksCount) * 1.0) + netDebt).toFixed(2);
    }
    static PriceToBookRatio(price, book)
    {               
        return (price/ book).toFixed(2);
    }    
    static EV_EBITDA(stockPrice, stocksCount, netDebt, netIncome, interest, taxes, depreciationAmortization)
    {               
        var marketCap = this.MarketCap(stockPrice, stocksCount);
        var ebitda = GrossIncome.EBITDA(netIncome, interest, taxes, depreciationAmortization);
        Validation.NotAllowZero(ebitda);
        return ((marketCap + netDebt)/ ebitda).toFixed(2);
    }
    static EV_EBITDA(enterpriseValue, ebitda)
    {                       
        Validation.NotAllowZero(ebitda);
        return (enterpriseValue/ ebitda).toFixed(2);
    }    
    static PriceEarnings(marketValuePerShare, earningsPerShare)
    {               
        Validation.NotAllowZero(earningsPerShare);
        return (marketValuePerShare/ earningsPerShare).toFixed(2);
    }    
    static PriceToBookValue(marketPricePerShare, bookValuePerShare)
    {               
        Validation.NotAllowZero(bookValuePerShare);
        return (marketPricePerShare/ bookValuePerShare).toFixed(2);
    }
    static FreeCashFlowFirm_FCFF(cashFlowArray, wacc)
    {
        var valueNew = 0.0;        
        for(var i = 0; i < cashFlowArray.length; i++)        
            valueNew += (cashFlowArray[i]/ Math.pow((1 + (wacc / 100.0)), (i + 1)));        
        return valueNew;
    }
    static FreeCashFlowFirmWithWorkingCapitalRequirementList_FCFF(workingCapitalRequirementList)
    {
        var freeCashFlowFirmList = [];
        for(var i = 0; i < workingCapitalRequirementList.length; i++)
        {            
            var freeCashFlowFirmObject = new FreeCashFlowFirmClass();
            freeCashFlowFirmObject.workingCapitalRequirement_WCR = this.WorkingCapitalRequirement_WCR(workingCapitalRequirementList[i].businessValuationObject);            
            if(i != 0)
            {
                freeCashFlowFirmObject.ebit = workingCapitalRequirementList[i].ebit;
                freeCashFlowFirmObject.taxes = freeCashFlowFirmObject.ebit * (workingCapitalRequirementList[i].taxes / 100.0);
                freeCashFlowFirmObject.depreciation = workingCapitalRequirementList[i].depreciation;
                freeCashFlowFirmObject.capitalExpenditure_CAPEX = workingCapitalRequirementList[i].immobilizedAssets - workingCapitalRequirementList[i - 1].immobilizedAssets;            
                freeCashFlowFirmObject.workingCapitalInvestment = freeCashFlowFirmObject.workingCapitalRequirement_WCR - freeCashFlowFirmList[i - 1].workingCapitalRequirement_WCR;
                freeCashFlowFirmObject.freeCashFlowFirm_FCFF = (freeCashFlowFirmObject.ebit + freeCashFlowFirmObject.depreciation) - 
                (freeCashFlowFirmObject.taxes + freeCashFlowFirmObject.capitalExpenditure_CAPEX + freeCashFlowFirmObject.workingCapitalInvestment);                
            }            
            freeCashFlowFirmList.push(freeCashFlowFirmObject);
        }        
        return freeCashFlowFirmList;
    }
    static AnalyseCashFlow(cashFlowArray, wacc, netDebt, stocksCount)
    {
        Validation.NotAllowZero(stocksCount);
        var cashFlowAnalysis = new CashFlowAnalysisClass();
        cashFlowAnalysis.currentValue = this.FreeCashFlowFirm_FCFF(cashFlowArray, wacc);
        cashFlowAnalysis.shareholderValue = cashFlowAnalysis.currentValue - netDebt;
        cashFlowAnalysis.fairValue = cashFlowAnalysis.shareholderValue / stocksCount;
        return cashFlowAnalysis;
    }
    static WorkingCapitalRequirement_WCR(businessValuation)
    {                        
        return (businessValuation.receipt + businessValuation.stock) - 
        (businessValuation.vendors + businessValuation.socialResponsibility + businessValuation.taxObligations);                 
    }        
    static CapitalCost_KE(riskFreeRate, marketReturn,  marketPremium, countryRisk)
    {
        return (riskFreeRate + marketReturn * marketPremium + countryRisk).toFixed(2);
    }
    static CapitalCostForeignCurrency_KE(capitalCost, inflationForeign, inflationCurrent)
    {
        return (((1 + (capitalCost/100.0)) * (1 + (inflationForeign/100.0))/(1 + (inflationCurrent/100.0)) - 1) * 100.0).toFixed(2);
    }
    static DebtToEquity_DE(debt, equity)
    {
        return (debt/ equity).toFixed(2);
    }
    static UnleveredBeta(beta, taxRate, debtToEquity)
    {
        return (beta/(1 + (1 - (taxRate/ 100.0)) * debtToEquity)).toFixed(2);
    }    
    static LeveragedBeta(beta, taxRate, debtToEquity)
    {
        return (beta * (1 + (1 - (taxRate/ 100.0)) * debtToEquity)).toFixed(2);
    }
    static CostOfDebt_KD(costOfDebtList)
    {
        const sum = costOfDebtList.reduce((accumulator, object) => {
            return accumulator + object.value;
          }, 0);
          var costOfDebtListNew = [];
          for(var i = 0; i < costOfDebtList.length; i++)
          {
            var costOfDebtObj = new CostOfDebtResponseClass();
            costOfDebtObj.finalTax = this.CostOfDebtFinalTax(costOfDebtList[i].indexer, costOfDebtList[i].additional);
            costOfDebtObj.proportion = (costOfDebtList[i].value/ sum) * 100.0;
            costOfDebtObj.weightedRate = (costOfDebtObj.finalTax / 100.0) * (costOfDebtObj.proportion / 100.0) * 100.0;        
            costOfDebtListNew.push(costOfDebtObj);
          }          
        return costOfDebtListNew.reduce((accumulator, object) => {
            return accumulator + object.weightedRate;
          }, 0).toFixed(2);
    }
    static CostOfDebtFinalTax(indexer, additional)
    {
        return ((1 + (indexer/ 100.0)) * (1 + (additional/ 100.0)) - 1) * 100.0;
    }
    static WeightedAverageCostOfCapital_WACC(costOfDebt, taxes, netDebt, marketCap, capitalCostForeignCurrency_KE)
    {
        Validation.NotAllowZero(taxes);
        var netDebtPercent = netDebt/(netDebt + marketCap);
        var marketCapPercent = marketCap/(netDebt + marketCap);
        return (costOfDebt * (1 - (taxes / 100.0)) * netDebtPercent + capitalCostForeignCurrency_KE * marketCapPercent).toFixed(2);
    }
    static Perpetuity(freeCashFlow, growthRate, wacc)
    {
        return (freeCashFlow * (1 + (growthRate / 100.0)) / ((wacc / 100.0) - (growthRate / 100.0))).toFixed(2);
    }    
    static PerpetuityPresentValue(perpetuity, wacc, index)
    {
        return perpetuity / Math.pow((1 + (wacc / 100.0)), index);
    }
    static FirmValue(freeCashFlowFirmList, wacc, perpetuity)
    {
        var freeCashFlowFirm = this.FreeCashFlowFirm_FCFF(freeCashFlowFirmList, wacc);
        var perpetuityPresentValue = this.PerpetuityPresentValue(perpetuity, wacc, freeCashFlowFirmList.length);
        return freeCashFlowFirm + perpetuityPresentValue;
    }

}