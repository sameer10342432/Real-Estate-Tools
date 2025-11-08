import { CalculatorContent } from '@/types';

export const ONE_PERCENT_RULE_CALCULATOR_CONTENT: CalculatorContent = {
  title: '1% Rule Calculator',
  description: 'Quickly screen potential rental properties using the 1% rule guideline',
  icon: 'Icon',
  category: 'Real Estate',
  slug: '1-percent-rule-calculator',
  article: {
    title: "Understanding the 1% Rule",
    content: `
    <h2>Understanding the 1% Rule</h2>
    <p>The 1% rule is a guideline used by real estate investors to quickly screen potential investment properties. It states that the gross monthly rent should be at least 1% of the property's purchase price.</p>
    
    <h3>How to Apply the 1% Rule</h3>
    <p>The formula is simple:</p>
    <p><strong>Monthly Rent ≥ Purchase Price × 0.01</strong></p>
    <p>For example, if a property costs $200,000, the monthly rent should be at least $2,000 to meet the 1% rule.</p>
    
    <h3>Why Use the 1% Rule?</h3>
    <ul>
      <li><strong>Quick Screening:</strong> Helps filter properties quickly before detailed analysis</li>
      <li><strong>Cash Flow Indicator:</strong> Properties meeting the rule are more likely to generate positive cash flow</li>
      <li><strong>Market Comparison:</strong> Useful for comparing investment potential across markets</li>
    </ul>
    
    <h3>Limitations</h3>
    <p>The 1% rule is a rough guideline and doesn't account for:</p>
    <ul>
      <li>Operating expenses (taxes, insurance, maintenance)</li>
      <li>Vacancy rates</li>
      <li>Property management fees</li>
      <li>Local market conditions</li>
    </ul>
    <p>Use it as an initial filter, then perform detailed analysis on properties that meet the criteria.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price",
        type: "number",
        placeholder: "200000",
        defaultValue: "200000",
      },
      {
        name: "monthlyRent",
        label: "Monthly Rent",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
    ],
    results: [
      { label: "1% Threshold", isCurrency: true },
      { label: "Rent as % of Purchase Price", isCurrency: false },
      { label: "Meets 1% Rule?", isCurrency: false },
    ],
    calculate: (data: any) => {
      const purchasePrice = Number(data.purchasePrice) || 0;
      const monthlyRent = Number(data.monthlyRent) || 0;
      
      const onePercentThreshold = purchasePrice * 0.01;
      const rentPercentage = purchasePrice > 0 ? (monthlyRent / purchasePrice) * 100 : 0;
      const meetsRule = monthlyRent >= onePercentThreshold ? "✅ Yes" : "❌ No";

      return [
        { label: "1% Threshold", value: `${onePercentThreshold.toFixed(2)}`, isCurrency: true },
        { label: "Rent as % of Purchase Price", value: `${rentPercentage.toFixed(2)}%`, isCurrency: false },
        { label: "Meets 1% Rule?", value: meetsRule, isCurrency: false },
      ];
    },
  },
};