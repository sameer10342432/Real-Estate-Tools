import { CalculatorContent } from '@/types';

export const SEASONED_FUNDS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Seasoned Funds Calculator',
  description: 'Calculate if your down payment funds are properly seasoned (60+ days in account) to meet mortgage lender requirements. Check seasoning status and documentation needs.',
  icon: 'Icon',
  category: 'Mortgage Qualification',
  slug: 'seasoned-funds-calculator',
  metaTitle: 'Seasoned Funds Calculator | 60-Day Rule Checker',
  metaDescription: 'Check if your down payment funds meet the 60-day seasoning requirement for mortgage approval. Calculate seasoning status and documentation needs.',
  article: {
    title: "Seasoned Funds Calculator: Understanding the 60-Day Rule for Mortgage Approval",
    content: `
    <h2>What Are Seasoned Funds?</h2>
    <p>Seasoned funds are monies that have been held in your bank account for a specific period, typically 60 days or more. Mortgage lenders require funds to be "seasoned" to verify that your down payment comes from legitimate, stable sources rather than borrowed money or unexplained deposits that could indicate financial risk.</p>

    <p>The term "seasoning" comes from the financial industry practice of letting funds "age" in an account long enough to establish a clear paper trail. Think of it like aging fine wine—the longer money sits in your account, the more "aged" or "seasoned" it becomes, making it more acceptable to lenders.</p>

    <h3>Why Do Lenders Require Seasoned Funds?</h3>
    <p>Lenders require seasoned funds for several critical reasons:</p>
    <ul>
      <li><strong>Fraud Prevention:</strong> Prevents borrowers from taking out undisclosed loans to cover the down payment</li>
      <li><strong>Financial Stability:</strong> Demonstrates you have consistent savings habits</li>
      <li><strong>Regulatory Compliance:</strong> Meets federal anti-money laundering (AML) requirements</li>
      <li><strong>Risk Assessment:</strong> Helps lenders evaluate your true financial position</li>
      <li><strong>Underwriting Standards:</strong> Required by Fannie Mae, Freddie Mac, FHA, VA, and USDA guidelines</li>
    </ul>

    <h2>The 60-Day Seasoning Rule Explained</h2>
    <p>The standard seasoning period for most conventional loans is 60 days. This means lenders want to see that your funds have been in your account for at least two full statement cycles before you apply for a mortgage.</p>

    <h3>How the 60-Day Rule Works</h3>
    <p>When you apply for a mortgage, the lender will request your two most recent bank statements. They'll examine:</p>
    <ul>
      <li><strong>Account Balances:</strong> Current balance and average daily balance</li>
      <li><strong>Deposit History:</strong> All deposits during the 60-day period</li>
      <li><strong>Large Deposits:</strong> Any deposits exceeding 50% of your monthly income</li>
      <li><strong>Source of Funds:</strong> Origin of any unusual or large deposits</li>
      <li><strong>Account Ownership:</strong> Verification that you own the account</li>
    </ul>

    <h3>What Counts as a "Large Deposit"?</h3>
    <p>A large deposit is typically defined as any single deposit that exceeds 50% of your gross monthly income. For example:</p>
    <ul>
      <li>If you earn $6,000/month, any deposit over $3,000 requires explanation</li>
      <li>If you earn $10,000/month, any deposit over $5,000 requires explanation</li>
      <li>Multiple smaller deposits that appear related may also be flagged</li>
    </ul>

    <h2>Seasoning Requirements by Loan Type</h2>
    <p>Different loan programs have different seasoning requirements:</p>

    <table>
      <tr>
        <th>Loan Type</th>
        <th>Seasoning Period</th>
        <th>Special Requirements</th>
      </tr>
      <tr>
        <td>Conventional (Fannie Mae/Freddie Mac)</td>
        <td>60 days</td>
        <td>2 months bank statements required</td>
      </tr>
      <tr>
        <td>FHA Loans</td>
        <td>60 days</td>
        <td>Gift funds allowed with proper documentation</td>
      </tr>
      <tr>
        <td>VA Loans</td>
        <td>60 days</td>
        <td>Gift funds from close family members only</td>
      </tr>
      <tr>
        <td>USDA Loans</td>
        <td>60 days</td>
        <td>Stricter gift documentation requirements</td>
      </tr>
      <tr>
        <td>Jumbo Loans</td>
        <td>60-90 days</td>
        <td>Often require 3 months of statements</td>
      </tr>
      <tr>
        <td>Non-QM Loans</td>
        <td>Varies</td>
        <td>May have more flexible requirements</td>
      </tr>
    </table>

    <h2>Acceptable Sources of Down Payment Funds</h2>
    <p>Not all money sources are treated equally by mortgage lenders. Understanding acceptable sources helps you prepare your application:</p>

    <h3>Sources That Don't Require Seasoning</h3>
    <ul>
      <li><strong>Payroll Deposits:</strong> Regular paychecks deposited via direct deposit</li>
      <li><strong>Social Security Benefits:</strong> Monthly government benefit payments</li>
      <li><strong>Pension Payments:</strong> Regular retirement income</li>
      <li><strong>Rental Income:</strong> Documented rental payments you receive</li>
      <li><strong>Alimony/Child Support:</strong> Court-ordered regular payments</li>
    </ul>

    <h3>Sources That Require Documentation</h3>
    <ul>
      <li><strong>Gift Funds:</strong> Require a gift letter and donor documentation</li>
      <li><strong>Sale of Assets:</strong> Require bill of sale and proof of ownership</li>
      <li><strong>401(k)/IRA Withdrawals:</strong> Require account statements and withdrawal documentation</li>
      <li><strong>Stock/Investment Sales:</strong> Require brokerage statements showing sale</li>
      <li><strong>Cash Deposits:</strong> May require additional verification of source</li>
      <li><strong>Business Income:</strong> Requires profit/loss statements or tax returns</li>
    </ul>

    <h3>Sources That May Be Problematic</h3>
    <ul>
      <li><strong>Cash:</strong> Large cash deposits are heavily scrutinized</li>
      <li><strong>Cryptocurrency:</strong> Volatile and difficult to document</li>
      <li><strong>Gambling Winnings:</strong> May require extensive documentation</li>
      <li><strong>Loans from Friends:</strong> Generally not acceptable unless properly structured</li>
      <li><strong>Unexplained Deposits:</strong> Will trigger underwriting questions</li>
    </ul>

    <h2>Gift Funds and Seasoning Requirements</h2>
    <p>Gift funds are a common source of down payment assistance, but they have specific requirements:</p>

    <h3>Gift Letter Requirements</h3>
    <p>A valid gift letter must include:</p>
    <ul>
      <li>Donor's name, address, and phone number</li>
      <li>Donor's relationship to the borrower</li>
      <li>Dollar amount of the gift</li>
      <li>Property address</li>
      <li>Statement that no repayment is expected or required</li>
      <li>Donor's signature and date</li>
    </ul>

    <h3>Who Can Provide Gift Funds?</h3>
    <table>
      <tr>
        <th>Loan Type</th>
        <th>Acceptable Gift Donors</th>
      </tr>
      <tr>
        <td>Conventional</td>
        <td>Family members, fiancé/fiancée, domestic partner</td>
      </tr>
      <tr>
        <td>FHA</td>
        <td>Family, employers, labor unions, charitable organizations</td>
      </tr>
      <tr>
        <td>VA</td>
        <td>Close family members only (parents, siblings, grandparents)</td>
      </tr>
      <tr>
        <td>USDA</td>
        <td>Family members, close friends (with documentation)</td>
      </tr>
    </table>

    <h3>Gift Funds Paper Trail</h3>
    <p>Lenders require documentation showing:</p>
    <ul>
      <li>Donor's bank statement showing withdrawal</li>
      <li>Recipient's bank statement showing deposit</li>
      <li>Wire transfer confirmation or canceled check</li>
      <li>Gift letter signed by both parties</li>
    </ul>

    <h2>Sale of Assets: Documentation Requirements</h2>
    <p>If you're using proceeds from selling assets for your down payment, you'll need comprehensive documentation:</p>

    <h3>Vehicle Sales</h3>
    <ul>
      <li>Copy of the title (showing your name)</li>
      <li>Bill of sale with buyer information</li>
      <li>Bank statement showing deposit</li>
      <li>Kelley Blue Book or NADA value documentation</li>
    </ul>

    <h3>Real Estate Sales</h3>
    <ul>
      <li>HUD-1 Settlement Statement or Closing Disclosure</li>
      <li>Sales contract</li>
      <li>Title documents</li>
      <li>Bank statement showing deposit of proceeds</li>
    </ul>

    <h3>Stock/Investment Sales</h3>
    <ul>
      <li>Brokerage statement showing the sale</li>
      <li>Confirmation of transfer to bank account</li>
      <li>Documentation of original ownership</li>
    </ul>

    <h2>How to Calculate Your Seasoning Status</h2>
    <p>Use our calculator to determine if your funds are properly seasoned. Here's what the calculation considers:</p>

    <h3>Seasoning Percentage</h3>
    <p>Your seasoning percentage is calculated as:</p>
    <p><strong>Seasoning % = (Days in Account / 60 days) × 100</strong></p>
    <ul>
      <li>100% or higher = Fully seasoned</li>
      <li>75-99% = Nearly seasoned (may need to wait a few more days)</li>
      <li>50-74% = Partially seasoned (30+ more days needed)</li>
      <li>Below 50% = Not seasoned (significant wait required)</li>
    </ul>

    <h3>Funds Coverage Status</h3>
    <p>Your funds coverage is calculated as:</p>
    <p><strong>Coverage % = (Available Funds / Total Funds Needed) × 100</strong></p>
    <ul>
      <li>100%+ = Fully funded</li>
      <li>80-99% = Nearly funded (may need additional sources)</li>
      <li>Below 80% = Funding gap exists</li>
    </ul>

    <h2>Common Seasoning Issues and Solutions</h2>
    <p>Here are frequent problems borrowers encounter and how to address them:</p>

    <h3>Problem: Large Unexplained Deposit</h3>
    <p><strong>Solution:</strong> Gather documentation showing the source. If it was a reimbursement, get a letter from the employer. If it was a tax refund, provide the tax return. If it was a gift, prepare a gift letter.</p>

    <h3>Problem: Funds Transferred Between Accounts</h3>
    <p><strong>Solution:</strong> Provide statements from both accounts showing the transfer. This is called "paper trailing" and is common in underwriting.</p>

    <h3>Problem: Cash Deposits</h3>
    <p><strong>Solution:</strong> If the cash came from a verifiable source (cash business, etc.), provide documentation. If you cannot document the source, the lender may exclude these funds from your available assets.</p>

    <h3>Problem: Recent Gift Deposit</h3>
    <p><strong>Solution:</strong> Provide a complete gift letter and documentation of the donor's ability to give. Some lenders allow gift funds at closing even if not seasoned, as long as documentation is complete.</p>

    <h3>Problem: Funds in Multiple Accounts</h3>
    <p><strong>Solution:</strong> Consolidate funds well before applying, or be prepared to provide statements for all accounts.</p>

    <h2>Preparing Your Funds for Mortgage Application</h2>
    <p>Follow these steps to ensure your funds are properly seasoned:</p>

    <h3>60-90 Days Before Applying</h3>
    <ul>
      <li>Consolidate funds into one or two primary accounts</li>
      <li>Stop making large cash deposits</li>
      <li>Document any planned large deposits (bonus, tax refund, etc.)</li>
      <li>Request gift funds early if needed</li>
    </ul>

    <h3>30-60 Days Before Applying</h3>
    <ul>
      <li>Review all account statements for unexplained deposits</li>
      <li>Gather documentation for any large transactions</li>
      <li>Obtain gift letters if applicable</li>
      <li>Keep all payroll deposits consistent</li>
    </ul>

    <h3>At Application</h3>
    <ul>
      <li>Provide two months of complete bank statements</li>
      <li>Include all pages, even blank ones</li>
      <li>Be prepared to explain any unusual activity</li>
      <li>Have documentation ready for large deposits</li>
    </ul>

    <h2>Documentation Checklist by Fund Source</h2>
    <p>Use this checklist to ensure you have proper documentation:</p>

    <h3>Savings/Checking Accounts</h3>
    <ul>
      <li>☐ Two months of complete statements</li>
      <li>☐ All pages included</li>
      <li>☐ Account holder name matches loan application</li>
      <li>☐ Current balance visible</li>
    </ul>

    <h3>Investment Accounts</h3>
    <ul>
      <li>☐ Two months of statements</li>
      <li>☐ Current value documentation</li>
      <li>☐ Vesting schedule (if applicable)</li>
      <li>☐ Liquidation timeline</li>
    </ul>

    <h3>401(k)/IRA Accounts</h3>
    <ul>
      <li>☐ Most recent statement</li>
      <li>☐ Vested balance confirmation</li>
      <li>☐ Withdrawal/loan terms</li>
      <li>☐ Tax implications documentation</li>
    </ul>

    <h3>Gift Funds</h3>
    <ul>
      <li>☐ Completed gift letter</li>
      <li>☐ Donor's bank statement</li>
      <li>☐ Wire transfer/check documentation</li>
      <li>☐ Proof of relationship</li>
    </ul>

    <h2>How to Use This Calculator</h2>
    <p>Enter your fund details to determine your seasoning status:</p>
    <ul>
      <li><strong>Fund Amount:</strong> Enter the total amount of funds in the account</li>
      <li><strong>Account Type:</strong> Select checking, savings, or investment account</li>
      <li><strong>Days in Account:</strong> Number of days the funds have been in the account</li>
      <li><strong>Total Funds Needed:</strong> Your total down payment + closing costs needed</li>
      <li><strong>Fund Source:</strong> Select how the funds were obtained</li>
    </ul>

    <p>The calculator will provide:</p>
    <ul>
      <li>Seasoning status (fully seasoned, nearly seasoned, or not seasoned)</li>
      <li>Seasoning percentage (days in account vs. 60-day requirement)</li>
      <li>Funds coverage status (do you have enough funds?)</li>
      <li>Days remaining until fully seasoned</li>
      <li>Required documentation based on fund source</li>
      <li>Lender requirement recommendations</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'fundAmount',
        label: 'Fund Amount ($)',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'accountType',
        label: 'Account Type',
        type: 'select',
        defaultValue: 'checking',
        options: [
          { value: 'checking', label: 'Checking Account' },
          { value: 'savings', label: 'Savings Account' },
          { value: 'investment', label: 'Investment Account' },
          { value: 'retirement', label: 'Retirement Account (401k/IRA)' },
        ],
      },
      {
        name: 'daysInAccount',
        label: 'Days Funds Have Been in Account',
        type: 'number',
        defaultValue: 45,
      },
      {
        name: 'totalFundsNeeded',
        label: 'Total Funds Needed (Down Payment + Closing Costs) ($)',
        type: 'number',
        defaultValue: 60000,
      },
      {
        name: 'fundSource',
        label: 'Source of Funds',
        type: 'select',
        defaultValue: 'savings',
        options: [
          { value: 'savings', label: 'Personal Savings' },
          { value: 'gift', label: 'Gift from Family' },
          { value: 'saleOfAsset', label: 'Sale of Asset (Car, Property, etc.)' },
          { value: 'inheritance', label: 'Inheritance' },
          { value: '401k', label: '401(k)/IRA Withdrawal' },
          { value: 'stockSale', label: 'Stock/Investment Sale' },
          { value: 'bonus', label: 'Employment Bonus' },
          { value: 'taxRefund', label: 'Tax Refund' },
          { value: 'other', label: 'Other Source' },
        ],
      },
    ],
    results: [
      { label: 'Seasoning Status', isCurrency: false },
      { label: 'Seasoning Percentage', isCurrency: false },
      { label: 'Days Remaining Until Fully Seasoned', isCurrency: false },
      { label: 'Funds Coverage Status', isCurrency: false },
      { label: 'Funding Gap/Surplus', isCurrency: true },
      { label: 'Documentation Required', isCurrency: false },
      { label: 'Lender Requirement Level', isCurrency: false },
      { label: 'Recommended Action', isCurrency: false },
    ],
    calculate: (values) => {
      const { fundAmount, accountType, daysInAccount, totalFundsNeeded, fundSource } = values;
      
      const seasoningRequirement = 60;
      const seasoningPercentage = (daysInAccount / seasoningRequirement) * 100;
      const daysRemaining = Math.max(0, seasoningRequirement - daysInAccount);
      
      let seasoningStatus = '';
      if (seasoningPercentage >= 100) {
        seasoningStatus = 'Fully Seasoned ✓';
      } else if (seasoningPercentage >= 75) {
        seasoningStatus = 'Nearly Seasoned (Wait ' + daysRemaining + ' more days)';
      } else if (seasoningPercentage >= 50) {
        seasoningStatus = 'Partially Seasoned';
      } else {
        seasoningStatus = 'Not Seasoned - Additional Documentation Required';
      }
      
      const fundingGap = fundAmount - totalFundsNeeded;
      let fundsStatus = '';
      if (fundingGap >= 0) {
        fundsStatus = 'Fully Funded ✓ (Surplus: $' + fundingGap.toLocaleString() + ')';
      } else {
        fundsStatus = 'Funding Gap: Need $' + Math.abs(fundingGap).toLocaleString() + ' more';
      }
      
      let documentation = '';
      switch (fundSource) {
        case 'savings':
          documentation = '2 months bank statements';
          break;
        case 'gift':
          documentation = 'Gift letter, donor bank statement, wire/check proof, relationship documentation';
          break;
        case 'saleOfAsset':
          documentation = 'Bill of sale, title/ownership proof, deposit documentation';
          break;
        case 'inheritance':
          documentation = 'Estate documents, probate records, deposit documentation';
          break;
        case '401k':
          documentation = 'Account statement, withdrawal documentation, vesting confirmation';
          break;
        case 'stockSale':
          documentation = 'Brokerage statement showing sale, transfer confirmation';
          break;
        case 'bonus':
          documentation = 'Employer letter confirming bonus, pay stub showing deposit';
          break;
        case 'taxRefund':
          documentation = 'Tax return, IRS refund notice, deposit documentation';
          break;
        default:
          documentation = 'Source documentation, deposit proof, written explanation';
      }
      
      let lenderRequirement = '';
      if (fundSource === 'savings' && seasoningPercentage >= 100) {
        lenderRequirement = 'Standard - Minimal scrutiny expected';
      } else if (fundSource === 'gift') {
        lenderRequirement = 'High - Gift documentation heavily scrutinized';
      } else if (['saleOfAsset', 'inheritance', '401k', 'stockSale'].includes(fundSource)) {
        lenderRequirement = 'Moderate - Paper trail documentation required';
      } else {
        lenderRequirement = 'Variable - Depends on completeness of documentation';
      }
      
      let recommendedAction = '';
      if (seasoningPercentage >= 100 && fundingGap >= 0) {
        recommendedAction = 'Ready to proceed with mortgage application';
      } else if (seasoningPercentage < 100 && fundingGap >= 0) {
        recommendedAction = 'Wait ' + daysRemaining + ' days for full seasoning, or provide source documentation';
      } else if (seasoningPercentage >= 100 && fundingGap < 0) {
        recommendedAction = 'Secure additional funds of $' + Math.abs(fundingGap).toLocaleString();
      } else {
        recommendedAction = 'Wait for seasoning AND secure additional funds';
      }
      
      return [
        { label: 'Seasoning Status', value: seasoningStatus },
        { label: 'Seasoning Percentage', value: Math.min(100, seasoningPercentage).toFixed(1) + '%' },
        { label: 'Days Remaining Until Fully Seasoned', value: daysRemaining > 0 ? daysRemaining + ' days' : 'N/A - Already Seasoned' },
        { label: 'Funds Coverage Status', value: fundsStatus },
        { label: 'Funding Gap/Surplus', value: fundingGap.toFixed(2), isCurrency: true },
        { label: 'Documentation Required', value: documentation },
        { label: 'Lender Requirement Level', value: lenderRequirement },
        { label: 'Recommended Action', value: recommendedAction },
      ];
    },
  },
};
