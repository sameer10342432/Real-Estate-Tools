import { CalculatorContent } from '@/types';

export const ASSET_DEPLETION_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Asset Depletion Loan Calculator',
  description: 'Calculate mortgage qualification using the asset depletion method. Determine how your liquid assets can create qualifying income for home loans, ideal for retirees and high-net-worth borrowers.',
  icon: 'Wallet',
  category: 'Non-QM Loans',
  slug: 'asset-depletion-loan-calculator',
  metaTitle: 'Asset Depletion Loan Calculator | Qualify Using Your Assets',
  metaDescription: 'Calculate mortgage qualification using asset depletion. Convert liquid assets into qualifying income for home loans. Ideal for retirees and high-net-worth borrowers.',
  article: {
    title: 'Asset Depletion Loan Calculator: How to Qualify for a Mortgage Using Your Assets',
    content: `
    <h2>What is an Asset Depletion Loan?</h2>
    <p>An asset depletion loan (also called asset dissipation or asset-based income loan) is a mortgage program that allows borrowers to qualify based on their liquid assets rather than traditional employment income. Instead of using W-2s, pay stubs, or tax returns, lenders calculate a "hypothetical income" by dividing your eligible assets by the loan term.</p>

    <p>This innovative lending approach opens homeownership to individuals who may have substantial wealth but limited traditional income—retirees living off savings, investors with dividend-producing portfolios, entrepreneurs who sold their businesses, or anyone with significant liquid assets.</p>

    <h3>How Asset Depletion Works</h3>
    <p>The core concept is simple: if you have enough assets to theoretically pay for your mortgage and living expenses for the loan term, lenders treat that as "income" for qualification purposes.</p>

    <p><strong>Basic Formula:</strong></p>
    <pre>
Monthly Qualifying Income = (Eligible Assets × Deduction Rate) ÷ Loan Term in Months
    </pre>

    <p><strong>Example:</strong></p>
    <ul>
      <li><strong>Liquid Assets:</strong> $1,500,000</li>
      <li><strong>Deduction Rate:</strong> 70% (30% held back for market volatility)</li>
      <li><strong>Usable Assets:</strong> $1,050,000</li>
      <li><strong>Loan Term:</strong> 360 months (30 years)</li>
      <li><strong>Monthly Qualifying Income:</strong> $1,050,000 ÷ 360 = $2,917</li>
    </ul>

    <h2>Who Qualifies for Asset Depletion Loans?</h2>
    <p>Asset depletion loans are designed for specific borrower profiles:</p>

    <h3>Ideal Candidates</h3>
    <ul>
      <li><strong>Retirees:</strong> Living off savings, investments, and/or pension with limited taxable income</li>
      <li><strong>High-Net-Worth Individuals:</strong> Substantial assets but income that doesn't reflect wealth</li>
      <li><strong>Business Owners Who Sold:</strong> Received large lump sum, now have assets but no business income</li>
      <li><strong>Trust Fund Beneficiaries:</strong> Access to trust assets but limited personal income</li>
      <li><strong>Investors:</strong> Portfolio generating dividends that are reinvested (not reported as income)</li>
      <li><strong>Early Retirees (FIRE):</strong> Achieved financial independence but don't have traditional employment</li>
      <li><strong>Foreign Nationals:</strong> With US-based assets but no US income history</li>
    </ul>

    <h3>Minimum Requirements</h3>
    <ul>
      <li><strong>Credit Score:</strong> Typically 680+ (some programs accept 660+)</li>
      <li><strong>Minimum Assets:</strong> Usually $500,000+ in eligible assets</li>
      <li><strong>Down Payment:</strong> 20-30% of purchase price</li>
      <li><strong>Reserves:</strong> 6-24 months of mortgage payments after closing</li>
      <li><strong>Asset Documentation:</strong> 2-3 months of statements for all asset accounts</li>
    </ul>

    <h2>Eligible vs. Ineligible Assets</h2>

    <h3>Fully Eligible Assets (100% Counted)</h3>
    <ul>
      <li><strong>Checking Accounts:</strong> Fully liquid, immediately accessible</li>
      <li><strong>Savings Accounts:</strong> Including money market accounts</li>
      <li><strong>Certificates of Deposit (CDs):</strong> Even if not yet mature</li>
      <li><strong>Stocks:</strong> Publicly traded, easily liquidated</li>
      <li><strong>Bonds:</strong> Government and corporate bonds</li>
      <li><strong>Mutual Funds:</strong> Including index funds and ETFs</li>
      <li><strong>Brokerage Accounts:</strong> Non-retirement investment accounts</li>
    </ul>

    <h3>Partially Eligible Assets (Typically 60-70% Counted)</h3>
    <ul>
      <li><strong>401(k) Accounts:</strong> Discounted for early withdrawal penalties and taxes</li>
      <li><strong>Traditional IRAs:</strong> Subject to tax implications on withdrawal</li>
      <li><strong>403(b) and 457 Plans:</strong> Similar to 401(k) treatment</li>
      <li><strong>Roth IRAs:</strong> May be counted at higher rate (contributions already taxed)</li>
      <li><strong>SEP IRAs:</strong> Same treatment as traditional IRAs</li>
    </ul>

    <h3>Ineligible Assets</h3>
    <ul>
      <li><strong>Primary Residence Equity:</strong> You're using this for the new purchase</li>
      <li><strong>Business Assets:</strong> Equipment, inventory, accounts receivable</li>
      <li><strong>Restricted Stock:</strong> Not freely tradeable</li>
      <li><strong>Annuities with Surrender Penalties:</strong> Unless penalty period has passed</li>
      <li><strong>Life Insurance Cash Value:</strong> Typically not counted</li>
      <li><strong>Cryptocurrency:</strong> Most lenders don't count crypto (too volatile)</li>
      <li><strong>Collectibles:</strong> Art, cars, jewelry, etc.</li>
    </ul>

    <h2>Asset Depletion Calculation Methods</h2>

    <h3>Standard Calculation (Most Common)</h3>
    <p>Divide total eligible assets by the loan term:</p>
    <ul>
      <li><strong>30-Year Loan:</strong> Assets ÷ 360 months</li>
      <li><strong>15-Year Loan:</strong> Assets ÷ 180 months</li>
      <li><strong>20-Year Loan:</strong> Assets ÷ 240 months</li>
    </ul>

    <h3>Age-Based Calculation (Fannie Mae)</h3>
    <p>For borrowers 62+, Fannie Mae allows asset depletion based on actuarial tables:</p>
    <ul>
      <li>Calculate remaining life expectancy</li>
      <li>Divide assets by remaining months of life expectancy</li>
      <li>This often results in higher qualifying income for older borrowers</li>
    </ul>

    <h3>Discount Rates for Asset Types</h3>
    <table>
      <tr>
        <th>Asset Type</th>
        <th>Typical Discount Rate</th>
        <th>Usable Percentage</th>
      </tr>
      <tr>
        <td>Cash/Checking/Savings</td>
        <td>0%</td>
        <td>100%</td>
      </tr>
      <tr>
        <td>Stocks/Bonds/Mutual Funds</td>
        <td>20-30%</td>
        <td>70-80%</td>
      </tr>
      <tr>
        <td>Retirement Accounts (under 59½)</td>
        <td>30-40%</td>
        <td>60-70%</td>
      </tr>
      <tr>
        <td>Retirement Accounts (59½+)</td>
        <td>20-30%</td>
        <td>70-80%</td>
      </tr>
      <tr>
        <td>Roth IRA (contributions)</td>
        <td>0-10%</td>
        <td>90-100%</td>
      </tr>
    </table>

    <h2>Asset Depletion Loan Example</h2>
    <p>Let's walk through a complete example:</p>

    <h3>Borrower Profile: Recently Retired Executive</h3>
    <ul>
      <li><strong>Age:</strong> 63</li>
      <li><strong>Annual Social Security:</strong> $36,000 ($3,000/month)</li>
      <li><strong>Traditional Employment Income:</strong> $0</li>
    </ul>

    <h3>Asset Portfolio</h3>
    <ul>
      <li><strong>Checking/Savings:</strong> $150,000 (100% eligible)</li>
      <li><strong>Brokerage Account:</strong> $800,000 (70% = $560,000 eligible)</li>
      <li><strong>401(k):</strong> $600,000 (70% = $420,000 eligible)</li>
      <li><strong>Total Eligible Assets:</strong> $1,130,000</li>
    </ul>

    <h3>Income Calculation</h3>
    <ul>
      <li><strong>Asset Depletion Income:</strong> $1,130,000 ÷ 360 = $3,139/month</li>
      <li><strong>Social Security:</strong> $3,000/month</li>
      <li><strong>Total Qualifying Income:</strong> $6,139/month</li>
    </ul>

    <h3>Maximum Loan Amount</h3>
    <ul>
      <li><strong>Max DTI:</strong> 43%</li>
      <li><strong>Max Monthly Payment:</strong> $6,139 × 43% = $2,640</li>
      <li><strong>At 7% Interest:</strong> Approx. $397,000 loan amount</li>
      <li><strong>With 20% Down:</strong> Max home price ~$496,000</li>
    </ul>

    <h2>Pros and Cons of Asset Depletion Loans</h2>

    <h3>Advantages</h3>
    <ul>
      <li><strong>No Employment Required:</strong> Perfect for retirees and those between jobs</li>
      <li><strong>No Income Documentation:</strong> No tax returns, W-2s, or pay stubs needed</li>
      <li><strong>Uses Existing Wealth:</strong> Your assets work for you</li>
      <li><strong>Competitive Rates:</strong> Often only 0.25-0.75% higher than conventional</li>
      <li><strong>Multiple Property Types:</strong> Available for primary, second homes, and investment properties</li>
      <li><strong>Asset Preservation:</strong> You don't actually have to liquidate assets</li>
    </ul>

    <h3>Disadvantages</h3>
    <ul>
      <li><strong>High Asset Requirements:</strong> Need significant liquid wealth</li>
      <li><strong>Larger Down Payments:</strong> Typically 20-30% required</li>
      <li><strong>Asset Discounts:</strong> Retirement accounts counted at 60-70%</li>
      <li><strong>Reserve Requirements:</strong> Must maintain 6-24 months reserves after closing</li>
      <li><strong>Limited Lender Availability:</strong> Not all lenders offer this program</li>
      <li><strong>Documentation Intensive:</strong> All asset accounts must be fully documented</li>
    </ul>

    <h2>Asset Depletion vs. Other Loan Options</h2>
    <table>
      <tr>
        <th>Feature</th>
        <th>Asset Depletion</th>
        <th>Bank Statement</th>
        <th>Traditional</th>
      </tr>
      <tr>
        <td>Income Source</td>
        <td>Liquid assets</td>
        <td>Bank deposits</td>
        <td>W-2/Tax returns</td>
      </tr>
      <tr>
        <td>Best For</td>
        <td>Retirees, high net worth</td>
        <td>Self-employed</td>
        <td>W-2 employees</td>
      </tr>
      <tr>
        <td>Min Down Payment</td>
        <td>20-30%</td>
        <td>10-20%</td>
        <td>3-20%</td>
      </tr>
      <tr>
        <td>Credit Score</td>
        <td>680+</td>
        <td>620+</td>
        <td>580+</td>
      </tr>
      <tr>
        <td>Rate Premium</td>
        <td>0.25-0.75%</td>
        <td>0.5-2.0%</td>
        <td>0%</td>
      </tr>
    </table>

    <h2>Documentation Required</h2>
    <p>Be prepared to provide comprehensive asset documentation:</p>
    <ul>
      <li><strong>Bank Statements:</strong> 2-3 months for all accounts</li>
      <li><strong>Brokerage Statements:</strong> Most recent quarterly statements</li>
      <li><strong>Retirement Account Statements:</strong> 401(k), IRA, etc.</li>
      <li><strong>Proof of Ownership:</strong> Statements must show your name</li>
      <li><strong>Large Deposit Explanations:</strong> Source of any unusual deposits</li>
      <li><strong>Gift Letters:</strong> If any assets are gifts from family</li>
    </ul>

    <h2>Tips to Maximize Qualification</h2>
    <ul>
      <li><strong>Consolidate Accounts:</strong> Fewer statements make documentation easier</li>
      <li><strong>Move Crypto to Cash:</strong> Convert cryptocurrency to cash 60+ days before applying</li>
      <li><strong>Roll Over 401(k):</strong> To an IRA if your plan has restrictions</li>
      <li><strong>Avoid Large Withdrawals:</strong> In the months before applying</li>
      <li><strong>Document Asset History:</strong> Show stability over time</li>
      <li><strong>Consider Shorter Term:</strong> 15-year loan creates higher monthly income than 30-year</li>
    </ul>

    <h2>How to Use This Calculator</h2>
    <p>Enter your liquid assets, retirement assets, loan term, and age to calculate your qualifying income. The calculator will show:</p>
    <ul>
      <li>Total usable assets after deductions</li>
      <li>Monthly qualifying income from assets</li>
      <li>Maximum loan amount based on DTI limits</li>
      <li>Estimated maximum home price</li>
      <li>Required down payment</li>
      <li>Post-closing reserve requirements</li>
    </ul>
    `,
  },
  calculator: {
    fields: [
      {
        name: 'liquidAssets',
        label: 'Liquid Assets (Cash, Stocks, Bonds) ($)',
        type: 'number',
        defaultValue: 800000,
      },
      {
        name: 'retirementAssets',
        label: 'Retirement Assets (401k, IRA) ($)',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'select',
        defaultValue: '30',
        options: [
          { value: '30', label: '30 Years' },
          { value: '25', label: '25 Years' },
          { value: '20', label: '20 Years' },
          { value: '15', label: '15 Years' },
        ],
      },
      {
        name: 'borrowerAge',
        label: 'Borrower Age',
        type: 'number',
        defaultValue: 62,
      },
      {
        name: 'assetDeductionRate',
        label: 'Asset Deduction Rate (%)',
        type: 'select',
        defaultValue: '70',
        options: [
          { value: '80', label: '80% (Conservative lender)' },
          { value: '70', label: '70% (Standard)' },
          { value: '60', label: '60% (Aggressive lender)' },
        ],
      },
      {
        name: 'otherMonthlyIncome',
        label: 'Other Monthly Income (Social Security, Pension) ($)',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 7.25,
      },
    ],
    results: [
      { label: 'Total Liquid Assets', isCurrency: true },
      { label: 'Total Retirement Assets', isCurrency: true },
      { label: 'Usable Liquid Assets (after discount)', isCurrency: true },
      { label: 'Usable Retirement Assets (70% counted)', isCurrency: true },
      { label: 'Total Usable Assets', isCurrency: true },
      { label: 'Loan Term (Months)', isCurrency: false },
      { label: 'Monthly Asset Depletion Income', isCurrency: true },
      { label: 'Other Monthly Income', isCurrency: true },
      { label: 'Total Monthly Qualifying Income', isCurrency: true },
      { label: 'Max Monthly Payment (43% DTI)', isCurrency: true },
      { label: 'Maximum Loan Amount', isCurrency: true },
      { label: 'Maximum Home Price (20% Down)', isCurrency: true },
      { label: 'Required Down Payment', isCurrency: true },
      { label: 'Required Reserves (12 months)', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        liquidAssets,
        retirementAssets,
        loanTerm,
        borrowerAge,
        assetDeductionRate,
        otherMonthlyIncome,
        interestRate,
      } = values;

      const loanTermMonths = parseInt(loanTerm, 10) * 12;
      const deductionRate = parseInt(assetDeductionRate, 10) / 100;

      const retirementDeductionRate = borrowerAge >= 59.5 ? 0.70 : 0.60;

      const usableLiquidAssets = liquidAssets * deductionRate;
      const usableRetirementAssets = retirementAssets * retirementDeductionRate;
      const totalUsableAssets = usableLiquidAssets + usableRetirementAssets;

      const monthlyAssetIncome = totalUsableAssets / loanTermMonths;
      const totalMonthlyIncome = monthlyAssetIncome + otherMonthlyIncome;

      const maxMonthlyPayment = totalMonthlyIncome * 0.43;

      const monthlyRate = interestRate / 100 / 12;
      const maxLoanAmount = maxMonthlyPayment * (Math.pow(1 + monthlyRate, loanTermMonths) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths));

      const maxHomePrice = maxLoanAmount / 0.80;
      const requiredDownPayment = maxHomePrice * 0.20;

      const estimatedMonthlyPayment = maxLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths)) / (Math.pow(1 + monthlyRate, loanTermMonths) - 1);
      const requiredReserves = estimatedMonthlyPayment * 12;

      return [
        { label: 'Total Liquid Assets', value: liquidAssets.toFixed(2), isCurrency: true },
        { label: 'Total Retirement Assets', value: retirementAssets.toFixed(2), isCurrency: true },
        { label: 'Usable Liquid Assets (after discount)', value: usableLiquidAssets.toFixed(2), isCurrency: true },
        { label: 'Usable Retirement Assets (70% counted)', value: usableRetirementAssets.toFixed(2), isCurrency: true },
        { label: 'Total Usable Assets', value: totalUsableAssets.toFixed(2), isCurrency: true },
        { label: 'Loan Term (Months)', value: loanTermMonths.toString(), isCurrency: false },
        { label: 'Monthly Asset Depletion Income', value: monthlyAssetIncome.toFixed(2), isCurrency: true },
        { label: 'Other Monthly Income', value: otherMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Qualifying Income', value: totalMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Max Monthly Payment (43% DTI)', value: maxMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Maximum Loan Amount', value: maxLoanAmount.toFixed(2), isCurrency: true },
        { label: 'Maximum Home Price (20% Down)', value: maxHomePrice.toFixed(2), isCurrency: true },
        { label: 'Required Down Payment', value: requiredDownPayment.toFixed(2), isCurrency: true },
        { label: 'Required Reserves (12 months)', value: requiredReserves.toFixed(2), isCurrency: true },
      ];
    },
  },
};
