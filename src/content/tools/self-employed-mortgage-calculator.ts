export const SelfEmployedMortgageCalculatorContent = {
  title: 'Self-Employed Mortgage Calculator',
  description: 'Calculate mortgage approval amount for self-employed borrowers with variable income',
  icon: '💼',
  category: 'Basic Calculators',
  slug: 'self-employed-mortgage-calculator',
  
  metaTitle: 'Self-Employed Mortgage Calculator - Calculate Home Loan Approval Amount',
  metaDescription: 'Free self-employed mortgage calculator helps freelancers and business owners calculate mortgage approval amounts using 2-year income average, tax returns, and DTI ratios.',
  
  article: `
# Self-Employed Mortgage Calculator

## Overview

Get your mortgage pre-qualification amount as a self-employed borrower. Lenders typically require 2 years of tax returns and calculate your qualifying income using the average of your net profit after expenses.

## How Self-Employed Mortgage Qualification Works

Self-employed borrowers face unique challenges when qualifying for a mortgage. Unlike W-2 employees who can provide pay stubs, you'll need to prove income stability through tax returns and financial statements.

### Required Documentation

**Tax Returns (2 Years)**
- Personal tax returns (Form 1040)
- Business tax returns (Schedule C, 1120, or 1120S)
- K-1 forms if applicable
- All schedules and attachments

**Profit & Loss Statements**
- Year-to-date P&L statement
- Balance sheet
- CPA-prepared statements (preferred)

**Bank Statements**
- Business account statements (12-24 months)
- Personal account statements (2-3 months)

### Income Calculation Methods

**2-Year Average Method**
Most common approach - lenders average your net self-employment income over 24 months:
- Year 1 Net Income: $80,000
- Year 2 Net Income: $90,000
- Average Qualifying Income: $85,000

**1-Year Method**
Available if income is stable or increasing:
- Recent year only if income is consistent
- Requires strong documentation
- May need larger down payment

**Add-Backs & Adjustments**
Lenders may add back certain expenses:
- Depreciation (non-cash expense)
- Depletion
- One-time losses
- Business use of home (partial)

## Debt-to-Income Ratio Requirements

**Front-End Ratio (Housing)**
- Maximum 28-31% of gross income
- Includes: Principal, Interest, Taxes, Insurance (PITI)
- PMI if applicable

**Back-End Ratio (Total Debt)**
- Maximum 43-45% of gross income
- Includes: PITI + all monthly debt obligations
- Credit cards, auto loans, student loans

## Down Payment Requirements

**Conventional Loans**
- Minimum 10% down (self-employed)
- 20% down to avoid PMI
- Larger down payment = better rates

**FHA Loans**
- 3.5% down with 580+ credit score
- 10% down with 500-579 credit score
- More flexible for self-employed

**Jumbo Loans**
- Typically 20-30% down
- Stricter documentation required
- Higher reserves needed

## Credit Score Impact

**Excellent Credit (740+)**
- Best interest rates
- Lower down payment options
- More lender flexibility

**Good Credit (680-739)**
- Competitive rates
- Standard down payment
- Most programs available

**Fair Credit (620-679)**
- Higher interest rates
- May need larger down payment
- FHA/VA options available

**Poor Credit (<620)**
- Limited options
- FHA may be available
- Significant down payment required

## Improving Your Approval Chances

**Show Income Stability**
- 2+ years in same business
- Consistent or growing revenue
- Strong profit margins

**Maintain Clean Books**
- Professional bookkeeping
- CPA-prepared statements
- Organized documentation

**Reduce Tax Write-Offs**
- Balance tax savings vs. income qualification
- Consider timing of deductions
- Plan 1-2 years ahead

**Lower Debt-to-Income Ratio**
- Pay down existing debts
- Avoid new credit obligations
- Increase business income

**Build Cash Reserves**
- 6-12 months PITI in savings
- Shows financial stability
- Required for some programs

## Common Challenges & Solutions

**Challenge: Fluctuating Income**
Solution: Show upward trend, provide contracts/recurring revenue documentation

**Challenge: High Business Expenses**
Solution: Plan ahead, reduce write-offs before applying, use add-backs

**Challenge: Short Business History**
Solution: FHA loans may accept 1 year with strong compensating factors

**Challenge: Multiple Income Sources**
Solution: Document all sources, show consistency across income streams

## Loan Program Comparison

**Conventional (Fannie Mae/Freddie Mac)**
- 2 years self-employment required
- Strong documentation needed
- Best rates for qualified borrowers

**FHA Loans**
- More flexible guidelines
- 1-2 years self-employment
- Lower down payment

**VA Loans (Veterans)**
- Must prove income stability
- 2 years preferred
- Zero down payment option

**Bank Statement Loans**
- Use bank deposits instead of tax returns
- Higher interest rates
- Alternative for high write-off borrowers

## Tips for Self-Employed Borrowers

1. **Start Early** - Begin organizing documents 6+ months before applying
2. **Work with CPA** - Ensure tax returns support mortgage goals
3. **Choose Right Lender** - Find one experienced with self-employed borrowers
4. **Be Transparent** - Explain any income fluctuations upfront
5. **Show Stability** - Demonstrate business longevity and future contracts

## Frequently Asked Questions

### How many years of self-employment do I need?

Most lenders require 2 years of self-employment history in the same field. Some programs may accept 1 year with strong compensating factors like high credit score and reserves.

### Can I use 1099 income to qualify?

Yes, 1099 income is treated similarly to self-employment income. Lenders will average 2 years of 1099 earnings and may deduct business expenses.

### Do I need to show profit every year?

While profit is preferred, lenders may average income if one year shows a loss. However, consistent losses make qualification difficult.

### Can I combine W-2 and self-employment income?

Yes, you can use both income sources. W-2 income requires pay stubs and employment verification, while self-employment income requires tax returns.

### What if my business is less than 2 years old?

FHA and some conventional programs may accept 1 year if you have previous experience in the same field or strong compensating factors.

## Additional Resources

For more mortgage planning tools:
- [FHA Loan Calculator](/tools/fha-loan-calculator) - Government-backed loans
- [1099 Earner Mortgage Qualifier](/tools/1099-earner-mortgage-qualifier) - For contract workers
- [Debt-to-Income Calculator](/tools/debt-to-income-ratio-calculator) - Check your DTI ratio
- [Down Payment Calculator](/tools/down-payment-calculator) - Plan your savings

## Calculate Your Mortgage Qualification

Use the calculator above to estimate your mortgage approval amount as a self-employed borrower. Enter your average annual income, monthly debts, and desired down payment to see what you may qualify for.
  `,
  
  calculate: (inputs: any) => {
    const avgAnnualIncome = parseFloat(inputs.avgAnnualIncome) || 0;
    const monthlyDebts = parseFloat(inputs.monthlyDebts) || 0;
    const downPayment = parseFloat(inputs.downPayment) || 0;
    const interestRate = parseFloat(inputs.interestRate) || 6.5;
    const propertyTax = parseFloat(inputs.propertyTax) || 1.2;
    const homeInsurance = parseFloat(inputs.homeInsurance) || 1200;
    
    const monthlyIncome = avgAnnualIncome / 12;
    const maxHousingPayment = monthlyIncome * 0.28;
    const maxTotalPayment = monthlyIncome * 0.43;
    const maxMortgagePayment = Math.min(maxHousingPayment, maxTotalPayment - monthlyDebts);
    
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = 30 * 12;
    
    const monthlyTaxInsurance = (propertyTax / 100 / 12) + (homeInsurance / 12);
    const availableForPI = maxMortgagePayment - monthlyTaxInsurance;
    
    let maxLoanAmount = 0;
    if (monthlyRate > 0) {
      maxLoanAmount = availableForPI * (Math.pow(1 + monthlyRate, numPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numPayments));
    }
    
    const maxHomePrice = maxLoanAmount + downPayment;
    const frontEndRatio = ((maxMortgagePayment / monthlyIncome) * 100);
    const backEndRatio = (((maxMortgagePayment + monthlyDebts) / monthlyIncome) * 100);
    const loanToValue = maxLoanAmount / maxHomePrice * 100;
    const pmiRequired = loanToValue > 80;
    const pmiAmount = pmiRequired ? (maxLoanAmount * 0.005 / 12) : 0;
    
    return {
      maxHomePrice: maxHomePrice.toFixed(0),
      maxLoanAmount: maxLoanAmount.toFixed(0),
      downPayment: downPayment.toFixed(0),
      monthlyPayment: (maxMortgagePayment + pmiAmount).toFixed(2),
      principalInterest: availableForPI.toFixed(2),
      propertyTax: ((maxHomePrice * propertyTax / 100) / 12).toFixed(2),
      homeInsurance: (homeInsurance / 12).toFixed(2),
      pmi: pmiAmount.toFixed(2),
      frontEndRatio: frontEndRatio.toFixed(1),
      backEndRatio: backEndRatio.toFixed(1),
      monthlyIncome: monthlyIncome.toFixed(2),
      recommendation: backEndRatio > 43 ? 'DTI too high - reduce debts or increase income' : frontEndRatio > 31 ? 'Housing ratio high - consider lower price range' : 'Good DTI ratios - you\'re in a strong position'
    };
  }
};
