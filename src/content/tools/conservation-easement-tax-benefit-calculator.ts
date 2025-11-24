import { CalculatorContent } from '@/types';

export const CONSERVATION_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Conservation Easement Tax Benefit Calculator | Land Donation Tax Deduction',
  description: 'Calculate tax benefits from donating a conservation easement on your property. Estimate charitable deduction, income tax savings, and estate tax reduction.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'conservation-easement-tax-benefit-calculator',
  article: {
    title: "Understanding Conservation Easement Tax Benefits",
    content: `
    <h2>What is a Conservation Easement?</h2>
    <p>A conservation easement is a voluntary legal agreement that permanently restricts development on your land to protect its conservation values (natural habitat, agricultural use, scenic views, etc.). When you donate a conservation easement to a qualified organization, you may receive significant tax benefits while retaining ownership of the land.</p>
    
    <h3>How Conservation Easements Work</h3>
    <p>You continue to own and use your land, but you give up certain development rights. In exchange, you receive:</p>
    <ul>
      <li><strong>Charitable Income Tax Deduction:</strong> Based on the reduction in property value</li>
      <li><strong>Estate Tax Benefits:</strong> Reduced estate value means lower estate taxes</li>
      <li><strong>Property Tax Reduction:</strong> Some jurisdictions reduce property taxes on conserved land</li>
      <li><strong>Capital Gains Tax Benefits:</strong> If you sell the land later at reduced value</li>
    </ul>

    <h3>Tax Benefits for 2025</h3>
    <ul>
      <li><strong>Deduction Limit:</strong> You can deduct up to 50% of your Adjusted Gross Income (AGI) per year</li>
      <li><strong>Qualified Farmers:</strong> Can deduct up to 100% of AGI if 50%+ of income is from farming</li>
      <li><strong>Carryforward Period:</strong> Unused deductions can be carried forward for 15 additional years</li>
      <li><strong>Valuation:</strong> Must be determined by qualified appraisal showing before/after value</li>
    </ul>

    <h3>Calculating the Tax Benefit</h3>
    <p>The charitable deduction equals the difference between:</p>
    <ul>
      <li><strong>Before Value:</strong> Fair market value of property without easement restrictions</li>
      <li><strong>After Value:</strong> Fair market value of property with easement restrictions</li>
      <li><strong>Donation Amount:</strong> The difference is your charitable contribution</li>
    </ul>

    <h3>Requirements and Qualifications</h3>
    <ul>
      <li><strong>Qualified Organization:</strong> Easement must be donated to IRS-approved land trust or government agency</li>
      <li><strong>Conservation Purpose:</strong> Must protect significant natural habitat, farmland, open space, or historic land</li>
      <li><strong>Perpetuity:</strong> Easement must be permanent and enforceable</li>
      <li><strong>Qualified Appraisal:</strong> Required for donations over $5,000</li>
      <li><strong>IRS Form 8283:</strong> Must be filed with tax return</li>
    </ul>

    <h3>Example Scenario</h3>
    <p>Rancher with 500 acres valued at $5 million donates conservation easement:</p>
    <ul>
      <li>Before easement value: $5,000,000 ($10,000/acre for potential development)</li>
      <li>After easement value: $2,000,000 ($4,000/acre for agricultural use only)</li>
      <li>Charitable deduction: $3,000,000</li>
      <li>If in 37% tax bracket: Saves $1,110,000 in federal income taxes over time</li>
      <li>Plus estate tax savings and possible property tax reductions</li>
    </ul>

    <h3>Planning Strategies</h3>
    <ul>
      <li><strong>Timing:</strong> Donate in high-income years to maximize deductions</li>
      <li><strong>Partial Easements:</strong> Restrict some areas while retaining development rights on others</li>
      <li><strong>Bargain Sale:</strong> Sell property below market value with conservation easement</li>
      <li><strong>Reserved Rights:</strong> Retain certain rights (farming, limited building) while protecting land</li>
      <li><strong>Estate Planning:</strong> Reduce estate size and provide liquidity for estate taxes</li>
    </ul>

    <h3>Important Warnings</h3>
    <ul>
      <li>IRS scrutiny of conservation easements has increased significantly</li>
      <li>Syndicated conservation easements are often challenged by IRS</li>
      <li>Work only with reputable land trusts accredited by the Land Trust Alliance</li>
      <li>Get independent qualified appraisal from experienced appraiser</li>
      <li>Easement permanently affects property value and use</li>
      <li>Professional legal and tax advice is essential</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Property Value Before Easement', isCurrency: true },
      { label: 'Property Value After Easement', isCurrency: true },
      { label: 'Charitable Deduction Amount', isCurrency: true },
      { label: 'Maximum Annual Deduction (% of AGI)', isCurrency: true },
      { label: 'Year 1 Tax Savings', isCurrency: true },
      { label: 'Total Tax Savings (all years)', isCurrency: true },
      { label: 'Years to Fully Use Deduction', isCurrency: false },
      { label: 'Estate Tax Savings', isCurrency: true },
      { label: 'Total Combined Tax Benefit', isCurrency: true },
    ],
    fields: [
      {
        name: 'propertyValueBefore',
        label: 'Property Value Before Easement',
        type: 'number',
        defaultValue: 5000000,
      },
      {
        name: 'propertyValueAfter',
        label: 'Property Value After Easement',
        type: 'number',
        defaultValue: 2000000,
      },
      {
        name: 'annualIncome',
        label: 'Annual Adjusted Gross Income (AGI)',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'isQualifiedFarmer',
        label: 'Qualified Farmer (50%+ income from farming)?',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'federalTaxRate',
        label: 'Federal Income Tax Rate (%)',
        type: 'number',
        defaultValue: 37,
      },
      {
        name: 'stateTaxRate',
        label: 'State Income Tax Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'estateTaxRate',
        label: 'Estate Tax Rate (%) - if applicable',
        type: 'number',
        defaultValue: 40,
      },
    ],
    calculate: (data) => {
      const { 
        propertyValueBefore,
        propertyValueAfter,
        annualIncome,
        isQualifiedFarmer,
        federalTaxRate,
        stateTaxRate,
        estateTaxRate
      } = data;

      const charitableDeduction = propertyValueBefore - propertyValueAfter;
      const agiLimitPercent = isQualifiedFarmer ? 1.0 : 0.5;
      const maxAnnualDeduction = annualIncome * agiLimitPercent;
      
      // Calculate years to use full deduction (max 16 years including carry-forward)
      let remainingDeduction = charitableDeduction;
      let totalYears = 0;
      let totalFederalSavings = 0;
      let totalStateSavings = 0;
      
      while (remainingDeduction > 0 && totalYears < 16) {
        const deductionThisYear = Math.min(remainingDeduction, maxAnnualDeduction);
        totalFederalSavings += deductionThisYear * (federalTaxRate / 100);
        totalStateSavings += deductionThisYear * (stateTaxRate / 100);
        remainingDeduction -= deductionThisYear;
        totalYears++;
      }
      
      const year1FederalSavings = Math.min(charitableDeduction, maxAnnualDeduction) * (federalTaxRate / 100);
      const year1StateSavings = Math.min(charitableDeduction, maxAnnualDeduction) * (stateTaxRate / 100);
      const year1TotalSavings = year1FederalSavings + year1StateSavings;
      
      const totalIncomeTaxSavings = totalFederalSavings + totalStateSavings;
      
      // Estate tax savings = reduction in property value * estate tax rate
      const estateTaxSavings = charitableDeduction * (estateTaxRate / 100);
      
      const totalCombinedBenefit = totalIncomeTaxSavings + estateTaxSavings;

      return [
        { label: 'Property Value Before Easement', value: propertyValueBefore, isCurrency: true },
        { label: 'Property Value After Easement', value: propertyValueAfter, isCurrency: true },
        { label: 'Charitable Deduction Amount', value: charitableDeduction, isCurrency: true },
        { label: 'Maximum Annual Deduction (% of AGI)', value: maxAnnualDeduction, isCurrency: true },
        { label: 'Year 1 Tax Savings', value: year1TotalSavings, isCurrency: true },
        { label: 'Total Tax Savings (all years)', value: totalIncomeTaxSavings, isCurrency: true },
        { label: 'Years to Fully Use Deduction', value: totalYears, isCurrency: false },
        { label: 'Estate Tax Savings', value: estateTaxSavings, isCurrency: true },
        { label: 'Total Combined Tax Benefit', value: totalCombinedBenefit, isCurrency: true },
      ];
    },
  },
};
