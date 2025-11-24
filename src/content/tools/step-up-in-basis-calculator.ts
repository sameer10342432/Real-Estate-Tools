import { CalculatorContent } from '@/types';

export const STEP_UP_IN_BASIS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Step-Up in Basis Calculator | Inheritance Tax Savings on Real Estate',
  description: 'Calculate the tax benefits of step-up in basis for inherited real estate. Estimate capital gains tax savings when selling inherited property.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'step-up-in-basis-calculator',
  article: {
    title: "Understanding Step-Up in Basis for Inherited Property",
    content: `
    <h2>What is Step-Up in Basis?</h2>
    <p>Step-up in basis is a tax provision that adjusts the cost basis of an inherited asset to its fair market value at the date of the original owner's death. This can result in significant capital gains tax savings when the heir sells the property.</p>
    
    <h3>How Step-Up in Basis Works</h3>
    <p>When you inherit real estate, the property's cost basis is "stepped up" from what the deceased paid for it to its current market value. This means you won't pay capital gains tax on the appreciation that occurred during the deceased's lifetime.</p>
    
    <ul>
      <li><strong>Original Purchase Price:</strong> What the deceased originally paid for the property.</li>
      <li><strong>Date of Death Value:</strong> Fair market value of the property when inherited.</li>
      <li><strong>Sale Price:</strong> The price you sell the inherited property for.</li>
      <li><strong>Capital Gains Tax:</strong> Only applies to appreciation after the inheritance date.</li>
    </ul>

    <h3>Example of Step-Up in Basis Benefit</h3>
    <p>If your parent bought a house for $100,000 in 1990 and it's worth $500,000 when they pass away in 2025:</p>
    <ul>
      <li>Without step-up: You'd pay tax on $400,000 gain ($500,000 - $100,000)</li>
      <li>With step-up: Your new basis is $500,000. If you sell for $520,000, you only pay tax on $20,000 gain</li>
    </ul>

    <h3>Important Considerations</h3>
    <ul>
      <li><strong>Full vs. Partial Step-Up:</strong> In community property states, both spouses may get a full step-up. In common law states, only the deceased's portion gets stepped up.</li>
      <li><strong>Valuation Date:</strong> Use the date of death value or the alternate valuation date (6 months later) if elected.</li>
      <li><strong>Holding Period:</strong> Inherited property is automatically considered long-term, regardless of how long you hold it.</li>
      <li><strong>Future Changes:</strong> Step-up in basis has been a topic of tax reform discussions and could be modified.</li>
      <li><strong>Professional Appraisal:</strong> Get a professional appraisal at the date of death to establish the stepped-up basis.</li>
    </ul>

    <h3>Tax Planning Strategies</h3>
    <ul>
      <li>Consider holding appreciated property until death to maximize step-up benefits</li>
      <li>Be aware of state-specific rules for community property vs. common law property</li>
      <li>Document the date-of-death value carefully for IRS purposes</li>
      <li>Consider selling soon after inheritance to minimize additional gains</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Original Cost Basis (Before Step-Up)', isCurrency: true },
      { label: 'Stepped-Up Basis (Date of Death Value)', isCurrency: true },
      { label: 'Gain Without Step-Up', isCurrency: true },
      { label: 'Gain With Step-Up', isCurrency: true },
      { label: 'Capital Gains Tax Without Step-Up', isCurrency: true },
      { label: 'Capital Gains Tax With Step-Up', isCurrency: true },
      { label: 'Tax Savings from Step-Up', isCurrency: true },
    ],
    fields: [
      {
        name: 'originalPurchasePrice',
        label: 'Original Purchase Price (by deceased)',
        type: 'number',
        defaultValue: 150000,
      },
      {
        name: 'dateOfDeathValue',
        label: 'Fair Market Value at Date of Death',
        type: 'number',
        defaultValue: 600000,
      },
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 620000,
      },
      {
        name: 'sellingCosts',
        label: 'Selling Costs (commission, fees)',
        type: 'number',
        defaultValue: 35000,
      },
      {
        name: 'capitalGainsTaxRate',
        label: 'Long-Term Capital Gains Tax Rate (%)',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'isFullStepUp',
        label: 'Full Step-Up (both spouses in community property)?',
        type: 'boolean',
        defaultValue: true,
      },
    ],
    calculate: (data) => {
      const { 
        originalPurchasePrice, 
        dateOfDeathValue, 
        salePrice, 
        sellingCosts,
        capitalGainsTaxRate,
        isFullStepUp
      } = data;

      const originalBasis = originalPurchasePrice;
      const steppedUpBasis = isFullStepUp ? dateOfDeathValue : (originalPurchasePrice + dateOfDeathValue) / 2;
      
      const netSalePrice = salePrice - sellingCosts;
      
      const gainWithoutStepUp = netSalePrice - originalBasis;
      const gainWithStepUp = Math.max(0, netSalePrice - steppedUpBasis);
      
      const taxWithoutStepUp = Math.max(0, gainWithoutStepUp) * (capitalGainsTaxRate / 100);
      const taxWithStepUp = gainWithStepUp * (capitalGainsTaxRate / 100);
      
      const taxSavings = taxWithoutStepUp - taxWithStepUp;

      return [
        { label: 'Original Cost Basis (Before Step-Up)', value: originalBasis, isCurrency: true },
        { label: 'Stepped-Up Basis (Date of Death Value)', value: steppedUpBasis, isCurrency: true },
        { label: 'Gain Without Step-Up', value: gainWithoutStepUp, isCurrency: true },
        { label: 'Gain With Step-Up', value: gainWithStepUp, isCurrency: true },
        { label: 'Capital Gains Tax Without Step-Up', value: taxWithoutStepUp, isCurrency: true },
        { label: 'Capital Gains Tax With Step-Up', value: taxWithStepUp, isCurrency: true },
        { label: 'Tax Savings from Step-Up', value: taxSavings, isCurrency: true },
      ];
    },
  },
};
