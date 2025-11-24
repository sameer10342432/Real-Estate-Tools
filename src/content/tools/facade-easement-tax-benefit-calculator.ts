import { CalculatorContent } from '@/types';

export const FACADE_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Facade Easement Tax Benefit Calculator | Historic Preservation Tax Deduction',
  description: 'Calculate tax benefits from donating a facade easement on historic property. Estimate charitable deductions and income tax savings for historic preservation.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'facade-easement-tax-benefit-calculator',
  article: {
    title: "Understanding Facade Easement Tax Benefits",
    content: `
    <h2>What is a Facade Easement?</h2>
    <p>A facade easement (also called a historic preservation easement) is a legal agreement that restricts changes to the exterior of a historic building. Property owners donate this easement to a qualified preservation organization and receive a charitable tax deduction based on the reduction in property value.</p>
    
    <h3>How Facade Easements Work</h3>
    <p>When you donate a facade easement:</p>
    <ul>
      <li>You continue to own and occupy the property</li>
      <li>You agree not to alter the historic exterior without approval</li>
      <li>The preservation organization monitors and enforces the restrictions</li>
      <li>You receive a charitable income tax deduction</li>
      <li>The easement remains in effect permanently (runs with the land)</li>
    </ul>

    <h3>Qualifying Requirements</h3>
    <ul>
      <li><strong>Historic Significance:</strong> Property must be listed on National Register of Historic Places or located in a registered historic district</li>
      <li><strong>Visible from Public Way:</strong> Building must be visible from a public street, park, waterway, or land</li>
      <li><strong>Qualified Organization:</strong> Easement must be donated to IRS-approved preservation organization</li>
      <li><strong>Conservation Purpose:</strong> Must preserve historically important architecture or land area</li>
      <li><strong>Perpetuity:</strong> Easement must be permanent</li>
    </ul>

    <h3>Tax Benefits for 2025</h3>
    <ul>
      <li><strong>Deduction Limit:</strong> Up to 50% of Adjusted Gross Income (AGI) per year for most donors</li>
      <li><strong>Carryforward:</strong> Unused deductions can be carried forward for 15 additional years</li>
      <li><strong>Qualified Appraisal:</strong> Required to determine the reduction in property value</li>
      <li><strong>Estate Tax Benefits:</strong> Reduces estate value for estate tax purposes</li>
    </ul>

    <h3>Calculating the Deduction</h3>
    <p>The charitable deduction is based on the difference in property value:</p>
    <ul>
      <li><strong>Before Value:</strong> Fair market value without facade restrictions</li>
      <li><strong>After Value:</strong> Fair market value with facade restrictions in place</li>
      <li><strong>Deduction:</strong> The difference represents your charitable contribution</li>
    </ul>

    <h3>IRS Scrutiny and Compliance</h3>
    <p><strong>Warning:</strong> The IRS has heavily scrutinized facade easement deductions, particularly:</p>
    <ul>
      <li>Syndicated or promoted easement transactions</li>
      <li>Overvalued easements (claiming excessive reduction in value)</li>
      <li>Properties that don't meet visibility requirements</li>
      <li>Easements that don't meaningfully restrict property use</li>
    </ul>

    <h3>Best Practices for Compliance</h3>
    <ul>
      <li><strong>Conservative Valuation:</strong> Use experienced, independent appraisers with historic property expertise</li>
      <li><strong>Reputable Organization:</strong> Work with established, IRS-approved preservation organizations</li>
      <li><strong>Substantive Restrictions:</strong> Ensure easement meaningfully restricts future alterations</li>
      <li><strong>Proper Documentation:</strong> Maintain comprehensive documentation of property's historic significance</li>
      <li><strong>Avoid Promoters:</strong> Steer clear of tax shelter promoters offering "guaranteed" large deductions</li>
      <li><strong>File Form 8283:</strong> Required for non-cash charitable contributions over $5,000</li>
    </ul>

    <h3>Typical Valuation Ranges</h3>
    <p>Reasonable facade easement deductions typically range from:</p>
    <ul>
      <li>10-15% of property value for substantial historic districts</li>
      <li>5-10% for less restrictive easements</li>
      <li>Higher percentages may apply for truly unique or significant properties</li>
      <li>IRS often challenges deductions claiming >20% reduction in value</li>
    </ul>

    <h3>Benefits Beyond Taxes</h3>
    <ul>
      <li>Preserve historic character of your property and neighborhood</li>
      <li>May enhance property marketability to preservation-minded buyers</li>
      <li>Contribute to community heritage and cultural preservation</li>
      <li>Potential access to preservation grants and technical assistance</li>
    </ul>

    <h3>Restrictions to Consider</h3>
    <ul>
      <li>Cannot alter exterior without approval from preservation organization</li>
      <li>May limit future renovation or expansion options</li>
      <li>Inspection rights granted to preservation organization</li>
      <li>Restrictions remain even if you sell the property</li>
      <li>May affect property insurability or resale value</li>
    </ul>

    <h3>Professional Advice Required</h3>
    <p>Given IRS scrutiny and complexity, work with:</p>
    <ul>
      <li>Tax attorney experienced in conservation easements</li>
      <li>Qualified appraiser with historic preservation credentials</li>
      <li>Established preservation organization with IRS approval</li>
      <li>CPA familiar with charitable contribution rules</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Property Value Without Easement', isCurrency: true },
      { label: 'Estimated Reduction in Value (%)', isCurrency: false },
      { label: 'Property Value With Easement', isCurrency: true },
      { label: 'Charitable Deduction Amount', isCurrency: true },
      { label: 'Maximum Annual Deduction (50% AGI)', isCurrency: true },
      { label: 'Year 1 Federal Tax Savings', isCurrency: true },
      { label: 'Year 1 State Tax Savings', isCurrency: true },
      { label: 'Total Year 1 Tax Savings', isCurrency: true },
      { label: 'Total Tax Savings (all years)', isCurrency: true },
      { label: 'Years to Use Full Deduction', isCurrency: false },
    ],
    fields: [
      {
        name: 'propertyValue',
        label: 'Property Fair Market Value (without easement)',
        type: 'number',
        defaultValue: 2000000,
      },
      {
        name: 'valueReductionPercent',
        label: 'Estimated Reduction in Value (%)',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'annualIncome',
        label: 'Annual Adjusted Gross Income (AGI)',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'federalTaxRate',
        label: 'Federal Income Tax Rate (%)',
        type: 'number',
        defaultValue: 35,
      },
      {
        name: 'stateTaxRate',
        label: 'State Income Tax Rate (%)',
        type: 'number',
        defaultValue: 6,
      },
    ],
    calculate: (data) => {
      const { 
        propertyValue,
        valueReductionPercent,
        annualIncome,
        federalTaxRate,
        stateTaxRate
      } = data;

      const valueReduction = propertyValue * (valueReductionPercent / 100);
      const propertyValueAfter = propertyValue - valueReduction;
      const charitableDeduction = valueReduction;
      
      const maxAnnualDeduction = annualIncome * 0.5; // 50% of AGI
      
      // Calculate how many years to use full deduction (max 16 years with carryforward)
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
      
      const year1Deduction = Math.min(charitableDeduction, maxAnnualDeduction);
      const year1FederalSavings = year1Deduction * (federalTaxRate / 100);
      const year1StateSavings = year1Deduction * (stateTaxRate / 100);
      const year1TotalSavings = year1FederalSavings + year1StateSavings;
      
      const totalTaxSavings = totalFederalSavings + totalStateSavings;

      return [
        { label: 'Property Value Without Easement', value: propertyValue, isCurrency: true },
        { label: 'Estimated Reduction in Value (%)', value: valueReductionPercent, isCurrency: false },
        { label: 'Property Value With Easement', value: propertyValueAfter, isCurrency: true },
        { label: 'Charitable Deduction Amount', value: charitableDeduction, isCurrency: true },
        { label: 'Maximum Annual Deduction (50% AGI)', value: maxAnnualDeduction, isCurrency: true },
        { label: 'Year 1 Federal Tax Savings', value: year1FederalSavings, isCurrency: true },
        { label: 'Year 1 State Tax Savings', value: year1StateSavings, isCurrency: true },
        { label: 'Total Year 1 Tax Savings', value: year1TotalSavings, isCurrency: true },
        { label: 'Total Tax Savings (all years)', value: totalTaxSavings, isCurrency: true },
        { label: 'Years to Use Full Deduction', value: totalYears, isCurrency: false },
      ];
    },
  },
};
