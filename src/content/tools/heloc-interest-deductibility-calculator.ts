import { CalculatorContent } from '@/types';

export const HELOC_INTEREST_DEDUCTIBILITY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'HELOC Interest Deduction Calculator | Home Equity Tax Rules 2025',
  description: 'Calculate HELOC and home equity loan interest deductibility. Determine if your home equity interest is tax deductible under current IRS rules.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'heloc-interest-deductibility-calculator',
  article: {
    title: "Understanding HELOC Interest Tax Deductibility",
    content: `
    <h2>Is HELOC Interest Still Tax Deductible?</h2>
    <p>The Tax Cuts and Jobs Act (2017) significantly changed the rules for deducting home equity loan and HELOC interest. The deductibility now depends entirely on how you use the borrowed funds, not on the type of loan.</p>
    
    <h3>New Rules for HELOC Interest Deduction (2018-2025)</h3>
    <p><strong>Key Change:</strong> Interest is only deductible if the loan is used to "buy, build, or substantially improve" the home that secures the loan.</p>
    
    <h4>Deductible Uses:</h4>
    <ul>
      <li><strong>Home Improvements:</strong> Renovating kitchen, adding room, new roof, major systems (HVAC, electrical)</li>
      <li><strong>Building an Addition:</strong> Adding square footage, finishing basement, building garage</li>
      <li><strong>Substantial Improvements:</strong> Upgrades that add value, prolong life, or adapt home to new use</li>
      <li><strong>Combined with Mortgage:</strong> HELOC + primary mortgage can't exceed $750,000 total debt limit</li>
    </ul>

    <h4>NON-Deductible Uses:</h4>
    <ul>
      <li>Paying off credit cards or other consumer debt</li>
      <li>Buying a car or boat</li>
      <li>Paying for college tuition</li>
      <li>Funding a business</li>
      <li>Investment property purchases (different rules apply)</li>
      <li>Vacation expenses</li>
      <li>Medical bills</li>
      <li>Refinancing non-deductible debt</li>
    </ul>

    <h3>What Qualifies as "Substantial Improvement"?</h3>
    <p>According to IRS guidelines, substantial improvements must:</p>
    <ul>
      <li><strong>Add Value:</strong> Increase the home's fair market value</li>
      <li><strong>Prolong Life:</strong> Extend the useful life of the property</li>
      <li><strong>Adapt to New Use:</strong> Adapt the home for a different use</li>
    </ul>

    <h4>Examples of Qualifying Improvements:</h4>
    <ul>
      <li>Kitchen or bathroom remodel (major)</li>
      <li>Adding a bedroom or bathroom</li>
      <li>Finishing a basement or attic</li>
      <li>New roof, siding, or windows</li>
      <li>Installing central air conditioning</li>
      <li>Building a deck, patio, or pool</li>
      <li>Major landscaping improvements</li>
      <li>Installing solar panels</li>
    </ul>

    <h4>Examples of NON-Qualifying Repairs:</h4>
    <ul>
      <li>Routine maintenance and repairs</li>
      <li>Painting (unless part of larger remodel)</li>
      <li>Fixing a broken appliance</li>
      <li>Replacing worn carpet with similar carpet</li>
      <li>Minor repairs that don't add value</li>
    </ul>

    <h3>HELOC Debt Limits</h3>
    <p>Even if used for qualifying home improvements, HELOC interest is only fully deductible if:</p>
    <ul>
      <li><strong>Combined Debt Limit:</strong> Primary mortgage + HELOC ≤ $750,000 ($375,000 if married filing separately)</li>
      <li><strong>Grandfathered Loans:</strong> If primary mortgage was taken before Dec 15, 2017, combined limit is $1,000,000</li>
      <li><strong>Excess Debt:</strong> Interest on debt above the limit must be prorated (only portion within limit is deductible)</li>
    </ul>

    <h3>Documentation Requirements</h3>
    <p><strong>Critical:</strong> You must be able to prove how HELOC funds were used. Maintain:</p>
    <ul>
      <li>Detailed receipts for all home improvement expenses</li>
      <li>Contractor invoices and contracts</li>
      <li>Before/after photos of improvements</li>
      <li>Bank statements showing HELOC funds going to contractors</li>
      <li>Building permits and inspection reports</li>
      <li>Separate accounting if HELOC funds used for multiple purposes</li>
    </ul>

    <h3>Tracing Rules for Mixed-Use HELOCs</h3>
    <p>If you use HELOC funds for both qualifying and non-qualifying purposes:</p>
    <ul>
      <li><strong>Allocation Required:</strong> Must trace and allocate interest to specific uses</li>
      <li><strong>Separate Accounts:</strong> Consider using separate accounts for deductible vs. non-deductible purposes</li>
      <li><strong>Pro-Rata Method:</strong> IRS may allow pro-rata allocation based on use percentage</li>
      <li><strong>Burden of Proof:</strong> Taxpayer must prove allocation is reasonable</li>
    </ul>

    <h3>State Tax Considerations</h3>
    <p>Some states did not conform to federal HELOC rules:</p>
    <ul>
      <li>Check your state's specific rules on HELOC interest deductibility</li>
      <li>Some states still allow deduction for any home-secured debt</li>
      <li>Other states follow federal rules exactly</li>
      <li>State deduction may provide benefit even if not federally deductible</li>
    </ul>

    <h3>Planning Strategies</h3>
    <ul>
      <li><strong>Document Everything:</strong> Keep meticulous records of how HELOC funds are used</li>
      <li><strong>Use for Qualifying Purposes:</strong> Prioritize home improvement uses to maintain deductibility</li>
      <li><strong>Separate Loans:</strong> Consider separate HELOC for home improvements vs. other uses</li>
      <li><strong>Pay Down Non-Deductible Debt First:</strong> Prioritize paying off non-deductible HELOC balance</li>
      <li><strong>Time Improvements:</strong> Bunch improvements in years when you'll itemize deductions</li>
      <li><strong>Consider Alternatives:</strong> For non-qualifying uses, compare HELOC rates to other financing options</li>
    </ul>

    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li>Assuming all HELOC interest is deductible (it's not anymore)</li>
      <li>Failing to maintain adequate documentation</li>
      <li>Mixing qualifying and non-qualifying uses without proper tracking</li>
      <li>Deducting interest on debt exceeding $750,000 combined limit</li>
      <li>Treating repairs/maintenance as substantial improvements</li>
    </ul>

    <h3>IRS Audits and HELOC Deductions</h3>
    <p>HELOC interest deductions are often scrutinized by IRS:</p>
    <ul>
      <li>Be prepared to provide detailed documentation</li>
      <li>Large deductions relative to income may trigger audit</li>
      <li>Keep all records for at least 7 years</li>
      <li>Consult tax professional for large HELOC deductions</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Total HELOC Balance', isCurrency: true },
      { label: 'Amount Used for Qualifying Improvements', isCurrency: true },
      { label: 'Amount Used for Non-Qualifying Purposes', isCurrency: true },
      { label: 'Total HELOC Interest Paid', isCurrency: true },
      { label: 'Interest on Qualifying Portion', isCurrency: true },
      { label: 'Interest on Non-Qualifying Portion', isCurrency: true },
      { label: 'Combined Mortgage + HELOC Debt', isCurrency: true },
      { label: 'Debt Limit for Deductibility', isCurrency: true },
      { label: 'Deductible HELOC Interest', isCurrency: true },
      { label: 'Non-Deductible Interest', isCurrency: true },
      { label: 'Federal Tax Savings', isCurrency: true },
    ],
    fields: [
      {
        name: 'helocBalance',
        label: 'Total HELOC Balance',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'qualifyingUse',
        label: 'Amount Used for Home Improvements',
        type: 'number',
        defaultValue: 75000,
      },
      {
        name: 'helocInterestPaid',
        label: 'Total HELOC Interest Paid (annual)',
        type: 'number',
        defaultValue: 6000,
      },
      {
        name: 'primaryMortgageBalance',
        label: 'Primary Mortgage Balance',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'isGrandfathered',
        label: 'Primary Mortgage Before Dec 15, 2017?',
        type: 'boolean',
        defaultValue: false,
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
        helocBalance,
        qualifyingUse,
        helocInterestPaid,
        primaryMortgageBalance,
        isGrandfathered,
        filingStatus,
        federalTaxRate
      } = data;

      const nonQualifyingUse = helocBalance - qualifyingUse;
      
      // Calculate interest allocation based on use
      const qualifyingRatio = qualifyingUse / helocBalance;
      const interestOnQualifying = helocInterestPaid * qualifyingRatio;
      const interestOnNonQualifying = helocInterestPaid * (1 - qualifyingRatio);
      
      // Determine debt limit
      const debtLimit = isGrandfathered 
        ? (filingStatus ? 1000000 : 500000)
        : (filingStatus ? 750000 : 375000);
      
      const combinedDebt = primaryMortgageBalance + qualifyingUse;
      
      // Calculate deductible interest based on debt limit
      let deductibleInterest;
      if (combinedDebt <= debtLimit) {
        deductibleInterest = interestOnQualifying;
      } else if (qualifyingUse > 0) {
        const deductibleDebt = Math.max(0, debtLimit - primaryMortgageBalance);
        const deductibleRatio = deductibleDebt / qualifyingUse;
        deductibleInterest = interestOnQualifying * deductibleRatio;
      } else {
        deductibleInterest = 0;
      }
      
      const nonDeductibleInterest = helocInterestPaid - deductibleInterest;
      const federalTaxSavings = deductibleInterest * (federalTaxRate / 100);

      return [
        { label: 'Total HELOC Balance', value: helocBalance, isCurrency: true },
        { label: 'Amount Used for Qualifying Improvements', value: qualifyingUse, isCurrency: true },
        { label: 'Amount Used for Non-Qualifying Purposes', value: nonQualifyingUse, isCurrency: true },
        { label: 'Total HELOC Interest Paid', value: helocInterestPaid, isCurrency: true },
        { label: 'Interest on Qualifying Portion', value: interestOnQualifying, isCurrency: true },
        { label: 'Interest on Non-Qualifying Portion', value: interestOnNonQualifying, isCurrency: true },
        { label: 'Combined Mortgage + HELOC Debt', value: combinedDebt, isCurrency: true },
        { label: 'Debt Limit for Deductibility', value: debtLimit, isCurrency: true },
        { label: 'Deductible HELOC Interest', value: deductibleInterest, isCurrency: true },
        { label: 'Non-Deductible Interest', value: nonDeductibleInterest, isCurrency: true },
        { label: 'Federal Tax Savings', value: federalTaxSavings, isCurrency: true },
      ];
    },
  },
};
