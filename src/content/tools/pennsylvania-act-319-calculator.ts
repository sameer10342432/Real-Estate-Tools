import { CalculatorContent } from '@/types';

export const PENNSYLVANIA_ACT_319_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Pennsylvania Act 319 (Clean & Green) Calculator',
  description: 'Calculate Pennsylvania Act 319 Clean & Green preferential assessment tax savings. Estimate agricultural use assessment benefits and rollback tax liability.',
  icon: 'Icon',
  category: 'State-Specific Fees',
  slug: 'pennsylvania-act-319-calculator',
  article: {
    title: 'Pennsylvania Act 319 Clean & Green: Tax Savings for Agricultural Land',
    content: `
Pennsylvania's Clean and Green Act (Act 319) provides preferential property tax assessment for agricultural land, forest land, and agricultural reserve land. This program can save landowners thousands of dollars annually but comes with strict use requirements and rollback tax penalties if violated.

### What is Act 319 Clean & Green?

Clean & Green is a Pennsylvania preferential tax assessment program that values eligible land based on agricultural use value rather than fair market value.

**Eligible Land:**
- Agricultural land (10+ acres)
- Forest land (10+ acres)
- Agricultural reserve (10+ acres)

**Benefit:** Property taxes based on agricultural use value, not development value.

**Typical Savings:** 50-90% reduction in property taxes on enrolled acres.

### How It Works

**Market Value Assessment:**
Land valued at highest and best use (often development)
- Example: 50 acres near development = $500,000 market value
- Annual tax at $15/thousand = $7,500

**Agricultural Use Assessment:**
Land valued at agricultural productivity only
- Same 50 acres = $50,000 agricultural value
- Annual tax at $15/thousand = $750
- **Annual savings: $6,750**

### Rollback Tax Penalty

If you convert enrolled land to non-agricultural use, you owe rollback taxes:

**Rollback Calculation:**
Difference between taxes paid and taxes that would have been paid at market value, for current year plus prior 7 years, plus interest.

**Example Rollback:**
- 50 acres enrolled for 10 years
- Annual tax savings: $6,750
- Rollback: $6,750 × 7 years = $47,250 + interest
- Total penalty: $50,000-55,000

**Triggers:**
- Selling for development
- Building non-farm structures
- Subdividing land
- Converting to commercial use

### Enrollment Requirements

**Minimum Acreage:** 10 contiguous acres

**Active Use:** Must be in active agricultural, forest, or agricultural reserve use

**Application:** Submit to county assessor with verification of agricultural use

**Renewal:** Generally automatic, but use must continue

### Tax Savings Examples

**Example 1: Farmland Near Suburbs**
- 25 acres farmland
- Market value: $750,000 ($30,000/acre)
- Agricultural value: $75,000 ($3,000/acre)
- County tax rate: 2%
- Market value tax: $15,000/year
- Agricultural value tax: $1,500/year
- **Annual savings: $13,500**

**Example 2: Forest Land**
- 50 acres forest
- Market value: $500,000
- Forest use value: $50,000
- Tax rate: 1.8%
- Market value tax: $9,000/year
- Forest value tax: $900/year
- **Annual savings: $8,100**

### Strategic Considerations

**Long-Term Ownership:** Best for families planning to hold land 10+ years

**Development Intent:** If selling for development within 7 years, rollback makes program costly

**Estate Planning:** Heirs can continue enrollment if maintaining agricultural use

**Partial Conversion:** Can remove portion of land from program, pay rollback only on converted acres

This calculator estimates Clean & Green tax savings and potential rollback liability. Consult with a Pennsylvania tax professional before enrolling or converting land use.
`,
  },
  calculator: {
    fields: [
      {
        name: 'acreage',
        label: 'Total Acreage',
        type: 'number',
        defaultValue: 50,
        min: 10,
        max: 1000,
        step: 1,
        helpText: 'Total acres enrolled in program',
      },
      {
        name: 'marketValuePerAcre',
        label: 'Market Value Per Acre',
        type: 'currency',
        defaultValue: 10000,
        min: 1000,
        max: 100000,
        step: 1000,
        helpText: 'Fair market value per acre',
      },
      {
        name: 'agricValuePerAcre',
        label: 'Agricultural Value Per Acre',
        type: 'currency',
        defaultValue: 1000,
        min: 100,
        max: 20000,
        step: 100,
        helpText: 'Agricultural use value per acre',
      },
      {
        name: 'taxRate',
        label: 'Property Tax Rate (%)',
        type: 'percentage',
        defaultValue: 2.0,
        min: 0.5,
        max: 5.0,
        step: 0.1,
        helpText: 'Combined local property tax rate',
      },
      {
        name: 'yearsEnrolled',
        label: 'Years Enrolled in Program',
        type: 'number',
        defaultValue: 10,
        min: 0,
        max: 50,
        step: 1,
        helpText: 'How long land has been enrolled',
      },
    ],
    results: [
      {
        name: 'marketValue',
        label: 'Total Market Value',
        type: 'currency',
      },
      {
        name: 'agricValue',
        label: 'Total Agricultural Value',
        type: 'currency',
      },
      {
        name: 'marketValueTax',
        label: 'Annual Tax (Market Value)',
        type: 'currency',
      },
      {
        name: 'agricValueTax',
        label: 'Annual Tax (Agricultural Value)',
        type: 'currency',
      },
      {
        name: 'annualSavings',
        label: 'Annual Tax Savings',
        type: 'currency',
      },
      {
        name: 'lifetimeSavings',
        label: 'Total Savings (All Years Enrolled)',
        type: 'currency',
      },
      {
        name: 'rollbackTax',
        label: 'Estimated Rollback Tax (7 years)',
        type: 'currency',
      },
      {
        name: 'savingsPercentage',
        label: 'Tax Reduction Percentage',
        type: 'percentage',
      },
    ],
    calculate: (inputs: Record<string, number | string>) => {
      const acreage = Number(inputs.acreage) || 0;
      const marketValuePerAcre = Number(inputs.marketValuePerAcre) || 0;
      const agricValuePerAcre = Number(inputs.agricValuePerAcre) || 0;
      const taxRate = Number(inputs.taxRate) || 0;
      const yearsEnrolled = Number(inputs.yearsEnrolled) || 0;

      const marketValue = acreage * marketValuePerAcre;
      const agricValue = acreage * agricValuePerAcre;

      const marketValueTax = marketValue * (taxRate / 100);
      const agricValueTax = agricValue * (taxRate / 100);

      const annualSavings = marketValueTax - agricValueTax;
      const lifetimeSavings = annualSavings * yearsEnrolled;

      const rollbackYears = Math.min(yearsEnrolled, 7);
      const rollbackTax = annualSavings * rollbackYears * 1.06;

      const savingsPercentage = marketValueTax > 0 ? (annualSavings / marketValueTax) * 100 : 0;

      return {
        marketValue,
        agricValue,
        marketValueTax,
        agricValueTax,
        annualSavings,
        lifetimeSavings,
        rollbackTax,
        savingsPercentage,
      };
    },
  },
};
