import { CalculatorContent } from '@/types';

export const HURDLE_RATE_REAL_ESTATE_CONTENT: CalculatorContent = {
  title: 'Hurdle Rate Calculator (Real Estate)',
  description: 'Calculate the minimum acceptable return rate for real estate investments based on risk and opportunity cost',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'hurdle-rate-real-estate',
  article: {
    title: "Understanding Hurdle Rate in Real Estate Investing",
    content: `
    <h2>Understanding Hurdle Rate in Real Estate Investing</h2>
    <p>The hurdle rate, also known as the minimum acceptable rate of return (MARR), is the lowest return an investor will accept for taking on the risk of a particular investment. It serves as a critical benchmark for evaluating whether a real estate investment opportunity meets your return requirements.</p>
    
    <h3>What is a Hurdle Rate?</h3>
    <p>A hurdle rate represents the minimum annual return required to justify an investment, considering:</p>
    <ul>
      <li>Risk-free rate of return (US Treasury yields)</li>
      <li>Risk premium for real estate investment</li>
      <li>Opportunity cost of alternative investments</li>
      <li>Investor's specific return requirements</li>
      <li>Property-specific risk factors</li>
    </ul>
    
    <h3>Components of Hurdle Rate</h3>
    <p><strong>Hurdle Rate = Risk-Free Rate + Risk Premium + Liquidity Premium</strong></p>
    
    <p><strong>Risk-Free Rate:</strong> Return on US Treasury bonds (2-5% typically)</p>
    <p><strong>Risk Premium:</strong> Additional return demanded for investment risk (3-8% for real estate)</p>
    <p><strong>Liquidity Premium:</strong> Compensation for illiquidity of real estate (1-3%)</p>
    
    <h3>Typical Hurdle Rates by Property Type</h3>
    <ul>
      <li><strong>Core/Stabilized Multifamily:</strong> 8-12%</li>
      <li><strong>Core Office (Class A):</strong> 9-13%</li>
      <li><strong>Value-Add Multifamily:</strong> 12-16%</li>
      <li><strong>Opportunistic/Development:</strong> 15-20%+</li>
      <li><strong>Single-Family Rentals:</strong> 10-14%</li>
      <li><strong>Industrial (Core):</strong> 8-11%</li>
    </ul>
    
    <h3>Why Hurdle Rates Matter</h3>
    <ul>
      <li><strong>Investment Screening:</strong> Quickly filter opportunities that don't meet minimum return thresholds</li>
      <li><strong>Capital Allocation:</strong> Direct capital to highest risk-adjusted return opportunities</li>
      <li><strong>Performance Measurement:</strong> Evaluate if actual returns exceed hurdle rate</li>
      <li><strong>Pricing Discipline:</strong> Avoid overpaying when returns fall below hurdle rate</li>
      <li><strong>Risk Assessment:</strong> Higher risk investments require proportionally higher returns</li>
    </ul>
    
    <h3>Factors That Increase Required Hurdle Rate</h3>
    <ul>
      <li><strong>Higher Risk Properties:</strong> Value-add, C-class, secondary markets</li>
      <li><strong>Operational Complexity:</strong> Multi-tenant, high-turnover properties</li>
      <li><strong>Market Uncertainty:</strong> Emerging markets, economic volatility</li>
      <li><strong>Leverage:</strong> Higher debt levels increase risk and required returns</li>
      <li><strong>Longer Hold Periods:</strong> Extended time increases uncertainty</li>
      <li><strong>Rising Interest Rates:</strong> Higher cost of capital increases hurdle rate</li>
    </ul>
    
    <h3>Factors That Decrease Required Hurdle Rate</h3>
    <ul>
      <li><strong>Lower Risk Properties:</strong> Core, Class A, primary markets</li>
      <li><strong>Stable Cash Flows:</strong> Long-term leases, credit tenants</li>
      <li><strong>Strong Markets:</strong> Low unemployment, population growth, diverse economy</li>
      <li><strong>Lower Leverage:</strong> Conservative financing reduces risk</li>
      <li><strong>Shorter Hold Periods:</strong> Less time for things to go wrong</li>
    </ul>
    
    <h3>How to Set Your Hurdle Rate</h3>
    <ol>
      <li><strong>Start with Risk-Free Rate:</strong> Use current 10-year Treasury yield (e.g., 4.5%)</li>
      <li><strong>Add Base Real Estate Premium:</strong> Typical 3-5% for basic real estate risk</li>
      <li><strong>Add Property-Specific Risks:</strong> Additional 2-8% based on asset class and strategy</li>
      <li><strong>Add Liquidity Premium:</strong> 1-2% for real estate illiquidity</li>
      <li><strong>Consider Opportunity Cost:</strong> Compare to other available investments</li>
    </ol>
    
    <h3>Using Hurdle Rate in Investment Decisions</h3>
    <p><strong>IRR > Hurdle Rate:</strong> Investment meets minimum requirements, proceed with analysis</p>
    <p><strong>IRR = Hurdle Rate:</strong> Marginal investment, requires exceptional confidence</p>
    <p><strong>IRR < Hurdle Rate:</strong> Reject investment or renegotiate price to improve returns</p>
    
    <h3>Example Calculation</h3>
    <p>Scenario: Class B multifamily, value-add strategy</p>
    <ul>
      <li>Risk-free rate (10-year Treasury): 4.5%</li>
      <li>Real estate risk premium: 5%</li>
      <li>Value-add risk premium: 3%</li>
      <li>Liquidity premium: 2%</li>
      <li><strong>Hurdle Rate: 14.5%</strong></li>
    </ul>
    
    <p>If projected IRR is 18%, the investment exceeds hurdle rate by 3.5% - a good opportunity.</p>
    
    <h3>Adjusting for Market Cycles</h3>
    <ul>
      <li><strong>Expansionary Phase:</strong> May accept lower hurdle rates due to optimism</li>
      <li><strong>Peak/Late Cycle:</strong> Increase hurdle rates as risk rises</li>
      <li><strong>Recession:</strong> Significantly higher hurdle rates to compensate for elevated risk</li>
      <li><strong>Recovery:</strong> Moderate hurdle rates as confidence returns</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "riskFreeRate",
        label: "Risk-Free Rate (10-Year Treasury %) ",
        type: "number",
        placeholder: "4.5",
        defaultValue: "4.5",
      },
      {
        name: "baseRiskPremium",
        label: "Base Real Estate Risk Premium (%)",
        type: "number",
        placeholder: "4.0",
        defaultValue: "4.0",
      },
      {
        name: "propertyRiskPremium",
        label: "Property-Specific Risk Premium (%)",
        type: "number",
        placeholder: "3.0",
        defaultValue: "3.0",
      },
      {
        name: "liquidityPremium",
        label: "Liquidity Premium (%)",
        type: "number",
        placeholder: "2.0",
        defaultValue: "2.0",
      },
      {
        name: "projectedIRR",
        label: "Projected Investment IRR (%)",
        type: "number",
        placeholder: "15.0",
        defaultValue: "15.0",
      },
    ],
    results: [
      { label: "Total Hurdle Rate", isCurrency: false },
      { label: "Risk-Free Component", isCurrency: false },
      { label: "Total Risk Premium", isCurrency: false },
      { label: "Projected IRR", isCurrency: false },
      { label: "Spread Above Hurdle", isCurrency: false },
      { label: "Investment Decision", isCurrency: false },
    ],
    calculate: (data: any) => {
      const riskFree = Number(data.riskFreeRate) || 0;
      const baseRisk = Number(data.baseRiskPremium) || 0;
      const propertyRisk = Number(data.propertyRiskPremium) || 0;
      const liquidity = Number(data.liquidityPremium) || 0;
      const projectedIRR = Number(data.projectedIRR) || 0;
      
      const totalRiskPremium = baseRisk + propertyRisk + liquidity;
      const hurdleRate = riskFree + totalRiskPremium;
      const spread = projectedIRR - hurdleRate;
      
      let decision = "";
      if (spread >= 5) {
        decision = "✅ Strong Buy - Exceeds by 5%+";
      } else if (spread >= 2) {
        decision = "✅ Good Opportunity - Exceeds by 2-5%";
      } else if (spread > 0) {
        decision = "⚠️ Marginal - Small Margin";
      } else if (spread === 0) {
        decision = "⚠️ At Hurdle - No Margin";
      } else {
        decision = "❌ Reject - Below Hurdle Rate";
      }

      return [
        { label: "Total Hurdle Rate", value: `${hurdleRate.toFixed(2)}%`, isCurrency: false },
        { label: "Risk-Free Component", value: `${riskFree.toFixed(2)}%`, isCurrency: false },
        { label: "Total Risk Premium", value: `${totalRiskPremium.toFixed(2)}%`, isCurrency: false },
        { label: "Projected IRR", value: `${projectedIRR.toFixed(2)}%`, isCurrency: false },
        { label: "Spread Above/(Below) Hurdle", value: `${spread.toFixed(2)}%`, isCurrency: false },
        { label: "Investment Recommendation", value: decision, isCurrency: false },
      ];
    },
  },
};
