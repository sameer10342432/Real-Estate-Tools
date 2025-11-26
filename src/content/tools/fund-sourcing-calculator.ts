import { CalculatorContent } from '@/types';

export const FUND_SOURCING_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Fund Sourcing Calculator',
  description: 'Track and document the source of your down payment funds for mortgage approval. Calculate total documented funds, identify funding gaps, and determine verification requirements.',
  icon: 'Icon',
  category: 'Mortgage Qualification',
  slug: 'fund-sourcing-calculator',
  metaTitle: 'Fund Sourcing Calculator | Down Payment Source Tracker',
  metaDescription: 'Track your down payment fund sources for mortgage approval. Calculate documented funds, verify requirements, and ensure anti-money laundering compliance.',
  article: {
    title: "Fund Sourcing Calculator: Complete Guide to Documenting Your Down Payment",
    content: `
    <h2>What is Fund Sourcing?</h2>
    <p>Fund sourcing is the process of documenting and verifying where your mortgage down payment money comes from. Lenders require detailed documentation of fund sources to comply with federal anti-money laundering (AML) regulations and to ensure borrowers are using legitimate funds for their home purchase.</p>

    <p>Every dollar you use for your down payment and closing costs must have a clear, documented source. This isn't just about proving you have the money—it's about proving where that money came from and that it's legally yours to use.</p>

    <h3>Why Fund Sourcing Matters</h3>
    <p>Fund sourcing documentation is critical for several reasons:</p>
    <ul>
      <li><strong>Regulatory Compliance:</strong> Banks must comply with the Bank Secrecy Act (BSA) and anti-money laundering laws</li>
      <li><strong>Fraud Prevention:</strong> Prevents undisclosed loans disguised as down payments</li>
      <li><strong>Risk Assessment:</strong> Helps lenders understand your true financial picture</li>
      <li><strong>Loan Program Requirements:</strong> Fannie Mae, FHA, VA, and USDA all require fund source documentation</li>
      <li><strong>Underwriting Standards:</strong> Incomplete fund sourcing is a common cause of loan delays or denials</li>
    </ul>

    <h2>Acceptable Sources of Down Payment Funds</h2>
    <p>Mortgage lenders recognize several legitimate sources for down payment funds. Understanding what's acceptable helps you prepare proper documentation.</p>

    <h3>Tier 1: Preferred Sources (Easiest to Document)</h3>
    <table>
      <tr>
        <th>Fund Source</th>
        <th>Documentation Required</th>
        <th>Lender Scrutiny Level</th>
      </tr>
      <tr>
        <td>Personal Savings</td>
        <td>2 months bank statements</td>
        <td>Low (if seasoned 60+ days)</td>
      </tr>
      <tr>
        <td>Checking Account Balance</td>
        <td>2 months bank statements</td>
        <td>Low (if seasoned 60+ days)</td>
      </tr>
      <tr>
        <td>Payroll Deposits</td>
        <td>Pay stubs + bank statements</td>
        <td>Low</td>
      </tr>
      <tr>
        <td>Tax Refunds</td>
        <td>IRS transcript + deposit proof</td>
        <td>Low</td>
      </tr>
    </table>

    <h3>Tier 2: Common Sources (Moderate Documentation)</h3>
    <table>
      <tr>
        <th>Fund Source</th>
        <th>Documentation Required</th>
        <th>Lender Scrutiny Level</th>
      </tr>
      <tr>
        <td>401(k)/IRA Withdrawal</td>
        <td>Account statement, withdrawal docs, vesting confirmation</td>
        <td>Moderate</td>
      </tr>
      <tr>
        <td>Stock/Investment Sales</td>
        <td>Brokerage statements, sale confirmation</td>
        <td>Moderate</td>
      </tr>
      <tr>
        <td>Gift Funds</td>
        <td>Gift letter, donor's bank statement, transfer proof</td>
        <td>High</td>
      </tr>
      <tr>
        <td>Sale of Vehicle/Asset</td>
        <td>Title, bill of sale, fair market value proof</td>
        <td>Moderate</td>
      </tr>
    </table>

    <h3>Tier 3: Complex Sources (Extensive Documentation)</h3>
    <table>
      <tr>
        <th>Fund Source</th>
        <th>Documentation Required</th>
        <th>Lender Scrutiny Level</th>
      </tr>
      <tr>
        <td>Inheritance</td>
        <td>Death certificate, probate docs, estate distribution</td>
        <td>High</td>
      </tr>
      <tr>
        <td>Lawsuit Settlement</td>
        <td>Settlement agreement, attorney letter, deposit proof</td>
        <td>High</td>
      </tr>
      <tr>
        <td>Business Funds</td>
        <td>Business tax returns, P&L, ownership proof</td>
        <td>Very High</td>
      </tr>
      <tr>
        <td>Cryptocurrency</td>
        <td>Exchange records, conversion proof, multiple statements</td>
        <td>Very High</td>
      </tr>
    </table>

    <h2>Gift Funds: Complete Documentation Guide</h2>
    <p>Gift funds are one of the most common—and most scrutinized—down payment sources. Here's everything you need to know:</p>

    <h3>Who Can Give Gift Funds?</h3>
    <p>The acceptable donors vary by loan type:</p>
    <ul>
      <li><strong>Conventional Loans:</strong> Family members, fiancé/fiancée, domestic partner</li>
      <li><strong>FHA Loans:</strong> Family, employers, labor unions, charitable organizations, government agencies</li>
      <li><strong>VA Loans:</strong> Close family members only (spouse, parents, grandparents, siblings)</li>
      <li><strong>USDA Loans:</strong> Family members, close friends (with documentation of relationship)</li>
    </ul>

    <h3>Gift Letter Requirements</h3>
    <p>A valid gift letter must include:</p>
    <ul>
      <li>Donor's full legal name, address, and phone number</li>
      <li>Donor's relationship to the borrower</li>
      <li>Exact dollar amount of the gift</li>
      <li>Property address the gift is being used for</li>
      <li>Clear statement: "No repayment is expected or required"</li>
      <li>Donor's original signature with date</li>
      <li>Borrower's signature acknowledging the gift</li>
    </ul>

    <h3>Gift Funds Paper Trail</h3>
    <p>Lenders require complete documentation showing the money's journey:</p>
    <ol>
      <li>Donor's bank statement showing sufficient funds before withdrawal</li>
      <li>Proof of transfer (wire confirmation, cashier's check, canceled personal check)</li>
      <li>Recipient's bank statement showing the deposit</li>
      <li>Signed gift letter from both parties</li>
    </ol>

    <h2>401(k) and Retirement Account Funds</h2>
    <p>Using retirement funds for a down payment is increasingly common. Here's how it works:</p>

    <h3>Types of Retirement Fund Access</h3>
    <table>
      <tr>
        <th>Method</th>
        <th>Tax Implications</th>
        <th>Repayment Required</th>
      </tr>
      <tr>
        <td>401(k) Loan</td>
        <td>None (if repaid)</td>
        <td>Yes - typically 5 years</td>
      </tr>
      <tr>
        <td>401(k) Hardship Withdrawal</td>
        <td>10% penalty + income tax</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Traditional IRA Withdrawal</td>
        <td>10% penalty + income tax (exceptions may apply)</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Roth IRA Contributions</td>
        <td>None (contributions already taxed)</td>
        <td>No</td>
      </tr>
      <tr>
        <td>First-Time Homebuyer IRA Exception</td>
        <td>No 10% penalty (up to $10,000)</td>
        <td>No</td>
      </tr>
    </table>

    <h3>Documentation for Retirement Funds</h3>
    <ul>
      <li>Most recent retirement account statement</li>
      <li>Vested balance confirmation</li>
      <li>Loan or withdrawal documentation</li>
      <li>Employer/plan administrator confirmation</li>
      <li>Bank statement showing deposit of funds</li>
    </ul>

    <h2>Sale of Assets Documentation</h2>
    <p>If you're selling assets to fund your down payment, proper documentation is essential:</p>

    <h3>Vehicle Sales</h3>
    <ul>
      <li>Copy of the vehicle title in your name</li>
      <li>Bill of sale with buyer's information</li>
      <li>Kelley Blue Book or NADA valuation</li>
      <li>Bank statement showing deposit of proceeds</li>
    </ul>

    <h3>Real Estate Sales</h3>
    <ul>
      <li>HUD-1 Settlement Statement or Closing Disclosure</li>
      <li>Original purchase documentation</li>
      <li>Bank statement showing deposit of net proceeds</li>
    </ul>

    <h3>Personal Property Sales</h3>
    <ul>
      <li>Proof of ownership (receipts, appraisals)</li>
      <li>Bill of sale</li>
      <li>Fair market value documentation</li>
      <li>Deposit documentation</li>
    </ul>

    <h2>Anti-Money Laundering Compliance</h2>
    <p>Banks and mortgage lenders must comply with federal anti-money laundering regulations. Understanding these requirements helps explain why fund sourcing is so rigorous.</p>

    <h3>Bank Secrecy Act (BSA) Requirements</h3>
    <p>The BSA requires financial institutions to:</p>
    <ul>
      <li>Verify customer identity</li>
      <li>Report suspicious activity</li>
      <li>Maintain records of large transactions</li>
      <li>File Currency Transaction Reports (CTRs) for cash over $10,000</li>
    </ul>

    <h3>Red Flags That Trigger Additional Scrutiny</h3>
    <ul>
      <li>Large cash deposits (especially structured to avoid reporting thresholds)</li>
      <li>Deposits from unknown sources</li>
      <li>Funds from countries with weak AML controls</li>
      <li>Rapid movement of funds between multiple accounts</li>
      <li>Inconsistencies between stated income and deposits</li>
      <li>Funds that appear shortly before mortgage application</li>
    </ul>

    <h2>Common Fund Sourcing Mistakes</h2>
    <p>Avoid these common errors that can delay or derail your mortgage:</p>

    <h3>Mistake 1: Incomplete Bank Statements</h3>
    <p><strong>Problem:</strong> Submitting only some pages of your bank statement.</p>
    <p><strong>Solution:</strong> Always provide every page, including blank pages that say "This page intentionally left blank."</p>

    <h3>Mistake 2: Undocumented Large Deposits</h3>
    <p><strong>Problem:</strong> Having large deposits without explanation or documentation.</p>
    <p><strong>Solution:</strong> Be prepared to explain and document any deposit over 50% of your monthly income.</p>

    <h3>Mistake 3: Last-Minute Gift Funds</h3>
    <p><strong>Problem:</strong> Receiving gift funds right before closing without proper documentation.</p>
    <p><strong>Solution:</strong> Arrange gift funds early and prepare complete gift documentation in advance.</p>

    <h3>Mistake 4: Cash Deposits</h3>
    <p><strong>Problem:</strong> Making cash deposits that can't be easily traced to a source.</p>
    <p><strong>Solution:</strong> Avoid cash deposits in the months before your mortgage application. If necessary, document the source thoroughly.</p>

    <h3>Mistake 5: Moving Money Between Accounts</h3>
    <p><strong>Problem:</strong> Transferring funds without providing statements for both accounts.</p>
    <p><strong>Solution:</strong> Provide statements for all accounts involved in any transfers during the review period.</p>

    <h2>How to Prepare Your Fund Sourcing Documentation</h2>
    <p>Follow this timeline to ensure smooth fund verification:</p>

    <h3>3-6 Months Before Applying</h3>
    <ul>
      <li>Open a dedicated savings account for your down payment</li>
      <li>Set up automatic transfers from your paycheck</li>
      <li>Stop making cash deposits</li>
      <li>Consolidate funds from multiple accounts (if desired)</li>
    </ul>

    <h3>2-3 Months Before Applying</h3>
    <ul>
      <li>Request gift funds if needed</li>
      <li>Sell any assets you plan to liquidate</li>
      <li>Document all large transactions</li>
      <li>Review statements for any unexplained deposits</li>
    </ul>

    <h3>At Application</h3>
    <ul>
      <li>Gather two complete months of statements for all accounts</li>
      <li>Prepare gift letters (if applicable)</li>
      <li>Collect supporting documentation for all fund sources</li>
      <li>Create a summary of all fund sources and amounts</li>
    </ul>

    <h2>Fund Sourcing by Loan Type</h2>
    <p>Different loan programs have specific fund sourcing requirements:</p>

    <h3>Conventional Loans (Fannie Mae/Freddie Mac)</h3>
    <ul>
      <li>Minimum 3% down payment from acceptable sources</li>
      <li>Gift funds allowed for primary residence purchases</li>
      <li>Investment property purchases may require own funds</li>
      <li>60-day seasoning requirement for most funds</li>
    </ul>

    <h3>FHA Loans</h3>
    <ul>
      <li>Minimum 3.5% down payment</li>
      <li>More flexible gift fund sources (employers, charities)</li>
      <li>Down Payment Assistance (DPA) programs allowed</li>
      <li>Seller contributions limited to 6% of purchase price</li>
    </ul>

    <h3>VA Loans</h3>
    <ul>
      <li>No down payment required (100% financing)</li>
      <li>Closing costs must be documented if paying cash</li>
      <li>Gift funds limited to close family members</li>
      <li>Seller can contribute up to 4% for closing costs</li>
    </ul>

    <h3>USDA Loans</h3>
    <ul>
      <li>No down payment required</li>
      <li>Closing costs must be documented</li>
      <li>Gift funds allowed with relationship documentation</li>
      <li>Seller can contribute up to 6%</li>
    </ul>

    <h2>Using This Calculator</h2>
    <p>Our Fund Sourcing Calculator helps you track all your down payment sources and identify any gaps:</p>

    <h3>Input Fields</h3>
    <ul>
      <li><strong>Total Funds Needed:</strong> Your down payment + estimated closing costs</li>
      <li><strong>Funds from Savings:</strong> Money in checking/savings accounts (seasoned 60+ days)</li>
      <li><strong>Funds from 401(k):</strong> Retirement account withdrawals or loans</li>
      <li><strong>Funds from Gift:</strong> Gift money from acceptable donors</li>
      <li><strong>Funds from Sale of Asset:</strong> Proceeds from selling vehicles, property, etc.</li>
      <li><strong>Funds from Other Sources:</strong> Other documented fund sources</li>
    </ul>

    <h3>Calculator Results</h3>
    <ul>
      <li>Total documented funds from all sources</li>
      <li>Funding gap (if any) that needs to be addressed</li>
      <li>Verification requirements for each source</li>
      <li>Whether a gift letter is needed</li>
      <li>Documentation checklist</li>
      <li>Risk assessment for your fund sourcing</li>
    </ul>

    <h2>Professional Tips for Fund Sourcing Success</h2>
    <ul>
      <li><strong>Start Early:</strong> Begin organizing your funds 3-6 months before applying</li>
      <li><strong>Keep Everything:</strong> Save all receipts, statements, and transfer confirmations</li>
      <li><strong>Be Consistent:</strong> Use the same accounts throughout the mortgage process</li>
      <li><strong>Communicate:</strong> Tell your loan officer about all fund sources upfront</li>
      <li><strong>Get Ahead of Problems:</strong> Address any questionable deposits before they become issues</li>
      <li><strong>Work with Professionals:</strong> A good loan officer can guide you through complex fund sourcing</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalFundsNeeded',
        label: 'Total Funds Needed (Down Payment + Closing Costs) ($)',
        type: 'number',
        defaultValue: 75000,
      },
      {
        name: 'fundsFromSavings',
        label: 'Funds from Savings/Checking Accounts ($)',
        type: 'number',
        defaultValue: 40000,
      },
      {
        name: 'fundsFrom401k',
        label: 'Funds from 401(k)/IRA ($)',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'fundsFromGift',
        label: 'Funds from Gift ($)',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'fundsFromSaleOfAsset',
        label: 'Funds from Sale of Asset ($)',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'fundsFromOther',
        label: 'Funds from Other Sources ($)',
        type: 'number',
        defaultValue: 0,
      },
    ],
    results: [
      { label: 'Total Documented Funds', isCurrency: true },
      { label: 'Funding Status', isCurrency: false },
      { label: 'Funding Gap/Surplus', isCurrency: true },
      { label: 'Gift Letter Required', isCurrency: false },
      { label: 'Retirement Account Documentation Required', isCurrency: false },
      { label: 'Asset Sale Documentation Required', isCurrency: false },
      { label: 'Verification Complexity', isCurrency: false },
      { label: 'Documentation Checklist', isCurrency: false },
    ],
    calculate: (values) => {
      const { totalFundsNeeded, fundsFromSavings, fundsFrom401k, fundsFromGift, fundsFromSaleOfAsset, fundsFromOther } = values;
      
      const totalDocumentedFunds = fundsFromSavings + fundsFrom401k + fundsFromGift + fundsFromSaleOfAsset + fundsFromOther;
      const fundingGap = totalDocumentedFunds - totalFundsNeeded;
      
      let fundingStatus = '';
      if (fundingGap >= 0) {
        fundingStatus = 'Fully Funded ✓';
      } else if (fundingGap >= -5000) {
        fundingStatus = 'Nearly Funded - Small Gap';
      } else {
        fundingStatus = 'Funding Gap - Additional Sources Needed';
      }
      
      const giftLetterRequired = fundsFromGift > 0 ? 'Yes - Gift letter and donor documentation required' : 'No';
      const retirementDocsRequired = fundsFrom401k > 0 ? 'Yes - Account statement and withdrawal docs required' : 'No';
      const assetSaleDocsRequired = fundsFromSaleOfAsset > 0 ? 'Yes - Bill of sale and ownership proof required' : 'No';
      
      let complexityScore = 0;
      if (fundsFromGift > 0) complexityScore += 2;
      if (fundsFrom401k > 0) complexityScore += 1;
      if (fundsFromSaleOfAsset > 0) complexityScore += 1;
      if (fundsFromOther > 0) complexityScore += 2;
      
      let verificationComplexity = '';
      if (complexityScore === 0) {
        verificationComplexity = 'Low - Standard bank statements only';
      } else if (complexityScore <= 2) {
        verificationComplexity = 'Moderate - Some additional documentation needed';
      } else if (complexityScore <= 4) {
        verificationComplexity = 'High - Multiple documentation requirements';
      } else {
        verificationComplexity = 'Very High - Extensive documentation needed';
      }
      
      let checklist = [];
      checklist.push('2 months bank statements for all accounts');
      if (fundsFromGift > 0) {
        checklist.push('Gift letter signed by donor and borrower');
        checklist.push('Donor bank statement showing withdrawal');
        checklist.push('Wire/check confirmation');
      }
      if (fundsFrom401k > 0) {
        checklist.push('Retirement account statement');
        checklist.push('Withdrawal/loan documentation');
        checklist.push('Vested balance confirmation');
      }
      if (fundsFromSaleOfAsset > 0) {
        checklist.push('Title/ownership documentation');
        checklist.push('Bill of sale');
        checklist.push('Fair market value proof');
      }
      if (fundsFromOther > 0) {
        checklist.push('Source documentation for other funds');
        checklist.push('Written explanation letter');
      }
      
      return [
        { label: 'Total Documented Funds', value: totalDocumentedFunds.toFixed(2), isCurrency: true },
        { label: 'Funding Status', value: fundingStatus },
        { label: 'Funding Gap/Surplus', value: fundingGap.toFixed(2), isCurrency: true },
        { label: 'Gift Letter Required', value: giftLetterRequired },
        { label: 'Retirement Account Documentation Required', value: retirementDocsRequired },
        { label: 'Asset Sale Documentation Required', value: assetSaleDocsRequired },
        { label: 'Verification Complexity', value: verificationComplexity },
        { label: 'Documentation Checklist', value: checklist.join('; ') },
      ];
    },
  },
};
