import { CalculatorContent } from '@/types';

export const ARIZONA_CFD_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Arizona CFD (Community Facilities District) Calculator',
  description: 'Calculate Arizona Community Facilities District (CFD) fees and special assessments. Estimate annual CFD costs for Arizona new home developments.',
  icon: 'Icon',
  category: 'State-Specific Fees',
  slug: 'arizona-cfd-calculator',
  article: {
    title: 'Arizona CFD Fees: Understanding Community Facilities Districts',
    content: `
Arizona Community Facilities Districts (CFDs) are special taxing districts that finance infrastructure in new developments. Similar to California's Mello-Roos, Arizona CFDs add extra costs that homebuyers must factor into affordability calculations.

### What is an Arizona CFD?

CFDs are created under Arizona Revised Statutes Title 48 to finance public infrastructure in areas where municipalities don't initially provide services.

**CFD Funds:**
- Roads and street improvements
- Water and sewer infrastructure
- Parks and recreational facilities
- Public safety facilities
- Landscaping and lighting

**CFD Lifespan:** Typically 20-30 years until bonds are paid off.

**Annual Costs:** $500-$3,000 per year, varies by district and property value.

### Tax Treatment

CFDs are fully tax-deductible as property taxes on federal and Arizona state returns (subject to $10,000 SALT cap).

### Major Arizona CFD Areas

**Phoenix Metro:**
- Surprise, Goodyear, Buckeye
- North Phoenix developments
- Queen Creek, San Tan Valley

**Tucson:**
- Marana, Oro Valley
- Sahuarita developments

**Prescott Valley:** Various master-planned communities

### Calculator Usage

Use this calculator to estimate annual CFD costs and total lifetime expense. Always verify actual CFD amounts with the county assessor before purchasing.
`,
  },
  calculator: {
    fields: [
      {
        name: 'homeValue',
        label: 'Home Value',
        type: 'currency',
        defaultValue: 450000,
        min: 100000,
        max: 5000000,
        step: 10000,
        helpText: 'Property assessed value',
      },
      {
        name: 'cfdRate',
        label: 'CFD Tax Rate (%)',
        type: 'percentage',
        defaultValue: 0.5,
        min: 0.1,
        max: 2.0,
        step: 0.1,
        helpText: 'CFD assessment rate from district',
      },
      {
        name: 'yearsRemaining',
        label: 'Years Until CFD Paid Off',
        type: 'number',
        defaultValue: 25,
        min: 5,
        max: 40,
        step: 1,
        helpText: 'Years until CFD bonds are paid off',
      },
    ],
    results: [
      {
        name: 'annualCFDCost',
        label: 'Annual CFD Cost',
        type: 'currency',
      },
      {
        name: 'monthlyCFDCost',
        label: 'Monthly CFD Cost',
        type: 'currency',
      },
      {
        name: 'totalLifetimeCost',
        label: 'Total CFD Cost (All Years)',
        type: 'currency',
      },
      {
        name: 'taxSavings',
        label: 'Annual Tax Savings (24% bracket)',
        type: 'currency',
      },
      {
        name: 'effectiveCost',
        label: 'Effective Annual Cost (After Tax)',
        type: 'currency',
      },
    ],
    calculate: (inputs: Record<string, number | string>) => {
      const homeValue = Number(inputs.homeValue) || 0;
      const cfdRate = Number(inputs.cfdRate) || 0;
      const yearsRemaining = Number(inputs.yearsRemaining) || 0;

      const annualCFDCost = homeValue * (cfdRate / 100);
      const monthlyCFDCost = annualCFDCost / 12;
      const totalLifetimeCost = annualCFDCost * yearsRemaining;
      const taxSavings = annualCFDCost * 0.24;
      const effectiveCost = annualCFDCost - taxSavings;

      return {
        annualCFDCost,
        monthlyCFDCost,
        totalLifetimeCost,
        taxSavings,
        effectiveCost,
      };
    },
  },
};
