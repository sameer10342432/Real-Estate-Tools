import { CalculatorContent } from '@/types';

export const STANDARD_DEVIATION_PORTFOLIO_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Standard Deviation Calculator for Real Estate Portfolio',
  description:
    'Calculate the standard deviation of your real estate portfolio to measure volatility and risk. Essential for understanding portfolio risk and optimizing asset allocation.',
  icon: 'Icon',
  category: 'Risk Management',
  slug: 'standard-deviation-portfolio-calculator',
  article: {
    title: 'Understanding Standard Deviation in Real Estate Portfolios',
    content: `
## Understanding Standard Deviation in Real Estate Portfolios

Standard deviation is a fundamental statistical measure that quantifies the variability or volatility of investment returns. For real estate investors, understanding standard deviation is crucial for assessing portfolio risk and making informed allocation decisions.

### What is Standard Deviation?

Standard deviation measures how spread out returns are from the average return. A higher standard deviation indicates more volatility and therefore higher risk. In real estate, this helps investors understand the consistency and predictability of their investment returns.

### Why Standard Deviation Matters

**Risk Quantification:**
Provides a numerical measure of investment risk

**Portfolio Comparison:**
Compare risk levels across different portfolio compositions

**Risk-Adjusted Returns:**
Used in Sharpe, Sortino, and other risk-adjusted metrics

**Diversification Benefits:**
Measure how diversification reduces portfolio volatility

**Investor Suitability:**
Match investments to investor risk tolerance

### The Standard Deviation Formula

**σ = √[Σ(Ri - R̄)² / (n-1)]**

Where:
- **σ** = Standard deviation
- **Ri** = Return in period i
- **R̄** = Average return
- **n** = Number of observations
- **Σ** = Sum of all values

### Interpreting Standard Deviation

**Low Standard Deviation (2-5%):**
- Stable, predictable returns
- Lower risk
- Properties: Triple-net lease, core multifamily
- Suitable for: Conservative, income-focused investors

**Moderate Standard Deviation (5-12%):**
- Moderate volatility
- Balanced risk-return profile
- Properties: Class B multifamily, suburban office
- Suitable for: Balanced investors

**High Standard Deviation (12-25%+):**
- High volatility
- Higher risk, higher potential returns
- Properties: Development, opportunistic value-add
- Suitable for: Aggressive, risk-tolerant investors

### Standard Deviation by Property Type

**Stabilized Properties:**
- Multifamily (Core): 4-8%
- Triple-Net Retail: 3-6%
- Industrial (Core): 5-9%
- Senior Housing: 4-7%

**Value-Add Properties:**
- Multifamily (Value-Add): 8-15%
- Office (Value-Add): 10-18%
- Retail (Value-Add): 12-20%

**Opportunistic:**
- Ground-Up Development: 15-30%
- Distressed Assets: 18-35%
- Land: 20-40%

*Note: These ranges are approximate and vary by market and time period.*

### Portfolio Standard Deviation

The standard deviation of a portfolio is **not** simply the weighted average of individual property standard deviations. It depends on:

1. **Individual Asset Volatilities**
2. **Portfolio Weights (allocations)**
3. **Correlations Between Assets**

**Portfolio SD Formula (Two Assets):**

**σp = √[w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ₁₂]**

Where:
- **w** = weight of asset
- **σ** = standard deviation of asset
- **ρ** = correlation coefficient between assets

### The Power of Diversification

**Key Insight:** By combining properties with low correlation, you can reduce portfolio standard deviation below the weighted average of individual property standard deviations.

**Example:**

**Property A (Multifamily):**
- Weight: 50%
- Standard Deviation: 10%

**Property B (Industrial):**
- Weight: 50%
- Standard Deviation: 12%
- Correlation with A: 0.5

**Weighted Average SD:** (0.5 × 10%) + (0.5 × 12%) = 11%

**Actual Portfolio SD:** 9.75%

Diversification reduced risk by 1.25 percentage points!

### Real Estate vs. Other Asset Classes

**Typical Standard Deviations:**
- **US Stocks (S&P 500):** 15-20%
- **US Bonds:** 3-6%
- **REITs:** 18-25%
- **Direct Core Real Estate:** 5-10%
- **Direct Value-Add Real Estate:** 10-18%
- **Balanced Stock/Bond Portfolio:** 10-14%

Real estate generally offers moderate volatility between stocks and bonds.

### Challenges in Calculating Real Estate Standard Deviation

**1. Appraisal-Based Valuations:**
Properties aren't marked to market daily like stocks, leading to "smoothed" returns that understate true volatility.

**2. Low Frequency Data:**
Annual or quarterly valuations vs. daily stock prices

**3. Illiquidity:**
Can't quickly exit positions during volatility

**4. Property Uniqueness:**
Each property is different, making comparisons difficult

**5. Leverage Effects:**
Debt amplifies both returns and volatility

### Adjusted Standard Deviation for Real Estate

Many analysts multiply appraisal-based standard deviations by 1.5 to 2.0 to account for smoothing:

**Adjusted SD = Reported SD × Smoothing Factor**

**Example:**
- Appraisal-based SD: 6%
- Smoothing factor: 1.75
- Adjusted SD: 10.5%

### Using Standard Deviation for Portfolio Construction

**Step 1: Determine Risk Tolerance**
- Conservative: Target portfolio SD < 8%
- Moderate: Target portfolio SD 8-14%
- Aggressive: Target portfolio SD > 14%

**Step 2: Estimate Individual Property SDs**
Use historical data, comparable properties, or market indices

**Step 3: Estimate Correlations**
Analyze how properties move together

**Step 4: Optimize Allocation**
Use portfolio optimization tools to minimize SD for target return

**Step 5: Monitor and Rebalance**
Track actual SD and adjust as needed

### Coefficient of Variation

Standard deviation alone doesn't tell the whole story. Use Coefficient of Variation (CV) for better comparison:

**CV = Standard Deviation / Average Return**

Lower CV = better risk-adjusted returns

**Example:**
- Property A: 10% return, 6% SD → CV = 0.60
- Property B: 15% return, 12% SD → CV = 0.80

Property A has better risk-adjusted returns.

### Risk Budgeting with Standard Deviation

Allocate portfolio risk intentionally:

**Total Portfolio SD Budget:** 10%

**Allocation:**
- 50% Core properties (SD: 6%) → Contributes 3%
- 30% Value-add (SD: 12%) → Contributes 3.6%
- 20% Opportunistic (SD: 18%) → Contributes 3.6%

### Practical Applications

**1. Performance Monitoring:**
Track actual vs. expected volatility

**2. Risk Reporting:**
Communicate portfolio risk to investors/stakeholders

**3. Rebalancing Triggers:**
Rebalance when actual SD deviates from target

**4. Stress Testing:**
Model how SD changes under different scenarios

**5. Due Diligence:**
Assess whether property volatility fits portfolio

### Best Practices

1. **Use Long Time Periods:** Minimum 3-5 years of data
2. **Account for Smoothing:** Adjust appraisal-based calculations
3. **Consider Correlation:** Don't just look at individual property risk
4. **Combine with Other Metrics:** Use with Sharpe, Sortino, VaR
5. **Regular Recalculation:** Update quarterly or annually
6. **Scenario Analysis:** Test sensitivity to different market conditions
`,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'year1Return',
        label: 'Year 1 Return (%)',
        type: 'number',
        defaultValue: '10',
      },
      {
        name: 'year2Return',
        label: 'Year 2 Return (%)',
        type: 'number',
        defaultValue: '12',
      },
      {
        name: 'year3Return',
        label: 'Year 3 Return (%)',
        type: 'number',
        defaultValue: '8',
      },
      {
        name: 'year4Return',
        label: 'Year 4 Return (%)',
        type: 'number',
        defaultValue: '15',
      },
      {
        name: 'year5Return',
        label: 'Year 5 Return (%)',
        type: 'number',
        defaultValue: '11',
      },
    ],
    calculate: (values) => {
      const { year1Return, year2Return, year3Return, year4Return, year5Return } =
        values;

      const returns = [
        year1Return,
        year2Return,
        year3Return,
        year4Return,
        year5Return,
      ];

      // Calculate average return
      const averageReturn =
        returns.reduce((sum, ret) => sum + ret, 0) / returns.length;

      // Calculate variance
      const squaredDifferences = returns.map((ret) =>
        Math.pow(ret - averageReturn, 2)
      );
      const variance =
        squaredDifferences.reduce((sum, sq) => sum + sq, 0) /
        (returns.length - 1);

      // Calculate standard deviation
      const standardDeviation = Math.sqrt(variance);

      // Calculate coefficient of variation
      const coefficientOfVariation = standardDeviation / averageReturn;

      // Risk level interpretation
      let riskLevel = '';
      if (standardDeviation < 5) {
        riskLevel = 'Low Risk - Stable Returns';
      } else if (standardDeviation < 10) {
        riskLevel = 'Moderate Risk - Average Volatility';
      } else if (standardDeviation < 15) {
        riskLevel = 'Elevated Risk - High Volatility';
      } else {
        riskLevel = 'High Risk - Very Volatile Returns';
      }

      // Range of returns (roughly 68% of time within 1 SD)
      const lowerBound = averageReturn - standardDeviation;
      const upperBound = averageReturn + standardDeviation;

      return [
        {
          label: 'Standard Deviation',
          value: `${standardDeviation.toFixed(2)}%`,
        },
        {
          label: 'Risk Level',
          value: riskLevel,
        },
        {
          label: 'Average Return',
          value: `${averageReturn.toFixed(2)}%`,
        },
        {
          label: 'Coefficient of Variation',
          value: coefficientOfVariation.toFixed(3),
        },
        {
          label: 'Expected Return Range (68% probability)',
          value: `${lowerBound.toFixed(1)}% to ${upperBound.toFixed(1)}%`,
        },
        {
          label: 'Variance',
          value: variance.toFixed(2),
        },
      ];
    },
  },
};
