import { CalculatorContent } from '@/types';

export const MortgageApplicationDocumentChecklistContent: CalculatorContent = {
  title: 'Mortgage Application Document Checklist',
  description: 'Complete checklist of all documents needed for mortgage application - tailored by loan type, employment status, and property type',
  icon: '📋',
  category: 'Additional Tools',
  slug: 'mortgage-application-document-checklist',
  
  metaTitle: 'Mortgage Application Document Checklist - Complete Guide | Property Tools',
  metaDescription: 'Get your personalized mortgage document checklist. Know exactly what paperwork you need for FHA, VA, Conventional, Self-Employed, and Jumbo loans.',
  
  article: {
    title: 'Complete Mortgage Application Document Checklist',
    content: `
      <h2>What is the Mortgage Application Document Checklist?</h2>
      <p>This comprehensive checklist shows you exactly which documents you need to gather for your mortgage application. It's customized based on your loan type, employment status, income sources, and property type - so you don't waste time gathering unnecessary paperwork or miss critical documents.</p>

      <h3>Why You Need This Checklist</h3>
      <ul>
        <li><strong>Faster Approval:</strong> Complete applications process 2-3 weeks faster</li>
        <li><strong>Avoid Delays:</strong> Missing documents are #1 cause of closing delays</li>
        <li><strong>Better Rates:</strong> Quick closings can lock in favorable rates before they change</li>
        <li><strong>Reduce Stress:</strong> Know exactly what's required upfront</li>
        <li><strong>Competitive Advantage:</strong> Complete applications make stronger offers</li>
      </ul>

      <h3>Universal Documents (Required for ALL Loan Types)</h3>
      <p>Every mortgage application requires these baseline documents:</p>
      
      <h4>📸 Identification</h4>
      <ul>
        <li>Government-issued photo ID (driver's license or passport)</li>
        <li>Social Security card or proof of SSN</li>
        <li>Green card or work visa (if not a U.S. citizen)</li>
      </ul>

      <h4>💰 Income Verification</h4>
      <ul>
        <li>Last 2 years of W-2 forms (all jobs)</li>
        <li>Last 2 years of federal tax returns (all schedules)</li>
        <li>Last 30 days of pay stubs (showing year-to-date earnings)</li>
        <li>Employer contact information and HR phone number</li>
      </ul>

      <h4>🏦 Assets & Bank Statements</h4>
      <ul>
        <li>Last 2 months of bank statements (all accounts)</li>
        <li>Last 2 months of investment account statements (401k, IRA, brokerage)</li>
        <li>Gift letter (if receiving down payment gift from family)</li>
        <li>Documentation of source for large deposits (over $1,000)</li>
      </ul>

      <h4>💳 Debt & Credit Information</h4>
      <ul>
        <li>List of all monthly debts (credit cards, auto loans, student loans)</li>
        <li>Account numbers and balances for all debts</li>
        <li>Explanation letters for credit issues (if applicable)</li>
      </ul>

      <h4>🏠 Property Information</h4>
      <ul>
        <li>Purchase agreement / sales contract (signed by all parties)</li>
        <li>Property address and legal description</li>
        <li>Homeowners insurance quote or policy</li>
        <li>HOA contact info and fees (if applicable)</li>
      </ul>

      <h3>Additional Documents by Employment Type</h3>
      
      <h4>W-2 Employee (Salaried)</h4>
      <ul>
        <li>✅ Standard documents above are sufficient</li>
        <li>Employment verification letter (sometimes required)</li>
        <li>Recent promotion or raise letter (if recent income increase)</li>
      </ul>

      <h4>W-2 Employee (Commission/Bonus)</h4>
      <ul>
        <li>All standard W-2 documents</li>
        <li><strong>2 years of commission/bonus history</strong> (to average income)</li>
        <li>Year-to-date commission statement</li>
        <li>Letter from employer explaining commission structure</li>
      </ul>

      <h4>Self-Employed / Business Owner</h4>
      <ul>
        <li><strong>Last 2 years of personal AND business tax returns</strong> (1040 with all schedules)</li>
        <li>Business tax returns (1065, 1120, 1120S depending on entity type)</li>
        <li>Year-to-date Profit & Loss statement</li>
        <li>Year-to-date Balance Sheet</li>
        <li>Business license and articles of incorporation</li>
        <li>CPA letter (sometimes required)</li>
        <li>2 years in same business (usually required)</li>
      </ul>

      <h4>1099 Contractor / Freelancer</h4>
      <ul>
        <li>Last 2 years of 1040 tax returns with Schedule C</li>
        <li>All 1099 forms received</li>
        <li>Year-to-date Profit & Loss</li>
        <li>Bank statements showing consistent deposits</li>
        <li>List of clients and contracts (sometimes required)</li>
      </ul>

      <h4>Retired</h4>
      <ul>
        <li>Social Security award letter</li>
        <li>Pension award letter and payment history</li>
        <li>IRA/401k distribution statements</li>
        <li>Annuity statements</li>
        <li>Last year's tax return (to verify retirement income)</li>
      </ul>

      <h3>Additional Documents by Loan Type</h3>
      
      <h4>FHA Loan</h4>
      <ul>
        <li>All universal documents</li>
        <li>HUD-1 Settlement Statement (if you owned home in last 3 years)</li>
        <li>Rental history (12 months)</li>
        <li>Explanation of credit scores below 580</li>
        <li>FHA case number (lender obtains)</li>
      </ul>

      <h4>VA Loan</h4>
      <ul>
        <li>All universal documents</li>
        <li><strong>Certificate of Eligibility (COE)</strong> - Get from VA.gov</li>
        <li>DD-214 (proof of military service)</li>
        <li>Current Leave and Earnings Statement (if active duty)</li>
        <li>VA disability award letter (if applicable)</li>
      </ul>

      <h4>USDA Loan</h4>
      <ul>
        <li>All universal documents</li>
        <li>Proof property is in eligible rural area</li>
        <li>Income verification for ALL household members (USDA has income limits)</li>
        <li>Explanation if you currently own other property</li>
      </ul>

      <h4>Jumbo Loan</h4>
      <ul>
        <li>All universal documents</li>
        <li><strong>More extensive documentation required:</strong></li>
        <li>3-6 months of bank statements (vs. 2 for conventional)</li>
        <li>Full appraisal (desktop appraisals rarely accepted)</li>
        <li>Higher reserves required (6-12 months of payments in the bank)</li>
        <li>Additional asset documentation</li>
        <li>Explanations for all credit inquiries</li>
      </ul>

      <h4>Investment Property / Non-Owner Occupied</h4>
      <ul>
        <li>All universal documents</li>
        <li>Current lease agreement (if already rented)</li>
        <li>Rental history for other investment properties (if applicable)</li>
        <li>Schedule E from tax returns (shows rental income/expenses)</li>
        <li>Higher down payment (typically 15-25%)</li>
        <li>6 months reserves (PITI payments in the bank)</li>
      </ul>

      <h3>Additional Documents by Special Circumstances</h3>
      
      <h4>Divorce/Separation</h4>
      <ul>
        <li>Complete divorce decree</li>
        <li>Property settlement agreement</li>
        <li>Child support or alimony court orders</li>
        <li>12 months proof of payments received (if using as income)</li>
        <li>12 months proof of payments made (counts against DTI)</li>
      </ul>

      <h4>Recent Job Change</h4>
      <ul>
        <li>New employer letter with salary and start date</li>
        <li>Explanation of gap in employment (if applicable)</li>
        <li>Employment in same field (usually required)</li>
        <li>30-day pay stub from new employer</li>
      </ul>

      <h4>Recent Bankruptcy or Foreclosure</h4>
      <ul>
        <li>Bankruptcy discharge papers</li>
        <li>Explanation letter</li>
        <li>2+ years of re-established credit (usually required)</li>
        <li>Proof of extenuating circumstances</li>
      </ul>

      <h4>First-Time Homebuyer</h4>
      <ul>
        <li>All standard documents</li>
        <li>12-24 months of rental payment history</li>
        <li>First-time homebuyer certificate (if using special programs)</li>
        <li>Homebuyer education certificate (sometimes required)</li>
      </ul>

      <h4>Using Gift Funds for Down Payment</h4>
      <ul>
        <li>Gift letter signed by donor (specific wording required)</li>
        <li>Proof of donor's funds (donor's bank statement)</li>
        <li>Proof funds were transferred to your account</li>
        <li>Your bank statement showing deposit</li>
        <li>Note: Gifts must come from family members (not friends)</li>
      </ul>

      <h3>Document Preparation Best Practices</h3>
      
      <h4>Organization Tips</h4>
      <ul>
        <li>Create a dedicated folder (digital or physical)</li>
        <li>Label documents clearly by category</li>
        <li>Provide documents in PDF format when possible</li>
        <li>Keep originals - you may need to mail them</li>
        <li>Make copies for your records</li>
      </ul>

      <h4>Common Document Mistakes to Avoid</h4>
      <ul>
        <li>❌ Partial bank statements (every page required, even blank pages)</li>
        <li>❌ Unsigned tax returns</li>
        <li>❌ Pay stubs that don't show year-to-date earnings</li>
        <li>❌ Illegible scans or photos</li>
        <li>❌ Documents from wrong years</li>
        <li>❌ Not explaining large deposits</li>
        <li>❌ Missing pages from statements</li>
      </ul>

      <h4>Large Deposit Explanations</h4>
      <p>Any deposit over $1,000 that isn't a regular paycheck needs documentation:</p>
      <ul>
        <li>Tax refund: Provide copy of tax return</li>
        <li>Bonus: Provide pay stub or employer letter</li>
        <li>Gift: Provide gift letter</li>
        <li>Transfer between your accounts: Provide both account statements</li>
        <li>Sale of asset: Provide bill of sale</li>
      </ul>

      <h3>Timeline: When to Gather Documents</h3>
      
      <h4>Before Pre-Approval (Now)</h4>
      <ul>
        <li>ID and SSN card</li>
        <li>Last 2 pay stubs</li>
        <li>Last 2 months bank statements</li>
        <li>Last 2 years W-2s</li>
      </ul>

      <h4>During Pre-Approval Process (Week 1)</h4>
      <ul>
        <li>Complete tax returns (2 years)</li>
        <li>All investment account statements</li>
        <li>Complete debt list with account numbers</li>
      </ul>

      <h4>After Offer Accepted (Week 2-3)</h4>
      <ul>
        <li>Purchase agreement</li>
        <li>Homeowners insurance quote</li>
        <li>Any additional documents lender requests</li>
        <li>Updated pay stubs if more than 30 days old</li>
      </ul>

      <h4>Before Closing (Week 4-6)</h4>
      <ul>
        <li>Most recent bank statement</li>
        <li>Most recent pay stub</li>
        <li>Proof of homeowners insurance payment</li>
        <li>Final walkthrough checklist</li>
      </ul>

      <h3>Documents You Don't Need to Gather (Lender Obtains)</h3>
      <ul>
        <li>Credit report (lender pulls with your permission)</li>
        <li>Appraisal (lender orders)</li>
        <li>Title search (title company handles)</li>
        <li>Verification of employment (lender contacts employer directly)</li>
        <li>Verification of deposits (lender may contact banks directly)</li>
      </ul>

      <h3>Digital Document Management</h3>
      <p>Most lenders now accept digital documents:</p>
      <ul>
        <li>Scan or photograph documents clearly</li>
        <li>Use scanning apps for better quality (Adobe Scan, CamScanner)</li>
        <li>Save as PDF format</li>
        <li>Name files clearly: "2023_W2_John_Smith.pdf"</li>
        <li>Upload to secure lender portal (don't email sensitive docs)</li>
      </ul>

      <h3>What Happens After You Submit?</h3>
      <ol>
        <li><strong>Initial Review (1-3 days):</strong> Lender reviews for completeness</li>
        <li><strong>Conditional Approval (3-7 days):</strong> Approved with conditions (more docs needed)</li>
        <li><strong>Underwriting (1-2 weeks):</strong> Detailed review of all docs</li>
        <li><strong>Clear to Close (week before closing):</strong> All conditions met</li>
        <li><strong>Closing (30-45 days from application):</strong> Sign final docs and get keys</li>
      </ol>

      <h3>Red Flags That Will Delay Your Application</h3>
      <ul>
        <li>Opening new credit accounts during the process</li>
        <li>Large unexplained deposits or withdrawals</li>
        <li>Changing jobs during the process</li>
        <li>Making large purchases on credit</li>
        <li>Missing document deadlines</li>
        <li>Providing incomplete or unclear documentation</li>
      </ul>

      <h3>Frequently Asked Questions</h3>
      
      <h4>Do I really need 2 full years of tax returns?</h4>
      <p>Yes, for most loans. Lenders need to verify income stability and calculate your actual income (especially for self-employed borrowers who may show lower taxable income due to deductions).</p>

      <h4>What if I don't have 2 months of bank statements?</h4>
      <p>Contact your bank immediately to request statements. Most banks can provide statements going back 12+ months.</p>

      <h4>Can I use my parents' bank account for down payment?</h4>
      <p>No, funds must be in your account. If your parents want to help, they need to gift the money to you (with proper gift letter) and you need to season it in your account for 30-60 days, OR they can give a gift at closing directly.</p>

      <h4>What if I have multiple jobs or income sources?</h4>
      <p>Provide documentation for ALL income sources. Lenders can use all verifiable income to help you qualify.</p>

      <p><strong>Gather these documents early, stay organized, and respond quickly to lender requests. Complete documentation is the difference between a smooth 30-day closing and a stressful 60+ day nightmare.</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'loanType',
        label: 'Loan Type',
        type: 'select',
        options: [
          { value: 'conventional', label: 'Conventional' },
          { value: 'fha', label: 'FHA' },
          { value: 'va', label: 'VA' },
          { value: 'usda', label: 'USDA' },
          { value: 'jumbo', label: 'Jumbo' },
        ],
        defaultValue: 'conventional',
      },
      {
        name: 'employmentType',
        label: 'Employment Type',
        type: 'select',
        options: [
          { value: 'w2', label: 'W-2 Employee' },
          { value: 'selfEmployed', label: 'Self-Employed' },
          { value: '1099', label: '1099 Contractor' },
          { value: 'retired', label: 'Retired' },
        ],
        defaultValue: 'w2',
      },
      {
        name: 'firstTimeBuyer',
        label: 'First-Time Homebuyer?',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
        defaultValue: 'no',
      },
    ],
    results: [
      { label: 'Required Documents', isCurrency: false },
    ],
    calculate: (values) => {
      const { loanType, employmentType, firstTimeBuyer } = values;
      
      let documents: string[] = [
        '\n📋 UNIVERSAL DOCUMENTS (Required for All):',
        '✓ Government-issued photo ID',
        '✓ Social Security card',
        '✓ Last 2 years W-2 forms (if W-2 employee)',
        '✓ Last 30 days of pay stubs',
        '✓ Last 2 months bank statements (all accounts)',
        '✓ Last 2 years federal tax returns',
        '✓ Purchase agreement/sales contract',
        '✓ Homeowners insurance quote',
        '',
      ];

      if (employmentType === 'selfEmployed') {
        documents.push(
          '\n👔 SELF-EMPLOYED DOCUMENTS:',
          '✓ Last 2 years personal tax returns (1040 + all schedules)',
          '✓ Last 2 years business tax returns (1065/1120/1120S)',
          '✓ Year-to-date Profit & Loss statement',
          '✓ Year-to-date Balance Sheet',
          '✓ Business license',
          '✓ Articles of incorporation',
          '',
        );
      }

      if (employmentType === '1099') {
        documents.push(
          '\n💼 1099 CONTRACTOR DOCUMENTS:',
          '✓ Last 2 years 1040 tax returns with Schedule C',
          '✓ All 1099 forms received',
          '✓ Year-to-date Profit & Loss',
          '✓ Bank statements showing deposits',
          '',
        );
      }

      if (employmentType === 'retired') {
        documents.push(
          '\n🏖️ RETIREMENT DOCUMENTS:',
          '✓ Social Security award letter',
          '✓ Pension award letter',
          '✓ IRA/401k distribution statements',
          '✓ Last year tax return',
          '',
        );
      }

      if (loanType === 'va') {
        documents.push(
          '\n🎖️ VA LOAN SPECIFIC:',
          '✓ Certificate of Eligibility (COE)',
          '✓ DD-214 (proof of service)',
          '✓ Leave and Earnings Statement (if active)',
          '✓ VA disability letter (if applicable)',
          '',
        );
      }

      if (loanType === 'fha') {
        documents.push(
          '\n🏡 FHA LOAN SPECIFIC:',
          '✓ Rental history (12 months)',
          '✓ Credit explanation (if score below 580)',
          '',
        );
      }

      if (loanType === 'usda') {
        documents.push(
          '\n🌾 USDA LOAN SPECIFIC:',
          '✓ Proof property in eligible rural area',
          '✓ Income verification for ALL household members',
          '',
        );
      }

      if (loanType === 'jumbo') {
        documents.push(
          '\n🏰 JUMBO LOAN SPECIFIC:',
          '✓ 3-6 months bank statements',
          '✓ Full appraisal',
          '✓ 6-12 months reserves',
          '✓ Additional asset documentation',
          '',
        );
      }

      if (firstTimeBuyer === 'yes') {
        documents.push(
          '\n🏠 FIRST-TIME BUYER:',
          '✓ 12-24 months rental payment history',
          '✓ Homebuyer education certificate (if required)',
          '',
        );
      }

      documents.push(
        '\n💡 TIPS:',
        '• Provide ALL pages of statements',
        '• Explain deposits over $1,000',
        '• Keep documents organized',
        '• Respond to lender requests within 24-48 hours',
        '• Don\'t open new credit during process',
      );

      return [
        {
          label: 'Required Documents',
          value: documents.join('\n'),
          isCurrency: false,
        },
      ];
    },
  },
};
