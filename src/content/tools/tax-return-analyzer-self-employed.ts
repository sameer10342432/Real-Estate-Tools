import { CalculatorContent } from '@/types';

export const TAX_RETURN_ANALYZER_SELF_EMPLOYED_CONTENT: CalculatorContent = {
  title: 'Tax Return Analyzer (Self-Employed)',
  description: 'Analyze self-employed tax returns for mortgage qualification. Calculate add-backs, 2-year average income, and determine your true qualifying income for home loans.',
  icon: 'FileText',
  category: 'Self-Employed Loans',
  slug: 'tax-return-analyzer-self-employed',
  metaTitle: 'Self-Employed Tax Return Analyzer | Mortgage Qualification',
  metaDescription: 'Analyze self-employed tax returns for mortgage qualification. Calculate add-backs, depreciation, 2-year income average, and determine your true qualifying income.',
  article: {
    title: 'Self-Employed Tax Return Analyzer: How Lenders Calculate Your Qualifying Income',
    content: `
    <h2>Understanding Self-Employed Tax Return Analysis for Mortgages</h2>
    <p>When you're self-employed and applying for a mortgage, lenders don't simply look at your gross income or what you deposited into your bank account. Instead, they perform a detailed analysis of your tax returns to calculate your "qualifying income" - the income they use to determine how much you can borrow. This process involves understanding your business structure, identifying allowable add-backs, and calculating a two-year average.</p>

    <p>This comprehensive guide explains exactly how mortgage underwriters analyze self-employed tax returns, what add-backs you may qualify for, and how different business structures affect your mortgage qualification.</p>

    <h3>Why Self-Employed Tax Return Analysis Matters</h3>
    <p>Self-employed borrowers face a unique challenge: the tax strategies that save you money with the IRS can hurt you when applying for a mortgage. When you write off business expenses like depreciation, home office deductions, and vehicle mileage, you're reducing your taxable income. While this lowers your tax bill, it also reduces the income a lender sees on your tax returns.</p>

    <p><strong>Example of the Problem:</strong></p>
    <ul>
      <li><strong>Gross Business Revenue:</strong> $300,000</li>
      <li><strong>Business Expenses (tax deductions):</strong> $120,000</li>
      <li><strong>Taxable Net Profit:</strong> $180,000</li>
      <li><strong>Non-Cash Deductions (depreciation, etc.):</strong> $25,000</li>
      <li><strong>Actual Cash Available:</strong> $205,000</li>
    </ul>
    <p>Without proper add-backs, you'd qualify based on $180,000. With add-backs, you may qualify based on $205,000 or more, significantly increasing your purchasing power.</p>

    <h2>How Lenders Analyze Self-Employed Tax Returns</h2>
    <p>Mortgage underwriters follow specific guidelines (Fannie Mae, Freddie Mac, FHA, VA) when analyzing self-employed income. Here's the step-by-step process:</p>

    <h3>Step 1: Determine Business Structure</h3>
    <p>Your business structure determines which tax forms lenders review:</p>
    <table>
      <tr>
        <th>Business Type</th>
        <th>Tax Forms Reviewed</th>
        <th>Key Considerations</th>
      </tr>
      <tr>
        <td>Sole Proprietor</td>
        <td>Form 1040, Schedule C</td>
        <td>Net profit + add-backs = qualifying income</td>
      </tr>
      <tr>
        <td>Single-Member LLC</td>
        <td>Form 1040, Schedule C</td>
        <td>Treated same as sole proprietor</td>
      </tr>
      <tr>
        <td>Partnership (Multi-Member LLC)</td>
        <td>Form 1065, Schedule K-1</td>
        <td>Your share of partnership income + add-backs</td>
      </tr>
      <tr>
        <td>S-Corporation</td>
        <td>Form 1120-S, Schedule K-1, W-2</td>
        <td>W-2 salary + K-1 distributions + add-backs</td>
      </tr>
      <tr>
        <td>C-Corporation</td>
        <td>Form 1120, W-2</td>
        <td>Only W-2 salary counts (unless 100% owner)</td>
      </tr>
    </table>

    <h3>Step 2: Calculate Net Business Income</h3>
    <p>Lenders start with your net profit (or loss) from your business tax return:</p>
    <ul>
      <li><strong>Schedule C (Sole Prop):</strong> Line 31 - Net Profit or Loss</li>
      <li><strong>Form 1065 (Partnership):</strong> K-1, Box 1 - Ordinary Business Income</li>
      <li><strong>Form 1120-S (S-Corp):</strong> K-1, Box 1 + W-2 wages from the S-Corp</li>
    </ul>

    <h3>Step 3: Apply Allowable Add-Backs</h3>
    <p>Add-backs are non-cash expenses that reduced your taxable income but didn't actually reduce your cash flow. Lenders add these back to your net income to calculate your true qualifying income.</p>

    <h2>Common Add-Backs for Self-Employed Borrowers</h2>

    <h3>Depreciation (Most Common Add-Back)</h3>
    <p>Depreciation is a non-cash expense that accounts for the wear and tear on business assets. Since you don't actually spend this money, lenders add it back to your income.</p>
    <ul>
      <li><strong>Vehicle Depreciation:</strong> Found on Form 4562</li>
      <li><strong>Equipment Depreciation:</strong> Computers, machinery, tools</li>
      <li><strong>Building Depreciation:</strong> If you own commercial property</li>
      <li><strong>Bonus Depreciation:</strong> Section 179 deductions are also added back</li>
    </ul>
    <p><strong>Example:</strong> If you claimed $15,000 in depreciation on your Schedule C, lenders add $15,000 back to your net profit.</p>

    <h3>Home Office Deduction</h3>
    <p>The home office deduction reduces your taxable income but represents expenses you'd pay regardless (mortgage interest, utilities, etc.). Lenders typically add this back.</p>
    <ul>
      <li><strong>Simplified Method:</strong> $5/sq ft × business square footage (max $1,500)</li>
      <li><strong>Regular Method:</strong> Actual expenses × business use percentage</li>
    </ul>
    <p><strong>Note:</strong> Some lenders only add back a portion if you're also claiming mortgage interest on your personal return.</p>

    <h3>Mileage Deduction (Business Use of Vehicle)</h3>
    <p>If you use the standard mileage rate instead of actual expenses, lenders may add back a portion of your vehicle deduction. The IRS standard mileage rate includes depreciation (currently about 28 cents of the 67 cents/mile rate is depreciation).</p>
    <ul>
      <li><strong>Depreciation portion of mileage:</strong> Approximately 26-28 cents per mile</li>
      <li><strong>Example:</strong> 20,000 business miles × $0.28 = $5,600 add-back</li>
    </ul>

    <h3>Depletion (Oil, Gas, Mining)</h3>
    <p>If you're in natural resource industries, depletion is a non-cash expense similar to depreciation that lenders add back.</p>

    <h3>Amortization</h3>
    <p>Amortization of intangible assets (patents, goodwill, startup costs) is a non-cash expense that gets added back.</p>

    <h3>One-Time Expenses (Casualty Loss, Theft)</h3>
    <p>Unusual, non-recurring losses may be added back if they're truly one-time events and you can document them.</p>

    <h2>The Two-Year Average Requirement</h2>
    <p>Most mortgage programs require a two-year history of self-employment income. Lenders calculate your qualifying income as follows:</p>

    <h3>Standard Two-Year Average Calculation</h3>
    <ol>
      <li>Calculate Year 1 adjusted income (net profit + add-backs)</li>
      <li>Calculate Year 2 adjusted income (net profit + add-backs)</li>
      <li>Add both years together</li>
      <li>Divide by 24 months = monthly qualifying income</li>
    </ol>

    <p><strong>Example:</strong></p>
    <ul>
      <li><strong>Year 1 Adjusted Income:</strong> $95,000</li>
      <li><strong>Year 2 Adjusted Income:</strong> $105,000</li>
      <li><strong>Total:</strong> $200,000</li>
      <li><strong>Monthly Qualifying Income:</strong> $200,000 ÷ 24 = $8,333</li>
    </ul>

    <h3>Declining Income Calculation</h3>
    <p>If your income is declining (Year 2 lower than Year 1), lenders use the lower of:</p>
    <ul>
      <li>Two-year average, OR</li>
      <li>Most recent year's income</li>
    </ul>
    <p>This protects the lender from a borrower whose income is trending downward.</p>

    <p><strong>Example of Declining Income:</strong></p>
    <ul>
      <li><strong>Year 1 Adjusted Income:</strong> $120,000</li>
      <li><strong>Year 2 Adjusted Income:</strong> $90,000</li>
      <li><strong>Two-Year Average:</strong> $105,000</li>
      <li><strong>Used for Qualification:</strong> $90,000 (lower of the two)</li>
    </ul>

    <h3>Less Than Two Years Self-Employed</h3>
    <p>If you've been self-employed for less than two years but have a strong history in the same field, some lenders may still qualify you:</p>
    <ul>
      <li><strong>12-23 Months:</strong> May use one year of returns + strong documentation</li>
      <li><strong>Prior W-2 History:</strong> Same industry background helps</li>
      <li><strong>Education/Licensing:</strong> Professional credentials (CPA, attorney, doctor) strengthen your case</li>
    </ul>

    <h2>Business Type-Specific Analysis</h2>

    <h3>Sole Proprietor / Single-Member LLC (Schedule C)</h3>
    <p>The most straightforward analysis:</p>
    <ol>
      <li>Start with Schedule C, Line 31 (Net Profit)</li>
      <li>Add back depreciation (from Form 4562)</li>
      <li>Add back home office deduction (Line 30)</li>
      <li>Add back mileage depreciation portion</li>
      <li>Subtract any business use of home mortgage interest already counted on Schedule A</li>
    </ol>

    <h3>S-Corporation (Form 1120-S)</h3>
    <p>S-Corp analysis is more complex because income flows through multiple forms:</p>
    <ol>
      <li>W-2 wages from the S-Corp (this is your salary)</li>
      <li>Plus: K-1 Box 1 (Ordinary Business Income - your share of profits)</li>
      <li>Plus: Schedule E depreciation add-back</li>
      <li>Minus: Any distributions in excess of income (lenders watch for this)</li>
    </ol>
    <p><strong>Important:</strong> Lenders verify you own at least 25% of the S-Corp to use business income.</p>

    <h3>Partnership / Multi-Member LLC (Form 1065)</h3>
    <p>Partnership income is reported on Schedule K-1:</p>
    <ol>
      <li>K-1 Box 1 (Ordinary Business Income - your ownership share)</li>
      <li>Plus: Your share of depreciation (K-1 or Form 4562)</li>
      <li>Plus: Guaranteed payments (K-1 Box 4)</li>
      <li>Consider: Entity-level deductions that pass through</li>
    </ol>

    <h2>Documentation Lenders Require</h2>
    <p>Be prepared to provide:</p>
    <ul>
      <li><strong>Personal Tax Returns:</strong> Last 2 years (all pages, schedules, W-2s)</li>
      <li><strong>Business Tax Returns:</strong> Last 2 years (1120, 1120-S, or 1065 if applicable)</li>
      <li><strong>K-1 Forms:</strong> If you have partnership or S-Corp income</li>
      <li><strong>Year-to-Date P&L Statement:</strong> If applying mid-year</li>
      <li><strong>Business License:</strong> Proof of ongoing business operation</li>
      <li><strong>CPA Letter:</strong> Some lenders require a letter confirming business status</li>
      <li><strong>Bank Statements:</strong> 2-3 months of business and personal accounts</li>
    </ul>

    <h2>Common Red Flags Lenders Watch For</h2>
    <ul>
      <li><strong>Declining Income:</strong> More than 20% drop year-over-year raises questions</li>
      <li><strong>Negative Business Income:</strong> Losses may need to be subtracted from other income</li>
      <li><strong>Excessive Add-Backs:</strong> If add-backs exceed net profit, lenders get skeptical</li>
      <li><strong>Inconsistent Revenue:</strong> Large unexplained fluctuations</li>
      <li><strong>New Business:</strong> Less than 2 years of history</li>
      <li><strong>Industry Changes:</strong> Switching from W-2 to self-employed in different field</li>
    </ul>

    <h2>DTI Capacity Calculation</h2>
    <p>Once qualifying income is determined, lenders calculate your Debt-to-Income (DTI) ratio:</p>
    <ul>
      <li><strong>Front-End DTI:</strong> Housing costs ÷ Gross monthly income (typically max 28-31%)</li>
      <li><strong>Back-End DTI:</strong> All debts + housing ÷ Gross monthly income (typically max 43-50%)</li>
    </ul>

    <h3>DTI Example</h3>
    <p><strong>Monthly Qualifying Income:</strong> $10,000</p>
    <ul>
      <li><strong>Max Housing Payment (28%):</strong> $2,800</li>
      <li><strong>Current Monthly Debts:</strong> $800</li>
      <li><strong>Max Total Debt (43%):</strong> $4,300</li>
      <li><strong>Available for Housing:</strong> $4,300 - $800 = $3,500</li>
    </ul>

    <h2>Strategies to Maximize Qualifying Income</h2>
    <ul>
      <li><strong>Plan 2 Years Ahead:</strong> Consider mortgage qualification when doing tax planning</li>
      <li><strong>Document Add-Backs Clearly:</strong> Keep depreciation schedules organized</li>
      <li><strong>Maintain Consistent Income:</strong> Avoid large year-over-year drops</li>
      <li><strong>Consider Amended Returns:</strong> If you over-deducted, you can amend (but this delays the mortgage process)</li>
      <li><strong>Work with a CPA:</strong> Who understands both tax optimization and mortgage qualification</li>
      <li><strong>Build Cash Reserves:</strong> Strong reserves can offset concerns about income</li>
    </ul>

    <h2>How to Use This Calculator</h2>
    <p>Enter your Schedule C information, depreciation, and other deductions to calculate your adjusted qualifying income. The calculator will show:</p>
    <ul>
      <li>Your net profit before add-backs</li>
      <li>Total allowable add-backs</li>
      <li>Adjusted qualifying income for each year</li>
      <li>Two-year average monthly income</li>
      <li>Estimated DTI capacity and maximum housing payment</li>
      <li>Documentation checklist for your application</li>
    </ul>
    `,
  },
  calculator: {
    fields: [
      {
        name: 'scheduleC_grossReceipts',
        label: 'Schedule C Gross Receipts (Line 1) ($)',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'scheduleC_netProfit',
        label: 'Schedule C Net Profit (Line 31) ($)',
        type: 'number',
        defaultValue: 80000,
      },
      {
        name: 'depreciation',
        label: 'Depreciation (Form 4562) ($)',
        type: 'number',
        defaultValue: 12000,
      },
      {
        name: 'mileageDeduction',
        label: 'Business Mileage Deduction ($)',
        type: 'number',
        defaultValue: 8000,
      },
      {
        name: 'homeOfficeDeduction',
        label: 'Home Office Deduction (Line 30) ($)',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'year1NetIncome',
        label: 'Year 1 (Prior Year) Net Profit ($)',
        type: 'number',
        defaultValue: 75000,
      },
      {
        name: 'year2NetIncome',
        label: 'Year 2 (Most Recent) Net Profit ($)',
        type: 'number',
        defaultValue: 80000,
      },
      {
        name: 'businessType',
        label: 'Business Type',
        type: 'select',
        defaultValue: 'sole_prop',
        options: [
          { value: 'sole_prop', label: 'Sole Proprietor / Single-Member LLC' },
          { value: 's_corp', label: 'S-Corporation' },
          { value: 'partnership', label: 'Partnership / Multi-Member LLC' },
        ],
      },
    ],
    results: [
      { label: 'Schedule C Net Profit', isCurrency: true },
      { label: 'Total Add-Backs', isCurrency: true },
      { label: 'Adjusted Qualifying Income (Current Year)', isCurrency: true },
      { label: 'Year 1 Adjusted Income', isCurrency: true },
      { label: 'Year 2 Adjusted Income', isCurrency: true },
      { label: 'Two-Year Average Annual Income', isCurrency: true },
      { label: 'Monthly Qualifying Income', isCurrency: true },
      { label: 'Max Housing Payment (28% Front-End DTI)', isCurrency: true },
      { label: 'Max Total Debt Payment (43% Back-End DTI)', isCurrency: true },
      { label: 'Income Trend', isCurrency: false },
      { label: 'Business Type', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        scheduleC_grossReceipts,
        scheduleC_netProfit,
        depreciation,
        mileageDeduction,
        homeOfficeDeduction,
        year1NetIncome,
        year2NetIncome,
        businessType,
      } = values;

      const mileageDepreciationPortion = mileageDeduction * 0.42;
      const totalAddBacks = depreciation + mileageDepreciationPortion + homeOfficeDeduction;
      const adjustedCurrentYear = scheduleC_netProfit + totalAddBacks;

      const year1Adjusted = year1NetIncome + totalAddBacks;
      const year2Adjusted = year2NetIncome + totalAddBacks;

      const isDecline = year2Adjusted < year1Adjusted;
      const twoYearTotal = year1Adjusted + year2Adjusted;
      const twoYearAverage = twoYearTotal / 2;

      const qualifyingAnnualIncome = isDecline ? Math.min(twoYearAverage, year2Adjusted) : twoYearAverage;
      const monthlyQualifyingIncome = qualifyingAnnualIncome / 12;

      const maxHousingPayment = monthlyQualifyingIncome * 0.28;
      const maxTotalDebtPayment = monthlyQualifyingIncome * 0.43;

      const incomeTrend = isDecline ? 'Declining (Lender may use lower year)' : 'Stable/Increasing';

      const businessTypeLabels: Record<string, string> = {
        sole_prop: 'Sole Proprietor / Single-Member LLC',
        s_corp: 'S-Corporation',
        partnership: 'Partnership / Multi-Member LLC',
      };

      return [
        { label: 'Schedule C Net Profit', value: scheduleC_netProfit.toFixed(2), isCurrency: true },
        { label: 'Total Add-Backs', value: totalAddBacks.toFixed(2), isCurrency: true },
        { label: 'Adjusted Qualifying Income (Current Year)', value: adjustedCurrentYear.toFixed(2), isCurrency: true },
        { label: 'Year 1 Adjusted Income', value: year1Adjusted.toFixed(2), isCurrency: true },
        { label: 'Year 2 Adjusted Income', value: year2Adjusted.toFixed(2), isCurrency: true },
        { label: 'Two-Year Average Annual Income', value: twoYearAverage.toFixed(2), isCurrency: true },
        { label: 'Monthly Qualifying Income', value: monthlyQualifyingIncome.toFixed(2), isCurrency: true },
        { label: 'Max Housing Payment (28% Front-End DTI)', value: maxHousingPayment.toFixed(2), isCurrency: true },
        { label: 'Max Total Debt Payment (43% Back-End DTI)', value: maxTotalDebtPayment.toFixed(2), isCurrency: true },
        { label: 'Income Trend', value: incomeTrend, isCurrency: false },
        { label: 'Business Type', value: businessTypeLabels[businessType] || businessType, isCurrency: false },
      ];
    },
  },
};
