import { CalculatorContent } from '@/types';

export const VERIFICATION_OF_DEPOSIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'VOD (Verification of Deposit) Calculator',
  description: 'Calculate VOD requirements and prepare for mortgage verification of deposit. Analyze your accounts for large deposits, potential issues, and documentation needs.',
  icon: 'Icon',
  category: 'Mortgage Qualification',
  slug: 'verification-of-deposit-calculator',
  metaTitle: 'VOD Calculator | Verification of Deposit Checker',
  metaDescription: 'Prepare for mortgage verification of deposit (VOD). Analyze account balances, flag large deposits, and understand documentation requirements.',
  article: {
    title: "Verification of Deposit (VOD) Calculator: Complete Mortgage Preparation Guide",
    content: `
    <h2>What is Verification of Deposit (VOD)?</h2>
    <p>Verification of Deposit (VOD) is a standard mortgage process where the lender verifies your bank account balances and transaction history directly with your financial institution. The VOD confirms that you have sufficient funds for the down payment, closing costs, and required reserves.</p>

    <p>There are two primary methods lenders use for VOD:</p>
    <ul>
      <li><strong>VOD Form:</strong> A standardized form sent directly to your bank, which the bank completes and returns to the lender</li>
      <li><strong>Bank Statements:</strong> Two months of complete bank statements that you provide directly to the lender</li>
    </ul>

    <p>Today, most lenders accept bank statements in lieu of the formal VOD form, as statements are faster to obtain and contain the same information.</p>

    <h3>Why VOD Matters</h3>
    <p>The VOD serves several critical purposes in the mortgage approval process:</p>
    <ul>
      <li><strong>Asset Verification:</strong> Confirms you actually have the funds you claim to have</li>
      <li><strong>Seasoning Verification:</strong> Shows how long funds have been in your accounts</li>
      <li><strong>Source Identification:</strong> Helps identify where your money comes from</li>
      <li><strong>Red Flag Detection:</strong> Reveals unusual activity that may need explanation</li>
      <li><strong>Reserve Confirmation:</strong> Verifies you have reserves beyond down payment and closing costs</li>
    </ul>

    <h2>What Lenders Look for in VOD</h2>
    <p>Understanding what lenders scrutinize helps you prepare your accounts and documentation:</p>

    <h3>Account Balances</h3>
    <table>
      <tr>
        <th>Balance Type</th>
        <th>What Lenders Check</th>
        <th>Why It Matters</th>
      </tr>
      <tr>
        <td>Current Balance</td>
        <td>Today's available balance</td>
        <td>Confirms you have funds available now</td>
      </tr>
      <tr>
        <td>Average Balance</td>
        <td>Average over 60-90 days</td>
        <td>Shows consistent financial behavior</td>
      </tr>
      <tr>
        <td>Low Balance</td>
        <td>Lowest point in statement period</td>
        <td>Indicates financial stability</td>
      </tr>
      <tr>
        <td>High Balance</td>
        <td>Highest point in statement period</td>
        <td>May indicate large deposits to investigate</td>
      </tr>
    </table>

    <h3>Deposit History</h3>
    <ul>
      <li><strong>Regular Deposits:</strong> Payroll deposits that match your stated income</li>
      <li><strong>Deposit Patterns:</strong> Consistency and regularity of deposits</li>
      <li><strong>Large Deposits:</strong> Any deposit exceeding 50% of monthly income</li>
      <li><strong>Cash Deposits:</strong> Unexplained cash deposits raise red flags</li>
      <li><strong>Transfers:</strong> Money moving between accounts needs paper trailing</li>
    </ul>

    <h3>Account Activity</h3>
    <ul>
      <li><strong>NSF/Overdrafts:</strong> Non-sufficient funds or overdrafts indicate financial stress</li>
      <li><strong>Returned Items:</strong> Bounced checks or payments</li>
      <li><strong>Large Withdrawals:</strong> May indicate undisclosed obligations</li>
      <li><strong>Account Closures:</strong> Recently closed accounts need explanation</li>
    </ul>

    <h2>Large Deposit Requirements</h2>
    <p>One of the most scrutinized aspects of VOD is large deposits. Here's what you need to know:</p>

    <h3>What Qualifies as a "Large Deposit"?</h3>
    <p>A large deposit is typically defined as:</p>
    <ul>
      <li><strong>Conventional Loans:</strong> Any deposit exceeding 50% of your gross monthly income</li>
      <li><strong>FHA Loans:</strong> Any deposit exceeding 1% of the home's sale price or $1,000, whichever is greater</li>
      <li><strong>VA Loans:</strong> Similar to conventional—deposits over 50% of monthly income</li>
      <li><strong>USDA Loans:</strong> Any unusual or large deposits require documentation</li>
    </ul>

    <h3>Large Deposit Letter Requirements</h3>
    <p>For each large deposit, you'll need to provide:</p>
    <ul>
      <li>Written explanation of the deposit source</li>
      <li>Supporting documentation (receipts, canceled checks, etc.)</li>
      <li>If a gift: Complete gift letter and donor's bank statement</li>
      <li>If from asset sale: Bill of sale, title transfer, ownership proof</li>
      <li>If from employment: Bonus letter, commission statement, or pay stub</li>
    </ul>

    <h3>Examples of Large Deposit Documentation</h3>
    <table>
      <tr>
        <th>Deposit Source</th>
        <th>Required Documentation</th>
      </tr>
      <tr>
        <td>Tax Refund</td>
        <td>Copy of tax return, IRS refund notice</td>
      </tr>
      <tr>
        <td>Insurance Settlement</td>
        <td>Settlement letter, check copy</td>
      </tr>
      <tr>
        <td>Car Sale</td>
        <td>Title, bill of sale, buyer info</td>
      </tr>
      <tr>
        <td>Gift</td>
        <td>Gift letter, donor's bank statement, transfer proof</td>
      </tr>
      <tr>
        <td>Bonus/Commission</td>
        <td>Employer letter, pay stub</td>
      </tr>
      <tr>
        <td>Retirement Withdrawal</td>
        <td>Account statement, withdrawal docs</td>
      </tr>
      <tr>
        <td>Cash Savings</td>
        <td>Letter of explanation (may not be acceptable)</td>
      </tr>
    </table>

    <h2>Common VOD Issues and Solutions</h2>
    <p>Here are the most frequent problems borrowers face during VOD and how to address them:</p>

    <h3>Issue 1: Unexplained Large Deposits</h3>
    <p><strong>Problem:</strong> A deposit of $5,000 appears with no clear source.</p>
    <p><strong>Solution:</strong> Write a letter of explanation and provide supporting documentation. Common acceptable explanations include tax refunds (provide tax return), insurance reimbursements (provide settlement letter), or employment bonuses (provide HR letter).</p>

    <h3>Issue 2: Multiple Cash Deposits</h3>
    <p><strong>Problem:</strong> Several cash deposits of varying amounts appear on statements.</p>
    <p><strong>Solution:</strong> If you have a legitimate cash business, provide tax returns and business documentation. If these are personal cash savings, you may need to exclude them from your available funds or wait for them to season and become part of regular savings patterns.</p>

    <h3>Issue 3: Overdrafts or NSF Fees</h3>
    <p><strong>Problem:</strong> Your statements show multiple overdrafts or NSF fees.</p>
    <p><strong>Solution:</strong> Write a letter of explanation describing the circumstances. If it was a one-time issue (e.g., timing of auto-pay), explain that. Multiple overdrafts may require demonstrating improved financial management over recent months.</p>

    <h3>Issue 4: Money Moving Between Accounts</h3>
    <p><strong>Problem:</strong> Transfers between your checking and savings (or multiple banks) appear.</p>
    <p><strong>Solution:</strong> Provide statements from all accounts showing both the withdrawal and deposit. This is called "paper trailing" and is common in underwriting. The key is showing the source and destination of all transferred funds.</p>

    <h3>Issue 5: Business and Personal Funds Mixed</h3>
    <p><strong>Problem:</strong> You're self-employed and business income mixes with personal funds.</p>
    <p><strong>Solution:</strong> Maintain separate business and personal accounts. Provide business tax returns and profit/loss statements. Show regular "owner's draws" or salary payments from business to personal account.</p>

    <h2>Preparing for VOD: Step-by-Step Guide</h2>
    <p>Follow this timeline to ensure smooth verification of deposit:</p>

    <h3>3-6 Months Before Applying</h3>
    <ul>
      <li>Open a dedicated down payment savings account if you don't have one</li>
      <li>Set up automatic transfers from your paycheck</li>
      <li>Stop making cash deposits</li>
      <li>Keep all accounts in good standing (no overdrafts)</li>
      <li>Start documenting any expected large deposits (bonuses, asset sales, etc.)</li>
    </ul>

    <h3>2-3 Months Before Applying</h3>
    <ul>
      <li>Review all account statements for potential red flags</li>
      <li>Gather documentation for any large deposits</li>
      <li>Consolidate funds if desired (but keep paper trail)</li>
      <li>Request gift funds early to allow seasoning</li>
      <li>Resolve any overdraft issues</li>
    </ul>

    <h3>At Application</h3>
    <ul>
      <li>Provide two complete months of statements for ALL accounts</li>
      <li>Include all pages, even blank ones</li>
      <li>Have explanations ready for any unusual activity</li>
      <li>Be prepared to provide additional statements if requested</li>
    </ul>

    <h2>VOD for Different Account Types</h2>
    <p>Different accounts have different verification requirements:</p>

    <h3>Checking and Savings Accounts</h3>
    <ul>
      <li>Two most recent monthly statements required</li>
      <li>Must show account holder name matching loan application</li>
      <li>Must include all pages and all transactions</li>
      <li>Online statements are generally acceptable</li>
    </ul>

    <h3>Investment Accounts</h3>
    <ul>
      <li>Most recent quarterly or monthly statement</li>
      <li>Shows current market value of investments</li>
      <li>May require documentation of liquidation ability</li>
      <li>Retirement accounts may have different requirements</li>
    </ul>

    <h3>Retirement Accounts (401k, IRA)</h3>
    <ul>
      <li>Most recent statement showing vested balance</li>
      <li>Documentation of withdrawal or loan options</li>
      <li>Some lenders only count 60-70% of retirement funds as available assets</li>
      <li>May require employer confirmation of vesting</li>
    </ul>

    <h3>Foreign Accounts</h3>
    <ul>
      <li>May require additional documentation</li>
      <li>Currency conversion documentation needed</li>
      <li>Some lenders may not accept foreign account funds</li>
      <li>Transfer to US account well before application recommended</li>
    </ul>

    <h2>VOD Red Flags to Avoid</h2>
    <p>Lenders are trained to spot these warning signs:</p>

    <h3>Serious Red Flags</h3>
    <ul>
      <li><strong>Structured Deposits:</strong> Multiple deposits just under $10,000 (appears to avoid reporting requirements)</li>
      <li><strong>Unexplained Cash:</strong> Large cash deposits with no source documentation</li>
      <li><strong>Recent Large Gifts:</strong> Last-minute gift deposits without proper documentation</li>
      <li><strong>Account Discrepancies:</strong> Balances that don't match other financial documents</li>
      <li><strong>Undisclosed Accounts:</strong> Accounts that appear on credit report but weren't disclosed</li>
    </ul>

    <h3>Moderate Red Flags</h3>
    <ul>
      <li><strong>Multiple Overdrafts:</strong> Pattern of insufficient funds</li>
      <li><strong>Frequent Large Transfers:</strong> Money constantly moving between accounts</li>
      <li><strong>Inconsistent Deposits:</strong> Payroll deposits that don't match stated income</li>
      <li><strong>Returned Payments:</strong> Bounced checks or returned ACH payments</li>
    </ul>

    <h2>Reserve Requirements</h2>
    <p>Beyond down payment and closing costs, lenders want to see you have reserves:</p>

    <h3>Typical Reserve Requirements</h3>
    <table>
      <tr>
        <th>Property Type</th>
        <th>Typical Reserve Requirement</th>
      </tr>
      <tr>
        <td>Primary Residence</td>
        <td>0-2 months PITI (varies by lender)</td>
      </tr>
      <tr>
        <td>Second Home</td>
        <td>2-6 months PITI</td>
      </tr>
      <tr>
        <td>Investment Property</td>
        <td>6-12 months PITI</td>
      </tr>
      <tr>
        <td>Multiple Properties</td>
        <td>2-6 months PITI per property</td>
      </tr>
    </table>

    <p>PITI = Principal + Interest + Taxes + Insurance (your full monthly housing payment)</p>

    <h2>Using This VOD Calculator</h2>
    <p>Enter your account information to assess your VOD readiness:</p>

    <h3>Input Fields</h3>
    <ul>
      <li><strong>Primary Checking Balance:</strong> Current balance in your main checking account</li>
      <li><strong>Primary Savings Balance:</strong> Current balance in your savings account</li>
      <li><strong>Investment Account Balance:</strong> Total value of non-retirement investments</li>
      <li><strong>Other Account Balances:</strong> Any other account funds</li>
      <li><strong>Average Monthly Deposits:</strong> Your typical monthly deposit amount (income)</li>
      <li><strong>Large Deposits Last 60 Days:</strong> Total of any large deposits in the past 60 days</li>
    </ul>

    <h3>Calculator Results</h3>
    <ul>
      <li>Total verifiable deposits across all accounts</li>
      <li>Large deposit flag status (need documentation?)</li>
      <li>VOD readiness score</li>
      <li>Documentation requirements</li>
      <li>Potential issues to address</li>
      <li>Recommendations for improving VOD status</li>
    </ul>

    <h2>Tips for a Smooth VOD Process</h2>
    <ul>
      <li><strong>Be Proactive:</strong> Review your statements before your lender does</li>
      <li><strong>Document Everything:</strong> Keep records of all large transactions</li>
      <li><strong>Maintain Consistency:</strong> Avoid unusual activity during the mortgage process</li>
      <li><strong>Communicate Early:</strong> Alert your loan officer to any potential issues</li>
      <li><strong>Keep Accounts Open:</strong> Don't close accounts during the mortgage process</li>
      <li><strong>Provide Complete Statements:</strong> Never submit partial statements</li>
      <li><strong>Respond Quickly:</strong> When lenders request additional documentation, provide it promptly</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'primaryCheckingBalance',
        label: 'Primary Checking Account Balance ($)',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'primarySavingsBalance',
        label: 'Primary Savings Account Balance ($)',
        type: 'number',
        defaultValue: 35000,
      },
      {
        name: 'investmentAccountBalance',
        label: 'Investment Account Balance ($)',
        type: 'number',
        defaultValue: 20000,
      },
      {
        name: 'otherAccountBalance',
        label: 'Other Account Balances ($)',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'averageMonthlyDeposits',
        label: 'Average Monthly Deposits/Income ($)',
        type: 'number',
        defaultValue: 8000,
      },
      {
        name: 'largeDepositsLast60Days',
        label: 'Large Deposits in Last 60 Days ($)',
        type: 'number',
        defaultValue: 5000,
      },
    ],
    results: [
      { label: 'Total Verifiable Deposits', isCurrency: true },
      { label: 'Large Deposit Threshold (50% of Monthly Income)', isCurrency: true },
      { label: 'Large Deposit Flag Status', isCurrency: false },
      { label: 'VOD Readiness Status', isCurrency: false },
      { label: 'Documentation Required', isCurrency: false },
      { label: 'Potential Issues', isCurrency: false },
      { label: 'Recommendations', isCurrency: false },
      { label: 'VOD Risk Score', isCurrency: false },
    ],
    calculate: (values) => {
      const { primaryCheckingBalance, primarySavingsBalance, investmentAccountBalance, otherAccountBalance, averageMonthlyDeposits, largeDepositsLast60Days } = values;
      
      const totalVerifiableDeposits = primaryCheckingBalance + primarySavingsBalance + investmentAccountBalance + otherAccountBalance;
      const largeDepositThreshold = averageMonthlyDeposits * 0.5;
      
      const hasLargeDeposits = largeDepositsLast60Days > largeDepositThreshold;
      let largeDepositStatus = '';
      if (largeDepositsLast60Days === 0) {
        largeDepositStatus = 'No large deposits - No documentation needed ✓';
      } else if (hasLargeDeposits) {
        largeDepositStatus = 'Large deposits detected - Documentation REQUIRED';
      } else {
        largeDepositStatus = 'Deposits within normal range ✓';
      }
      
      let vodReadiness = '';
      let riskScore = 0;
      
      if (hasLargeDeposits) {
        riskScore += 3;
      }
      if (largeDepositsLast60Days > averageMonthlyDeposits) {
        riskScore += 2;
      }
      if (investmentAccountBalance > primaryCheckingBalance + primarySavingsBalance) {
        riskScore += 1;
      }
      
      if (riskScore === 0) {
        vodReadiness = 'Excellent - Standard documentation should be sufficient';
      } else if (riskScore <= 2) {
        vodReadiness = 'Good - Minor documentation may be needed';
      } else if (riskScore <= 4) {
        vodReadiness = 'Fair - Additional documentation will be required';
      } else {
        vodReadiness = 'Needs Attention - Significant documentation required';
      }
      
      let documentation = [];
      documentation.push('2 months complete bank statements for all accounts');
      if (hasLargeDeposits) {
        documentation.push('Large deposit explanation letter');
        documentation.push('Source documentation for each large deposit');
      }
      if (investmentAccountBalance > 0) {
        documentation.push('Investment account statements');
      }
      if (otherAccountBalance > 0) {
        documentation.push('Statements for all other accounts');
      }
      
      let potentialIssues = [];
      if (hasLargeDeposits) {
        potentialIssues.push('Large deposits require source documentation');
      }
      if (largeDepositsLast60Days > averageMonthlyDeposits * 2) {
        potentialIssues.push('Very large deposits may slow underwriting');
      }
      if (potentialIssues.length === 0) {
        potentialIssues.push('No significant issues identified');
      }
      
      let recommendations = [];
      if (hasLargeDeposits) {
        recommendations.push('Prepare documentation for all large deposits now');
      }
      recommendations.push('Avoid new large deposits during mortgage process');
      recommendations.push('Keep all accounts in good standing');
      if (primaryCheckingBalance < averageMonthlyDeposits) {
        recommendations.push('Consider maintaining higher checking balance');
      }
      
      const riskLabel = riskScore <= 1 ? 'Low Risk' : riskScore <= 3 ? 'Moderate Risk' : 'Higher Risk';
      
      return [
        { label: 'Total Verifiable Deposits', value: totalVerifiableDeposits.toFixed(2), isCurrency: true },
        { label: 'Large Deposit Threshold (50% of Monthly Income)', value: largeDepositThreshold.toFixed(2), isCurrency: true },
        { label: 'Large Deposit Flag Status', value: largeDepositStatus },
        { label: 'VOD Readiness Status', value: vodReadiness },
        { label: 'Documentation Required', value: documentation.join('; ') },
        { label: 'Potential Issues', value: potentialIssues.join('; ') },
        { label: 'Recommendations', value: recommendations.join('; ') },
        { label: 'VOD Risk Score', value: riskLabel + ' (' + riskScore + '/6)' },
      ];
    },
  },
};
