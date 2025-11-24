import { CalculatorContent } from '@/types';

export const POINTS_DEDUCTIBLE_AMORTIZATION_CONTENT: CalculatorContent = {
  title: 'Points (Deductible) Amortization',
  description: 'Calculate mortgage points deduction and amortization schedule with current year vs lifetime deduction analysis.',
  slug: 'points-deductible-amortization',
  icon: '💰',
  category: 'Tax Strategy & Entity Planning',
  article: {
    title: 'Understanding Mortgage Points Deductions and Amortization',
    content: `
    <h2>What Are Mortgage Points?</h2>
    <p>Mortgage points, also called discount points or loan origination points, are fees paid to the lender at closing to reduce your mortgage interest rate. Each point typically costs 1% of your loan amount. Understanding when points are immediately deductible versus when they must be amortized over the life of the loan is crucial for tax planning.</p>
    
    <h3>Types of Mortgage Points</h3>
    <ul>
      <li><strong>Discount Points:</strong> Paid to buy down your interest rate (typically 0.25% rate reduction per point)</li>
      <li><strong>Origination Points:</strong> Fees charged by lender for processing the loan</li>
      <li><strong>Both Are Treated Similarly:</strong> Tax treatment is generally the same for both types</li>
    </ul>

    <h3>When Points Are Immediately Deductible</h3>
    <p>You can deduct points in full in the year paid if ALL these conditions are met:</p>
    <ul>
      <li><strong>Primary Residence:</strong> Loan must be secured by your main home</li>
      <li><strong>Home Purchase:</strong> Points paid on a purchase loan (not refinance)</li>
      <li><strong>Established Practice:</strong> Charging points is an established business practice in your area</li>
      <li><strong>Not Excessive:</strong> Points don't exceed the amount generally charged locally</li>
      <li><strong>Cash Accounting Method:</strong> You use the cash method of accounting (most individuals do)</li>
      <li><strong>Not for Services:</strong> Points are solely for the use of money, not appraisals or inspections</li>
      <li><strong>Shown on Statement:</strong> Clearly shown as points on your Closing Disclosure or HUD-1</li>
      <li><strong>Funds Paid:</strong> You paid at least as much in cash as the points charged</li>
    </ul>

    <h3>When Points Must Be Amortized</h3>
    <p>Points must be deducted gradually over the loan term if:</p>
    <ul>
      <li><strong>Refinance Loan:</strong> Points paid on a refinance (even of your main home)</li>
      <li><strong>Investment Property:</strong> Loan on a rental or investment property</li>
      <li><strong>Second Home:</strong> Loan on a vacation home or second residence</li>
      <li><strong>Home Equity Loan:</strong> Points on a home equity loan or HELOC</li>
      <li><strong>Conditions Not Met:</strong> If you don't meet all requirements for immediate deduction</li>
    </ul>

    <h3>How Amortization Works</h3>
    <p>When amortizing points:</p>
    <ul>
      <li><strong>Even Distribution:</strong> Divide total points by number of months in the loan</li>
      <li><strong>Monthly Deduction:</strong> Deduct that amount each month over the loan term</li>
      <li><strong>Annual Deduction:</strong> Sum up 12 months of deductions for your tax return</li>
      <li><strong>Example:</strong> $3,000 in points ÷ 360 months (30 years) = $8.33/month or $100/year</li>
    </ul>

    <h3>Special Refinance Rules</h3>
    <p>Refinancing creates special situations:</p>
    <ul>
      <li><strong>Old Loan Points:</strong> Deduct all remaining unamortized points from the old loan when you refinance</li>
      <li><strong>New Loan Points:</strong> Must amortize new points over the new loan term</li>
      <li><strong>Partial Exception:</strong> If refinancing is used for home improvements, that portion of new points may be immediately deductible</li>
      <li><strong>Same Lender Exception:</strong> No special exception for refinancing with same lender</li>
    </ul>

    <h3>Paying Off Loan Early</h3>
    <p>If you pay off your mortgage early:</p>
    <ul>
      <li><strong>Deduct Remainder:</strong> You can deduct all remaining unamortized points in the year you pay off the loan</li>
      <li><strong>Selling Your Home:</strong> Deduct remaining points when you sell</li>
      <li><strong>Loan Payoff:</strong> Deduct remaining points when you satisfy the mortgage</li>
      <li><strong>Foreclosure:</strong> Deduct remaining points in year of foreclosure</li>
    </ul>

    <h3>How to Use the Points Amortization Calculator</h3>
    <p>This calculator helps you determine your annual points deduction. You will need to provide:</p>
    <ul>
      <li><strong>Points Paid:</strong> Total amount of points paid at closing</li>
      <li><strong>Loan Term:</strong> Length of the mortgage in years (15, 30, etc.)</li>
      <li><strong>Loan Type:</strong> Purchase or refinance of primary residence, or investment property</li>
      <li><strong>Months Held:</strong> How many months you held the loan this year</li>
    </ul>

    <h3>Primary Residence Purchase - Immediate Deduction</h3>
    <p>Best-case scenario for points deduction:</p>
    <ul>
      <li><strong>Full Deduction Year One:</strong> All points deductible in year of purchase</li>
      <li><strong>Example:</strong> Pay $5,000 in points, deduct full $5,000 on that year's tax return</li>
      <li><strong>Requires Itemizing:</strong> Must itemize deductions (not take standard deduction)</li>
      <li><strong>Schedule A:</strong> Reported as mortgage interest on Schedule A</li>
    </ul>

    <h3>Refinance - Amortization Required</h3>
    <p>Most common amortization scenario:</p>
    <ul>
      <li><strong>30-Year Loan:</strong> $3,000 in points ÷ 360 months = $8.33/month</li>
      <li><strong>First Year:</strong> Depends on months held (e.g., 9 months × $8.33 = $75)</li>
      <li><strong>Full Years:</strong> $8.33 × 12 = $100 annual deduction</li>
      <li><strong>Long-Term Benefit:</strong> Spread over entire loan life</li>
    </ul>

    <h3>Investment Property - Always Amortize</h3>
    <ul>
      <li><strong>Schedule E Deduction:</strong> Reported on Schedule E as rental expense</li>
      <li><strong>No Special Rules:</strong> Must always amortize regardless of purchase vs refinance</li>
      <li><strong>Unlimited Deduction:</strong> Not subject to itemized deduction limitations</li>
      <li><strong>Better Cash Flow:</strong> Smaller annual deduction but against rental income</li>
    </ul>

    <h3>Record Keeping and Documentation</h3>
    <ul>
      <li><strong>Closing Disclosure:</strong> Save your settlement statement showing points paid</li>
      <li><strong>Amortization Schedule:</strong> Create and maintain schedule tracking annual deductions</li>
      <li><strong>Refinance Records:</strong> Track old loan payoff to claim remaining points</li>
      <li><strong>Form 1098:</strong> Lender may include points in Box 2, but verify accuracy</li>
    </ul>

    <h3>Common Scenarios and Examples</h3>
    <p><strong>Scenario 1 - Primary Home Purchase:</strong></p>
    <ul>
      <li>$400,000 loan, 2 points ($8,000 paid)</li>
      <li>All requirements met: Deduct full $8,000 in year of purchase</li>
      <li>Tax savings at 24% bracket: $8,000 × 0.24 = $1,920</li>
    </ul>

    <p><strong>Scenario 2 - Refinance of Primary Home:</strong></p>
    <ul>
      <li>$350,000 loan, 30 years, 1.5 points ($5,250 paid)</li>
      <li>Must amortize: $5,250 ÷ 360 months = $14.58/month</li>
      <li>Annual deduction: $14.58 × 12 = $175</li>
      <li>If you refinance again in year 5, deduct remaining $4,375</li>
    </ul>

    <p><strong>Scenario 3 - Investment Property:</strong></p>
    <ul>
      <li>$500,000 rental property loan, 1 point ($5,000)</li>
      <li>Must amortize: $5,000 ÷ 360 months = $13.89/month</li>
      <li>Annual deduction against rental income: $167</li>
    </ul>

    <h3>Important Considerations</h3>
    <p><strong>Note:</strong> This calculator provides estimates for tax planning purposes. Points deduction rules are technical and depend on multiple factors. Even when immediately deductible, points only provide a tax benefit if you itemize deductions, which requires your itemized deductions to exceed the standard deduction ($13,850 for single, $27,700 for married filing jointly in 2023). Under current law (TCJA 2018-2025), fewer taxpayers itemize, making amortized deductions potentially more valuable in some cases. Always review your specific situation with a qualified tax professional or CPA. IRS Publication 936 provides detailed guidance on mortgage point deductions.</p>

    <h3>Additional Resources</h3>
    <p>Maximize your mortgage tax benefits with our <strong>Mortgage Interest Deduction Calculator</strong>, <strong>Closing Costs Deduction Calculator</strong>, and <strong>Refinance Analysis Calculator</strong>.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'pointsPaid',
        label: 'Total Points Paid',
        type: 'number',
        defaultValue: 4000,
      },
      {
        name: 'loanTermYears',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'monthsHeld',
        label: 'Months Held This Year',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'isPrimaryPurchase',
        label: 'Primary Residence Purchase? (1=Yes, 0=No)',
        type: 'number',
        defaultValue: 0,
      },
    ],
    results: [
      { label: 'Monthly Amortization Amount', isCurrency: true },
      { label: 'Annual Amortized Deduction', isCurrency: true },
      { label: 'Current Year Deduction', isCurrency: true },
      { label: 'Remaining Balance to Amortize', isCurrency: true },
    ],
    calculate: (values) => {
      const { pointsPaid, loanTermYears, monthsHeld, isPrimaryPurchase } = values;
      
      const totalMonths = loanTermYears * 12;
      const monthlyAmortization = pointsPaid / totalMonths;
      const annualAmortization = monthlyAmortization * 12;
      
      let currentYearDeduction;
      if (isPrimaryPurchase === 1) {
        currentYearDeduction = pointsPaid;
      } else {
        currentYearDeduction = monthlyAmortization * monthsHeld;
      }
      
      const remainingBalance = isPrimaryPurchase === 1 ? 0 : pointsPaid - currentYearDeduction;

      return [
        { label: 'Monthly Amortization Amount', value: monthlyAmortization.toFixed(2), isCurrency: true },
        { label: 'Annual Amortized Deduction', value: annualAmortization.toFixed(2), isCurrency: true },
        { label: 'Current Year Deduction', value: currentYearDeduction.toFixed(2), isCurrency: true },
        { label: 'Remaining Balance to Amortize', value: remainingBalance.toFixed(2), isCurrency: true },
      ];
    },
  },
};