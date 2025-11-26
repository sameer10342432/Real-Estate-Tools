import { CalculatorContent } from '@/types';

export const VERIFICATION_OF_EMPLOYMENT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'VOE (Verification of Employment) Calculator',
  description: 'Calculate qualifying income for mortgage approval based on employment type. Determine income stability score, 2-year average income, and documentation requirements.',
  icon: 'Icon',
  category: 'Mortgage Qualification',
  slug: 'verification-of-employment-calculator',
  metaTitle: 'VOE Calculator | Verification of Employment Income',
  metaDescription: 'Calculate your qualifying mortgage income based on employment type. Get income stability score, documentation needs, and 2-year average calculations.',
  article: {
    title: "Verification of Employment (VOE) Calculator: Qualifying Income Guide",
    content: `
    <h2>What is Verification of Employment (VOE)?</h2>
    <p>Verification of Employment (VOE) is a critical step in the mortgage approval process where lenders confirm your employment status, income, and job stability. The VOE ensures that borrowers have the income necessary to repay their mortgage and that this income is likely to continue.</p>

    <p>Lenders use several methods to verify employment:</p>
    <ul>
      <li><strong>VOE Form:</strong> A standardized form sent directly to your employer</li>
      <li><strong>Pay Stubs:</strong> Your most recent 30 days of pay stubs</li>
      <li><strong>W-2 Forms:</strong> Your last two years of W-2 tax forms</li>
      <li><strong>Tax Returns:</strong> Required for self-employed, commission, or bonus income</li>
      <li><strong>Verbal VOE:</strong> A phone call to your employer shortly before closing</li>
    </ul>

    <h3>Why VOE Matters</h3>
    <p>Employment verification serves several important purposes:</p>
    <ul>
      <li><strong>Income Confirmation:</strong> Verifies your stated income matches actual earnings</li>
      <li><strong>Employment Status:</strong> Confirms you're currently employed</li>
      <li><strong>Job Stability:</strong> Evaluates likelihood of continued employment</li>
      <li><strong>Income Consistency:</strong> Determines if income is stable or variable</li>
      <li><strong>Position Details:</strong> Confirms job title and responsibilities</li>
    </ul>

    <h2>Employment Types and Income Calculation</h2>
    <p>How your income is calculated depends on your employment type:</p>

    <h3>W-2 Employees (Traditional Employment)</h3>
    <table>
      <tr>
        <th>Income Type</th>
        <th>How It's Calculated</th>
        <th>Documentation Needed</th>
      </tr>
      <tr>
        <td>Base Salary</td>
        <td>Full amount (annual/12)</td>
        <td>Pay stubs, W-2s</td>
      </tr>
      <tr>
        <td>Hourly Wages</td>
        <td>Hourly rate × regular hours × 52 / 12</td>
        <td>Pay stubs, W-2s, VOE form</td>
      </tr>
      <tr>
        <td>Overtime</td>
        <td>2-year average (if consistent)</td>
        <td>Pay stubs, W-2s, 2 years history</td>
      </tr>
      <tr>
        <td>Bonus</td>
        <td>2-year average (declining trend analyzed)</td>
        <td>W-2s, tax returns, employer letter</td>
      </tr>
      <tr>
        <td>Commission</td>
        <td>2-year average (requires 2+ years history)</td>
        <td>W-2s, tax returns, 2 years history</td>
      </tr>
    </table>

    <h3>Self-Employed Borrowers</h3>
    <p>Self-employed income calculation is more complex:</p>
    <ul>
      <li><strong>Minimum History:</strong> 2 years of self-employment in same business required</li>
      <li><strong>Income Calculation:</strong> Net profit from Schedule C, plus depreciation and certain deductions</li>
      <li><strong>Averaging:</strong> 2-year average income (declining income may use lower year only)</li>
      <li><strong>Documentation:</strong> 2 years tax returns, YTD P&L, business license</li>
    </ul>

    <table>
      <tr>
        <th>Business Type</th>
        <th>Tax Form Used</th>
        <th>Income Calculation</th>
      </tr>
      <tr>
        <td>Sole Proprietor</td>
        <td>Schedule C</td>
        <td>Net profit + depreciation + depletion</td>
      </tr>
      <tr>
        <td>Partnership</td>
        <td>K-1 (Form 1065)</td>
        <td>Ordinary income + guaranteed payments</td>
      </tr>
      <tr>
        <td>S-Corporation</td>
        <td>K-1 (Form 1120S)</td>
        <td>W-2 wages + distributions (with limitations)</td>
      </tr>
      <tr>
        <td>C-Corporation</td>
        <td>Form 1120</td>
        <td>W-2 wages only (unless 100% owner)</td>
      </tr>
    </table>

    <h3>1099 Independent Contractors</h3>
    <ul>
      <li><strong>Minimum History:</strong> 2 years of 1099 income from same source preferred</li>
      <li><strong>Income Calculation:</strong> Gross 1099 income minus business expenses</li>
      <li><strong>Documentation:</strong> 1099 forms, tax returns, bank statements</li>
      <li><strong>Alternative:</strong> Bank statement loans for those with significant write-offs</li>
    </ul>

    <h2>Income Stability and Continuity</h2>
    <p>Lenders evaluate not just how much you earn, but how stable and likely to continue your income is:</p>

    <h3>Income Stability Factors</h3>
    <table>
      <tr>
        <th>Factor</th>
        <th>Positive Indicators</th>
        <th>Negative Indicators</th>
      </tr>
      <tr>
        <td>Time at Current Job</td>
        <td>2+ years at same employer</td>
        <td>Less than 6 months at job</td>
      </tr>
      <tr>
        <td>Time in Industry</td>
        <td>5+ years in same field</td>
        <td>Recent career change</td>
      </tr>
      <tr>
        <td>Income Trend</td>
        <td>Stable or increasing income</td>
        <td>Declining income over 2 years</td>
      </tr>
      <tr>
        <td>Employment Gaps</td>
        <td>No gaps in employment</td>
        <td>Multiple unexplained gaps</td>
      </tr>
      <tr>
        <td>Job Type</td>
        <td>Permanent, full-time position</td>
        <td>Temporary or contract work</td>
      </tr>
    </table>

    <h3>Continuity Requirements</h3>
    <p>For income to count, lenders must believe it will continue:</p>
    <ul>
      <li><strong>3-Year Continuity Rule:</strong> Income must be likely to continue for at least 3 years</li>
      <li><strong>Declining Income:</strong> If income is declining, only the lower amount may be used</li>
      <li><strong>Temporary Income:</strong> Income scheduled to end (temp jobs, contracts) may not count</li>
      <li><strong>Retirement:</strong> If retiring soon, post-retirement income must qualify</li>
    </ul>

    <h2>Variable Income: Overtime, Bonus, and Commission</h2>
    <p>Variable income receives special treatment in mortgage underwriting:</p>

    <h3>Overtime Income</h3>
    <ul>
      <li><strong>Requirement:</strong> 2-year history of receiving overtime</li>
      <li><strong>Calculation:</strong> 2-year average of overtime earnings</li>
      <li><strong>Trend Analysis:</strong> Declining overtime may reduce qualifying amount</li>
      <li><strong>Employer Confirmation:</strong> Employer must confirm overtime is likely to continue</li>
    </ul>

    <h3>Bonus Income</h3>
    <ul>
      <li><strong>Requirement:</strong> 2-year history of receiving bonuses</li>
      <li><strong>Calculation:</strong> 2-year average of bonus income</li>
      <li><strong>Year-over-Year Change:</strong> If bonus declined >20%, may use lower year only</li>
      <li><strong>Employer Letter:</strong> May need employer confirmation of bonus structure</li>
    </ul>

    <h3>Commission Income</h3>
    <ul>
      <li><strong>Requirement:</strong> 2 years of commission income history</li>
      <li><strong>Calculation:</strong> 2-year average (tax returns required)</li>
      <li><strong>If Primary Income:</strong> May need to document as self-employed</li>
      <li><strong>Expense Deductions:</strong> Unreimbursed business expenses reduce qualifying income</li>
    </ul>

    <h2>Employment Gaps and Job Changes</h2>
    <p>Lenders carefully evaluate employment history for gaps and changes:</p>

    <h3>Explaining Employment Gaps</h3>
    <p>Common acceptable explanations for employment gaps:</p>
    <ul>
      <li><strong>Education:</strong> Returning to school for degree or certification</li>
      <li><strong>Medical:</strong> Personal or family medical issues (no details required)</li>
      <li><strong>Maternity/Paternity:</strong> Leave for childbirth or adoption</li>
      <li><strong>Relocation:</strong> Moving to a new geographic area</li>
      <li><strong>Severance Period:</strong> Using severance while job searching</li>
      <li><strong>Seasonal Work:</strong> Documented seasonal employment pattern</li>
    </ul>

    <h3>Recent Job Changes</h3>
    <table>
      <tr>
        <th>Scenario</th>
        <th>Impact on Approval</th>
        <th>What Lenders Need</th>
      </tr>
      <tr>
        <td>Same Industry, Higher Pay</td>
        <td>Generally acceptable</td>
        <td>Offer letter, first pay stub</td>
      </tr>
      <tr>
        <td>Same Industry, Similar Pay</td>
        <td>Acceptable</td>
        <td>Employment verification</td>
      </tr>
      <tr>
        <td>Career Change, Higher Pay</td>
        <td>May need explanation</td>
        <td>Letter explaining qualifications</td>
      </tr>
      <tr>
        <td>New Job, Still in Training</td>
        <td>May require waiting period</td>
        <td>Training completion confirmation</td>
      </tr>
      <tr>
        <td>Probationary Period</td>
        <td>Usually acceptable</td>
        <td>Employer confirmation of start date</td>
      </tr>
    </table>

    <h2>Two-Year Income Averaging</h2>
    <p>Variable income is typically calculated using a 2-year average:</p>

    <h3>Standard 2-Year Average Calculation</h3>
    <p><strong>Formula:</strong> (Year 1 Income + Year 2 Income) / 24 months = Monthly Qualifying Income</p>

    <p><strong>Example:</strong></p>
    <ul>
      <li>Year 1 Bonus Income: $15,000</li>
      <li>Year 2 Bonus Income: $18,000</li>
      <li>2-Year Total: $33,000</li>
      <li>Monthly Qualifying Income: $33,000 / 24 = $1,375/month</li>
    </ul>

    <h3>Declining Income Adjustment</h3>
    <p>If Year 2 income is more than 20% lower than Year 1:</p>
    <ul>
      <li>Lender may use only Year 2 (lower) income</li>
      <li>May require explanation for decline</li>
      <li>Trend must show stabilization, not continued decline</li>
    </ul>

    <p><strong>Example:</strong></p>
    <ul>
      <li>Year 1 Commission: $80,000</li>
      <li>Year 2 Commission: $55,000 (31% decline)</li>
      <li>Qualifying Income: $55,000 / 12 = $4,583/month (using lower year only)</li>
    </ul>

    <h2>Documentation Requirements by Employment Type</h2>
    <p>Here's what you'll need to provide based on your employment situation:</p>

    <h3>W-2 Employee Documentation</h3>
    <ul>
      <li>☐ Most recent 30 days of pay stubs</li>
      <li>☐ W-2 forms for past 2 years</li>
      <li>☐ Employer contact information for VOE</li>
      <li>☐ Offer letter (if recently hired)</li>
      <li>☐ Bonus/commission documentation (if applicable)</li>
    </ul>

    <h3>Self-Employed Documentation</h3>
    <ul>
      <li>☐ Personal tax returns (2 years) - all schedules</li>
      <li>☐ Business tax returns (2 years) - if applicable</li>
      <li>☐ Year-to-date profit and loss statement</li>
      <li>☐ Business license or registration</li>
      <li>☐ CPA letter (may be required)</li>
      <li>☐ 2-3 months business bank statements</li>
    </ul>

    <h3>1099 Contractor Documentation</h3>
    <ul>
      <li>☐ 1099 forms for past 2 years</li>
      <li>☐ Personal tax returns (2 years) with Schedule C</li>
      <li>☐ Current contracts or client agreements</li>
      <li>☐ Bank statements (12-24 months for bank statement loans)</li>
    </ul>

    <h2>Common VOE Issues and Solutions</h2>

    <h3>Issue 1: Employment Gap</h3>
    <p><strong>Problem:</strong> 6-month gap in employment 18 months ago.</p>
    <p><strong>Solution:</strong> Write a letter of explanation describing the reason (layoff, medical, education) and what you did during that time. Show stable employment since returning to work.</p>

    <h3>Issue 2: Recent Job Change</h3>
    <p><strong>Problem:</strong> Started new job 3 weeks before mortgage application.</p>
    <p><strong>Solution:</strong> Provide offer letter showing salary, start date, and job title. If in the same industry with similar or higher pay, usually acceptable. May need to provide first pay stub before closing.</p>

    <h3>Issue 3: Commission Income Without 2-Year History</h3>
    <p><strong>Problem:</strong> Only 18 months of commission income history.</p>
    <p><strong>Solution:</strong> Commission income may not be usable. Qualify based on base salary only, or wait until you have 2 years of commission history. Some lenders accept 12-23 months if you have prior industry experience.</p>

    <h3>Issue 4: Declining Self-Employment Income</h3>
    <p><strong>Problem:</strong> Net income dropped from $100,000 to $70,000 year-over-year.</p>
    <p><strong>Solution:</strong> Be prepared to use the lower income figure ($70,000) for qualification. Provide explanation for the decline and show YTD income is stable or improving. CPA letter may help.</p>

    <h3>Issue 5: Multiple Jobs</h3>
    <p><strong>Problem:</strong> Working two part-time jobs to make full-time income.</p>
    <p><strong>Solution:</strong> Both jobs can count if you have 2-year history at each, or if the second job is in the same field and you have 1-year history. Provide documentation for both positions.</p>

    <h2>Using This VOE Calculator</h2>
    <p>Enter your employment and income details to calculate your qualifying income:</p>

    <h3>Input Fields</h3>
    <ul>
      <li><strong>Employment Type:</strong> W-2 employee, self-employed, or 1099 contractor</li>
      <li><strong>Base Annual Salary:</strong> Your regular annual salary or wages</li>
      <li><strong>Bonus Income:</strong> Average annual bonus (2-year average)</li>
      <li><strong>Overtime Income:</strong> Average annual overtime (2-year average)</li>
      <li><strong>Commission Income:</strong> Average annual commission (2-year average)</li>
      <li><strong>Years at Current Job:</strong> How long you've been with current employer</li>
      <li><strong>Years in Industry:</strong> Total years in your current career field</li>
    </ul>

    <h3>Calculator Results</h3>
    <ul>
      <li>Total qualifying monthly income</li>
      <li>Income stability score</li>
      <li>Required documentation list</li>
      <li>2-year average income breakdown</li>
      <li>Potential issues or concerns</li>
      <li>Recommendations for improving qualification</li>
    </ul>

    <h2>Tips for a Smooth VOE Process</h2>
    <ul>
      <li><strong>Don't Change Jobs:</strong> Avoid changing jobs during the mortgage process if possible</li>
      <li><strong>Alert Your Employer:</strong> Let HR know they may receive a verification request</li>
      <li><strong>Keep Documentation:</strong> Save all pay stubs, W-2s, and tax returns</li>
      <li><strong>Be Honest:</strong> Accurately report all income and employment history</li>
      <li><strong>Explain Gaps:</strong> Proactively provide explanations for any employment gaps</li>
      <li><strong>Avoid Large Purchases:</strong> Don't take on new debt that could affect DTI</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'employmentType',
        label: 'Employment Type',
        type: 'select',
        defaultValue: 'w2',
        options: [
          { value: 'w2', label: 'W-2 Employee' },
          { value: 'selfEmployed', label: 'Self-Employed' },
          { value: '1099', label: '1099 Contractor' },
        ],
      },
      {
        name: 'baseAnnualSalary',
        label: 'Base Annual Salary/Income ($)',
        type: 'number',
        defaultValue: 85000,
      },
      {
        name: 'bonusIncome',
        label: 'Annual Bonus Income (2-Year Average) ($)',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'overtimeIncome',
        label: 'Annual Overtime Income (2-Year Average) ($)',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'commissionIncome',
        label: 'Annual Commission Income (2-Year Average) ($)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'yearsAtCurrentJob',
        label: 'Years at Current Job',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'yearsInIndustry',
        label: 'Years in Industry/Career Field',
        type: 'number',
        defaultValue: 8,
      },
    ],
    results: [
      { label: 'Base Monthly Income', isCurrency: true },
      { label: 'Variable Monthly Income (Bonus/OT/Commission)', isCurrency: true },
      { label: 'Total Qualifying Monthly Income', isCurrency: true },
      { label: 'Total Qualifying Annual Income', isCurrency: true },
      { label: 'Income Stability Score', isCurrency: false },
      { label: 'Documentation Required', isCurrency: false },
      { label: '2-Year History Status', isCurrency: false },
      { label: 'Potential Issues', isCurrency: false },
    ],
    calculate: (values) => {
      const { employmentType, baseAnnualSalary, bonusIncome, overtimeIncome, commissionIncome, yearsAtCurrentJob, yearsInIndustry } = values;
      
      const baseMonthlyIncome = baseAnnualSalary / 12;
      
      let variableIncomeUsable = 0;
      let twoYearHistoryStatus = '';
      let potentialIssues = [];
      
      if (yearsAtCurrentJob >= 2) {
        variableIncomeUsable = (bonusIncome + overtimeIncome + commissionIncome) / 12;
        twoYearHistoryStatus = '2-year history confirmed - Variable income fully usable ✓';
      } else if (yearsAtCurrentJob >= 1 && yearsInIndustry >= 2) {
        variableIncomeUsable = (bonusIncome + overtimeIncome + commissionIncome) / 12 * 0.75;
        twoYearHistoryStatus = '1+ year at job with industry history - Variable income partially usable';
        potentialIssues.push('Less than 2 years at current job may limit variable income');
      } else {
        variableIncomeUsable = 0;
        twoYearHistoryStatus = 'Less than 2 years history - Variable income may not be usable';
        potentialIssues.push('Variable income (bonus/OT/commission) requires 2-year history');
      }
      
      if (commissionIncome > 0 && yearsAtCurrentJob < 2) {
        potentialIssues.push('Commission income typically requires 2-year history');
      }
      
      const totalMonthlyIncome = baseMonthlyIncome + variableIncomeUsable;
      const totalAnnualIncome = totalMonthlyIncome * 12;
      
      let stabilityScore = 0;
      if (yearsAtCurrentJob >= 5) stabilityScore += 3;
      else if (yearsAtCurrentJob >= 2) stabilityScore += 2;
      else if (yearsAtCurrentJob >= 1) stabilityScore += 1;
      
      if (yearsInIndustry >= 10) stabilityScore += 3;
      else if (yearsInIndustry >= 5) stabilityScore += 2;
      else if (yearsInIndustry >= 2) stabilityScore += 1;
      
      if (employmentType === 'w2') stabilityScore += 2;
      else if (employmentType === 'selfEmployed' && yearsAtCurrentJob >= 2) stabilityScore += 1;
      
      let stabilityLabel = '';
      if (stabilityScore >= 7) {
        stabilityLabel = 'Excellent (Score: ' + stabilityScore + '/8)';
      } else if (stabilityScore >= 5) {
        stabilityLabel = 'Good (Score: ' + stabilityScore + '/8)';
      } else if (stabilityScore >= 3) {
        stabilityLabel = 'Fair (Score: ' + stabilityScore + '/8)';
      } else {
        stabilityLabel = 'Needs Improvement (Score: ' + stabilityScore + '/8)';
        potentialIssues.push('Limited employment history may affect approval');
      }
      
      let documentation = [];
      if (employmentType === 'w2') {
        documentation.push('30 days pay stubs');
        documentation.push('2 years W-2 forms');
        if (bonusIncome > 0 || overtimeIncome > 0 || commissionIncome > 0) {
          documentation.push('Tax returns for variable income');
        }
      } else if (employmentType === 'selfEmployed') {
        documentation.push('2 years personal tax returns');
        documentation.push('2 years business tax returns');
        documentation.push('Year-to-date P&L statement');
        documentation.push('Business license');
        potentialIssues.push('Self-employment requires 2-year business history');
      } else {
        documentation.push('2 years 1099 forms');
        documentation.push('2 years tax returns with Schedule C');
        documentation.push('Current contracts/agreements');
        potentialIssues.push('1099 income calculated as self-employment');
      }
      
      if (potentialIssues.length === 0) {
        potentialIssues.push('No significant issues identified');
      }
      
      return [
        { label: 'Base Monthly Income', value: baseMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Variable Monthly Income (Bonus/OT/Commission)', value: variableIncomeUsable.toFixed(2), isCurrency: true },
        { label: 'Total Qualifying Monthly Income', value: totalMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Total Qualifying Annual Income', value: totalAnnualIncome.toFixed(2), isCurrency: true },
        { label: 'Income Stability Score', value: stabilityLabel },
        { label: 'Documentation Required', value: documentation.join('; ') },
        { label: '2-Year History Status', value: twoYearHistoryStatus },
        { label: 'Potential Issues', value: potentialIssues.join('; ') },
      ];
    },
  },
};
