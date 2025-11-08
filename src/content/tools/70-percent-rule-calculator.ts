import { CalculatorContent } from '@/types';

export const SEVENTY_PERCENT_RULE_CALCULATOR_CONTENT: CalculatorContent = {
  title: '70% Rule Calculator',
  description: 'Determine maximum purchase price for fix-and-flip properties using the 70% rule',
  icon: 'Icon',
  category: 'Real Estate',
  slug: '70-percent-rule-calculator',
  article: {
    title: "Understanding the 70% Rule",
    content: `
    <h2>Understanding the 70% Rule</h2>
    <p>The 70% rule is a guideline used by real estate investors, particularly those who fix and flip properties. It states that an investor should pay no more than 70% of the after-repair value (ARV) of a property, minus the cost of repairs.</p>
    
    <h3>How to Apply the 70% Rule</h3>
    <p>The formula is as follows:</p>
    <p><strong>Maximum Purchase Price = (ARV × 0.70) - Repair Costs</strong></p>
    <p>For example, if a property has an ARV of $300,000 and requires $40,000 in repairs, the maximum purchase price according to the 70% rule would be $170,000.</p>

    <h3>Why 70%?</h3>
    <p>The 30% margin is intended to cover:</p>
    <ul>
      <li><strong>Holding Costs:</strong> Mortgage payments, utilities, property taxes during renovation</li>
      <li><strong>Closing Costs:</strong> Both buying and selling costs (typically 2-5% each)</li>
      <li><strong>Financing Costs:</strong> Interest on loans, points paid</li>
      <li><strong>Profit Margin:</strong> Your compensation for time, effort, and risk</li>
      <li><strong>Unexpected Expenses:</strong> Buffer for surprises during renovation</li>
    </ul>

    <h3>Using the 70% Rule for Investment Analysis</h3>
    <p>This rule helps investors determine a reasonable offer price for a property that needs renovation. However, it's conservative and may need adjustment based on:</p>
    <ul>
      <li>Your market conditions (hot vs. cold markets)</li>
      <li>Your renovation efficiency and costs</li>
      <li>Your financing terms</li>
      <li>The scope of repairs needed</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "afterRepairValue",
        label: "After-Repair Value (ARV)",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "repairCosts",
        label: "Estimated Repair Costs",
        type: "number",
        placeholder: "40000",
        defaultValue: "40000",
      },
    ],
    results: [
      { label: "Maximum Purchase Price", isCurrency: true },
      { label: "Total Investment (Purchase + Repairs)", isCurrency: true },
      { label: "Profit Margin (30% of ARV)", isCurrency: true },
    ],
    calculate: (data: any) => {
      const arv = Number(data.afterRepairValue) || 0;
      const repairCosts = Number(data.repairCosts) || 0;
      
      const maxPurchasePrice = (arv * 0.70) - repairCosts;
      const totalInvestment = maxPurchasePrice + repairCosts;
      const profitMargin = arv * 0.30;

      return [
        { label: "Maximum Purchase Price", value: `${maxPurchasePrice.toFixed(2)}`, isCurrency: true },
        { label: "Total Investment (Purchase + Repairs)", value: `${totalInvestment.toFixed(2)}`, isCurrency: true },
        { label: "Profit Margin (30% of ARV)", value: `${profitMargin.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};