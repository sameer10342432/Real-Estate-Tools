import { CalculatorContent } from '@/types';

export const SECTION_121_EXCLUSION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Section 121 Primary Residence Exclusion Calculator',
  description: 'Calculate capital gains tax exclusion on the sale of your primary residence under IRS Section 121. Determine if you qualify for up to $500,000 tax-free gain.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'section-121-exclusion-calculator',
  article: {
    title: "Understanding Section 121 Primary Residence Exclusion",
    content: `
    <h2>What is Section 121 Exclusion?</h2>
    <p>Section 121 of the Internal Revenue Code allows homeowners to exclude up to $250,000 (single) or $500,000 (married filing jointly) of capital gains from the sale of their primary residence from taxable income.</p>
    
    <h3>Qualification Requirements</h3>
    <ul>
      <li><strong>Ownership Test:</strong> You must have owned the home for at least 2 years during the 5-year period ending on the sale date</li>
      <li><strong>Use Test:</strong> You must have lived in the home as your primary residence for at least 2 years during the same 5-year period</li>
      <li><strong>Frequency:</strong> You can only use this exclusion once every 2 years</li>
      <li><strong>Primary Residence:</strong> The home must be your main home, not a rental or investment property</li>
    </ul>
    
    <h3>Exclusion Amounts</h3>
    <ul>
      <li><strong>Single Filers:</strong> Up to $250,000 of gain excluded</li>
      <li><strong>Married Filing Jointly:</strong> Up to $500,000 of gain excluded</li>
      <li><strong>Married Filing Separately:</strong> Up to $250,000 per spouse (if both qualify)</li>
    </ul>
    
    <h3>Partial Exclusion</h3>
    <p>If you don't meet the full 2-year requirement due to unforeseen circumstances, you may qualify for a partial exclusion based on:</p>
    <ul>
      <li>Change in employment</li>
      <li>Health reasons</li>
      <li>Unforeseen circumstances (natural disaster, death, divorce, etc.)</li>
    </ul>
    
    <h3>Important Considerations</h3>
    <ul>
      <li><strong>Depreciation Recapture:</strong> If you claimed depreciation (home office, rental use), that portion is taxed</li>
      <li><strong>Non-Qualified Use:</strong> Periods when the home wasn't your primary residence may reduce exclusion</li>
      <li><strong>Gains Above Exclusion:</strong> Any gain exceeding the exclusion is taxed as capital gains</li>
      <li><strong>Record Keeping:</strong> Maintain documentation of purchase price, improvements, and ownership dates</li>
    </ul>
    
    <h3>Capital Improvements</h3>
    <p>These increase your cost basis and reduce taxable gain:</p>
    <ul>
      <li>Room additions or expansions</li>
      <li>New roof, HVAC system replacements</li>
      <li>Major landscaping or permanent structures</li>
      <li>Kitchen or bathroom remodels</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Total Capital Gain', isCurrency: true },
      { label: 'Section 121 Exclusion', isCurrency: true },
      { label: 'Taxable Gain', isCurrency: true },
      { label: 'Estimated Tax Owed', isCurrency: true },
      { label: 'Net Proceeds After Tax', isCurrency: true },
    ],
    fields: [
      {
        name: 'sellingPrice',
        label: 'Selling Price',
        type: 'number',
        defaultValue: 650000,
      },
      {
        name: 'purchasePrice',
        label: 'Original Purchase Price',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'improvements',
        label: 'Capital Improvements',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'sellingCosts',
        label: 'Selling Costs (Commission, Fees)',
        type: 'number',
        defaultValue: 39000,
      },
      {
        name: 'filingStatus',
        label: 'Filing Status',
        type: 'select',
        options: [
          { value: 'Single', label: 'Single' },
          { value: 'Married Filing Jointly', label: 'Married Filing Jointly' }
        ],
        defaultValue: 'Married Filing Jointly',
      },
      {
        name: 'yearsOwned',
        label: 'Years Owned',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'yearsLivedIn',
        label: 'Years Lived In (Primary Residence)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'annualIncome',
        label: 'Annual Income',
        type: 'number',
        defaultValue: 150000,
      },
    ],
    calculate: (data) => {
      const { sellingPrice, purchasePrice, improvements, sellingCosts, filingStatus, yearsOwned, yearsLivedIn, annualIncome } = data;
      
      const adjustedBasis = purchasePrice + improvements;
      const totalGain = sellingPrice - adjustedBasis - sellingCosts;
      
      // Determine exclusion amount
      let exclusionAmount = 0;
      const qualifiesFullExclusion = yearsOwned >= 2 && yearsLivedIn >= 2;
      
      if (qualifiesFullExclusion) {
        exclusionAmount = filingStatus === 'Married Filing Jointly' ? 500000 : 250000;
      } else {
        // Partial exclusion based on time lived in
        const partialFraction = Math.min(yearsLivedIn / 2, 1);
        exclusionAmount = (filingStatus === 'Married Filing Jointly' ? 500000 : 250000) * partialFraction;
      }
      
      const taxableGain = Math.max(0, totalGain - exclusionAmount);
      
      // Long-term capital gains tax
      let capitalGainsRate = 0;
      if (filingStatus === 'Single') {
        if (annualIncome <= 44625) capitalGainsRate = 0;
        else if (annualIncome <= 492300) capitalGainsRate = 0.15;
        else capitalGainsRate = 0.20;
      } else {
        if (annualIncome <= 89250) capitalGainsRate = 0;
        else if (annualIncome <= 553850) capitalGainsRate = 0.15;
        else capitalGainsRate = 0.20;
      }
      
      const estimatedTax = taxableGain * capitalGainsRate;
      const netProceeds = sellingPrice - sellingCosts - estimatedTax;
      
      return [
        { label: 'Total Capital Gain', value: totalGain, isCurrency: true },
        { label: 'Section 121 Exclusion', value: Math.min(totalGain, exclusionAmount), isCurrency: true },
        { label: 'Taxable Gain', value: taxableGain, isCurrency: true },
        { label: 'Estimated Tax Owed', value: estimatedTax, isCurrency: true },
        { label: 'Net Proceeds After Tax', value: netProceeds, isCurrency: true },
      ];
    },
  },
};
