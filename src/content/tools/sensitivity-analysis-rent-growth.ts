import { CalculatorContent } from '@/types';

export const SENSITIVITY_ANALYSIS_RENT_GROWTH_CONTENT: CalculatorContent = {
  title: 'Sensitivity Analysis (Rent Growth)',
  description: 'Project future rental income and property value under different rent growth scenarios',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'sensitivity-analysis-rent-growth',
  article: {
    title: "Understanding Rent Growth Sensitivity Analysis",
    content: `
    <h2>Understanding Rent Growth Sensitivity Analysis</h2>
    <p>Rent growth is a critical driver of real estate investment returns. This sensitivity analysis helps you model how different rent growth rates impact your property's net operating income (NOI) and valuation over time.</p>
    
    <h3>Why Rent Growth Matters</h3>
    <p>Rental income growth affects your investment in multiple ways:</p>
    <ul>
      <li><strong>Cash Flow:</strong> Higher rents mean more operating income and cash distributions</li>
      <li><strong>Property Value:</strong> NOI growth drives property appreciation through cap rate compression</li>
      <li><strong>Loan Coverage:</strong> Increasing rents improve debt service coverage ratios</li>
      <li><strong>Inflation Hedge:</strong> Rent growth that exceeds inflation preserves real purchasing power</li>
    </ul>
    
    <h3>Factors Influencing Rent Growth</h3>
    <ul>
      <li><strong>Population Growth:</strong> Areas with growing populations typically see stronger rent growth</li>
      <li><strong>Job Market:</strong> Employment growth drives housing demand and supports rent increases</li>
      <li><strong>Supply Constraints:</strong> Limited new construction supports higher rent growth</li>
      <li><strong>Economic Growth:</strong> Rising wages enable tenants to afford higher rents</li>
      <li><strong>Property Location:</strong> Urban cores and high-demand submarkets command premium growth</li>
      <li><strong>Property Quality:</strong> Class A properties typically achieve higher rent growth than Class B/C</li>
    </ul>
    
    <h3>Historical Rent Growth Trends</h3>
    <p>Understanding historical trends helps set realistic assumptions:</p>
    <ul>
      <li><strong>Long-term Average (US):</strong> 2-3% annually</li>
      <li><strong>High-Growth Markets:</strong> 5-8% annually (e.g., Austin, Nashville, Phoenix)</li>
      <li><strong>Stable Markets:</strong> 2-4% annually (e.g., Chicago, Philadelphia)</li>
      <li><strong>Slow-Growth Markets:</strong> 0-2% annually (e.g., Detroit, Cleveland)</li>
    </ul>
    
    <h3>Modeling Different Scenarios</h3>
    <p>Smart investors test multiple scenarios:</p>
    <ul>
      <li><strong>Conservative:</strong> Below historical average (1-2%)</li>
      <li><strong>Base Case:</strong> Historical market average (2-3%)</li>
      <li><strong>Optimistic:</strong> Above average with strong fundamentals (4-6%)</li>
      <li><strong>Aggressive:</strong> High growth requiring exceptional conditions (7%+)</li>
    </ul>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter your current annual rent and test different growth rate scenarios over your hold period. The calculator shows:</p>
    <ul>
      <li>Projected rent at different growth rates</li>
      <li>Total rent collected over the period</li>
      <li>Impact on property valuation</li>
      <li>Sensitivity to growth rate assumptions</li>
    </ul>
    
    <h3>Best Practices</h3>
    <ul>
      <li>Use conservative assumptions for underwriting</li>
      <li>Research historical rent growth in your specific market</li>
      <li>Consider economic cycles and potential downturns</li>
      <li>Don't assume high growth rates will continue indefinitely</li>
      <li>Build in margin of safety for unexpected events</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "currentRent",
        label: "Current Annual Rent ($)",
        type: "number",
        placeholder: "120000",
        defaultValue: "120000",
      },
      {
        name: "years",
        label: "Projection Period (Years)",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
      {
        name: "capRate",
        label: "Exit Cap Rate (%)",
        type: "number",
        placeholder: "6.5",
        defaultValue: "6.5",
      },
    ],
    results: [
      { label: "Rent at 1% Growth", isCurrency: true },
      { label: "Rent at 2% Growth", isCurrency: true },
      { label: "Rent at 3% Growth", isCurrency: true },
      { label: "Rent at 4% Growth", isCurrency: true },
      { label: "Rent at 5% Growth", isCurrency: true },
      { label: "Property Value at 3% Growth", isCurrency: true },
      { label: "Property Value at 5% Growth", isCurrency: true },
      { label: "Value Difference (5% vs 3%)", isCurrency: true },
    ],
    calculate: (data: any) => {
      const currentRent = Number(data.currentRent) || 0;
      const years = Number(data.years) || 0;
      const capRate = Number(data.capRate) / 100 || 0.065;
      
      const rent1 = currentRent * Math.pow(1.01, years);
      const rent2 = currentRent * Math.pow(1.02, years);
      const rent3 = currentRent * Math.pow(1.03, years);
      const rent4 = currentRent * Math.pow(1.04, years);
      const rent5 = currentRent * Math.pow(1.05, years);
      
      const propertyValue3 = rent3 / capRate;
      const propertyValue5 = rent5 / capRate;
      const valueDiff = propertyValue5 - propertyValue3;

      return [
        { label: "Rent at 1% Annual Growth", value: rent1.toFixed(2), isCurrency: true },
        { label: "Rent at 2% Annual Growth", value: rent2.toFixed(2), isCurrency: true },
        { label: "Rent at 3% Annual Growth", value: rent3.toFixed(2), isCurrency: true },
        { label: "Rent at 4% Annual Growth", value: rent4.toFixed(2), isCurrency: true },
        { label: "Rent at 5% Annual Growth", value: rent5.toFixed(2), isCurrency: true },
        { label: "Property Value at 3% Growth", value: propertyValue3.toFixed(2), isCurrency: true },
        { label: "Property Value at 5% Growth", value: propertyValue5.toFixed(2), isCurrency: true },
        { label: "Value Difference (5% vs 3%)", value: valueDiff.toFixed(2), isCurrency: true },
      ];
    },
  },
};
