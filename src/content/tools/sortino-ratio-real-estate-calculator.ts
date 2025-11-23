import { CalculatorContent } from '@/types';

export const SORTINO_RATIO_REAL_ESTATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Sortino Ratio Calculator for Real Estate',
  description:
    'Calculate the Sortino Ratio for real estate investments. Unlike Sharpe Ratio, Sortino only penalizes downside volatility, making it ideal for real estate analysis.',
  icon: 'Icon',
  category: 'Risk Management',
  slug: 'sortino-ratio-real-estate-calculator',
  article: {
    title: 'Understanding the Sortino Ratio in Real Estate',
    content: `
## Understanding the Sortino Ratio in Real Estate

The Sortino Ratio is a refined version of the Sharpe Ratio that specifically addresses a key limitation when analyzing real estate investments: it only penalizes downside volatility, not total volatility. This makes it particularly valuable for real estate investors.

### What is the Sortino Ratio?

The Sortino Ratio measures risk-adjusted returns by focusing exclusively on harmful volatility (downside deviation) while ignoring beneficial volatility (upside gains). This distinction is crucial because real estate investors don't mind when their properties exceed expectations—they only care about downside risk.

### The Sortino Ratio Formula

**Sortino Ratio = (Portfolio Return - Target Return) / Downside Deviation**

Where:
- **Portfolio Return:** Your investment's average return
- **Target Return:** Your minimum acceptable return (often risk-free rate or required return)
- **Downside Deviation:** Standard deviation of returns below the target return

### Why Sortino is Better Than Sharpe for Real Estate

**Key Advantage:**
The Sharpe Ratio penalizes both upside and downside volatility equally. But real estate investors welcome above-average returns—they only worry about below-target performance.

**Example:**
Consider two properties with 10% average returns:
- **Property A:** Returns of 8%, 9%, 10%, 11%, 12% (consistent)
- **Property B:** Returns of 2%, 6%, 10%, 15%, 17% (volatile)

Both have 10% average returns, but Property B has higher total volatility. The Sharpe Ratio would penalize Property B for its high returns in good years. The Sortino Ratio only penalizes the poor performance in bad years—a more logical approach.

### Interpreting Sortino Ratio Values

- **Sortino < 1.0:** Poor downside risk-adjusted returns
- **Sortino 1.0 - 1.99:** Acceptable downside risk management
- **Sortino 2.0 - 2.99:** Good downside risk management
- **Sortino ≥ 3.0:** Excellent downside risk protection

Higher Sortino Ratios indicate better protection against downside risk.

### Sortino vs. Sharpe: Which to Use?

**Use Sortino Ratio When:**
- Analyzing real estate (asymmetric return distributions)
- Returns are non-normally distributed
- You care specifically about downside protection
- Evaluating conservative investments
- Returns have positive skewness

**Use Sharpe Ratio When:**
- Comparing to traditional securities
- Returns are normally distributed
- Industry standard comparisons needed
- Dealing with symmetric risk profiles

### Real Estate Applications

**Risk-Averse Portfolios:**
Sortino Ratio helps identify properties that protect against losses while allowing upside potential.

**Value-Add Strategies:**
Properties with renovation plans have asymmetric returns—limited downside but significant upside—making Sortino more appropriate.

**Market Cycle Analysis:**
During downturns, Sortino Ratio highlights properties with resilient cash flows.

**Manager Selection:**
Evaluate property managers based on their ability to avoid downside, not just generate returns.

### Calculating Downside Deviation

**Step 1:** Set your target return (e.g., 8%)

**Step 2:** Identify periods with below-target returns
- Year 1: 6% (2% below target)
- Year 2: 12% (above target, ignore)
- Year 3: 5% (3% below target)
- Year 4: 10% (above target, ignore)
- Year 5: 7% (1% below target)

**Step 3:** Calculate downside deviation
Square the shortfalls, average them, then take the square root.

### Typical Sortino Ratios by Property Type

**Core Stabilized Properties:**
- Sortino: 1.5 - 2.5
- Low downside risk, moderate returns
- Ideal for conservative investors

**Value-Add Properties:**
- Sortino: 1.0 - 2.0
- Moderate downside risk, higher return potential
- Good risk-return balance

**Opportunistic/Development:**
- Sortino: 0.5 - 1.5
- Higher downside risk, highest potential returns
- Requires strong risk tolerance

**Triple-Net Lease Properties:**
- Sortino: 2.0 - 3.5
- Very low downside risk, predictable returns
- Excellent for risk-averse portfolios

### Practical Example

**Suburban Apartment Complex:**

**Annual Returns:**
- Year 1: 8%
- Year 2: 11%
- Year 3: 5% (below target)
- Year 4: 13%
- Year 5: 9%

**Target Return:** 7%
**Average Return:** 9.2%
**Downside Deviations:** Only Year 3 (2% shortfall)
**Downside Deviation:** 1.26%
**Sortino Ratio:** (9.2% - 7%) / 1.26% = 1.75

This indicates good downside risk management.

### Advantages of Sortino Ratio

1. **Intuitive:** Aligns with how investors actually think about risk
2. **Downside Focus:** Measures what really matters—avoiding losses
3. **Upside Friendly:** Doesn't penalize positive surprises
4. **Real Estate Appropriate:** Better for illiquid, asymmetric assets
5. **Behavioral Finance:** Matches loss aversion psychology

### Limitations to Consider

1. **Data Requirements:** Need sufficient history of returns
2. **Target Return Selection:** Results sensitive to chosen target
3. **Calculation Complexity:** More complex than simple metrics
4. **Less Common:** Not as widely understood as Sharpe Ratio
5. **Benchmark Comparisons:** Harder to find industry benchmarks

### Choosing the Right Target Return

**Risk-Free Rate:**
Use Treasury yield as baseline (conservative approach)

**Required Return:**
Your personal minimum acceptable return

**Hurdle Rate:**
Organizational or investment policy requirement

**Market Return:**
Average return for similar properties

**Inflation + Premium:**
Inflation rate plus real return requirement

### Using Sortino for Portfolio Construction

**Step 1:** Calculate Sortino Ratio for each property
**Step 2:** Identify properties with highest Sortino Ratios
**Step 3:** Allocate more capital to high-Sortino properties
**Step 4:** Monitor and rebalance as performance changes

### Best Practices

1. **Consistent Targets:** Use same target return across all properties
2. **Sufficient Data:** Use at least 3-5 years of return history
3. **Regular Monitoring:** Recalculate annually or quarterly
4. **Combine Metrics:** Use with Sharpe, NPV, and IRR
5. **Scenario Analysis:** Test sensitivity to different target returns
6. **Document Assumptions:** Clear methodology for comparability
`,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'portfolioReturn',
        label: 'Portfolio Return (%)',
        type: 'number',
        defaultValue: '11',
      },
      {
        name: 'targetReturn',
        label: 'Target/Required Return (%)',
        type: 'number',
        defaultValue: '7',
      },
      {
        name: 'downsideDeviation',
        label: 'Downside Deviation (%)',
        type: 'number',
        defaultValue: '5',
      },
      {
        name: 'standardDeviation',
        label: 'Total Standard Deviation (%) - Optional',
        type: 'number',
        defaultValue: '9',
      },
    ],
    calculate: (values) => {
      const {
        portfolioReturn,
        targetReturn,
        downsideDeviation,
        standardDeviation,
      } = values;

      // Calculate Sortino Ratio
      const excessReturn = portfolioReturn - targetReturn;
      const sortinoRatio = excessReturn / downsideDeviation;

      // Calculate Sharpe Ratio for comparison
      const sharpeRatio = excessReturn / standardDeviation;

      // Interpretation
      let interpretation = '';
      if (sortinoRatio < 1) {
        interpretation = 'Poor - High downside risk relative to returns';
      } else if (sortinoRatio < 2) {
        interpretation = 'Acceptable - Moderate downside protection';
      } else if (sortinoRatio < 3) {
        interpretation = 'Good - Strong downside risk management';
      } else {
        interpretation = 'Excellent - Superior downside protection';
      }

      // Downside risk efficiency
      const downsideRiskEfficiency = downsideDeviation / standardDeviation;

      return [
        {
          label: 'Sortino Ratio',
          value: sortinoRatio.toFixed(3),
        },
        {
          label: 'Interpretation',
          value: interpretation,
        },
        {
          label: 'Sharpe Ratio (for comparison)',
          value: sharpeRatio.toFixed(3),
        },
        {
          label: 'Excess Return over Target',
          value: `${excessReturn.toFixed(2)}%`,
        },
        {
          label: 'Downside Risk Ratio',
          value: `${(downsideRiskEfficiency * 100).toFixed(1)}%`,
        },
      ];
    },
  },
};
