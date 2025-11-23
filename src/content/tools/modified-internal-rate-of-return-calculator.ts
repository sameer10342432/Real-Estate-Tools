import { CalculatorContent } from '@/types';

export const MODIFIED_INTERNAL_RATE_OF_RETURN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Modified Internal Rate of Return (MIRR) Calculator',
  description:
    'Calculate the Modified Internal Rate of Return for your real estate investments. MIRR provides a more accurate measure of investment profitability by accounting for reinvestment rates.',
  icon: 'Icon',
  category: 'Investment Analysis',
  slug: 'modified-internal-rate-of-return-calculator',
  article: {
    title: 'Understanding Modified Internal Rate of Return (MIRR)',
    content: `
## Understanding Modified Internal Rate of Return (MIRR)

The Modified Internal Rate of Return (MIRR) is an improved version of the traditional Internal Rate of Return (IRR) that addresses some of its key limitations. MIRR is particularly valuable for real estate investors who want a more realistic measure of their investment's profitability.

### What Makes MIRR Different from IRR?

Unlike IRR, which assumes that all cash flows are reinvested at the same rate as the IRR itself, MIRR allows you to specify different rates for:
- **Finance Rate:** The cost of capital for negative cash flows (like down payments and improvements)
- **Reinvestment Rate:** The rate at which positive cash flows are reinvested

This makes MIRR more realistic because it's unlikely that all cash flows will be reinvested at the same high rate as the project's IRR.

### The MIRR Formula

**MIRR = ((FV of positive cash flows / PV of negative cash flows)^(1/n)) - 1**

Where:
- **FV** = Future Value of positive cash flows compounded at the reinvestment rate
- **PV** = Present Value of negative cash flows discounted at the finance rate
- **n** = Number of periods

### Why MIRR is Important for Real Estate Investors

1. **More Realistic Assumptions:** MIRR provides a more accurate picture by using realistic reinvestment rates
2. **Better for Comparison:** Easier to compare different investment opportunities
3. **Eliminates Multiple IRRs:** Unlike IRR, MIRR always produces a single, unique value
4. **Accounts for Cost of Capital:** Separates the cost of financing from investment returns

### When to Use MIRR

MIRR is particularly useful for:
- Long-term real estate investments with multiple cash flows
- Comparing properties with different cash flow patterns
- Projects with significant interim improvements or renovations
- Portfolio analysis and investment decision-making

### Interpreting Your MIRR Results

- **MIRR > Cost of Capital:** Investment is potentially profitable
- **MIRR < Cost of Capital:** Investment may not meet return requirements
- **Higher MIRR:** Generally indicates better investment performance

Remember that MIRR should be used alongside other metrics like NPV, cap rate, and cash-on-cash return for a comprehensive investment analysis.
`,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'initialInvestment',
        label: 'Initial Investment',
        type: 'number',
        defaultValue: '200000',
      },
      {
        name: 'yearlyIncome',
        label: 'Annual Cash Flow',
        type: 'number',
        defaultValue: '25000',
      },
      {
        name: 'finalValue',
        label: 'Final Sale Value',
        type: 'number',
        defaultValue: '350000',
      },
      {
        name: 'years',
        label: 'Investment Period (Years)',
        type: 'number',
        defaultValue: '10',
      },
      {
        name: 'financeRate',
        label: 'Finance Rate (%)',
        type: 'number',
        defaultValue: '5',
      },
      {
        name: 'reinvestmentRate',
        label: 'Reinvestment Rate (%)',
        type: 'number',
        defaultValue: '4',
      },
    ],
    calculate: (values) => {
      const {
        initialInvestment,
        yearlyIncome,
        finalValue,
        years,
        financeRate,
        reinvestmentRate,
      } = values;

      const fRate = financeRate / 100;
      const rRate = reinvestmentRate / 100;

      // Calculate future value of positive cash flows
      let fvPositive = 0;
      for (let i = 1; i <= years; i++) {
        fvPositive += yearlyIncome * Math.pow(1 + rRate, years - i);
      }
      fvPositive += finalValue;

      // Present value of negative cash flows (initial investment)
      const pvNegative = initialInvestment;

      // Calculate MIRR
      const mirr = Math.pow(fvPositive / pvNegative, 1 / years) - 1;
      const mirrPercentage = mirr * 100;

      return [
        {
          label: 'Modified Internal Rate of Return (MIRR)',
          value: `${mirrPercentage.toFixed(2)}%`,
        },
        {
          label: 'Total Future Value of Cash Flows',
          value: `$${fvPositive.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Total Cash Invested',
          value: `$${pvNegative.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
      ];
    },
  },
};
