import { CalculatorContent } from '@/types';

export const CREDIT_RE_AGE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Credit Re-Age Calculator',
  description: 'Calculate when delinquent accounts will fall off your credit report and understand the re-aging timeline for credit improvement.',
  slug: 'credit-re-age-calculator',
  icon: '📅',
  category: 'Financial Planning',
  metaTitle: 'Credit Re-Age Calculator - When Do Collections Fall Off? | Free Tool',
  metaDescription: 'Free credit re-age calculator to determine when negative items fall off your credit report. Calculate the 7-year timeline and understand legitimate re-aging rules.',
  article: {
    title: 'Understanding Credit Re-Aging',
    content: `
    <h2>What is Credit Re-Aging?</h2>
    <p>Credit re-aging refers to two different concepts in credit management. <strong>Legitimate re-aging</strong> is when a creditor restores a delinquent account to current status after you make agreed-upon payments. <strong>Illegal re-aging</strong> occurs when debt collectors falsely update the date of first delinquency (DOFD) to keep negative information on your report longer than legally allowed.</p>
    
    <h3>The 7-Year Reporting Rule</h3>
    <p>Under the Fair Credit Reporting Act (FCRA), most negative information must be removed from your credit report after 7 years:</p>
    <ul>
      <li><strong>Start Date:</strong> Calculated from the Date of First Delinquency (DOFD)</li>
      <li><strong>7 Years + 180 Days:</strong> The maximum reporting period</li>
      <li><strong>Cannot Be Extended:</strong> Selling debt to collectors doesn't restart the clock</li>
      <li><strong>Cannot Be Shortened:</strong> Paying a collection doesn't remove it early</li>
    </ul>

    <h3>What Counts as the Date of First Delinquency?</h3>
    <p>The DOFD is the date when:</p>
    <ul>
      <li>You first became 30+ days late and never caught up</li>
      <li>The account was charged off by the original creditor</li>
      <li>The delinquency began that led to the collection</li>
    </ul>
    <p>Important: The DOFD stays the same even if the debt is sold to multiple collectors.</p>

    <h3>Legitimate Re-Aging (Good)</h3>
    <p>Creditors may legitimately re-age your account to help you:</p>
    <ul>
      <li>After you complete a hardship program</li>
      <li>When you make 3 consecutive on-time payments (some creditors)</li>
      <li>As part of a negotiated settlement agreement</li>
      <li>When you bring the account fully current</li>
    </ul>
    <p>This type of re-aging brings your account to "current" status and stops the delinquency from progressing.</p>

    <h3>Illegal Re-Aging (Bad)</h3>
    <p>Debt collectors are prohibited from:</p>
    <ul>
      <li>Reporting a newer DOFD to extend the 7-year period</li>
      <li>Listing the collection as new activity each time debt is sold</li>
      <li>Using the date they acquired the debt as the DOFD</li>
      <li>Resetting the clock when you make a partial payment</li>
    </ul>
    <p>If this happens to you, file disputes with the credit bureaus and consider an FCRA violation claim.</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your account information to calculate:</p>
    <ul>
      <li><strong>Date of First Delinquency:</strong> When you first became late</li>
      <li><strong>Current Date:</strong> Today's date for calculation</li>
      <li><strong>Account Type:</strong> Affects some calculation specifics</li>
    </ul>

    <h3>Timeline of Credit Events</h3>
    <ul>
      <li><strong>30 Days Late:</strong> First negative mark appears</li>
      <li><strong>60-90 Days Late:</strong> Increasingly severe impact</li>
      <li><strong>120-180 Days Late:</strong> Account typically charged off</li>
      <li><strong>Charge-Off:</strong> Sold to collections (DOFD is established)</li>
      <li><strong>7 Years + 180 Days:</strong> Negative mark must be removed</li>
    </ul>

    <h3>Strategies for Managing Old Debt</h3>
    <ul>
      <li><strong>Pay for Delete:</strong> Negotiate removal in exchange for payment</li>
      <li><strong>Dispute Inaccuracies:</strong> Challenge incorrect DOFD or account details</li>
      <li><strong>Wait It Out:</strong> Sometimes best to let it fall off naturally</li>
      <li><strong>Statute of Limitations:</strong> Know your state's SOL for debt collection</li>
      <li><strong>Goodwill Letters:</strong> Request removal from original creditors</li>
    </ul>

    <h3>Credit Score Impact Over Time</h3>
    <p>As negative items age, their impact decreases:</p>
    <ul>
      <li>Years 1-2: Maximum negative impact</li>
      <li>Years 3-4: Impact begins to decrease</li>
      <li>Years 5-6: Significantly reduced impact</li>
      <li>Year 7+: Item should be removed</li>
    </ul>

    <h3>Protecting Your Rights</h3>
    <ul>
      <li>Request written validation of any debt</li>
      <li>Get the original DOFD in writing</li>
      <li>Monitor your credit reports for illegal re-aging</li>
      <li>File CFPB complaints for violations</li>
      <li>Consider consulting a consumer law attorney</li>
    </ul>

    <h3>Special Cases</h3>
    <ul>
      <li><strong>Bankruptcy:</strong> Stays on report 7-10 years</li>
      <li><strong>Tax Liens:</strong> Paid liens removed after 7 years; unpaid stays until paid + 7 years</li>
      <li><strong>Student Loans:</strong> Can report indefinitely if in default</li>
      <li><strong>Child Support:</strong> Can report indefinitely while in arrears</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'dofdMonth',
        label: 'DOFD Month (1-12)',
        type: 'number',
        defaultValue: 6,
      },
      {
        name: 'dofdYear',
        label: 'DOFD Year (e.g., 2020)',
        type: 'number',
        defaultValue: 2020,
      },
      {
        name: 'accountType',
        label: 'Account Type',
        type: 'select',
        defaultValue: 'collection',
        options: [
          { value: 'collection', label: 'Collection Account' },
          { value: 'chargeoff', label: 'Charge-Off' },
          { value: 'late_payment', label: 'Late Payment (30-90 days)' },
          { value: 'bankruptcy', label: 'Bankruptcy' },
        ],
      },
      {
        name: 'originalBalance',
        label: 'Original Balance ($)',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'currentBalance',
        label: 'Current Balance Owed ($)',
        type: 'number',
        defaultValue: 5500,
      },
    ],
    results: [
      { label: 'Date of First Delinquency', isCurrency: false },
      { label: 'Removal Date (7 years + 180 days)', isCurrency: false },
      { label: 'Days Until Removal', isCurrency: false },
      { label: 'Months Until Removal', isCurrency: false },
      { label: 'Years Until Removal', isCurrency: false },
      { label: 'Time Already Elapsed', isCurrency: false },
      { label: 'Percentage Complete', isCurrency: false },
      { label: 'Status', isCurrency: false },
    ],
    calculate: (values) => {
      const { dofdMonth, dofdYear, accountType, originalBalance, currentBalance } = values;
      
      const dofd = new Date(dofdYear, dofdMonth - 1, 1);
      const today = new Date();
      
      let reportingYears = 7;
      if (accountType === 'bankruptcy') {
        reportingYears = 10;
      }
      
      const removalDate = new Date(dofd);
      removalDate.setFullYear(removalDate.getFullYear() + reportingYears);
      removalDate.setDate(removalDate.getDate() + 180);
      
      const msPerDay = 24 * 60 * 60 * 1000;
      const daysUntilRemoval = Math.max(0, Math.ceil((removalDate.getTime() - today.getTime()) / msPerDay));
      const monthsUntilRemoval = Math.max(0, Math.ceil(daysUntilRemoval / 30));
      const yearsUntilRemoval = (daysUntilRemoval / 365).toFixed(1);
      
      const totalDays = Math.ceil((removalDate.getTime() - dofd.getTime()) / msPerDay);
      const elapsedDays = totalDays - daysUntilRemoval;
      const percentComplete = Math.min(100, (elapsedDays / totalDays) * 100).toFixed(1);
      
      const elapsedYears = (elapsedDays / 365).toFixed(1);
      
      let status = "Active - Still on credit report";
      if (daysUntilRemoval <= 0) {
        status = "Should be removed - Past expiration date";
      } else if (daysUntilRemoval <= 180) {
        status = "Nearing removal - Less than 6 months";
      } else if (daysUntilRemoval <= 365) {
        status = "Approaching removal - Less than 1 year";
      }
      
      const dofdFormatted = `${dofdMonth}/${dofdYear}`;
      const removalFormatted = `${removalDate.getMonth() + 1}/${removalDate.getFullYear()}`;

      return [
        { label: 'Date of First Delinquency', value: dofdFormatted, isCurrency: false },
        { label: 'Removal Date (7 years + 180 days)', value: removalFormatted, isCurrency: false },
        { label: 'Days Until Removal', value: daysUntilRemoval.toString(), isCurrency: false },
        { label: 'Months Until Removal', value: monthsUntilRemoval.toString(), isCurrency: false },
        { label: 'Years Until Removal', value: yearsUntilRemoval, isCurrency: false },
        { label: 'Time Already Elapsed', value: `${elapsedYears} years`, isCurrency: false },
        { label: 'Percentage Complete', value: `${percentComplete}%`, isCurrency: false },
        { label: 'Status', value: status, isCurrency: false },
      ];
    },
  },
};
