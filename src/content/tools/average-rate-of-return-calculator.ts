import { CalculatorContent } from '@/types';

export const AVERAGE_RATE_OF_RETURN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Average Rate of Return (ARR) Calculator',
  description:
    'Calculate the Average Rate of Return for real estate investments. ARR provides a simple measure of the expected profitability of an investment over its lifetime.',
  icon: 'Icon',
  category: 'Investment Analysis',
  slug: 'average-rate-of-return-calculator',
  article: {
    title: 'Understanding Average Rate of Return (ARR) in Real Estate',
    content: `
## Understanding Average Rate of Return (ARR) in Real Estate

The Average Rate of Return (ARR), also known as the Accounting Rate of Return, is a straightforward metric that helps real estate investors evaluate the profitability of their investments. Unlike more complex metrics like IRR or NPV, ARR is simple to calculate and easy to understand.

### What is Average Rate of Return?

ARR measures the expected annual profit from an investment as a percentage of the initial investment. It provides a quick snapshot of an investment's profitability without considering the time value of money.

### The ARR Formula

**ARR = (Average Annual Profit / Initial Investment) × 100%**

Where:
- **Average Annual Profit** = Total profit over investment period / Number of years
- **Initial Investment** = Total capital invested upfront

Alternative formula:
**ARR = ((Average Annual Revenue - Average Annual Costs) / Initial Investment) × 100%**

### Why Use ARR in Real Estate?

1. **Simplicity:** Easy to calculate and understand, even for beginner investors
2. **Quick Comparison:** Allows rapid comparison between multiple properties
3. **Profitability Focus:** Shows average annual return in percentage terms
4. **Accessible:** Doesn't require complex financial modeling
5. **Benchmarking:** Easy to compare against other investment types

### ARR vs. Other Metrics

**ARR vs. ROI:**
- ROI measures total return over entire period
- ARR measures average annual return
- ARR = ROI / Number of Years (simplified)

**ARR vs. IRR:**
- IRR considers time value of money; ARR does not
- IRR is more complex but more accurate
- ARR is simpler but less sophisticated

**ARR vs. Cap Rate:**
- Cap rate is for a single year's performance
- ARR averages returns over multiple years
- Both ignore financing effects

### When to Use ARR

ARR is most useful for:
- **Initial Screening:** Quickly filter investment opportunities
- **Simple Comparisons:** When comparing similar properties
- **Communication:** Explaining returns to non-financial stakeholders
- **Supplementary Analysis:** Alongside more sophisticated metrics

### Real-World Example

**Rental Property Investment:**
- Purchase Price: $300,000
- Renovation Costs: $50,000
- Total Initial Investment: $350,000
- Annual Rental Income: $36,000
- Annual Expenses: $12,000
- Annual Profit: $24,000
- Investment Period: 10 years

**ARR = ($24,000 / $350,000) × 100% = 6.86%**

This means the property generates an average return of 6.86% per year on the initial investment.

### Advantages of ARR

1. **Easy Calculation:** No complex formulas or financial calculators needed
2. **Clear Communication:** Percentage returns are universally understood
3. **Profit-Based:** Focuses on actual profitability, not just cash flow
4. **Quick Analysis:** Provides rapid assessment of opportunities
5. **No Assumptions:** Doesn't require discount rate assumptions

### Limitations of ARR

1. **Ignores Time Value:** A dollar today is worth more than a dollar tomorrow
2. **Ignores Cash Flow Timing:** Doesn't account for when profits are received
3. **No Risk Adjustment:** Doesn't consider investment risk levels
4. **Oversimplification:** May miss important financial nuances
5. **Book Values:** Based on accounting profits, not cash flows

### Improving ARR Analysis

To make better decisions using ARR:

1. **Use Realistic Projections:** Base calculations on conservative estimates
2. **Consider Multiple Scenarios:** Calculate best, worst, and likely cases
3. **Combine with Other Metrics:** Use alongside NPV, IRR, and cash-on-cash
4. **Account for Taxes:** Include tax implications in your profit calculations
5. **Regular Updates:** Recalculate ARR as actual performance data becomes available

### ARR Benchmarks by Property Type

**Residential Rental:** 4-8% typical ARR
**Commercial Properties:** 6-12% typical ARR
**Retail Spaces:** 5-10% typical ARR
**Industrial Properties:** 7-13% typical ARR
**Multi-Family:** 5-9% typical ARR

*Note: These are general ranges and vary significantly by market, location, and property condition.*

### Making Investment Decisions with ARR

**ARR > Required Return:** Investment may be attractive
**ARR = Required Return:** Marginal investment
**ARR < Required Return:** Likely reject the investment

Always compare ARR to your minimum required return and to alternative investment opportunities.
`,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'initialInvestment',
        label: 'Initial Investment',
        type: 'number',
        defaultValue: '350000',
      },
      {
        name: 'annualRevenue',
        label: 'Average Annual Revenue',
        type: 'number',
        defaultValue: '42000',
      },
      {
        name: 'annualExpenses',
        label: 'Average Annual Expenses',
        type: 'number',
        defaultValue: '15000',
      },
      {
        name: 'investmentPeriod',
        label: 'Investment Period (Years)',
        type: 'number',
        defaultValue: '10',
      },
      {
        name: 'salvageValue',
        label: 'Expected Salvage/Sale Value',
        type: 'number',
        defaultValue: '450000',
      },
    ],
    calculate: (values) => {
      const {
        initialInvestment,
        annualRevenue,
        annualExpenses,
        investmentPeriod,
        salvageValue,
      } = values;

      // Calculate average annual profit from operations
      const annualProfit = annualRevenue - annualExpenses;

      // Calculate capital gain/loss
      const capitalGain = salvageValue - initialInvestment;
      const averageAnnualCapitalGain = capitalGain / investmentPeriod;

      // Total average annual profit including capital gains
      const totalAverageAnnualProfit = annualProfit + averageAnnualCapitalGain;

      // Calculate ARR
      const arr = (totalAverageAnnualProfit / initialInvestment) * 100;

      // Calculate ARR without capital gains (operational ARR)
      const operationalARR = (annualProfit / initialInvestment) * 100;

      // Total return over period
      const totalProfit =
        annualProfit * investmentPeriod + capitalGain;
      const totalReturn = (totalProfit / initialInvestment) * 100;

      return [
        {
          label: 'Average Rate of Return (ARR)',
          value: `${arr.toFixed(2)}%`,
        },
        {
          label: 'Operational ARR (Excluding Sale)',
          value: `${operationalARR.toFixed(2)}%`,
        },
        {
          label: 'Average Annual Profit',
          value: `$${totalAverageAnnualProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Total Return Over Period',
          value: `${totalReturn.toFixed(2)}%`,
        },
        {
          label: 'Total Profit',
          value: `$${totalProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
      ];
    },
  },
};
