import { CalculatorContent } from '@/types';

export const PROFIT_LOSS_STATEMENT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'P&L Statement Calculator (Self-Employed)',
  description: 'Create and analyze profit & loss statements for mortgage qualification. Calculate qualifying income, profit margins, and understand CPA letter requirements for P&L loans.',
  icon: 'TrendingUp',
  category: 'Self-Employed Loans',
  slug: 'profit-loss-statement-calculator',
  metaTitle: 'P&L Statement Calculator | Self-Employed Mortgage Income',
  metaDescription: 'Create and analyze profit & loss statements for mortgage qualification. Calculate net profit, monthly income, and understand CPA requirements for P&L loans.',
  article: {
    title: 'P&L Statement Calculator: How Profit & Loss Statements Work for Mortgage Qualification',
    content: `
    <h2>What is a P&L Loan?</h2>
    <p>A P&L (Profit and Loss) loan is a mortgage product designed for self-employed borrowers who may not have traditional income documentation like W-2s or recent tax returns. Instead of using tax returns, lenders analyze your profit and loss statement—a financial document showing your business's income, expenses, and profitability—to determine your qualifying income.</p>

    <p>P&L loans are particularly valuable for self-employed individuals who have recently started their business, experienced significant growth, or whose tax returns don't accurately reflect their current income situation.</p>

    <h3>When Are P&L Loans Used?</h3>
    <p>P&L loans are typically used in the following scenarios:</p>
    <ul>
      <li><strong>Recent Self-Employment:</strong> Less than 2 years of tax returns available</li>
      <li><strong>Significant Income Growth:</strong> Current income much higher than tax returns show</li>
      <li><strong>Tax Return Anomalies:</strong> One-time losses or unusual deductions on returns</li>
      <li><strong>Year-to-Date Qualification:</strong> Need to show current year income before filing taxes</li>
      <li><strong>Business Structure Changes:</strong> Recently changed from W-2 to self-employed</li>
      <li><strong>Seasonal Businesses:</strong> Income varies significantly by season</li>
    </ul>

    <h2>Understanding Profit & Loss Statements</h2>
    <p>A P&L statement (also called an income statement) summarizes your business's revenues, costs, and expenses over a specific period. Here's how it's structured:</p>

    <h3>P&L Statement Structure</h3>
    <table>
      <tr>
        <th>Line Item</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
      <tr>
        <td>Gross Revenue</td>
        <td>Total income before any expenses</td>
        <td>$250,000</td>
      </tr>
      <tr>
        <td>Cost of Goods Sold (COGS)</td>
        <td>Direct costs of producing goods/services</td>
        <td>($75,000)</td>
      </tr>
      <tr>
        <td>Gross Profit</td>
        <td>Revenue minus COGS</td>
        <td>$175,000</td>
      </tr>
      <tr>
        <td>Operating Expenses</td>
        <td>Rent, utilities, marketing, salaries</td>
        <td>($60,000)</td>
      </tr>
      <tr>
        <td>Depreciation</td>
        <td>Non-cash expense for asset wear</td>
        <td>($10,000)</td>
      </tr>
      <tr>
        <td>Interest Expense</td>
        <td>Loan and credit interest</td>
        <td>($5,000)</td>
      </tr>
      <tr>
        <td>Other Expenses</td>
        <td>Miscellaneous business costs</td>
        <td>($8,000)</td>
      </tr>
      <tr>
        <td>Net Profit</td>
        <td>Final profit after all expenses</td>
        <td>$92,000</td>
      </tr>
    </table>

    <h3>Key Profit Margins</h3>
    <p>Lenders analyze profit margins to assess your business's health:</p>
    <ul>
      <li><strong>Gross Profit Margin:</strong> (Gross Profit ÷ Revenue) × 100 — Shows production efficiency</li>
      <li><strong>Operating Profit Margin:</strong> (Operating Income ÷ Revenue) × 100 — Shows operational efficiency</li>
      <li><strong>Net Profit Margin:</strong> (Net Profit ÷ Revenue) × 100 — Shows overall profitability</li>
    </ul>

    <h2>How Lenders Calculate Income from P&L Statements</h2>

    <h3>Step 1: Verify the P&L Period</h3>
    <p>Lenders require P&L statements covering specific periods:</p>
    <ul>
      <li><strong>12-Month P&L:</strong> Full year of income data (preferred)</li>
      <li><strong>Year-to-Date (YTD):</strong> Current year through the most recent month</li>
      <li><strong>Trailing 12 Months:</strong> Last 12 months regardless of calendar year</li>
    </ul>

    <h3>Step 2: Calculate Net Profit</h3>
    <p>Starting with gross revenue, lenders subtract all legitimate business expenses:</p>
    <pre>
Net Profit = Gross Revenue - COGS - Operating Expenses - Depreciation - Interest - Other Expenses
    </pre>

    <h3>Step 3: Apply Add-Backs (If Applicable)</h3>
    <p>Similar to tax return analysis, some non-cash expenses may be added back:</p>
    <ul>
      <li><strong>Depreciation:</strong> Added back as it's a non-cash expense</li>
      <li><strong>Amortization:</strong> Added back for the same reason</li>
      <li><strong>One-Time Expenses:</strong> May be excluded if clearly non-recurring</li>
    </ul>

    <h3>Step 4: Calculate Monthly Qualifying Income</h3>
    <p>For year-to-date P&L statements, lenders annualize your income:</p>
    <pre>
Monthly Qualifying Income = (Net Profit + Add-Backs) ÷ Number of Months in P&L Period
Annual Projection = Monthly Qualifying Income × 12
    </pre>

    <h2>CPA Letter Requirements</h2>
    <p>Most P&L loans require a CPA letter (also called a comfort letter or accountant's letter) to verify the accuracy of your profit and loss statement. Here's what you need to know:</p>

    <h3>What the CPA Letter Must Include</h3>
    <ul>
      <li>CPA's name, license number, and contact information</li>
      <li>Statement that the P&L accurately reflects business income/expenses</li>
      <li>Confirmation of the period covered by the P&L</li>
      <li>CPA's signature and date</li>
      <li>Statement that the CPA reviewed supporting documents (bank statements, invoices, etc.)</li>
    </ul>

    <h3>Types of CPA Letters</h3>
    <table>
      <tr>
        <th>Type</th>
        <th>Level of Assurance</th>
        <th>Typically Accepted</th>
      </tr>
      <tr>
        <td>Compilation Letter</td>
        <td>Lowest - CPA presents information provided by client</td>
        <td>Some lenders</td>
      </tr>
      <tr>
        <td>Review Letter</td>
        <td>Medium - CPA performs analytical procedures</td>
        <td>Most lenders</td>
      </tr>
      <tr>
        <td>Audit Letter</td>
        <td>Highest - Full verification of financial statements</td>
        <td>All lenders</td>
      </tr>
    </table>

    <h3>CPA Letter Sample Language</h3>
    <p>A typical CPA letter might include:</p>
    <blockquote>
    "I have reviewed the Profit and Loss Statement for [Business Name] for the period of January 1, 2024 through October 31, 2024. Based on my review of the business records, bank statements, and supporting documentation, this P&L statement accurately represents the income and expenses of the business during this period. The business appears to be ongoing and operational as of this date."
    </blockquote>

    <h2>P&L Loan Requirements</h2>

    <h3>Standard Requirements</h3>
    <ul>
      <li><strong>Credit Score:</strong> Minimum 660-680 (higher scores get better rates)</li>
      <li><strong>Down Payment:</strong> 15-25% minimum</li>
      <li><strong>Self-Employment History:</strong> Typically 2 years in same business/industry</li>
      <li><strong>P&L Statement:</strong> 12-month or YTD with at least 6 months of data</li>
      <li><strong>CPA Letter:</strong> Required by most lenders</li>
      <li><strong>Bank Statements:</strong> 2-3 months to verify deposits match P&L</li>
      <li><strong>Business License:</strong> Proof of ongoing business operation</li>
    </ul>

    <h3>Documentation Typically Required</h3>
    <ul>
      <li>Year-to-date P&L statement prepared by CPA</li>
      <li>CPA letter verifying P&L accuracy</li>
      <li>2-12 months of business bank statements</li>
      <li>Business license or articles of incorporation</li>
      <li>Most recent 1-2 years of tax returns (if available)</li>
      <li>Proof of business ownership (at least 25%)</li>
    </ul>

    <h2>P&L Loan vs. Other Self-Employed Options</h2>
    <table>
      <tr>
        <th>Loan Type</th>
        <th>Income Verification</th>
        <th>Best For</th>
        <th>Rate Premium</th>
      </tr>
      <tr>
        <td>P&L Loan</td>
        <td>P&L statement + CPA letter</td>
        <td>Growing businesses, new self-employment</td>
        <td>0.5-1.5%</td>
      </tr>
      <tr>
        <td>Bank Statement Loan</td>
        <td>12-24 months bank statements</td>
        <td>Established businesses with consistent deposits</td>
        <td>0.5-2.0%</td>
      </tr>
      <tr>
        <td>Tax Return Loan</td>
        <td>2 years of tax returns</td>
        <td>Stable income with accurate tax returns</td>
        <td>0%</td>
      </tr>
      <tr>
        <td>Asset Depletion</td>
        <td>Liquid assets divided by loan term</td>
        <td>High net worth, low reported income</td>
        <td>0.25-1.0%</td>
      </tr>
    </table>

    <h2>Pros and Cons of P&L Loans</h2>

    <h3>Advantages</h3>
    <ul>
      <li><strong>Current Income Reflects Reality:</strong> Shows your income now, not 1-2 years ago</li>
      <li><strong>Faster Than Waiting for Tax Returns:</strong> No need to file before qualifying</li>
      <li><strong>Works for New Businesses:</strong> Less than 2 years of tax history acceptable</li>
      <li><strong>Accommodates Growth:</strong> Perfect for rapidly growing businesses</li>
      <li><strong>Less Documentation:</strong> Than full tax return verification in some cases</li>
    </ul>

    <h3>Disadvantages</h3>
    <ul>
      <li><strong>Higher Interest Rates:</strong> Typically 0.5-1.5% above conventional rates</li>
      <li><strong>CPA Costs:</strong> Must pay for CPA-prepared P&L and letter ($500-2,000)</li>
      <li><strong>Larger Down Payment:</strong> Often 15-25% required</li>
      <li><strong>Scrutiny of Expenses:</strong> Lenders may question certain deductions</li>
      <li><strong>Limited Lender Availability:</strong> Not all lenders offer P&L programs</li>
    </ul>

    <h2>How to Prepare a Strong P&L Statement</h2>

    <h3>Best Practices</h3>
    <ul>
      <li><strong>Use Accounting Software:</strong> QuickBooks, FreshBooks, or Xero for accuracy</li>
      <li><strong>Categorize Expenses Properly:</strong> Match IRS categories when possible</li>
      <li><strong>Maintain Supporting Documents:</strong> Invoices, receipts, contracts</li>
      <li><strong>Reconcile with Bank Statements:</strong> Revenue should match deposits</li>
      <li><strong>Separate Personal and Business:</strong> Use dedicated business accounts</li>
      <li><strong>Update Monthly:</strong> Keep P&L current for faster mortgage processing</li>
    </ul>

    <h3>Common P&L Mistakes to Avoid</h3>
    <ul>
      <li>Mixing personal and business expenses</li>
      <li>Inconsistent categorization of expenses</li>
      <li>Missing major expense categories</li>
      <li>Revenue that doesn't match bank deposits</li>
      <li>Unrealistic profit margins for your industry</li>
      <li>P&L not signed or dated by CPA</li>
    </ul>

    <h2>Industry Benchmark Profit Margins</h2>
    <p>Lenders compare your profit margins to industry standards. If your margins are unusually high or low, expect additional questions:</p>
    <table>
      <tr>
        <th>Industry</th>
        <th>Typical Net Profit Margin</th>
      </tr>
      <tr>
        <td>Professional Services (Consulting, Legal)</td>
        <td>15-30%</td>
      </tr>
      <tr>
        <td>Real Estate Services</td>
        <td>10-20%</td>
      </tr>
      <tr>
        <td>Healthcare/Medical Practices</td>
        <td>10-20%</td>
      </tr>
      <tr>
        <td>Construction/Contractors</td>
        <td>5-15%</td>
      </tr>
      <tr>
        <td>Retail</td>
        <td>2-10%</td>
      </tr>
      <tr>
        <td>Restaurants/Food Service</td>
        <td>3-9%</td>
      </tr>
      <tr>
        <td>E-commerce</td>
        <td>5-15%</td>
      </tr>
    </table>

    <h2>How to Use This Calculator</h2>
    <p>Enter your business financial information to generate a P&L analysis for mortgage qualification. The calculator will show:</p>
    <ul>
      <li>Gross profit and gross profit margin</li>
      <li>Net profit and net profit margin</li>
      <li>Monthly qualifying income</li>
      <li>Annual income projection (for YTD statements)</li>
      <li>Comparison to industry benchmarks</li>
      <li>CPA letter requirements checklist</li>
      <li>Documentation needed for your application</li>
    </ul>
    `,
  },
  calculator: {
    fields: [
      {
        name: 'grossRevenue',
        label: 'Gross Revenue ($)',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'costOfGoodsSold',
        label: 'Cost of Goods Sold (COGS) ($)',
        type: 'number',
        defaultValue: 75000,
      },
      {
        name: 'operatingExpenses',
        label: 'Operating Expenses ($)',
        type: 'number',
        defaultValue: 45000,
      },
      {
        name: 'depreciation',
        label: 'Depreciation ($)',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'interestExpense',
        label: 'Interest Expense ($)',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'otherExpenses',
        label: 'Other Expenses ($)',
        type: 'number',
        defaultValue: 8000,
      },
      {
        name: 'periodMonths',
        label: 'P&L Period (Months)',
        type: 'select',
        defaultValue: '12',
        options: [
          { value: '12', label: '12 Months (Full Year)' },
          { value: '11', label: '11 Months (YTD)' },
          { value: '10', label: '10 Months (YTD)' },
          { value: '9', label: '9 Months (YTD)' },
          { value: '8', label: '8 Months (YTD)' },
          { value: '7', label: '7 Months (YTD)' },
          { value: '6', label: '6 Months (YTD)' },
        ],
      },
    ],
    results: [
      { label: 'Gross Revenue', isCurrency: true },
      { label: 'Gross Profit', isCurrency: true },
      { label: 'Gross Profit Margin', isCurrency: false },
      { label: 'Total Expenses', isCurrency: true },
      { label: 'Net Profit (Before Add-Backs)', isCurrency: true },
      { label: 'Net Profit Margin', isCurrency: false },
      { label: 'Depreciation Add-Back', isCurrency: true },
      { label: 'Adjusted Net Income', isCurrency: true },
      { label: 'Monthly Qualifying Income', isCurrency: true },
      { label: 'Annual Income Projection', isCurrency: true },
      { label: 'P&L Period', isCurrency: false },
      { label: 'CPA Letter Required', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        grossRevenue,
        costOfGoodsSold,
        operatingExpenses,
        depreciation,
        interestExpense,
        otherExpenses,
        periodMonths,
      } = values;

      const months = parseInt(periodMonths, 10);

      const grossProfit = grossRevenue - costOfGoodsSold;
      const grossProfitMargin = ((grossProfit / grossRevenue) * 100).toFixed(1);

      const totalExpenses = costOfGoodsSold + operatingExpenses + depreciation + interestExpense + otherExpenses;
      const netProfit = grossRevenue - totalExpenses;
      const netProfitMargin = ((netProfit / grossRevenue) * 100).toFixed(1);

      const adjustedNetIncome = netProfit + depreciation;

      const monthlyQualifyingIncome = adjustedNetIncome / months;
      const annualProjection = monthlyQualifyingIncome * 12;

      const periodLabel = months === 12 ? '12 Months (Full Year)' : `${months} Months (Year-to-Date)`;

      return [
        { label: 'Gross Revenue', value: grossRevenue.toFixed(2), isCurrency: true },
        { label: 'Gross Profit', value: grossProfit.toFixed(2), isCurrency: true },
        { label: 'Gross Profit Margin', value: `${grossProfitMargin}%`, isCurrency: false },
        { label: 'Total Expenses', value: totalExpenses.toFixed(2), isCurrency: true },
        { label: 'Net Profit (Before Add-Backs)', value: netProfit.toFixed(2), isCurrency: true },
        { label: 'Net Profit Margin', value: `${netProfitMargin}%`, isCurrency: false },
        { label: 'Depreciation Add-Back', value: depreciation.toFixed(2), isCurrency: true },
        { label: 'Adjusted Net Income', value: adjustedNetIncome.toFixed(2), isCurrency: true },
        { label: 'Monthly Qualifying Income', value: monthlyQualifyingIncome.toFixed(2), isCurrency: true },
        { label: 'Annual Income Projection', value: annualProjection.toFixed(2), isCurrency: true },
        { label: 'P&L Period', value: periodLabel, isCurrency: false },
        { label: 'CPA Letter Required', value: 'Yes - Review or Compilation Letter', isCurrency: false },
      ];
    },
  },
};
