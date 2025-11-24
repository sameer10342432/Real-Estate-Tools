import { CalculatorContent } from '@/types';

export const FORM_4797_SALE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Form 4797 Sale of Business Property Calculator',
  description: 'Calculate Form 4797 tax on sale of rental property or business real estate. Determine depreciation recapture, Section 1250 gain, and total tax liability.',
  icon: 'Icon',
  category: 'Tax & Legal',
  slug: 'form-4797-sale-calculator',
  article: {
    title: 'Form 4797: Understanding Tax on Sale of Business Property',
    content: `
Form 4797 is used to report the sale of business property, including rental real estate, commercial buildings, and equipment. Understanding Form 4797 is essential for real estate investors selling rental properties, as it determines how much of your gain is taxed as ordinary income (depreciation recapture) versus capital gains.

### What is Form 4797?

Form 4797 (Sales of Business Property) reports gains and losses from:
- Sale of rental property
- Sale of commercial real estate
- Sale of business equipment and machinery
- Section 1231 property transactions
- Depreciation recapture

**Who Must File Form 4797:**
- Real estate investors selling rental properties
- Business owners selling business assets
- Landlords disposing of rental property
- Commercial property sellers
- Anyone selling depreciable property

### Section 1231 vs Section 1245 vs Section 1250

**Section 1231 Property:**
- Rental real estate held >1 year
- Land used in business
- Depreciable business property
- Treated as capital gain if net gain, ordinary loss if net loss

**Section 1250 Property:**
- Depreciable real property (buildings, not land)
- Rental residential and commercial property
- Subject to depreciation recapture at 25%
- Most rental properties fall under Section 1250

**Section 1245 Property:**
- Personal property and equipment
- Carpets, appliances, furniture in rentals
- 100% depreciation recapture at ordinary income rates
- Includes tangible personal property

### Depreciation Recapture Explained

When you sell rental property, you must "recapture" the depreciation you claimed during ownership. This recapture is taxed at different rates than capital gains.

**How Depreciation Recapture Works:**

**Step 1: Calculate Total Gain**
Sale Price - Adjusted Basis = Total Gain

**Step 2: Identify Depreciation Taken**
All depreciation claimed on Schedule E or prior Form 4562 filings

**Step 3: Calculate Section 1250 Gain (Unrecaptured)**
Lesser of:
- Total depreciation taken
- Total gain on sale

**Step 4: Calculate Section 1231 Gain**
Total Gain - Section 1250 Gain = Section 1231 Gain

**Tax Treatment:**
- Section 1250 gain (depreciation recapture): Taxed at 25%
- Section 1231 gain (remaining gain): Taxed at long-term capital gains rates (0%, 15%, or 20%)
- Net Investment Income Tax: Additional 3.8% on all gains if income exceeds threshold

### Real-World Example

**Rental Property Sale:**
- Original Purchase Price: $400,000 ($320,000 building + $80,000 land)
- Total Depreciation Taken: $88,000 (over 10 years)
- Capital Improvements: $50,000
- Sale Price: $600,000
- Selling Costs: $36,000

**Step 1: Calculate Adjusted Basis**
- Original basis: $400,000
- Plus improvements: $50,000
- Less depreciation: ($88,000)
- Adjusted basis: $362,000

**Step 2: Calculate Gain**
- Sale price: $600,000
- Less selling costs: ($36,000)
- Net proceeds: $564,000
- Less adjusted basis: ($362,000)
- Total gain: $202,000

**Step 3: Allocate Gain**
- Section 1250 recapture: $88,000 (depreciation taken)
- Section 1231 capital gain: $114,000 (remaining gain)

**Step 4: Calculate Tax**
- Depreciation recapture tax (25%): $22,000
- Capital gains tax (15%): $17,100
- NIIT (3.8%): $7,676
- **Total tax liability: $46,776**

### Adjusted Basis Calculation

Your adjusted basis determines your gain on sale. Many investors miscalculate basis and overpay taxes.

**Starting Basis:**
- Purchase price of property
- Closing costs when purchased (title, legal, recording)
- Cost to get property ready for service

**Increases to Basis:**
- Capital improvements (new roof, addition, major remodel)
- Legal fees to defend title
- Assessments for improvements (sewer, streets)
- Zoning costs

**Decreases to Basis:**
- Depreciation taken (or should have been taken)
- Casualty losses claimed
- Insurance reimbursements for damage
- Section 179 deductions

**Common Missed Basis Items:**
- Roof replacement
- HVAC system replacement
- Structural improvements
- Landscaping improvements
- Additions and expansions

### Section 1231 Lookback Rule

If you have Section 1231 losses in the previous 5 years, your Section 1231 gains are treated as ordinary income (not capital gains) to the extent of those previous losses.

**Example:**
- Year 1-3: Section 1231 loss of $30,000
- Year 4: Section 1231 gain of $100,000
- First $30,000 of gain = ordinary income
- Remaining $70,000 = capital gain

This prevents taxpayers from claiming ordinary losses but capital gains.

### Installment Sale Considerations

If you sell property using seller financing (installment sale), you can spread gain recognition over multiple years.

**Benefits:**
- Defer tax liability
- Avoid one-time high tax hit
- Spread income across years (potentially lower brackets)

**Depreciation Recapture Exception:**
ALL depreciation recapture must be recognized in year of sale, even if using installment method. You cannot defer depreciation recapture.

### State Tax Implications

**High-Tax States:**
- California: 13.3% on all gains (no preferential capital gains rate)
- New York: 10.9% + 3.876% NYC
- New Jersey: 10.75%
- Oregon: 9.9%

**No State Income Tax:**
- Florida, Texas, Nevada, Washington (before 2022), Tennessee (dividends/interest only)

**State-Level Depreciation Recapture:**
Most states follow federal treatment, taxing depreciation recapture as ordinary income.

### 1031 Exchange vs Paying Tax

**1031 Exchange:**
- Defer ALL taxes (capital gains + depreciation recapture)
- Must identify replacement property within 45 days
- Must close on replacement within 180 days
- Must use qualified intermediary
- Replacement property must be equal/greater value

**Paying Tax:**
- Cash out equity
- Flexibility to buy anything
- No 1031 compliance requirements
- Simplicity

**Break-Even Analysis:**
If you can reinvest sale proceeds at 8%+ return, paying tax and investing in stocks/funds might beat buying replacement property through 1031 exchange.

### Reporting Requirements

**Forms Required:**
- Form 4797 (Sales of Business Property)
- Form 8949 (if applicable)
- Schedule D (Capital Gains)
- State equivalents

**Information Needed:**
- Description of property sold
- Date acquired and date sold
- Sales price
- Selling expenses
- Adjusted basis
- Depreciation taken
- Form 1099-S (if issued)

### Mixed-Use Property

If property was used partially as rental and partially as personal residence:

**Allocation Required:**
- Separate personal use portion from rental portion
- Personal portion may qualify for $250,000/$500,000 exclusion
- Rental portion fully taxable + depreciation recapture
- Must allocate based on square footage or time

**Example:**
- 3,000 sq ft home, 1,000 sq ft rented
- 33.3% rental, 66.7% personal
- Apply allocation to basis, depreciation, and gain

### Planning Strategies

**Strategy 1: 1031 Exchange**
Defer all taxes by exchanging into like-kind property.

**Strategy 2: Opportunity Zone Investment**
Defer and reduce capital gains by investing in Qualified Opportunity Zones.

**Strategy 3: Installment Sale**
Spread gain over years (but not depreciation recapture).

**Strategy 4: Loss Harvesting**
Offset gains with other capital losses in same year.

**Strategy 5: Tax-Loss Properties**
Consider selling loss properties in same year to offset gains.

### Cost Segregation Impact

If you did cost segregation study to accelerate depreciation, this affects Form 4797:

**Increased Depreciation Recapture:**
- More depreciation taken = more recapture
- 5-year and 7-year property = Section 1245 recapture (ordinary income)
- Building improvements = Section 1250 recapture (25% rate)

**Trade-Off:**
- Saved taxes during ownership at ordinary rates (22%-37%)
- Pay some back at recapture (25%-37% depending on classification)
- Usually still net positive if held long enough

### When to Consult a Professional

**Hire Tax Professional When:**
- Selling rental property with depreciation
- Total gain exceeds $50,000
- Considering 1031 exchange
- Multi-property sales in one year
- Mixed-use property (partial rental)
- Previous Section 1231 losses
- Cost segregation study performed
- State-to-state sales

**CPA Costs vs. Benefits:**
- Cost: $800-2,500 for Form 4797 preparation
- Benefit: Proper basis calculation saves $5,000-20,000
- Benefit: Depreciation recapture planning
- Benefit: 1031 exchange guidance worth $50,000+

This calculator estimates your Form 4797 tax liability. Consult a qualified tax professional for advice specific to your transaction.
`,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Sale Price',
        type: 'currency',
        defaultValue: 600000,
        min: 0,
        max: 50000000,
        step: 1000,
        helpText: 'Sale price of business property',
      },
      {
        name: 'originalBasis',
        label: 'Original Purchase Price + Improvements',
        type: 'currency',
        defaultValue: 450000,
        min: 0,
        max: 50000000,
        step: 1000,
        helpText: 'Original cost plus capital improvements',
      },
      {
        name: 'totalDepreciation',
        label: 'Total Depreciation Taken',
        type: 'currency',
        defaultValue: 88000,
        min: 0,
        max: 10000000,
        step: 1000,
        helpText: 'All depreciation claimed during ownership',
      },
      {
        name: 'sellingCosts',
        label: 'Selling Costs (Commission, Fees)',
        type: 'currency',
        defaultValue: 36000,
        min: 0,
        max: 1000000,
        step: 1000,
        helpText: 'Total costs to sell the property',
      },
      {
        name: 'section1245Depreciation',
        label: 'Section 1245 Depreciation (Personal Property)',
        type: 'currency',
        defaultValue: 0,
        min: 0,
        max: 1000000,
        step: 1000,
        helpText: 'Depreciation on equipment, appliances, carpets',
      },
      {
        name: 'taxBracket',
        label: 'Ordinary Income Tax Bracket (%)',
        type: 'percentage',
        defaultValue: 24,
        min: 10,
        max: 37,
        step: 1,
        helpText: 'Your marginal tax bracket',
      },
    ],
    results: [
      {
        name: 'adjustedBasis',
        label: 'Adjusted Basis',
        type: 'currency',
      },
      {
        name: 'totalGain',
        label: 'Total Gain on Sale',
        type: 'currency',
      },
      {
        name: 'section1250Recapture',
        label: 'Section 1250 Depreciation Recapture',
        type: 'currency',
      },
      {
        name: 'section1245Recapture',
        label: 'Section 1245 Depreciation Recapture',
        type: 'currency',
      },
      {
        name: 'section1231Gain',
        label: 'Section 1231 Capital Gain',
        type: 'currency',
      },
      {
        name: 'section1250Tax',
        label: 'Section 1250 Recapture Tax (25%)',
        type: 'currency',
      },
      {
        name: 'section1245Tax',
        label: 'Section 1245 Recapture Tax (Ordinary)',
        type: 'currency',
      },
      {
        name: 'capitalGainsTax',
        label: 'Capital Gains Tax (15%)',
        type: 'currency',
      },
      {
        name: 'niitTax',
        label: 'Net Investment Income Tax (3.8%)',
        type: 'currency',
      },
      {
        name: 'totalFederalTax',
        label: 'Total Federal Tax Liability',
        type: 'currency',
      },
      {
        name: 'effectiveTaxRate',
        label: 'Effective Tax Rate on Gain',
        type: 'percentage',
      },
    ],
    calculate: (inputs: Record<string, number | string>) => {
      const salePrice = Number(inputs.salePrice) || 0;
      const originalBasis = Number(inputs.originalBasis) || 0;
      const totalDepreciation = Number(inputs.totalDepreciation) || 0;
      const sellingCosts = Number(inputs.sellingCosts) || 0;
      const section1245Depreciation = Number(inputs.section1245Depreciation) || 0;
      const taxBracket = Number(inputs.taxBracket) || 24;

      const adjustedBasis = originalBasis - totalDepreciation;
      const netProceeds = salePrice - sellingCosts;
      const totalGain = netProceeds - adjustedBasis;

      const section1245Recapture = Math.min(section1245Depreciation, totalGain);
      const section1250Recapture = Math.min(totalDepreciation - section1245Depreciation, Math.max(0, totalGain - section1245Recapture));
      const section1231Gain = Math.max(0, totalGain - section1245Recapture - section1250Recapture);

      const section1245Tax = section1245Recapture * (taxBracket / 100);
      const section1250Tax = section1250Recapture * 0.25;
      const capitalGainsTax = section1231Gain * 0.15;
      const niitTax = totalGain * 0.038;

      const totalFederalTax = section1245Tax + section1250Tax + capitalGainsTax + niitTax;
      const effectiveTaxRate = totalGain > 0 ? (totalFederalTax / totalGain) * 100 : 0;

      return {
        adjustedBasis,
        totalGain,
        section1250Recapture,
        section1245Recapture,
        section1231Gain,
        section1250Tax,
        section1245Tax,
        capitalGainsTax,
        niitTax,
        totalFederalTax,
        effectiveTaxRate,
      };
    },
  },
};
