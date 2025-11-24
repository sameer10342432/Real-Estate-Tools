import { CalculatorContent } from '@/types';

export const FORM_1099_S_PROCEEDS_ESTIMATOR_CONTENT: CalculatorContent = {
  title: '1099-S (Proceeds from Sale) Estimator',
  description: 'Calculate 1099-S proceeds from real estate sale and estimate tax liability. Understand gross proceeds reporting requirements for property sellers and investors.',
  icon: 'Icon',
  category: 'Tax & Legal',
  slug: '1099-s-proceeds-estimator',
  article: {
    title: 'Form 1099-S: Understanding Proceeds from Real Estate Transactions',
    content: `
Form 1099-S is the IRS reporting form for proceeds from real estate transactions. Whether you're selling your primary residence, investment property, or vacation home, understanding 1099-S reporting requirements is crucial for accurate tax reporting and avoiding penalties.

### What is Form 1099-S?

Form 1099-S (Proceeds from Real Estate Transactions) is an information return filed by the person responsible for closing a real estate transaction. It reports the gross proceeds from the sale to both the IRS and the seller.

**Who Files Form 1099-S:**
- Title companies
- Real estate attorneys
- Escrow companies
- Mortgage lenders
- The seller's broker (if receiving gross proceeds)

**Who Receives Form 1099-S:**
- Sellers of real property
- Exchangers in 1031 exchanges
- Recipients of foreclosed property
- Anyone receiving proceeds from real estate sale

### When is Form 1099-S Required?

**Form 1099-S is Required For:**
- Sale of real property (land, buildings, including permanent structures)
- Sale of condominium units and shares in cooperative housing corporations
- Transfers involving investment or business property
- Sales of vacation homes and rental properties
- Foreclosures and abandonments

**Exceptions - No Form 1099-S Required:**
- Principal residence sale qualifying for $250,000/$500,000 exclusion
- Sale for $600 or less
- Sale to exempt recipient (corporation, government entity)
- Seller certifies exemption based on exclusion rules

### Primary Residence Exclusion

**$250,000/$500,000 Home Sale Exclusion:**
You can exclude up to $250,000 ($500,000 married filing jointly) of capital gain on sale of primary residence if you meet these requirements:

**Ownership Test:**
- Owned the home for at least 2 of last 5 years

**Use Test:**
- Lived in home as primary residence for at least 2 of last 5 years

**Frequency Test:**
- Haven't used exclusion on another home in last 2 years

**If You Qualify:**
- No Form 1099-S required (if you certify to closing agent)
- No capital gains tax on excluded amount
- Must still report sale if receiving 1099-S

### Gross Proceeds Calculation

**What's Included in Gross Proceeds:**
- Full selling price
- Cash received
- Fair market value of property received
- Debt buyer assumes or takes subject to
- Liabilities seller is relieved of

**Not Included in Gross Proceeds:**
- Real estate commissions (paid from proceeds)
- Transfer taxes
- Other closing costs paid from proceeds

**Example Gross Proceeds Calculation:**
- Sale Price: $500,000
- Buyer assumes mortgage: $0
- Cash to seller (before costs): $500,000
- **Gross Proceeds Reported on 1099-S: $500,000**

Note: Commissions and closing costs reduce your net proceeds and increase your cost basis for gain calculation, but are not subtracted from the 1099-S amount.

### Calculating Your Tax Liability

**Capital Gain Calculation:**
1. Gross Proceeds (from Form 1099-S)
2. Minus: Adjusted Basis (original cost + improvements + buying costs)
3. Equals: Total Gain
4. Minus: Primary residence exclusion (if applicable)
5. Equals: Taxable Capital Gain

**Adjusted Basis Components:**
- Original purchase price
- Closing costs when you bought (title, legal, recording fees)
- Capital improvements (not repairs)
- Selling expenses (commission, legal, title fees, inspections)

**Capital Gains Tax Rates (2024):**
- 0% if taxable income under $44,625 (single) or $89,250 (married)
- 15% if taxable income $44,626-$492,300 (single) or $89,251-$553,850 (married)
- 20% if taxable income over $492,300 (single) or $553,850 (married)
- Plus: 3.8% Net Investment Income Tax if income exceeds $200,000 (single) or $250,000 (married)

### Investment Property Sale

**No Primary Residence Exclusion:**
Investment properties don't qualify for $250,000/$500,000 exclusion.

**Full Capital Gains Tax:**
- Short-term gains (held < 1 year): Taxed at ordinary income rates (up to 37%)
- Long-term gains (held > 1 year): Taxed at capital gains rates (0%, 15%, or 20%)

**Depreciation Recapture:**
If you claimed depreciation on rental property, you must "recapture" depreciation taken at 25% tax rate.

**1031 Exchange Option:**
Defer all capital gains tax by exchanging into like-kind property.

### Vacation Home Considerations

**Mixed-Use Property:**
If property was used partly as residence and partly as rental:

**Allocation Required:**
- Calculate gain separately for personal use portion vs. rental portion
- Personal use portion may qualify for partial exclusion
- Rental portion subject to full capital gains tax + depreciation recapture

**Requirements for Partial Exclusion:**
- Must meet 2-of-5-year use test
- Non-qualified use after 2008 reduces exclusion
- Rental periods after last date of personal use = non-qualified use

### Reporting Form 1099-S on Your Tax Return

**Where to Report:**
- Schedule D (Capital Gains and Losses)
- Form 8949 (Sales and Other Dispositions of Capital Assets)
- Form 4797 (if business/rental property with depreciation)

**What to Report:**
- Description of property
- Date acquired and date sold
- Gross proceeds (from Form 1099-S)
- Cost basis (your calculation)
- Gain or loss

**Even if No 1099-S Issued:**
You must still report the sale on your tax return. The IRS receives 1099-S copies and matches them to taxpayer returns.

### Common 1099-S Mistakes

**Mistake #1: Forgetting Capital Improvements**
Many sellers forget to include major improvements in cost basis:
- Kitchen/bathroom remodels
- Additions and expansions
- New roof, HVAC, windows
- Landscaping and hardscaping

**Mistake #2: Not Documenting Selling Expenses**
Keep receipts for:
- Real estate commissions
- Attorney fees
- Title insurance
- Inspections and reports
- Staging costs
- Repairs required by contract

**Mistake #3: Assuming Primary Residence = No Taxes**
The exclusion is limited. If your gain exceeds $250,000/$500,000, the excess is taxable.

**Mistake #4: Not Reporting Sale Because No 1099-S**
If you qualified for exclusion and no 1099-S was issued, you may still need to report if gain exceeds exclusion amount.

### State Tax Considerations

**States with Capital Gains Tax:**
Most states tax capital gains as ordinary income. Some states with special rules:

**California:**
- No separate capital gains rate
- Taxed as ordinary income (up to 13.3%)
- No primary residence exclusion at state level for gains over federal exclusion

**New York:**
- Taxed as ordinary income (up to 10.9%)
- NYC adds 3.876% for city residents
- No separate state exclusion

**Washington:**
- 7% capital gains tax on gains over $250,000
- Exemption for primary residence sales
- New tax (effective 2022)

**States with No Income Tax:**
Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington (before 2022), Wyoming - no capital gains tax

### Multiple Property Strategies

**Serial Primary Residence Strategy:**
- Buy, live in, improve, sell every 2+ years
- Use $250,000/$500,000 exclusion each time
- Build wealth tax-free through real estate

**Limitations:**
- Can only use exclusion once every 2 years
- Must meet ownership and use tests
- Must be true primary residence (not just for tax benefit)

### Special Situations

**Divorce:**
- Spouse receiving home in divorce can include other spouse's ownership period
- Both spouses can claim exclusion if meet requirements
- Plan sale timing to maximize benefits

**Deceased Spouse:**
- Surviving spouse has 2 years from death to sell and claim full $500,000 exclusion
- After 2 years, limited to $250,000 exclusion
- Step-up in basis may eliminate much of gain

**Military/Foreign Service:**
- Can suspend 5-year test period for up to 10 years
- Qualifies during official extended duty
- Provides flexibility for frequent movers

**Foreclosure/Short Sale:**
- 1099-S still issued for gross proceeds
- May also receive 1099-C for cancellation of debt
- Some debt forgiveness may be excludable (through 2025)

### Record Keeping Requirements

**Documents to Keep:**
- Original purchase closing statement (HUD-1 or CD)
- Receipts for capital improvements
- Sale closing statement
- Form 1099-S
- Real estate commission invoices
- Contractor invoices for improvements
- Keep for at least 3 years after filing tax return (6 years recommended)

**Capital Improvement Documentation:**
Create a "home improvement file" with:
- Photos before and after
- Contractor contracts and receipts
- Permits obtained
- Canceled checks or credit card statements
- Home equity loan documents (if used for improvements)

### Planning Opportunities

**Before Sale:**
- Review documentation for cost basis items
- Consider timing to qualify for exclusion
- Evaluate 1031 exchange potential (investment property)
- Coordinate with tax professional

**After Sale:**
- Ensure 1099-S is accurate
- Report sale even if below exclusion amount (if 1099-S issued)
- Calculate depreciation recapture (rental property)
- Plan estimated tax payments for gain

### When to Hire a Tax Professional

**Seek Professional Help When:**
- Selling rental or investment property
- Gain exceeds primary residence exclusion
- Complex ownership history (divorce, inheritance, etc.)
- Mixed-use property (partial rental)
- Multiple properties sold in same year
- Considering 1031 exchange
- Depreciation recapture issues

**Cost vs. Benefit:**
Tax professional fees: $300-1,500
Potential tax savings from proper planning: $5,000-50,000+
Peace of mind: Priceless

This calculator helps estimate your 1099-S proceeds and potential tax liability, but consult with a qualified tax professional for advice specific to your situation.
`,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Sale Price',
        type: 'currency',
        defaultValue: 500000,
        min: 0,
        max: 50000000,
        step: 1000,
        helpText: 'Final sale price of property',
      },
      {
        name: 'originalPurchasePrice',
        label: 'Original Purchase Price',
        type: 'currency',
        defaultValue: 350000,
        min: 0,
        max: 50000000,
        step: 1000,
        helpText: 'What you paid for the property',
      },
      {
        name: 'capitalImprovements',
        label: 'Capital Improvements',
        type: 'currency',
        defaultValue: 40000,
        min: 0,
        max: 5000000,
        step: 1000,
        helpText: 'Major improvements (not routine repairs)',
      },
      {
        name: 'sellingExpenses',
        label: 'Selling Expenses (Commission, Fees)',
        type: 'currency',
        defaultValue: 30000,
        min: 0,
        max: 1000000,
        step: 1000,
        helpText: 'Total selling costs and commissions',
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        defaultValue: 'primary',
        options: [
          { value: 'primary', label: 'Primary Residence (Qualifies for Exclusion)' },
          { value: 'investment', label: 'Investment/Rental Property' },
          { value: 'vacation', label: 'Vacation/Second Home' },
        ],
        helpText: 'Type of property sold',
      },
      {
        name: 'filingStatus',
        label: 'Filing Status',
        type: 'select',
        defaultValue: 'single',
        options: [
          { value: 'single', label: 'Single' },
          { value: 'married', label: 'Married Filing Jointly' },
        ],
        helpText: 'Your tax filing status',
      },
      {
        name: 'yearsOwned',
        label: 'Years Owned',
        type: 'number',
        defaultValue: 5,
        min: 0,
        max: 100,
        step: 0.5,
        helpText: 'How long you owned the property',
      },
      {
        name: 'depreciationTaken',
        label: 'Depreciation Taken (if rental)',
        type: 'currency',
        defaultValue: 0,
        min: 0,
        max: 1000000,
        step: 1000,
        helpText: 'Total depreciation claimed on rental property',
      },
    ],
    results: [
      {
        name: 'grossProceeds',
        label: 'Gross Proceeds (Form 1099-S)',
        type: 'currency',
      },
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
        name: 'exclusionAmount',
        label: 'Primary Residence Exclusion',
        type: 'currency',
      },
      {
        name: 'depreciationRecapture',
        label: 'Depreciation Recapture',
        type: 'currency',
      },
      {
        name: 'taxableGain',
        label: 'Taxable Capital Gain',
        type: 'currency',
      },
      {
        name: 'capitalGainsTax',
        label: 'Federal Capital Gains Tax (15%)',
        type: 'currency',
      },
      {
        name: 'depreciationRecaptureTax',
        label: 'Depreciation Recapture Tax (25%)',
        type: 'currency',
      },
      {
        name: 'niitTax',
        label: 'Net Investment Income Tax (3.8%)',
        type: 'currency',
      },
      {
        name: 'totalTaxLiability',
        label: 'Total Tax Liability',
        type: 'currency',
      },
      {
        name: 'netProceeds',
        label: 'Net Proceeds After Tax',
        type: 'currency',
      },
    ],
    calculate: (inputs: Record<string, number | string>) => {
      const salePrice = Number(inputs.salePrice) || 0;
      const originalPurchasePrice = Number(inputs.originalPurchasePrice) || 0;
      const capitalImprovements = Number(inputs.capitalImprovements) || 0;
      const sellingExpenses = Number(inputs.sellingExpenses) || 0;
      const propertyType = String(inputs.propertyType) || 'primary';
      const filingStatus = String(inputs.filingStatus) || 'single';
      const yearsOwned = Number(inputs.yearsOwned) || 0;
      const depreciationTaken = Number(inputs.depreciationTaken) || 0;

      const grossProceeds = salePrice;
      const adjustedBasis = originalPurchasePrice + capitalImprovements + sellingExpenses;
      const totalGain = grossProceeds - adjustedBasis;

      let exclusionAmount = 0;
      if (propertyType === 'primary' && yearsOwned >= 2) {
        exclusionAmount = filingStatus === 'married' ? 500000 : 250000;
      }

      const depreciationRecapture = depreciationTaken;
      const gainAfterExclusion = Math.max(0, totalGain - exclusionAmount);
      const capitalGain = Math.max(0, gainAfterExclusion - depreciationRecapture);
      const taxableGain = gainAfterExclusion;

      const capitalGainsTax = capitalGain * 0.15;
      const depreciationRecaptureTax = depreciationRecapture * 0.25;
      const niitTax = taxableGain > 0 ? taxableGain * 0.038 : 0;
      const totalTaxLiability = capitalGainsTax + depreciationRecaptureTax + niitTax;

      const netProceeds = salePrice - sellingExpenses - totalTaxLiability;

      return {
        grossProceeds,
        adjustedBasis,
        totalGain,
        exclusionAmount,
        depreciationRecapture,
        taxableGain,
        capitalGainsTax,
        depreciationRecaptureTax,
        niitTax,
        totalTaxLiability,
        netProceeds,
      };
    },
  },
};
