import { CalculatorContent } from '@/types';

export const RECAPTURED_DEPRECIATION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Recaptured Depreciation (Rental Sale) Calculator',
  description: 'Calculate depreciation recapture tax when selling a rental property. Understand the tax implications of previously claimed depreciation deductions.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'recaptured-depreciation-calculator',
  article: {
    title: "Understanding Depreciation Recapture on Rental Property Sales",
    content: `
    <h2>What is Depreciation Recapture?</h2>
    <p>Depreciation recapture is the IRS mechanism to reclaim some of the tax benefits you received from depreciating rental property. When you sell, previously claimed depreciation is taxed at a maximum rate of 25%.</p>
    
    <h3>How Rental Property Depreciation Works</h3>
    <ul>
      <li><strong>Annual Deduction:</strong> Residential rental property is depreciated over 27.5 years</li>
      <li><strong>Building Only:</strong> You can only depreciate the building value, not the land</li>
      <li><strong>Basis Reduction:</strong> Each year's depreciation reduces your cost basis</li>
      <li><strong>Recapture on Sale:</strong> When you sell, depreciation is "recaptured" and taxed</li>
    </ul>
    
    <h3>Tax Treatment on Sale</h3>
    <ul>
      <li><strong>Depreciation Recapture:</strong> Taxed at 25% (Section 1250 recapture)</li>
      <li><strong>Capital Gains:</strong> Remaining gain taxed at long-term capital gains rates (0%, 15%, or 20%)</li>
      <li><strong>Always Recaptured:</strong> You must recapture even if you didn't claim depreciation (deemed depreciation)</li>
    </ul>
    
    <h3>Calculating Recapture</h3>
    <p>The calculation involves:</p>
    <ul>
      <li><strong>Original Basis:</strong> Purchase price + improvements - land value</li>
      <li><strong>Total Depreciation:</strong> All depreciation claimed (or should have been claimed)</li>
      <li><strong>Adjusted Basis:</strong> Original basis - total depreciation</li>
      <li><strong>Sale Price:</strong> Selling price - selling costs</li>
      <li><strong>Total Gain:</strong> Sale price - adjusted basis</li>
    </ul>
    
    <h3>Avoiding Depreciation Recapture</h3>
    <ul>
      <li><strong>1031 Exchange:</strong> Defer both capital gains and recapture by exchanging into another investment property</li>
      <li><strong>Hold Until Death:</strong> Heirs receive stepped-up basis, eliminating recapture</li>
      <li><strong>Opportunity Zones:</strong> Invest proceeds in qualified zones for tax deferral</li>
    </ul>
    
    <h3>Important Considerations</h3>
    <ul>
      <li>Unrecaptured Section 1250 gain is taxed at maximum 25% rate</li>
      <li>This applies even if you're in a lower tax bracket</li>
      <li>State taxes may also apply to depreciation recapture</li>
      <li>Improvements to rental property increase basis and may be depreciated separately</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Total Depreciation Claimed', isCurrency: true },
      { label: 'Adjusted Basis', isCurrency: true },
      { label: 'Total Gain on Sale', isCurrency: true },
      { label: 'Depreciation Recapture Tax (25%)', isCurrency: true },
      { label: 'Remaining Capital Gain', isCurrency: true },
      { label: 'Capital Gains Tax', isCurrency: true },
      { label: 'Total Tax Owed', isCurrency: true },
      { label: 'Net Proceeds After Tax', isCurrency: true },
    ],
    fields: [
      {
        name: 'purchasePrice',
        label: 'Original Purchase Price',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'landValue',
        label: 'Land Value (Non-Depreciable)',
        type: 'number',
        defaultValue: 75000,
      },
      {
        name: 'capitalImprovements',
        label: 'Capital Improvements',
        type: 'number',
        defaultValue: 30000,
      },
      {
        name: 'yearsOwned',
        label: 'Years Owned and Rented',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'sellingPrice',
        label: 'Selling Price',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'sellingCosts',
        label: 'Selling Costs',
        type: 'number',
        defaultValue: 30000,
      },
      {
        name: 'annualIncome',
        label: 'Annual Income',
        type: 'number',
        defaultValue: 150000,
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
    ],
    calculate: (data) => {
      const {
        purchasePrice, landValue, capitalImprovements, yearsOwned,
        sellingPrice, sellingCosts, annualIncome, filingStatus
      } = data;
      
      // Calculate depreciation
      const depreciableBasis = purchasePrice - landValue + capitalImprovements;
      const annualDepreciation = depreciableBasis / 27.5;
      const totalDepreciation = Math.min(annualDepreciation * yearsOwned, depreciableBasis);
      
      // Calculate adjusted basis and gain
      const originalBasis = purchasePrice + capitalImprovements;
      const adjustedBasis = originalBasis - totalDepreciation;
      const netSellingPrice = sellingPrice - sellingCosts;
      const totalGain = netSellingPrice - adjustedBasis;
      
      // Depreciation recapture (25% tax rate)
      const depreciationRecaptureTax = totalDepreciation * 0.25;
      
      // Remaining capital gain
      const remainingCapitalGain = Math.max(0, totalGain - totalDepreciation);
      
      // Capital gains tax on remaining gain
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
      
      const capitalGainsTax = remainingCapitalGain * capitalGainsRate;
      const totalTax = depreciationRecaptureTax + capitalGainsTax;
      const netProceeds = netSellingPrice - totalTax;
      
      return [
        { label: 'Total Depreciation Claimed', value: totalDepreciation, isCurrency: true },
        { label: 'Adjusted Basis', value: adjustedBasis, isCurrency: true },
        { label: 'Total Gain on Sale', value: totalGain, isCurrency: true },
        { label: 'Depreciation Recapture Tax (25%)', value: depreciationRecaptureTax, isCurrency: true },
        { label: 'Remaining Capital Gain', value: remainingCapitalGain, isCurrency: true },
        { label: 'Capital Gains Tax', value: capitalGainsTax, isCurrency: true },
        { label: 'Total Tax Owed', value: totalTax, isCurrency: true },
        { label: 'Net Proceeds After Tax', value: netProceeds, isCurrency: true },
      ];
    },
  },
};
