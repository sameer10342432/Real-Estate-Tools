import { CalculatorContent } from '@/types';

export const NET_PRESENT_VALUE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Net Present Value (NPV) Calculator',
  description:
    'Calculate the Net Present Value of your real estate investment. NPV helps you determine if an investment will be profitable by comparing the present value of cash inflows to outflows.',
  icon: 'Icon',
  category: 'Investment Analysis',
  slug: 'net-present-value-calculator',
  article: {
    title: 'Understanding Net Present Value (NPV) in Real Estate',
    content: `
## Understanding Net Present Value (NPV) in Real Estate

Net Present Value (NPV) is one of the most important financial metrics for real estate investors. It calculates the difference between the present value of cash inflows and outflows over a period of time, helping you make informed investment decisions.

### What is NPV?

NPV represents the value of all future cash flows (both positive and negative) from an investment, discounted back to the present day. It answers the fundamental question: "Is this investment worth more than what I'm paying for it?"

### The NPV Formula

**NPV = Σ (Cash Flow / (1 + r)^t) - Initial Investment**

Where:
- **Cash Flow** = Net cash flow for each period
- **r** = Discount rate (required rate of return)
- **t** = Time period
- **Σ** = Sum of all discounted cash flows

### Why NPV Matters in Real Estate

1. **Time Value of Money:** NPV accounts for the fact that a dollar today is worth more than a dollar tomorrow
2. **Comprehensive Analysis:** Considers all cash flows throughout the investment period
3. **Clear Decision Rule:** Positive NPV = good investment, Negative NPV = poor investment
4. **Comparable Metric:** Allows direct comparison between different investment opportunities

### Choosing the Right Discount Rate

The discount rate is crucial for NPV calculations. Common approaches include:
- **Cost of Capital:** Your average cost of borrowing
- **Required Rate of Return:** Your minimum acceptable return
- **WACC:** Weighted Average Cost of Capital for larger portfolios
- **Risk-Adjusted Rate:** Higher rates for riskier investments

### Interpreting NPV Results

- **NPV > 0:** Investment is expected to generate value above your required return
- **NPV = 0:** Investment exactly meets your required return
- **NPV < 0:** Investment won't meet your required return; consider passing

### NPV in Different Real Estate Scenarios

**Rental Properties:**
Calculate NPV using projected rental income, operating expenses, and eventual sale proceeds.

**Fix-and-Flip:**
Include purchase price, renovation costs, holding costs, and expected sale price.

**Commercial Real Estate:**
Factor in longer hold periods, lease structures, and potential appreciation.

### Limitations of NPV

While NPV is powerful, be aware of its limitations:
- Requires accurate cash flow projections
- Sensitive to discount rate selection
- Doesn't account for project flexibility
- May not capture all qualitative factors

### Best Practices for Using NPV

1. **Conservative Estimates:** Use realistic or conservative cash flow projections
2. **Sensitivity Analysis:** Test different discount rates and scenarios
3. **Cross-Reference:** Use NPV alongside IRR, cap rate, and cash-on-cash return
4. **Regular Updates:** Recalculate NPV as conditions change
`,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'initialInvestment',
        label: 'Initial Investment',
        type: 'number',
        defaultValue: '300000',
      },
      {
        name: 'annualCashFlow',
        label: 'Annual Cash Flow',
        type: 'number',
        defaultValue: '30000',
      },
      {
        name: 'investmentPeriod',
        label: 'Investment Period (Years)',
        type: 'number',
        defaultValue: '10',
      },
      {
        name: 'finalSaleValue',
        label: 'Expected Sale Value',
        type: 'number',
        defaultValue: '450000',
      },
      {
        name: 'discountRate',
        label: 'Discount Rate (%)',
        type: 'number',
        defaultValue: '8',
      },
    ],
    calculate: (values) => {
      const {
        initialInvestment,
        annualCashFlow,
        investmentPeriod,
        finalSaleValue,
        discountRate,
      } = values;

      const rate = discountRate / 100;
      let npv = -initialInvestment;

      // Calculate present value of annual cash flows
      for (let year = 1; year <= investmentPeriod; year++) {
        npv += annualCashFlow / Math.pow(1 + rate, year);
      }

      // Add present value of final sale
      npv += finalSaleValue / Math.pow(1 + rate, investmentPeriod);

      const totalCashInflows =
        annualCashFlow * investmentPeriod + finalSaleValue;
      const profitabilityIndex = (npv + initialInvestment) / initialInvestment;

      return [
        {
          label: 'Net Present Value (NPV)',
          value: `$${npv.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Investment Decision',
          value: npv > 0 ? 'Accept (Profitable)' : npv < 0 ? 'Reject (Unprofitable)' : 'Marginal',
        },
        {
          label: 'Total Undiscounted Cash Flows',
          value: `$${totalCashInflows.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Profitability Index',
          value: profitabilityIndex.toFixed(2),
        },
      ];
    },
  },
};
