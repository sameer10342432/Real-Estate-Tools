import { CalculatorContent } from '@/types';

export const CAPITAL_GAIN_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Capital Gains Tax Calculator',
  description: 'Estimate the capital gains tax you may owe on the sale of a property. For informational purposes only.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'capital-gain-tax-calculator',
  article: {
    title: "Understanding Capital Gains Tax",
    content: `
    <h2>What is Capital Gains Tax?</h2>
    <h2>Understanding Capital Gain Tax on Real Estate</h2>
    <p>Capital gain tax is a tax on the profit from the sale of an asset, like real estate. It's the difference between the selling price and the purchase price, with adjustments for costs like improvements and selling expenses.</p>
    <h3>Key Factors</h3>
    <ul>
      <li><strong>Purchase Price:</strong> The original cost of the property.</li>
      <li><strong>Selling Price:</strong> The price you sell the property for.</li>
      <li><strong>Improvements:</strong> The cost of any capital improvements made to the property.</li>
      <li><strong>Selling Costs:</strong> Expenses like agent commissions and legal fees.</li>
      <li><strong>Holding Period:</strong> Whether it's a short-term (less than a year) or long-term (a year or more) gain determines the tax rate.</li>
    </ul>
  `,
},
  calculator: {
    results: [
      { label: 'Capital Gain', isCurrency: true },
      { label: 'Applicable Tax Rate (%)', isCurrency: false },
      { label: 'Estimated Tax', isCurrency: true },
    ],
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'sellingPrice',
        label: 'Selling Price',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'improvements',
        label: 'Cost of Improvements',
        type: 'number',
        defaultValue: 20000,
      },
      {
        name: 'sellingCosts',
        label: 'Selling Costs',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'isShortTerm',
        label: 'Short-Term Gain? (Held < 1 year)',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'income',
        label: 'Annual Income',
        type: 'number',
        defaultValue: 75000,
      },
    ],
    calculate: (data) => {
      const { purchasePrice, sellingPrice, improvements, sellingCosts, isShortTerm, income } = data;
      const capitalGain = sellingPrice - purchasePrice - improvements - sellingCosts;

      let taxRate = 0;
      if (isShortTerm) {
        if (income <= 40125) taxRate = 0.12;
        else if (income <= 85525) taxRate = 0.22;
        else if (income <= 163300) taxRate = 0.24;
        else if (income <= 207350) taxRate = 0.32;
        else if (income <= 518400) taxRate = 0.35;
        else taxRate = 0.37;
      } else {
        if (income <= 40400) taxRate = 0;
        else if (income <= 445850) taxRate = 0.15;
        else taxRate = 0.2;
      }

      const taxAmount = capitalGain * taxRate;

      return [
        { label: 'Capital Gain', value: capitalGain, isCurrency: true },
        { label: 'Applicable Tax Rate (%)', value: taxRate * 100, isCurrency: false },
        { label: 'Estimated Tax', value: taxAmount, isCurrency: true },
      ];
    },
  },
};