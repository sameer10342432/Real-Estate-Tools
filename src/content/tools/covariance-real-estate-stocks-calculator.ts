import { CalculatorContent } from '@/types';

export const COVARIANCE_REAL_ESTATE_STOCKS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Covariance Calculator: Real Estate vs. Stocks',
  description:
    'Calculate the covariance between real estate and stock investments. Understand how these assets move together to optimize your diversified portfolio allocation.',
  icon: 'Icon',
  category: 'Risk Management',
  slug: 'covariance-real-estate-stocks-calculator',
  article: {
    title: 'Understanding Covariance: Real Estate vs. Stocks',
    content: `
## Understanding Covariance: Real Estate vs. Stocks

Covariance is a critical statistical measure that tells you how two investments move together. For investors building portfolios that include both real estate and stocks, understanding covariance is essential for effective diversification and risk management.

### What is Covariance?

Covariance measures the degree to which two assets' returns move in relation to each other. Unlike correlation (which standardizes the relationship), covariance gives you the actual magnitude of co-movement in percentage terms.

### The Covariance Formula

**Cov(X,Y) = Σ[(Xi - X̄)(Yi - Ȳ)] / (n-1)**

Where:
- **Xi** = Return of Asset X in period i
- **X̄** = Average return of Asset X
- **Yi** = Return of Asset Y in period i
- **Ȳ** = Average return of Asset Y
- **n** = Number of observations

### Interpreting Covariance

**Positive Covariance:**
Assets tend to move in the same direction
- Both rise together during good times
- Both fall together during downturns
- Provides less diversification benefit

**Negative Covariance:**
Assets tend to move in opposite directions
- One rises when the other falls
- Excellent diversification benefit
- Reduces overall portfolio volatility

**Zero Covariance:**
Assets move independently
- No predictable relationship
- Good diversification benefit
- Returns are uncorrelated

### Covariance vs. Correlation

**Covariance:**
- Units: Percentage points squared
- Range: -∞ to +∞
- Magnitude matters

**Correlation:**
- Units: None (standardized)
- Range: -1 to +1
- Only direction matters

**Relationship:**
**Correlation = Covariance / (SD of X × SD of Y)**

### Historical Covariance: Real Estate vs. Stocks

**Direct Real Estate vs. Stocks:**
- Typical Correlation: 0.2 to 0.4 (low to moderate positive)
- Typical Covariance: 0.0010 to 0.0030
- Interpretation: Move together somewhat, but significant independent movement

**REITs vs. Stocks:**
- Typical Correlation: 0.5 to 0.7 (moderate to high positive)
- Typical Covariance: 0.0050 to 0.0100
- Interpretation: REITs behave more like stocks due to public market trading

**Private Real Estate vs. Stocks:**
- Typical Correlation: 0.1 to 0.3 (low positive)
- Typical Covariance: 0.0005 to 0.0020
- Interpretation: Excellent diversification properties

### Why Real Estate and Stocks Have Low Covariance

**1. Different Return Drivers:**
- Stocks: Corporate earnings, market sentiment
- Real Estate: Rental income, property values, local economics

**2. Different Market Dynamics:**
- Stocks: Daily trading, highly liquid
- Real Estate: Infrequent transactions, illiquid

**3. Different Economic Sensitivities:**
- Stocks: GDP growth, corporate profits
- Real Estate: Local employment, demographics, supply/demand

**4. Income vs. Growth:**
- Stocks: Growth and dividend income
- Real Estate: Stable rental income focus

### Portfolio Implications

**Diversification Benefits:**

The low covariance between real estate and stocks creates significant diversification opportunities:

**Example Portfolio:**
- 70% Stocks (SD: 18%)
- 30% Real Estate (SD: 10%)
- Covariance: 0.0015
- Correlation: 0.25

**Without considering covariance:**
Weighted average SD ≈ 15.6%

**Actual portfolio SD (accounting for covariance):**
Portfolio SD ≈ 13.2%

**Risk Reduction:** 2.4 percentage points from diversification!

### Optimal Allocation Using Covariance

Lower covariance = higher allocation to diversifying asset

**Modern Portfolio Theory recommends:**

**If Correlation = 0.3 (low):**
- Stocks: 60-70%
- Real Estate: 30-40%
- Strong diversification benefits

**If Correlation = 0.6 (moderate):**
- Stocks: 70-80%
- Real Estate: 20-30%
- Moderate diversification benefits

**If Correlation = 0.9 (high):**
- Stocks: 80-90%
- Real Estate: 10-20%
- Limited diversification benefits

### Time-Varying Covariance

**Important:** Covariance isn't constant—it changes over time and market conditions.

**During Financial Crises:**
- Covariance increases (assets move together more)
- Diversification benefits decrease
- "Correlations go to one in a crisis"

**During Normal Markets:**
- Covariance remains low
- Diversification works as expected

**During Real Estate Bubbles:**
- Real estate-stock covariance may spike
- Indicates overheated markets

### Using Covariance for Asset Allocation

**Step 1: Estimate Returns and Standard Deviations**
- Expected stock return: 10%, SD: 18%
- Expected RE return: 8%, SD: 10%

**Step 2: Calculate or Estimate Covariance**
Use historical data or assume correlation of 0.3

**Step 3: Run Portfolio Optimization**
Find allocation that maximizes return for given risk

**Step 4: Implement and Monitor**
Track actual covariance vs. assumptions

### Advanced Application: Multi-Asset Portfolios

**Covariance Matrix for Three Assets:**

|          | Stocks | Bonds | Real Estate |
|----------|--------|-------|-------------|
| Stocks   | Var(S) | Cov(S,B) | Cov(S,RE) |
| Bonds    | Cov(S,B) | Var(B) | Cov(B,RE) |
| Real Estate | Cov(S,RE) | Cov(B,RE) | Var(RE) |

This matrix is used to calculate overall portfolio variance.

### Geographic Diversification Effects

**Domestic Real Estate + Domestic Stocks:**
Covariance: 0.0015 - 0.0025

**International Real Estate + Domestic Stocks:**
Covariance: 0.0005 - 0.0015 (even lower!)

Adding international real estate provides additional diversification benefits.

### Property Type Considerations

Different property types have different covariances with stocks:

**Low Covariance (Better Diversification):**
- Multifamily housing
- Self-storage
- Manufactured housing

**Moderate Covariance:**
- Office buildings
- Industrial properties

**Higher Covariance (Less Diversification):**
- Hotels
- Retail (especially during recessions)
- Luxury residential

### Practical Investment Strategies

**1. Countercyclical Timing:**
Increase real estate when stocks are high, and vice versa

**2. Rebalancing:**
Sell winners, buy losers to maintain target allocation

**3. Crisis Alpha:**
Low covariance means real estate may hold up when stocks crash

**4. Income Stability:**
Real estate rental income is less correlated with stock dividends

### Limitations and Considerations

**1. Historical Covariance ≠ Future Covariance:**
Past relationships may not persist

**2. Measurement Challenges:**
Real estate appraisals may smooth returns, understating covariance

**3. Leverage Effects:**
Debt amplifies covariance relationships

**4. Market Regimes:**
Covariance changes across different market environments

**5. Property-Specific Factors:**
Individual properties may deviate from broader patterns

### Best Practices

1. **Use Long Time Periods:** 10+ years of data when available
2. **Update Regularly:** Recalculate annually or when markets shift significantly
3. **Stress Test:** Model covariance during crisis scenarios
4. **Consider Multiple Scenarios:** Don't rely on single covariance estimate
5. **Combine with Qualitative Analysis:** Numbers don't tell the whole story
6. **Account for Smoothing:** Adjust real estate data for appraisal lag
`,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'reReturn1',
        label: 'Real Estate Return Year 1 (%)',
        type: 'number',
        defaultValue: '8',
      },
      {
        name: 'stockReturn1',
        label: 'Stock Return Year 1 (%)',
        type: 'number',
        defaultValue: '12',
      },
      {
        name: 'reReturn2',
        label: 'Real Estate Return Year 2 (%)',
        type: 'number',
        defaultValue: '10',
      },
      {
        name: 'stockReturn2',
        label: 'Stock Return Year 2 (%)',
        type: 'number',
        defaultValue: '15',
      },
      {
        name: 'reReturn3',
        label: 'Real Estate Return Year 3 (%)',
        type: 'number',
        defaultValue: '7',
      },
      {
        name: 'stockReturn3',
        label: 'Stock Return Year 3 (%)',
        type: 'number',
        defaultValue: '-5',
      },
      {
        name: 'reReturn4',
        label: 'Real Estate Return Year 4 (%)',
        type: 'number',
        defaultValue: '9',
      },
      {
        name: 'stockReturn4',
        label: 'Stock Return Year 4 (%)',
        type: 'number',
        defaultValue: '18',
      },
      {
        name: 'reReturn5',
        label: 'Real Estate Return Year 5 (%)',
        type: 'number',
        defaultValue: '11',
      },
      {
        name: 'stockReturn5',
        label: 'Stock Return Year 5 (%)',
        type: 'number',
        defaultValue: '10',
      },
    ],
    calculate: (values) => {
      const reReturns = [
        values.reReturn1,
        values.reReturn2,
        values.reReturn3,
        values.reReturn4,
        values.reReturn5,
      ];

      const stockReturns = [
        values.stockReturn1,
        values.stockReturn2,
        values.stockReturn3,
        values.stockReturn4,
        values.stockReturn5,
      ];

      // Calculate averages
      const reAvg = reReturns.reduce((sum, r) => sum + r, 0) / reReturns.length;
      const stockAvg =
        stockReturns.reduce((sum, r) => sum + r, 0) / stockReturns.length;

      // Calculate covariance
      let covSum = 0;
      for (let i = 0; i < reReturns.length; i++) {
        covSum +=
          (reReturns[i] - reAvg) * (stockReturns[i] - stockAvg);
      }
      const covariance = covSum / (reReturns.length - 1);

      // Calculate standard deviations
      const reVariance =
        reReturns
          .map((r) => Math.pow(r - reAvg, 2))
          .reduce((sum, sq) => sum + sq, 0) /
        (reReturns.length - 1);
      const reSD = Math.sqrt(reVariance);

      const stockVariance =
        stockReturns
          .map((r) => Math.pow(r - stockAvg, 2))
          .reduce((sum, sq) => sum + sq, 0) /
        (stockReturns.length - 1);
      const stockSD = Math.sqrt(stockVariance);

      // Calculate correlation
      const correlation = covariance / (reSD * stockSD);

      // Diversification benefit interpretation
      let diversificationBenefit = '';
      if (correlation < 0.3) {
        diversificationBenefit = 'Excellent - Strong diversification benefits';
      } else if (correlation < 0.5) {
        diversificationBenefit = 'Good - Moderate diversification benefits';
      } else if (correlation < 0.7) {
        diversificationBenefit = 'Fair - Limited diversification benefits';
      } else {
        diversificationBenefit = 'Poor - Minimal diversification benefits';
      }

      // Movement interpretation
      let movementPattern = '';
      if (correlation < 0) {
        movementPattern = 'Negative - Assets move in opposite directions';
      } else if (correlation < 0.5) {
        movementPattern = 'Low Positive - Somewhat independent movement';
      } else if (correlation < 0.8) {
        movementPattern = 'Moderate Positive - Often move together';
      } else {
        movementPattern = 'High Positive - Usually move in same direction';
      }

      return [
        {
          label: 'Covariance',
          value: covariance.toFixed(4),
        },
        {
          label: 'Correlation Coefficient',
          value: correlation.toFixed(3),
        },
        {
          label: 'Movement Pattern',
          value: movementPattern,
        },
        {
          label: 'Diversification Benefit',
          value: diversificationBenefit,
        },
        {
          label: 'Real Estate Volatility',
          value: `${reSD.toFixed(2)}%`,
        },
        {
          label: 'Stock Volatility',
          value: `${stockSD.toFixed(2)}%`,
        },
      ];
    },
  },
};
