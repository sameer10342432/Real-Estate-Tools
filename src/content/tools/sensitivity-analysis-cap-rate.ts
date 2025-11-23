import { CalculatorContent } from '@/types';

export const SENSITIVITY_ANALYSIS_CAP_RATE_CONTENT: CalculatorContent = {
  title: 'Sensitivity Analysis (Cap Rate)',
  description: 'Analyze how changes in cap rate affect property valuation and investment returns',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'sensitivity-analysis-cap-rate',
  article: {
    title: "Understanding Cap Rate Sensitivity Analysis",
    content: `
    <h2>Understanding Cap Rate Sensitivity Analysis</h2>
    <p>Sensitivity analysis for cap rate helps investors understand how changes in capitalization rates impact property valuation and investment returns. The cap rate is one of the most critical variables in commercial real estate valuation.</p>
    
    <h3>What is Cap Rate?</h3>
    <p>The capitalization rate (cap rate) is the ratio between a property's net operating income (NOI) and its current market value:</p>
    <p><strong>Cap Rate = Net Operating Income ÷ Property Value</strong></p>
    <p>It can also be used to value a property:</p>
    <p><strong>Property Value = Net Operating Income ÷ Cap Rate</strong></p>
    
    <h3>Why Perform Cap Rate Sensitivity Analysis?</h3>
    <ul>
      <li><strong>Market Risk Assessment:</strong> Cap rates fluctuate with market conditions, interest rates, and investor sentiment</li>
      <li><strong>Valuation Range:</strong> Understand how your property value could change with market shifts</li>
      <li><strong>Exit Strategy Planning:</strong> Model potential sale prices under different market scenarios</li>
      <li><strong>Investment Decision-Making:</strong> Assess whether a property can withstand cap rate expansion</li>
    </ul>
    
    <h3>Factors That Influence Cap Rates</h3>
    <ul>
      <li><strong>Interest Rates:</strong> Higher rates typically lead to higher cap rates (lower valuations)</li>
      <li><strong>Market Demand:</strong> Strong demand compresses cap rates (higher valuations)</li>
      <li><strong>Property Type:</strong> Different asset classes have different typical cap rate ranges</li>
      <li><strong>Location Quality:</strong> Prime locations command lower cap rates</li>
      <li><strong>Property Condition:</strong> Newer, well-maintained properties typically have lower cap rates</li>
      <li><strong>Lease Structure:</strong> Stable, long-term leases support lower cap rates</li>
    </ul>
    
    <h3>Typical Cap Rate Ranges (2024)</h3>
    <ul>
      <li><strong>Class A Office:</strong> 5.5% - 7.5%</li>
      <li><strong>Multifamily:</strong> 4.5% - 6.5%</li>
      <li><strong>Retail:</strong> 6.0% - 8.0%</li>
      <li><strong>Industrial:</strong> 5.0% - 7.0%</li>
    </ul>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter your property's NOI and a base cap rate, then test different cap rate scenarios (±0.5%, ±1%, ±2%) to see how property valuation changes. This helps you:</p>
    <ul>
      <li>Identify your downside risk if cap rates rise</li>
      <li>Understand upside potential if cap rates compress</li>
      <li>Set realistic expectations for exit values</li>
      <li>Determine if current pricing provides adequate margin of safety</li>
    </ul>
    
    <h3>Investment Implications</h3>
    <p><strong>Cap Rate Compression (Decreasing):</strong> Property values increase, benefiting sellers</p>
    <p><strong>Cap Rate Expansion (Increasing):</strong> Property values decrease, creating buying opportunities but hurting sellers</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "noi",
        label: "Net Operating Income (NOI) ($)",
        type: "number",
        placeholder: "100000",
        defaultValue: "100000",
      },
      {
        name: "baseCapRate",
        label: "Base Cap Rate (%)",
        type: "number",
        placeholder: "6.5",
        defaultValue: "6.5",
      },
    ],
    results: [
      { label: "Base Property Value", isCurrency: true },
      { label: "Value at -2% Cap Rate", isCurrency: true },
      { label: "Value at -1% Cap Rate", isCurrency: true },
      { label: "Value at -0.5% Cap Rate", isCurrency: true },
      { label: "Value at +0.5% Cap Rate", isCurrency: true },
      { label: "Value at +1% Cap Rate", isCurrency: true },
      { label: "Value at +2% Cap Rate", isCurrency: true },
      { label: "Range (High to Low)", isCurrency: true },
    ],
    calculate: (data: any) => {
      const noi = Number(data.noi) || 0;
      const baseCapRate = Number(data.baseCapRate) || 0;
      
      const baseValue = noi / (baseCapRate / 100);
      const valueMinus2 = noi / ((baseCapRate - 2) / 100);
      const valueMinus1 = noi / ((baseCapRate - 1) / 100);
      const valueMinus05 = noi / ((baseCapRate - 0.5) / 100);
      const valuePlus05 = noi / ((baseCapRate + 0.5) / 100);
      const valuePlus1 = noi / ((baseCapRate + 1) / 100);
      const valuePlus2 = noi / ((baseCapRate + 2) / 100);
      
      const range = valueMinus2 - valuePlus2;

      return [
        { label: "Base Property Value", value: baseValue.toFixed(2), isCurrency: true },
        { label: `Value at ${(baseCapRate - 2).toFixed(1)}% Cap Rate`, value: valueMinus2.toFixed(2), isCurrency: true },
        { label: `Value at ${(baseCapRate - 1).toFixed(1)}% Cap Rate`, value: valueMinus1.toFixed(2), isCurrency: true },
        { label: `Value at ${(baseCapRate - 0.5).toFixed(1)}% Cap Rate`, value: valueMinus05.toFixed(2), isCurrency: true },
        { label: `Value at ${(baseCapRate + 0.5).toFixed(1)}% Cap Rate`, value: valuePlus05.toFixed(2), isCurrency: true },
        { label: `Value at ${(baseCapRate + 1).toFixed(1)}% Cap Rate`, value: valuePlus1.toFixed(2), isCurrency: true },
        { label: `Value at ${(baseCapRate + 2).toFixed(1)}% Cap Rate`, value: valuePlus2.toFixed(2), isCurrency: true },
        { label: "Valuation Range", value: range.toFixed(2), isCurrency: true },
      ];
    },
  },
};
