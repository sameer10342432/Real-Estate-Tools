import { CalculatorContent } from '@/types';

export const CLOSING_COSTS_DEDUCTIBLE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Closing Costs (Deductible) Calculator',
  description: 'Calculate which closing costs are tax deductible vs capitalized including points, fees, and prepaid interest.',
  slug: 'closing-costs-deductible-calculator',
  icon: '📄',
  category: 'Tax Strategy & Entity Planning',
  article: {
    title: 'Tax Treatment of Real Estate Closing Costs',
    content: `
    <h2>Understanding Closing Costs Tax Deductions</h2>
    <p>When buying or refinancing property, you'll pay various closing costs and fees. Some of these costs are immediately tax deductible, others must be capitalized (added to your cost basis), and some must be amortized over the life of the loan. Understanding how to treat each type of closing cost can significantly impact your tax return and long-term tax planning.</p>
    
    <h3>Immediately Deductible Closing Costs</h3>
    <p>These costs can be deducted in the year paid:</p>
    <ul>
      <li><strong>Mortgage Interest:</strong> Interest portion of your first payment (if itemizing deductions)</li>
      <li><strong>Prepaid Interest:</strong> Per diem interest charged from closing to end of month</li>
      <li><strong>Mortgage Points:</strong> Loan origination points (if meeting specific requirements)</li>
      <li><strong>Property Taxes:</strong> Any property tax prepayments or prorated amounts</li>
      <li><strong>Mortgage Insurance:</strong> PMI or MIP payments (subject to income limitations)</li>
    </ul>

    <h3>Costs Added to Basis (Capitalized)</h3>
    <p>These costs increase your cost basis and reduce capital gains when you sell:</p>
    <ul>
      <li><strong>Title Insurance:</strong> Owner's title insurance policy</li>
      <li><strong>Legal Fees:</strong> Attorney fees for reviewing and preparing documents</li>
      <li><strong>Recording Fees:</strong> Government fees to record the deed and mortgage</li>
      <li><strong>Survey Costs:</strong> Property survey or boundary survey fees</li>
      <li><strong>Transfer Taxes:</strong> State and local transfer or stamp taxes</li>
      <li><strong>Owner's Title Insurance:</strong> Policy protecting your ownership</li>
      <li><strong>Settlement Fees:</strong> Fees paid to escrow or closing company</li>
    </ul>

    <h3>Costs That Must Be Amortized</h3>
    <p>These costs must be deducted over the life of the loan:</p>
    <ul>
      <li><strong>Refinance Points:</strong> Points paid on a refinance (amortized over loan term)</li>
      <li><strong>Loan Origination Fees:</strong> Fees charged by lender (for investment property)</li>
      <li><strong>Appraisal Fees:</strong> Cost of property appraisal for the loan</li>
      <li><strong>Credit Report:</strong> Cost of pulling credit for the mortgage</li>
      <li><strong>Lender's Attorney Fees:</strong> Legal fees charged by the lender</li>
    </ul>

    <h3>Non-Deductible Closing Costs</h3>
    <p>These costs provide no tax benefit:</p>
    <ul>
      <li><strong>Homeowner's Insurance:</strong> First year premium (unless it's rental property)</li>
      <li><strong>HOA Transfer Fees:</strong> Homeowners association fees</li>
      <li><strong>Home Warranty:</strong> Cost of home warranty policies</li>
      <li><strong>Inspection Fees:</strong> Home inspection, pest inspection, radon testing</li>
      <li><strong>Moving Costs:</strong> No longer deductible for most taxpayers (except military)</li>
    </ul>

    <h3>Special Rules for Mortgage Points</h3>
    <p>To deduct points in the year paid, you must meet ALL these requirements:</p>
    <ul>
      <li><strong>Secured by Main Home:</strong> Loan must be secured by your principal residence</li>
      <li><strong>Established Business Practice:</strong> Charging points must be common in your area</li>
      <li><strong>Not Excessive:</strong> Points can't exceed the amount generally charged</li>
      <li><strong>Cash Accounting:</strong> You must use cash accounting (most individuals do)</li>
      <li><strong>Not for Services:</strong> Points must be for the use of money, not for services</li>
      <li><strong>Clearly Shown:</strong> Amount must be clearly shown on settlement statement</li>
      <li><strong>Sufficient Funds:</strong> Cash brought to closing must equal or exceed points paid</li>
    </ul>

    <h3>Primary Residence vs Investment Property</h3>
    <p><strong>Primary Residence:</strong></p>
    <ul>
      <li>Mortgage interest and points are itemized deductions on Schedule A</li>
      <li>Limited by $750,000 mortgage cap (for loans after 12/15/2017)</li>
      <li>Property taxes limited to $10,000 SALT cap</li>
      <li>Only beneficial if you itemize (exceed standard deduction)</li>
    </ul>

    <p><strong>Investment/Rental Property:</strong></p>
    <ul>
      <li>Mortgage interest deducted on Schedule E (no limit)</li>
      <li>Property taxes fully deductible on Schedule E</li>
      <li>Points must be amortized over life of loan</li>
      <li>All rental-related costs are deductible against rental income</li>
    </ul>

    <h3>How to Use the Closing Costs Calculator</h3>
    <p>This calculator helps you categorize your closing costs and determine tax treatment. You will need to provide:</p>
    <ul>
      <li><strong>Property Type:</strong> Primary residence vs rental/investment property</li>
      <li><strong>Mortgage Points:</strong> Loan origination points or discount points paid</li>
      <li><strong>Prepaid Interest:</strong> Per diem interest from closing to month end</li>
      <li><strong>Property Taxes:</strong> Prorated or prepaid property taxes</li>
      <li><strong>Title & Legal:</strong> Title insurance, attorney fees, recording fees</li>
      <li><strong>Lender Fees:</strong> Appraisal, credit report, underwriting fees</li>
    </ul>

    <h3>Documentation and Record Keeping</h3>
    <ul>
      <li><strong>HUD-1 or Closing Disclosure:</strong> Save your detailed settlement statement</li>
      <li><strong>Categorize Costs:</strong> Identify which category each cost falls into</li>
      <li><strong>Track Basis:</strong> Maintain records of capitalized costs for when you sell</li>
      <li><strong>Amortization Schedule:</strong> Track remaining deduction for amortized costs</li>
      <li><strong>Refinance Impact:</strong> If you refinance, remaining amortized costs can be deducted</li>
    </ul>

    <h3>Refinancing Considerations</h3>
    <ul>
      <li><strong>Old Loan Points:</strong> Can deduct remaining unamortized points from old loan when refinancing</li>
      <li><strong>New Loan Points:</strong> Must amortize over the new loan term (not immediately deductible)</li>
      <li><strong>Cash-Out Refinance:</strong> Different rules apply for cash-out amounts</li>
      <li><strong>Home Equity Loans:</strong> Deductibility depends on how funds are used</li>
    </ul>

    <h3>Important Considerations</h3>
    <p><strong>Note:</strong> This calculator provides estimates for tax planning purposes. Closing cost deduction rules are complex and depend on multiple factors including property type, loan type, and how you use the property. The Tax Cuts and Jobs Act (TCJA) significantly changed deduction rules for 2018-2025, including the increased standard deduction which makes itemizing less beneficial for many taxpayers. State and local tax deduction limits may also impact your benefit. Always review your actual Closing Disclosure (or HUD-1) with a qualified tax professional or CPA to properly categorize and deduct your closing costs.</p>

    <h3>Additional Resources</h3>
    <p>Maximize your real estate tax benefits with our <strong>Mortgage Interest Deduction Calculator</strong>, <strong>Points Amortization Calculator</strong>, and <strong>Property Tax Deduction Calculator</strong>.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'mortgagePoints',
        label: 'Mortgage Points Paid',
        type: 'number',
        defaultValue: 3000,
      },
      {
        name: 'prepaidInterest',
        label: 'Prepaid Interest',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'propertyTaxes',
        label: 'Property Taxes (prepaid)',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'titleLegal',
        label: 'Title Insurance & Legal Fees',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'lenderFees',
        label: 'Lender Fees (appraisal, credit, etc.)',
        type: 'number',
        defaultValue: 1500,
      },
      {
        name: 'isPrimaryResidence',
        label: 'Primary Residence? (1=Yes, 0=No)',
        type: 'number',
        defaultValue: 1,
      },
    ],
    results: [
      { label: 'Immediately Deductible (Year 1)', isCurrency: true },
      { label: 'Added to Basis (Capitalized)', isCurrency: true },
      { label: 'Must Be Amortized', isCurrency: true },
      { label: 'Total Closing Costs', isCurrency: true },
    ],
    calculate: (values) => {
      const { mortgagePoints, prepaidInterest, propertyTaxes, titleLegal, lenderFees, isPrimaryResidence } = values;
      
      let immediatelyDeductible;
      let capitalized;
      let amortized;
      
      if (isPrimaryResidence === 1) {
        immediatelyDeductible = mortgagePoints + prepaidInterest + propertyTaxes;
        capitalized = titleLegal;
        amortized = lenderFees;
      } else {
        immediatelyDeductible = prepaidInterest + propertyTaxes;
        capitalized = titleLegal;
        amortized = mortgagePoints + lenderFees;
      }
      
      const totalClosingCosts = mortgagePoints + prepaidInterest + propertyTaxes + titleLegal + lenderFees;

      return [
        { label: 'Immediately Deductible (Year 1)', value: immediatelyDeductible.toFixed(2), isCurrency: true },
        { label: 'Added to Basis (Capitalized)', value: capitalized.toFixed(2), isCurrency: true },
        { label: 'Must Be Amortized', value: amortized.toFixed(2), isCurrency: true },
        { label: 'Total Closing Costs', value: totalClosingCosts.toFixed(2), isCurrency: true },
      ];
    },
  },
};