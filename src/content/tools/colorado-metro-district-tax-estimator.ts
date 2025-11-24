import { CalculatorContent } from '@/types';

export const COLORADO_METRO_DISTRICT_TAX_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Colorado Metro District Tax Estimator',
  description: 'Calculate Colorado Metropolitan District taxes and fees. Estimate annual metro district mill levy costs for Colorado properties in special districts.',
  icon: 'Icon',
  category: 'State-Specific Fees',
  slug: 'colorado-metro-district-tax-estimator',
  article: {
    title: 'Colorado Metropolitan Districts: Understanding Mill Levy Costs',
    content: `
Colorado Metropolitan Districts (Metro Districts) are quasi-governmental entities that finance infrastructure and services in new developments through property tax mill levies.

### What is a Colorado Metro District?

Metro Districts are created under Colorado Revised Statutes Title 32 to provide infrastructure and services where counties and cities don't initially extend them.

**Metro District Services:**
- Water and wastewater systems
- Streets and transportation
- Parks and recreation facilities
- Fire protection services
- Landscaping and lighting

**Tax Structure:** Mill levy added to property taxes (1 mill = $1 per $1,000 assessed value).

**Typical Mill Levies:** 30-70 mills (3-7% of assessed value).

### Major Metro District Areas

**Denver Metro:**
- Highlands Ranch
- Aurora (various developments)
- Commerce City developments

**Colorado Springs:**
- Northern developments
- Powers corridor

**Fort Collins:** Southeast developments

**Boulder County:** Erie, Longmont areas

### Tax Calculation

Colorado uses actual value × assessment rate (residential = 6.765% in 2024) × mill levy = annual tax.

Example: $500,000 home, 50 mill levy
- Assessed value: $500,000 × 0.06765 = $33,825
- Metro tax: $33,825 × 0.050 = $1,691/year

### Important Considerations

**Duration:** Usually 30-40 years, some perpetual for O&M.

**Tax Deductibility:** Fully deductible as property tax (subject to SALT cap).

**Disclosure:** Must be disclosed at sale per Colorado law.

This calculator estimates your metro district tax based on mill levy rates. Verify actual rates with county assessor.
`,
  },
  calculator: {
    fields: [
      {
        name: 'homeValue',
        label: 'Home Market Value',
        type: 'currency',
        defaultValue: 500000,
        min: 100000,
        max: 5000000,
        step: 10000,
        helpText: 'Market value of the property',
      },
      {
        name: 'millLevy',
        label: 'Metro District Mill Levy',
        type: 'number',
        defaultValue: 50,
        min: 10,
        max: 100,
        step: 1,
        helpText: 'Metro district mill levy (mills)',
      },
      {
        name: 'assessmentRate',
        label: 'Assessment Rate (%)',
        type: 'percentage',
        defaultValue: 6.765,
        min: 6,
        max: 8,
        step: 0.001,
        helpText: 'Colorado residential assessment rate',
      },
      {
        name: 'yearsRemaining',
        label: 'Years Until District Paid Off',
        type: 'number',
        defaultValue: 30,
        min: 10,
        max: 40,
        step: 1,
        helpText: 'Years until bonds are paid off',
      },
    ],
    results: [
      {
        name: 'assessedValue',
        label: 'Assessed Value',
        type: 'currency',
      },
      {
        name: 'annualMetroTax',
        label: 'Annual Metro District Tax',
        type: 'currency',
      },
      {
        name: 'monthlyMetroTax',
        label: 'Monthly Metro District Tax',
        type: 'currency',
      },
      {
        name: 'totalLifetimeCost',
        label: 'Total Cost Over Term',
        type: 'currency',
      },
      {
        name: 'taxSavings',
        label: 'Annual Tax Savings (24% bracket)',
        type: 'currency',
      },
      {
        name: 'effectiveAnnualCost',
        label: 'Effective Annual Cost (After Tax)',
        type: 'currency',
      },
    ],
    calculate: (inputs: Record<string, number | string>) => {
      const homeValue = Number(inputs.homeValue) || 0;
      const millLevy = Number(inputs.millLevy) || 0;
      const assessmentRate = Number(inputs.assessmentRate) || 6.765;
      const yearsRemaining = Number(inputs.yearsRemaining) || 0;

      const assessedValue = homeValue * (assessmentRate / 100);
      const annualMetroTax = assessedValue * (millLevy / 1000);
      const monthlyMetroTax = annualMetroTax / 12;
      const totalLifetimeCost = annualMetroTax * yearsRemaining;
      const taxSavings = annualMetroTax * 0.24;
      const effectiveAnnualCost = annualMetroTax - taxSavings;

      return {
        assessedValue,
        annualMetroTax,
        monthlyMetroTax,
        totalLifetimeCost,
        taxSavings,
        effectiveAnnualCost,
      };
    },
  },
};
