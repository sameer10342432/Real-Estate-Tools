import { CalculatorContent } from '@/types';

export const PROPERTY_TAX_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Property Tax Deduction Calculator | SALT Cap Limit Calculator 2025',
  description: 'Calculate your property tax deduction under the $10,000 SALT cap. Estimate federal tax savings and state/local tax deduction limits.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'property-tax-deductibility-cap-calculator',
  article: {
    title: "Understanding the SALT Cap on Property Tax Deductions",
    content: `
    <h2>What is the SALT Cap?</h2>
    <p>The SALT (State and Local Tax) cap is a federal tax law that limits the amount of state and local taxes you can deduct on your federal income tax return. Since 2018, the maximum deduction for state and local taxes combined is $10,000 ($5,000 if married filing separately).</p>
    
    <h3>What Taxes Count Toward the SALT Cap?</h3>
    <p>The $10,000 limit applies to the combined total of:</p>
    <ul>
      <li><strong>State Income Tax:</strong> Or state sales tax if you elect to deduct that instead</li>
      <li><strong>Local Income Tax:</strong> City or county income taxes</li>
      <li><strong>Property Tax:</strong> Real estate taxes on all properties you own</li>
      <li><strong>Personal Property Tax:</strong> Car registration fees (value-based portion only)</li>
    </ul>

    <h3>How the SALT Cap Works</h3>
    <p>Before the Tax Cuts and Jobs Act (2017), there was no limit on state and local tax deductions. The new cap significantly impacts homeowners in high-tax states like California, New York, New Jersey, Connecticut, and Illinois.</p>

    <h3>SALT Cap Impact by State</h3>
    <p><strong>High-Impact States (combined property + income tax often exceeds $10,000):</strong></p>
    <ul>
      <li>California, New York, New Jersey, Connecticut, Illinois, Massachusetts, Maryland, Oregon</li>
    </ul>
    <p><strong>Lower-Impact States (combined taxes typically under $10,000):</strong></p>
    <ul>
      <li>States with no income tax: Texas, Florida, Nevada, Washington, Tennessee, South Dakota, Wyoming, Alaska</li>
      <li>Low property tax states: Hawaii, Alabama, Louisiana, Delaware</li>
    </ul>

    <h3>Strategies to Maximize Tax Benefits Under SALT Cap</h3>
    <ul>
      <li><strong>Bunching Deductions:</strong> Prepay property taxes in alternating years to maximize deductions every other year</li>
      <li><strong>Consider Standard Deduction:</strong> With $10,000 SALT cap, many taxpayers are better off taking standard deduction ($29,200 married, $14,600 single for 2025)</li>
      <li><strong>Maximize Other Itemized Deductions:</strong> Charitable contributions, mortgage interest, medical expenses</li>
      <li><strong>Business Property:</strong> Business property taxes are fully deductible on Schedule C (not subject to SALT cap)</li>
      <li><strong>Pass-Through Entity Tax:</strong> Some states allow S-corps and partnerships to pay state tax at entity level (workaround to SALT cap)</li>
    </ul>

    <h3>SALT Cap Workarounds</h3>
    <ul>
      <li><strong>PTET (Pass-Through Entity Tax):</strong> Many states now allow pass-through entities to pay state tax at the entity level, which is fully deductible for federal purposes</li>
      <li><strong>Charitable Contributions:</strong> Some states offer tax credits for donations to state programs, though IRS has limited this strategy</li>
      <li><strong>Home Office Deduction:</strong> If you qualify, a portion of property taxes may be deductible as business expense</li>
      <li><strong>Rental Property:</strong> Property taxes on rental properties are fully deductible on Schedule E (not subject to SALT cap)</li>
    </ul>

    <h3>Future of the SALT Cap</h3>
    <p>The SALT cap is currently set to expire after 2025, unless Congress extends it. Proposed changes include:</p>
    <ul>
      <li>Increasing the cap to $20,000 or higher</li>
      <li>Eliminating the cap entirely</li>
      <li>Making the cap permanent</li>
      <li>Indexing the cap for inflation</li>
    </ul>

    <h3>Tax Planning Considerations</h3>
    <ul>
      <li><strong>Multiple Properties:</strong> Property taxes on all personal residences count toward the $10,000 cap</li>
      <li><strong>Married Filing Separately:</strong> Only $5,000 cap per spouse</li>
      <li><strong>Timing:</strong> Pay attention to when property taxes are paid vs. when they're due</li>
      <li><strong>Escrow Accounts:</strong> Only deduct when actually paid from escrow, not when deposited</li>
      <li><strong>Special Assessments:</strong> Local benefit assessments (streets, sidewalks) are generally not deductible</li>
    </ul>

    <h3>Record Keeping</h3>
    <ul>
      <li>Keep property tax bills and payment receipts</li>
      <li>Track state income tax withheld and estimated tax payments</li>
      <li>Document any business use of property for potential additional deductions</li>
      <li>Maintain records for audit purposes (IRS can go back 3-7 years)</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Total State Income Tax', isCurrency: true },
      { label: 'Total Property Tax', isCurrency: true },
      { label: 'Total SALT Taxes', isCurrency: true },
      { label: 'SALT Cap Limit', isCurrency: true },
      { label: 'Allowable SALT Deduction', isCurrency: true },
      { label: 'SALT Amount Lost to Cap', isCurrency: true },
      { label: 'Federal Tax Savings from SALT Deduction', isCurrency: true },
      { label: 'Tax Savings Lost Due to Cap', isCurrency: true },
    ],
    fields: [
      {
        name: 'stateIncomeTax',
        label: 'State & Local Income Tax Paid',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'primaryPropertyTax',
        label: 'Primary Residence Property Tax',
        type: 'number',
        defaultValue: 12000,
      },
      {
        name: 'secondPropertyTax',
        label: 'Second Home Property Tax (if any)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'otherPropertyTax',
        label: 'Other Property Taxes',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'filingStatus',
        label: 'Married Filing Jointly?',
        type: 'boolean',
        defaultValue: true,
      },
      {
        name: 'federalTaxRate',
        label: 'Federal Marginal Tax Rate (%)',
        type: 'number',
        defaultValue: 24,
      },
    ],
    calculate: (data) => {
      const { 
        stateIncomeTax,
        primaryPropertyTax,
        secondPropertyTax,
        otherPropertyTax,
        filingStatus,
        federalTaxRate
      } = data;

      const totalPropertyTax = primaryPropertyTax + secondPropertyTax + otherPropertyTax;
      const totalSALT = stateIncomeTax + totalPropertyTax;
      
      const saltCap = filingStatus ? 10000 : 5000;
      const allowableSALTDeduction = Math.min(totalSALT, saltCap);
      const saltLostToCap = Math.max(0, totalSALT - saltCap);
      
      const taxSavingsFromSALT = allowableSALTDeduction * (federalTaxRate / 100);
      const taxSavingsLost = saltLostToCap * (federalTaxRate / 100);

      return [
        { label: 'Total State Income Tax', value: stateIncomeTax, isCurrency: true },
        { label: 'Total Property Tax', value: totalPropertyTax, isCurrency: true },
        { label: 'Total SALT Taxes', value: totalSALT, isCurrency: true },
        { label: 'SALT Cap Limit', value: saltCap, isCurrency: true },
        { label: 'Allowable SALT Deduction', value: allowableSALTDeduction, isCurrency: true },
        { label: 'SALT Amount Lost to Cap', value: saltLostToCap, isCurrency: true },
        { label: 'Federal Tax Savings from SALT Deduction', value: taxSavingsFromSALT, isCurrency: true },
        { label: 'Tax Savings Lost Due to Cap', value: taxSavingsLost, isCurrency: true },
      ];
    },
  },
};
