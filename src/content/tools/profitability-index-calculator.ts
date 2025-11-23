import { CalculatorContent } from '@/types';

export const PROFITABILITY_INDEX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Profitability Index (PI) Calculator',
  description:
    'Calculate the Profitability Index for real estate investments. PI helps you compare investment opportunities by measuring the ratio of payoff to investment.',
  icon: 'Icon',
  category: 'Investment Analysis',
  slug: 'profitability-index-calculator',
  article: {
    title: 'Understanding Profitability Index (PI) in Real Estate',
    content: `
## Understanding Profitability Index (PI) in Real Estate

The Profitability Index (PI), also known as the Profit Investment Ratio or Value Investment Ratio, is a powerful tool for evaluating and ranking real estate investment opportunities. It's particularly useful when you have limited capital and need to choose between multiple projects.

### What is the Profitability Index?

The Profitability Index measures the relationship between the costs and benefits of a proposed investment. It tells you how much value you create for every dollar invested.

### The PI Formula

**PI = Present Value of Future Cash Flows / Initial Investment**

Or alternatively:

**PI = (NPV + Initial Investment) / Initial Investment**

**PI = 1 + (NPV / Initial Investment)**

### Interpreting Profitability Index

- **PI > 1.0:** Investment creates value; accept the project
- **PI = 1.0:** Investment breaks even; indifferent decision
- **PI < 1.0:** Investment destroys value; reject the project

The higher the PI, the more attractive the investment.

### Why PI is Valuable for Real Estate Investors

1. **Capital Rationing:** When you have limited capital, PI helps prioritize investments
2. **Relative Comparison:** Easily compare investments of different sizes
3. **Value Creation:** Shows value created per dollar invested
4. **Quick Screening:** Provides rapid assessment of multiple opportunities
5. **Efficiency Measure:** Identifies the most efficient use of capital

### PI vs. NPV: When to Use Each

**Net Present Value (NPV):**
- Measures absolute dollar value created
- Best for evaluating single projects
- Doesn't account for investment size

**Profitability Index (PI):**
- Measures relative value (ratio)
- Best for comparing multiple projects
- Accounts for investment size
- Ideal when capital is limited

### Real-World Example

Consider two investment opportunities:

**Property A:**
- Initial Investment: $100,000
- NPV: $30,000
- PI: 1.30 (creates $0.30 per dollar invested)

**Property B:**
- Initial Investment: $200,000
- NPV: $50,000
- PI: 1.25 (creates $0.25 per dollar invested)

If you have unlimited capital, Property B creates more total value ($50,000 vs. $30,000). However, if capital is limited, Property A is more efficient (30% return vs. 25% return), making it the better choice.

### Using PI in Real Estate Scenarios

**Rental Property Portfolio:**
Rank multiple rental properties to determine which ones to acquire first with available capital.

**Renovation Projects:**
Compare different renovation options to maximize value creation with a fixed budget.

**Development Opportunities:**
Evaluate land development projects with varying scales and returns.

**1031 Exchange:**
Choose replacement properties that offer the best bang for your buck.

### Advantages of Profitability Index

1. **Simple Interpretation:** Easy to understand and communicate
2. **Considers Time Value:** Incorporates discounted cash flows
3. **Consistent with NPV:** Uses the same underlying principles
4. **Scalable:** Works for projects of any size
5. **Objective:** Provides clear, quantitative rankings

### Limitations to Consider

1. **Requires Accurate Forecasts:** Depends on reliable cash flow projections
2. **Discount Rate Sensitivity:** Results vary with different discount rates
3. **Doesn't Show Scale:** Doesn't indicate absolute dollar returns
4. **Ignores Mutual Exclusivity:** May not work for either/or decisions

### Best Practices

1. **Use Conservative Estimates:** Don't inflate future cash flows
2. **Apply Consistent Discount Rates:** Use the same rate across all projects
3. **Combine with Other Metrics:** Consider NPV, IRR, and payback period
4. **Update Regularly:** Recalculate as market conditions change
5. **Consider Qualitative Factors:** Don't ignore non-financial considerations
`,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'initialInvestment',
        label: 'Initial Investment',
        type: 'number',
        defaultValue: '250000',
      },
      {
        name: 'annualCashFlow',
        label: 'Annual Cash Flow',
        type: 'number',
        defaultValue: '28000',
      },
      {
        name: 'years',
        label: 'Investment Period (Years)',
        type: 'number',
        defaultValue: '10',
      },
      {
        name: 'residualValue',
        label: 'Residual/Sale Value',
        type: 'number',
        defaultValue: '350000',
      },
      {
        name: 'discountRate',
        label: 'Discount Rate (%)',
        type: 'number',
        defaultValue: '7',
      },
    ],
    calculate: (values) => {
      const {
        initialInvestment,
        annualCashFlow,
        years,
        residualValue,
        discountRate,
      } = values;

      const rate = discountRate / 100;
      let pvCashFlows = 0;

      // Calculate present value of annual cash flows
      for (let year = 1; year <= years; year++) {
        pvCashFlows += annualCashFlow / Math.pow(1 + rate, year);
      }

      // Add present value of residual value
      pvCashFlows += residualValue / Math.pow(1 + rate, years);

      // Calculate Profitability Index
      const pi = pvCashFlows / initialInvestment;

      // Calculate NPV for reference
      const npv = pvCashFlows - initialInvestment;

      // Determine investment decision
      let decision = '';
      if (pi > 1) {
        decision = 'Accept - Creates Value';
      } else if (pi === 1) {
        decision = 'Marginal - Break Even';
      } else {
        decision = 'Reject - Destroys Value';
      }

      return [
        {
          label: 'Profitability Index (PI)',
          value: pi.toFixed(3),
        },
        {
          label: 'Value Created per Dollar Invested',
          value: `$${(pi - 1).toFixed(2)}`,
        },
        {
          label: 'Investment Decision',
          value: decision,
        },
        {
          label: 'Net Present Value (NPV)',
          value: `$${npv.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Present Value of Cash Flows',
          value: `$${pvCashFlows.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
      ];
    },
  },
};
