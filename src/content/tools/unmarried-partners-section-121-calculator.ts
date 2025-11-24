import { CalculatorContent } from '@/types';

export const UNMARRIED_PARTNERS_SECTION_121_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Unmarried Partners Section 121 Exclusion Calculator',
  description: 'Calculate Section 121 capital gains exclusion for unmarried partners who co-own a primary residence. Determine individual exclusion amounts.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'unmarried-partners-section-121-calculator',
  article: {
    title: "Section 121 Exclusion for Unmarried Co-Owners",
    content: `
    <h2>How Section 121 Works for Unmarried Partners</h2>
    <p>When unmarried partners co-own and sell their primary residence, each owner can claim their own Section 121 exclusion if they individually meet the ownership and use requirements.</p>
    
    <h3>Key Differences from Married Couples</h3>
    <ul>
      <li><strong>Individual Exclusions:</strong> Each partner gets up to $250,000 exclusion (not $500,000 combined)</li>
      <li><strong>Separate Qualification:</strong> Each owner must independently meet the 2-year ownership and use tests</li>
      <li><strong>Ownership Percentage:</strong> Gain is typically split based on ownership percentage</li>
      <li><strong>No Joint Filing:</strong> Cannot file jointly to get the higher $500,000 exclusion</li>
    </ul>
    
    <h3>Individual Qualification Requirements</h3>
    <p>Each unmarried co-owner must separately satisfy:</p>
    <ul>
      <li><strong>Ownership Test:</strong> Owned their share for at least 2 of the last 5 years</li>
      <li><strong>Use Test:</strong> Lived in the home as primary residence for at least 2 of the last 5 years</li>
      <li><strong>Frequency Test:</strong> Haven't used the exclusion in the past 2 years</li>
    </ul>
    
    <h3>Common Scenarios</h3>
    <ul>
      <li><strong>Both Qualify:</strong> Each can exclude up to $250,000 of their share of gain</li>
      <li><strong>One Qualifies:</strong> Only the qualifying partner can use the exclusion on their portion</li>
      <li><strong>Neither Qualifies:</strong> Full gain is taxable at capital gains rates</li>
      <li><strong>Unequal Ownership:</strong> Gain split based on actual ownership percentage</li>
    </ul>
    
    <h3>Special Considerations</h3>
    <ul>
      <li><strong>Domestic Partners:</strong> Same rules apply; each files separately</li>
      <li><strong>Breakup Scenarios:</strong> Buyout may trigger different tax consequences</li>
      <li><strong>Death of Partner:</strong> Surviving partner's exclusion unaffected</li>
      <li><strong>Documentation:</strong> Keep separate records of ownership dates and residence use</li>
    </ul>
    
    <h3>Planning Tips</h3>
    <ul>
      <li>Both partners should ensure they meet the 2-year tests before selling</li>
      <li>Consider ownership structure when purchasing (50/50, other split)</li>
      <li>Document each partner's basis, especially if contributions were unequal</li>
      <li>Consult tax professional for complex situations</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Total Capital Gain', isCurrency: true },
      { label: 'Partner 1 Share of Gain', isCurrency: true },
      { label: 'Partner 2 Share of Gain', isCurrency: true },
      { label: 'Partner 1 Exclusion', isCurrency: true },
      { label: 'Partner 2 Exclusion', isCurrency: true },
      { label: 'Partner 1 Taxable Gain', isCurrency: true },
      { label: 'Partner 2 Taxable Gain', isCurrency: true },
      { label: 'Combined Tax Owed', isCurrency: true },
    ],
    fields: [
      {
        name: 'sellingPrice',
        label: 'Selling Price',
        type: 'number',
        defaultValue: 800000,
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
        label: 'Selling Costs',
        type: 'number',
        defaultValue: 48000,
      },
      {
        name: 'partner1Ownership',
        label: 'Partner 1 Ownership %',
        type: 'number',
        defaultValue: 50,
      },
      {
        name: 'partner1YearsOwned',
        label: 'Partner 1 Years Owned',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'partner1YearsLived',
        label: 'Partner 1 Years Lived In',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'partner2YearsOwned',
        label: 'Partner 2 Years Owned',
        type: 'number',
        defaultValue: 4,
      },
      {
        name: 'partner2YearsLived',
        label: 'Partner 2 Years Lived In',
        type: 'number',
        defaultValue: 4,
      },
      {
        name: 'partner1Income',
        label: 'Partner 1 Annual Income',
        type: 'number',
        defaultValue: 80000,
      },
      {
        name: 'partner2Income',
        label: 'Partner 2 Annual Income',
        type: 'number',
        defaultValue: 90000,
      },
    ],
    calculate: (data) => {
      const {
        sellingPrice, purchasePrice, improvements, sellingCosts,
        partner1Ownership, partner1YearsOwned, partner1YearsLived,
        partner2YearsOwned, partner2YearsLived, partner1Income, partner2Income
      } = data;
      
      const adjustedBasis = purchasePrice + improvements;
      const totalGain = sellingPrice - adjustedBasis - sellingCosts;
      
      const partner1Share = totalGain * (partner1Ownership / 100);
      const partner2Share = totalGain * ((100 - partner1Ownership) / 100);
      
      // Partner 1 exclusion
      const partner1Qualifies = partner1YearsOwned >= 2 && partner1YearsLived >= 2;
      const partner1Exclusion = partner1Qualifies ? Math.min(250000, partner1Share) : 0;
      const partner1TaxableGain = Math.max(0, partner1Share - partner1Exclusion);
      
      // Partner 2 exclusion
      const partner2Qualifies = partner2YearsOwned >= 2 && partner2YearsLived >= 2;
      const partner2Exclusion = partner2Qualifies ? Math.min(250000, partner2Share) : 0;
      const partner2TaxableGain = Math.max(0, partner2Share - partner2Exclusion);
      
      // Calculate taxes
      const getCapitalGainsRate = (income: number) => {
        if (income <= 44625) return 0;
        else if (income <= 492300) return 0.15;
        else return 0.20;
      };
      
      const partner1Tax = partner1TaxableGain * getCapitalGainsRate(partner1Income);
      const partner2Tax = partner2TaxableGain * getCapitalGainsRate(partner2Income);
      const combinedTax = partner1Tax + partner2Tax;
      
      return [
        { label: 'Total Capital Gain', value: totalGain, isCurrency: true },
        { label: 'Partner 1 Share of Gain', value: partner1Share, isCurrency: true },
        { label: 'Partner 2 Share of Gain', value: partner2Share, isCurrency: true },
        { label: 'Partner 1 Exclusion', value: partner1Exclusion, isCurrency: true },
        { label: 'Partner 2 Exclusion', value: partner2Exclusion, isCurrency: true },
        { label: 'Partner 1 Taxable Gain', value: partner1TaxableGain, isCurrency: true },
        { label: 'Partner 2 Taxable Gain', value: partner2TaxableGain, isCurrency: true },
        { label: 'Combined Tax Owed', value: combinedTax, isCurrency: true },
      ];
    },
  },
};
