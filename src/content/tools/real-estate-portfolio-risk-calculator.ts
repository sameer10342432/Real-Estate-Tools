import { CalculatorContent } from '@/types';

export const REAL_ESTATE_PORTFOLIO_RISK_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Real Estate Portfolio Risk Calculator',
  description:
    'Assess the overall risk level of your real estate investment portfolio. This calculator helps you understand concentration risk, volatility, and diversification.',
  icon: 'Icon',
  category: 'Risk Management',
  slug: 'real-estate-portfolio-risk-calculator',
  article: {
    title: 'Understanding Real Estate Portfolio Risk',
    content: `
## Understanding Real Estate Portfolio Risk

Managing risk is crucial for long-term success in real estate investing. Portfolio risk analysis helps you understand your exposure to potential losses and make informed decisions about diversification and asset allocation.

### What is Portfolio Risk?

Portfolio risk represents the potential for losses across your entire real estate investment portfolio. Unlike single-property risk, portfolio risk considers how your properties interact and affect your overall financial position.

### Key Components of Portfolio Risk

1. **Concentration Risk:** Over-exposure to a single property, market, or property type
2. **Market Risk:** Exposure to overall real estate market fluctuations
3. **Liquidity Risk:** Difficulty selling properties quickly without loss
4. **Vacancy Risk:** Potential income loss from unoccupied units
5. **Geographic Risk:** Concentration in specific locations
6. **Tenant Risk:** Dependence on specific tenants or tenant types

### Measuring Portfolio Risk

**Standard Deviation:**
Measures volatility of returns across your portfolio. Higher standard deviation = higher risk.

**Beta:**
Measures sensitivity to overall market movements. Beta > 1 = more volatile than market.

**Value at Risk (VaR):**
Estimates maximum potential loss over a specific period with a given confidence level.

**Concentration Metrics:**
Percentage of portfolio value in single assets, markets, or property types.

### The Risk-Return Tradeoff

In real estate investing, higher potential returns typically come with higher risk:

**Lower Risk Properties:**
- Class A multifamily in stable markets
- Single-tenant net-lease properties
- Government-leased buildings
- Expected returns: 5-8%

**Moderate Risk Properties:**
- Value-add multifamily
- Office buildings in secondary markets
- Retail centers
- Expected returns: 8-12%

**Higher Risk Properties:**
- Ground-up development
- Distressed properties
- Emerging markets
- Expected returns: 12-20%+

### Diversification Strategies

**Geographic Diversification:**
Invest in multiple cities, states, or regions to reduce local market risk.

**Property Type Diversification:**
Mix residential, commercial, retail, and industrial properties.

**Investment Strategy Diversification:**
Combine core, value-add, and opportunistic investments.

**Tenant Diversification:**
Avoid over-reliance on single tenants or tenant industries.

**Investment Structure Diversification:**
Use mix of direct ownership, partnerships, REITs, and syndications.

### Portfolio Risk Assessment Framework

**Step 1: Inventory Your Holdings**
List all properties with values, locations, types, and expected returns.

**Step 2: Calculate Concentration**
Determine percentage of total value in each property, market, and type.

**Step 3: Assess Volatility**
Review historical performance and market volatility indicators.

**Step 4: Evaluate Correlations**
Understand how properties move together or independently.

**Step 5: Identify Weaknesses**
Find areas of over-concentration or excessive risk.

### Risk Mitigation Strategies

1. **Gradual Diversification:** Add properties in new markets over time
2. **Insurance Coverage:** Maintain adequate property and liability insurance
3. **Reserve Funds:** Keep 6-12 months of expenses in reserves
4. **Professional Management:** Use experienced property managers
5. **Regular Rebalancing:** Adjust portfolio as markets and values change
6. **Exit Strategies:** Have clear plans for each property

### Warning Signs of Excessive Portfolio Risk

- More than 30% of portfolio in single property
- All properties in same city or metro area
- All properties of same type (e.g., only multifamily)
- High leverage across entire portfolio (>75% LTV)
- Multiple properties with upcoming lease expirations
- Concentration in economically struggling markets

### Optimal Portfolio Allocation Guidelines

**Conservative Portfolio:**
- 60-70% Core/Stable properties
- 20-30% Value-add properties
- 0-10% Opportunistic/Development
- Target Return: 6-9%

**Balanced Portfolio:**
- 40-50% Core/Stable properties
- 35-45% Value-add properties
- 10-20% Opportunistic/Development
- Target Return: 9-13%

**Aggressive Portfolio:**
- 20-30% Core/Stable properties
- 30-40% Value-add properties
- 30-50% Opportunistic/Development
- Target Return: 13-18%+

### Risk-Adjusted Returns

Don't just chase high returns—consider returns relative to risk:

**Sharpe Ratio:** (Return - Risk-free rate) / Standard Deviation
Higher Sharpe ratio = better risk-adjusted returns

**Sortino Ratio:** Similar to Sharpe but only considers downside volatility
Better for real estate where upside volatility is desirable

### Regular Portfolio Reviews

Conduct comprehensive portfolio risk reviews:
- **Quarterly:** Monitor performance and key metrics
- **Annually:** Full portfolio rebalancing analysis
- **Major Events:** Review after significant market changes or acquisitions

### Best Practices

1. **Never put all eggs in one basket:** Diversify from day one
2. **Match risk tolerance to timeline:** More time = can handle more risk
3. **Stress test your portfolio:** Model worst-case scenarios
4. **Stay within borrowing limits:** Don't over-leverage
5. **Build reserves first:** Establish emergency funds before expanding
`,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'property1Value',
        label: 'Property 1 Value',
        type: 'number',
        defaultValue: '500000',
      },
      {
        name: 'property1Return',
        label: 'Property 1 Expected Return (%)',
        type: 'number',
        defaultValue: '8',
      },
      {
        name: 'property2Value',
        label: 'Property 2 Value',
        type: 'number',
        defaultValue: '400000',
      },
      {
        name: 'property2Return',
        label: 'Property 2 Expected Return (%)',
        type: 'number',
        defaultValue: '10',
      },
      {
        name: 'property3Value',
        label: 'Property 3 Value',
        type: 'number',
        defaultValue: '300000',
      },
      {
        name: 'property3Return',
        label: 'Property 3 Expected Return (%)',
        type: 'number',
        defaultValue: '12',
      },
      {
        name: 'marketStdDev',
        label: 'Market Standard Deviation (%)',
        type: 'number',
        defaultValue: '15',
      },
    ],
    calculate: (values) => {
      const {
        property1Value,
        property1Return,
        property2Value,
        property2Return,
        property3Value,
        property3Return,
        marketStdDev,
      } = values;

      // Calculate total portfolio value
      const totalValue = property1Value + property2Value + property3Value;

      // Calculate weights
      const weight1 = property1Value / totalValue;
      const weight2 = property2Value / totalValue;
      const weight3 = property3Value / totalValue;

      // Calculate weighted average return
      const portfolioReturn =
        weight1 * property1Return +
        weight2 * property2Return +
        weight3 * property3Return;

      // Calculate concentration risk (Herfindahl Index)
      const concentrationIndex =
        weight1 * weight1 + weight2 * weight2 + weight3 * weight3;

      // Diversification score (inverse of concentration)
      const diversificationScore = (1 - concentrationIndex) * 100;

      // Risk level assessment
      let riskLevel = '';
      if (concentrationIndex > 0.5) {
        riskLevel = 'High - Consider Diversifying';
      } else if (concentrationIndex > 0.35) {
        riskLevel = 'Moderate - Room for Improvement';
      } else {
        riskLevel = 'Low - Well Diversified';
      }

      // Estimate portfolio standard deviation (simplified)
      const portfolioStdDev = marketStdDev * Math.sqrt(concentrationIndex);

      return [
        {
          label: 'Portfolio Weighted Return',
          value: `${portfolioReturn.toFixed(2)}%`,
        },
        {
          label: 'Portfolio Risk Level',
          value: riskLevel,
        },
        {
          label: 'Concentration Index',
          value: concentrationIndex.toFixed(3),
        },
        {
          label: 'Diversification Score',
          value: `${diversificationScore.toFixed(1)}%`,
        },
        {
          label: 'Estimated Portfolio Volatility',
          value: `${portfolioStdDev.toFixed(2)}%`,
        },
        {
          label: 'Largest Position Weight',
          value: `${(Math.max(weight1, weight2, weight3) * 100).toFixed(1)}%`,
        },
      ];
    },
  },
};
