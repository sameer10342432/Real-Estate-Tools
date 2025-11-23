import { CalculatorContent } from '@/types';

export const TREYNOR_RATIO_REAL_ESTATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Treynor Ratio Calculator for Real Estate',
  description:
    'Calculate the Treynor Ratio for real estate investments. This metric measures returns relative to systematic market risk (beta), helping you evaluate portfolio diversification.',
  icon: 'Icon',
  category: 'Risk Management',
  slug: 'treynor-ratio-real-estate-calculator',
  article: {
    title: 'Understanding the Treynor Ratio in Real Estate Investing',
    content: `
## Understanding the Treynor Ratio in Real Estate Investing

The Treynor Ratio, developed by Jack Treynor, measures risk-adjusted returns by focusing on systematic (market) risk rather than total risk. For real estate investors building diversified portfolios, this distinction is crucial for understanding how properties contribute to overall portfolio performance.

### What is the Treynor Ratio?

The Treynor Ratio evaluates investment performance by comparing excess returns to systematic risk (beta). Unlike the Sharpe Ratio which uses total volatility, Treynor only considers risk that cannot be diversified away—the risk inherent to the overall market.

### The Treynor Ratio Formula

**Treynor Ratio = (Portfolio Return - Risk-Free Rate) / Beta**

Where:
- **Portfolio Return:** Your real estate investment's return
- **Risk-Free Rate:** Return on risk-free investments (Treasury bonds)
- **Beta:** Sensitivity to overall real estate market movements

### Understanding Beta in Real Estate

**Beta measures how your property moves relative to the overall real estate market:**

- **Beta = 1.0:** Property moves in line with the market
- **Beta > 1.0:** Property is more volatile than the market (amplifies movements)
- **Beta < 1.0:** Property is less volatile than the market (dampens movements)
- **Beta = 0:** Property is uncorrelated with the market

**Examples:**
- **Luxury High-Rise Condo (Beta 1.3):** More sensitive to market swings
- **Suburban Multifamily (Beta 0.8):** Less sensitive to market movements
- **Triple-Net Lease (Beta 0.5):** Very stable, low market correlation
- **Ground-Up Development (Beta 1.5):** Highly sensitive to market conditions

### Treynor vs. Sharpe vs. Sortino

**Sharpe Ratio:**
- Risk measure: Total volatility (standard deviation)
- Use for: Individual investments or comparing different asset classes
- Best when: Evaluating standalone investments

**Sortino Ratio:**
- Risk measure: Downside volatility only
- Use for: Asymmetric return distributions
- Best when: Focusing on downside protection

**Treynor Ratio:**
- Risk measure: Systematic risk (beta)
- Use for: Well-diversified portfolios
- Best when: Evaluating contribution to portfolio performance

### When to Use Treynor Ratio

The Treynor Ratio is most valuable when:

1. **Building Diversified Portfolios:** Evaluating how properties contribute to overall portfolio
2. **Eliminating Diversifiable Risk:** You've already diversified away property-specific risks
3. **Market Sensitivity Analysis:** Understanding market exposure
4. **Comparing Similar Properties:** Properties in same market or property type
5. **Portfolio Management:** Professional real estate portfolio management

### Interpreting Treynor Ratio Values

**Higher is Better:** Like Sharpe and Sortino, higher Treynor Ratios indicate better risk-adjusted performance.

**Typical Ranges:**
- **< 0.5:** Poor risk-adjusted returns
- **0.5 - 1.0:** Below average performance
- **1.0 - 2.0:** Good performance
- **> 2.0:** Excellent performance

*Note: These benchmarks vary significantly across markets and time periods.*

### Real Estate Beta by Property Type

**Low Beta Properties (0.3 - 0.7):**
- Government-leased buildings
- Triple-net lease retail
- Medical office buildings
- Senior housing
- *Characteristics:* Stable, defensive, lower returns

**Medium Beta Properties (0.7 - 1.2):**
- Class A multifamily
- Suburban office
- Neighborhood retail
- Industrial warehouses
- *Characteristics:* Balanced risk-return profile

**High Beta Properties (1.2 - 2.0+):**
- Luxury residential
- Downtown office towers
- Hotels
- Development projects
- *Characteristics:* Cyclical, higher return potential

### Calculating Beta for Real Estate

**Method 1: Regression Analysis**
Regress property returns against market index returns (NCREIF, NAREIT)

**Method 2: Comparable Analysis**
Use beta of similar properties or property types

**Method 3: Fundamental Factors**
Estimate based on property characteristics:
- Location cyclicality
- Tenant quality
- Lease structure
- Property condition
- Economic sensitivity

### Practical Application Example

**Scenario:** Evaluating two properties for your portfolio

**Property A: Suburban Multifamily**
- Return: 10%
- Risk-Free Rate: 3%
- Beta: 0.7
- Treynor Ratio: (10% - 3%) / 0.7 = 10.0

**Property B: Downtown Office**
- Return: 14%
- Risk-Free Rate: 3%
- Beta: 1.4
- Treynor Ratio: (14% - 3%) / 1.4 = 7.86

**Analysis:** Property A provides better returns per unit of systematic risk, even though Property B has higher absolute returns.

### Portfolio Implications

**High Treynor Properties:**
- Better contribution to diversified portfolio performance
- More efficient use of systematic risk
- Prioritize for allocation

**Low Treynor Properties:**
- May still be valuable for diversification
- Could provide specific strategic benefits
- Require stronger justification for inclusion

### Treynor Ratio and CAPM

The Treynor Ratio is closely related to the Capital Asset Pricing Model (CAPM):

**CAPM:** Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate)

Properties with Treynor Ratios above the market average are generating returns above what CAPM predicts, indicating superior risk-adjusted performance.

### Limitations of Treynor Ratio in Real Estate

1. **Beta Estimation:** Difficult to calculate accurately for real estate
2. **Diversification Assumption:** Only valid for well-diversified portfolios
3. **Market Index Selection:** No perfect real estate market proxy
4. **Illiquidity:** Real estate beta may not capture all risks
5. **Property Uniqueness:** Each property has unique characteristics
6. **Appraisal Smoothing:** Can artificially lower calculated betas

### Using Treynor for Portfolio Construction

**Step 1: Calculate Beta**
Determine beta for each property or use comparable property betas

**Step 2: Calculate Treynor Ratios**
Compute Treynor Ratio for each investment opportunity

**Step 3: Rank Opportunities**
Prioritize properties with highest Treynor Ratios

**Step 4: Consider Correlation**
Ensure properties aren't perfectly correlated (reduces diversification)

**Step 5: Optimize Allocation**
Balance Treynor Ratios with other strategic considerations

### Combining Sharpe, Sortino, and Treynor

**Comprehensive Analysis:**
1. **Sharpe Ratio:** Overall risk-adjusted performance
2. **Sortino Ratio:** Downside risk protection
3. **Treynor Ratio:** Contribution to diversified portfolio

**Ideal Investment:**
- High Sharpe (good total risk-adjusted returns)
- High Sortino (strong downside protection)
- High Treynor (efficient use of systematic risk)

### Best Practices

1. **Consistent Methodology:** Use same beta calculation across properties
2. **Appropriate Benchmarks:** Select relevant market indices
3. **Long Time Periods:** Use 3-5+ years of data for beta calculation
4. **Regular Updates:** Recalculate as market conditions change
5. **Holistic Analysis:** Combine with qualitative factors
6. **Portfolio Context:** Always consider within overall portfolio strategy
`,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'portfolioReturn',
        label: 'Portfolio/Property Return (%)',
        type: 'number',
        defaultValue: '13',
      },
      {
        name: 'riskFreeRate',
        label: 'Risk-Free Rate (%)',
        type: 'number',
        defaultValue: '3',
      },
      {
        name: 'beta',
        label: 'Beta (Market Sensitivity)',
        type: 'number',
        defaultValue: '1.2',
      },
      {
        name: 'marketReturn',
        label: 'Market Return (%) - Optional',
        type: 'number',
        defaultValue: '10',
      },
    ],
    calculate: (values) => {
      const { portfolioReturn, riskFreeRate, beta, marketReturn } = values;

      // Calculate Treynor Ratio
      const excessReturn = portfolioReturn - riskFreeRate;
      const treynorRatio = excessReturn / beta;

      // Calculate expected return using CAPM
      const marketRiskPremium = marketReturn - riskFreeRate;
      const capmExpectedReturn = riskFreeRate + beta * marketRiskPremium;

      // Alpha (excess return over CAPM prediction)
      const alpha = portfolioReturn - capmExpectedReturn;

      // Interpretation based on beta
      let betaInterpretation = '';
      if (beta < 0.8) {
        betaInterpretation = 'Low Market Sensitivity - Defensive';
      } else if (beta < 1.2) {
        betaInterpretation = 'Average Market Sensitivity';
      } else {
        betaInterpretation = 'High Market Sensitivity - Aggressive';
      }

      // Performance interpretation
      let performance = '';
      if (alpha > 2) {
        performance = 'Excellent - Outperforming market expectations';
      } else if (alpha > 0) {
        performance = 'Good - Beating market expectations';
      } else if (alpha > -2) {
        performance = 'Fair - Close to market expectations';
      } else {
        performance = 'Poor - Underperforming market expectations';
      }

      return [
        {
          label: 'Treynor Ratio',
          value: treynorRatio.toFixed(3),
        },
        {
          label: 'Beta Interpretation',
          value: betaInterpretation,
        },
        {
          label: 'Alpha (Excess Return)',
          value: `${alpha.toFixed(2)}%`,
        },
        {
          label: 'Performance vs. Market',
          value: performance,
        },
        {
          label: 'CAPM Expected Return',
          value: `${capmExpectedReturn.toFixed(2)}%`,
        },
      ];
    },
  },
};
