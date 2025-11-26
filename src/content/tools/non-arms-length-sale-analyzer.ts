import { CalculatorContent } from '@/types';

export const NON_ARMS_LENGTH_SALE_ANALYZER_CONTENT: CalculatorContent = {
  title: "Non-Arm's Length Sale Analyzer",
  description: "Analyze non-arm's length real estate transactions between related parties. Calculate gift of equity, lender requirements, IRS reporting obligations, and qualification status for family sales.",
  icon: '🤝',
  category: 'Real Estate Compliance',
  slug: 'non-arms-length-sale-analyzer',
  
  metaTitle: "Non-Arm's Length Sale Analyzer - Family & Related Party Transaction Calculator | Property Tools",
  metaDescription: "Free non-arm's length sale analyzer for real estate. Calculate gift of equity, check FHA/VA/Conventional lender requirements, IRS reporting obligations, and minimum down payment requirements for family sales and related party transactions.",
  
  article: {
    title: "Non-Arm's Length Sale Analyzer - Understanding Related Party Real Estate Transactions",
    content: `
      <h2>What Is a Non-Arm's Length Transaction?</h2>
      <p>A non-arm's length transaction occurs when there is a pre-existing relationship between the buyer and seller. Unlike arm's length transactions where strangers negotiate at fair market value purely for their own benefit, related party sales often involve emotional considerations, family dynamics, and potential financial advantages that can affect the sale price and terms.</p>

      <p>These transactions are common in real estate, particularly when parents sell property to children, siblings transfer ownership between each other, or employers sell to employees. While perfectly legal, non-arm's length sales receive extra scrutiny from lenders, the IRS, and other regulatory bodies.</p>

      <h3>Types of Non-Arm's Length Relationships</h3>
      <p>The following relationships are typically considered non-arm's length in real estate transactions:</p>
      <ul>
        <li><strong>Parent-Child:</strong> Sales between parents and their children (including adult children)</li>
        <li><strong>Siblings:</strong> Transactions between brothers and sisters</li>
        <li><strong>Extended Family:</strong> Aunts, uncles, cousins, grandparents, in-laws</li>
        <li><strong>Employer-Employee:</strong> When an employer sells property to an employee</li>
        <li><strong>Business Partners:</strong> Partners in business selling to each other</li>
        <li><strong>Trusts and Beneficiaries:</strong> Transactions involving trust property</li>
        <li><strong>Corporate Shareholders:</strong> Sales between corporation and major shareholders</li>
      </ul>

      <h3>IRS Implications and Reporting Requirements</h3>
      <p>The Internal Revenue Service pays close attention to non-arm's length transactions because they can be used to transfer wealth while avoiding gift and estate taxes. Key IRS considerations include:</p>

      <h4>Gift Tax Implications</h4>
      <p>When property is sold below fair market value, the difference between the market value and sale price is considered a gift. For 2025, the annual gift tax exclusion is $18,000 per recipient. Gifts exceeding this amount must be reported on IRS Form 709 and count against your lifetime gift tax exemption of $13.61 million.</p>

      <h4>Form 1099-S Reporting</h4>
      <p>Real estate transactions, including non-arm's length sales, require Form 1099-S reporting. The closing agent must report the gross proceeds to the IRS, and any discrepancy between reported value and actual market value may trigger an audit.</p>

      <h4>Capital Gains Considerations</h4>
      <p>The buyer's cost basis in a non-arm's length transaction is generally the amount actually paid, not the fair market value. This can affect future capital gains calculations when the buyer eventually sells the property.</p>

      <h3>Lender Requirements by Loan Type</h3>
      <p>Different loan programs have specific rules for non-arm's length transactions:</p>

      <h4>Conventional Loans (Fannie Mae/Freddie Mac)</h4>
      <ul>
        <li>Non-arm's length transactions are generally allowed</li>
        <li>Maximum LTV typically 90% (10% minimum down payment)</li>
        <li>Gift of equity can be used for down payment</li>
        <li>Property must be owner-occupied (investment properties more restricted)</li>
        <li>Full appraisal required</li>
      </ul>

      <h4>FHA Loans</h4>
      <ul>
        <li>Non-arm's length transactions permitted with restrictions</li>
        <li>Identity of Interest (IOI) transactions require 85% LTV (15% down payment)</li>
        <li>Exception: Family members can get 96.5% LTV if buyer has been tenant for 6+ months</li>
        <li>Gift of equity allowed from family members</li>
        <li>Two appraisals may be required if sale price differs significantly from value</li>
      </ul>

      <h4>VA Loans</h4>
      <ul>
        <li>Non-arm's length transactions allowed with caution</li>
        <li>100% financing still available for qualified transactions</li>
        <li>VA appraisal determines maximum loan amount</li>
        <li>Gift of equity permitted</li>
        <li>Additional documentation may be required</li>
      </ul>

      <h3>Understanding Gift of Equity</h3>
      <p>A gift of equity is the difference between the sale price and the fair market value when a property is sold below market value to a family member. This "gift" can serve as all or part of the buyer's down payment.</p>

      <h4>How Gift of Equity Works</h4>
      <p>Example: A home appraised at $400,000 is sold by parents to their child for $340,000. The $60,000 difference is the gift of equity, which represents 15% of the home's value and can be applied toward the down payment.</p>

      <h4>Gift of Equity Requirements</h4>
      <ul>
        <li>Seller must provide a gift letter stating no repayment is expected</li>
        <li>Must be between family members for most loan programs</li>
        <li>Appraisal must support the fair market value</li>
        <li>Gift amount is reported on the HUD-1 or Closing Disclosure</li>
        <li>May require IRS Form 709 if gift exceeds annual exclusion</li>
      </ul>

      <h3>Appraisal Requirements</h3>
      <p>Appraisals are critically important in non-arm's length transactions because the sale price may not reflect true market value. Lenders require appraisals to:</p>
      <ul>
        <li>Verify the property's fair market value</li>
        <li>Ensure adequate collateral for the loan</li>
        <li>Calculate the true loan-to-value ratio</li>
        <li>Document the gift of equity amount</li>
        <li>Protect against inflated values or fraud</li>
      </ul>

      <p>Some lenders require two appraisals for non-arm's length transactions, especially when the sale price varies significantly from comparable sales.</p>

      <h3>Common Non-Arm's Length Scenarios</h3>

      <h4>Parents Selling to Adult Children</h4>
      <p>The most common non-arm's length transaction. Parents often want to help children become homeowners by selling below market value. Key considerations include gift tax implications, maintaining the parents' financial security, and ensuring the child can afford the ongoing costs.</p>

      <h4>Divorce Property Transfers</h4>
      <p>When one spouse buys out the other's interest in the marital home. These transactions require careful valuation and may have different tax treatment under IRC Section 1041.</p>

      <h4>Estate Settlements</h4>
      <p>Heirs purchasing property from an estate often at below-market prices. The stepped-up basis rules may apply, affecting capital gains calculations.</p>

      <h4>Employer-Employee Housing</h4>
      <p>Companies selling housing to employees, often in relocation packages. These may have employment tax implications.</p>

      <h3>Risk Factors Lenders Consider</h3>
      <p>Lenders evaluate several risk factors in non-arm's length transactions:</p>
      <ul>
        <li><strong>Property Condition:</strong> Is the discount due to needed repairs?</li>
        <li><strong>True Market Value:</strong> Does the appraisal support the claimed value?</li>
        <li><strong>Buyer Qualification:</strong> Can the buyer truly afford the payments?</li>
        <li><strong>Occupancy Intent:</strong> Will this be owner-occupied or investment?</li>
        <li><strong>Fraud Indicators:</strong> Are there signs of straw buyer arrangements?</li>
        <li><strong>Cash Flow:</strong> Is there circular money flow between parties?</li>
      </ul>

      <h3>Documentation Requirements</h3>
      <p>Non-arm's length transactions require additional documentation:</p>
      <ul>
        <li>Gift letter (if applicable)</li>
        <li>Explanation of relationship between parties</li>
        <li>Identity of Interest disclosure</li>
        <li>Full appraisal by independent appraiser</li>
        <li>Proof of seller's ownership and basis</li>
        <li>Evidence of fair market value determination</li>
      </ul>

      <h3>Tips for Successful Non-Arm's Length Transactions</h3>
      <ol>
        <li>Obtain a professional appraisal before setting the sale price</li>
        <li>Document the business rationale for any discount</li>
        <li>Work with a lender experienced in family transactions</li>
        <li>Consult a tax professional about gift tax implications</li>
        <li>Use a real estate attorney for the transaction</li>
        <li>Maintain proper paper trails for all money transfers</li>
        <li>Disclose all relationships to lenders upfront</li>
      </ol>

      <h3>How This Analyzer Works</h3>
      <p>Our Non-Arm's Length Sale Analyzer evaluates your transaction based on:</p>
      <ul>
        <li><strong>Discount Analysis:</strong> Calculates the percentage discount from market value</li>
        <li><strong>Gift of Equity:</strong> Determines the gift amount and percentage</li>
        <li><strong>Loan Requirements:</strong> Checks minimum down payment for your loan type</li>
        <li><strong>Effective Down Payment:</strong> Combines cash and gift of equity</li>
        <li><strong>Lender Risk Assessment:</strong> Evaluates approval likelihood</li>
        <li><strong>IRS Reporting:</strong> Determines if Form 709 is required</li>
        <li><strong>Qualification Status:</strong> Overall transaction viability</li>
      </ul>

      <p><strong>Use this calculator to analyze your non-arm's length real estate transaction and understand the requirements before proceeding with a family or related party sale.</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'marketValue',
        label: 'Fair Market Value ($)',
        type: 'number',
        defaultValue: 400000,
        placeholder: '400000',
      },
      {
        name: 'salePrice',
        label: 'Sale Price ($)',
        type: 'number',
        defaultValue: 340000,
        placeholder: '340000',
      },
      {
        name: 'relationship',
        label: 'Relationship Type',
        type: 'select',
        options: [
          { value: 'parent-child', label: 'Parent-Child' },
          { value: 'siblings', label: 'Siblings' },
          { value: 'employer-employee', label: 'Employer-Employee' },
          { value: 'business-partners', label: 'Business Partners' },
          { value: 'other', label: 'Other Related Party' },
        ],
        defaultValue: 'parent-child',
      },
      {
        name: 'loanType',
        label: 'Loan Type',
        type: 'select',
        options: [
          { value: 'conventional', label: 'Conventional' },
          { value: 'fha', label: 'FHA' },
          { value: 'va', label: 'VA' },
        ],
        defaultValue: 'conventional',
      },
      {
        name: 'downPaymentPercent',
        label: 'Cash Down Payment (%)',
        type: 'number',
        defaultValue: 5,
        placeholder: '5',
      },
      {
        name: 'giftOfEquityAmount',
        label: 'Gift of Equity Amount ($)',
        type: 'number',
        defaultValue: 60000,
        placeholder: '60000',
      },
    ],
    results: [
      { label: 'Discount from Market (%)', isCurrency: false },
      { label: 'Discount Amount ($)', isCurrency: true },
      { label: 'Effective Down Payment (%)', isCurrency: false },
      { label: 'Gift of Equity (%)', isCurrency: false },
      { label: 'Lender Risk Assessment', isCurrency: false },
      { label: 'IRS Reporting Required', isCurrency: false },
      { label: 'Minimum Down Payment Required (%)', isCurrency: false },
      { label: 'Qualification Status', isCurrency: false },
    ],
    calculate: (values) => {
      const marketValue = Number(values.marketValue) || 400000;
      const salePrice = Number(values.salePrice) || 340000;
      const relationship = values.relationship || 'parent-child';
      const loanType = values.loanType || 'conventional';
      const downPaymentPercent = Number(values.downPaymentPercent) || 5;
      const giftOfEquityAmount = Number(values.giftOfEquityAmount) || 0;

      const discountAmount = marketValue - salePrice;
      const discountFromMarket = (discountAmount / marketValue) * 100;
      
      const giftOfEquityPercent = (giftOfEquityAmount / marketValue) * 100;
      
      const cashDownPayment = (downPaymentPercent / 100) * salePrice;
      const totalDownPayment = cashDownPayment + giftOfEquityAmount;
      const effectiveDownPaymentPercent = (totalDownPayment / marketValue) * 100;

      let minDownPaymentRequired = 0;
      let loanTypeDescription = '';
      
      switch (loanType) {
        case 'fha':
          if (relationship === 'parent-child' || relationship === 'siblings') {
            minDownPaymentRequired = 15;
            loanTypeDescription = 'FHA Identity of Interest';
          } else {
            minDownPaymentRequired = 15;
            loanTypeDescription = 'FHA Non-Family IOI';
          }
          break;
        case 'va':
          minDownPaymentRequired = 0;
          loanTypeDescription = 'VA Loan';
          break;
        case 'conventional':
        default:
          minDownPaymentRequired = 10;
          loanTypeDescription = 'Conventional';
          break;
      }

      const meetsMinDownPayment = effectiveDownPaymentPercent >= minDownPaymentRequired;

      let lenderRiskAssessment = '';
      let riskLevel = 0;

      if (discountFromMarket > 30) {
        riskLevel += 3;
      } else if (discountFromMarket > 20) {
        riskLevel += 2;
      } else if (discountFromMarket > 10) {
        riskLevel += 1;
      }

      if (relationship === 'business-partners' || relationship === 'employer-employee') {
        riskLevel += 1;
      }

      if (!meetsMinDownPayment) {
        riskLevel += 2;
      }

      if (riskLevel >= 4) {
        lenderRiskAssessment = '🔴 HIGH RISK - Additional documentation and underwriting scrutiny expected. May require two appraisals.';
      } else if (riskLevel >= 2) {
        lenderRiskAssessment = '🟡 MODERATE RISK - Standard non-arm\'s length review. Full documentation required.';
      } else {
        lenderRiskAssessment = '🟢 LOW RISK - Transaction appears straightforward. Normal processing expected.';
      }

      const annualGiftExclusion = 18000;
      const irsReportingRequired = giftOfEquityAmount > annualGiftExclusion
        ? `⚠️ YES - Gift exceeds $${annualGiftExclusion.toLocaleString()} annual exclusion. File IRS Form 709.`
        : `✓ NO - Gift within $${annualGiftExclusion.toLocaleString()} annual exclusion. No Form 709 required.`;

      let qualificationStatus = '';
      const isFamilyRelationship = relationship === 'parent-child' || relationship === 'siblings';

      if (!meetsMinDownPayment) {
        qualificationStatus = `❌ DOES NOT QUALIFY - Effective down payment of ${effectiveDownPaymentPercent.toFixed(1)}% is below ${minDownPaymentRequired}% minimum for ${loanTypeDescription}.`;
      } else if (giftOfEquityAmount > 0 && !isFamilyRelationship && loanType !== 'va') {
        qualificationStatus = `⚠️ CONDITIONAL - Gift of equity may not be accepted from non-family members for ${loanTypeDescription}. Verify with lender.`;
      } else if (discountFromMarket > 25) {
        qualificationStatus = `⚠️ CONDITIONAL - Large discount (${discountFromMarket.toFixed(1)}%) may trigger additional review. Two appraisals likely required.`;
      } else {
        qualificationStatus = `✓ LIKELY QUALIFIES - Meets ${loanTypeDescription} requirements. Effective down payment: ${effectiveDownPaymentPercent.toFixed(1)}%.`;
      }

      const detailedBreakdown = `
<strong>📊 Non-Arm's Length Transaction Analysis:</strong>

<strong>Transaction Overview:</strong>
• Fair Market Value: $${marketValue.toLocaleString()}
• Sale Price: $${salePrice.toLocaleString()}
• Discount Amount: $${discountAmount.toLocaleString()} (${discountFromMarket.toFixed(1)}%)
• Relationship: ${relationship.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
• Loan Type: ${loanTypeDescription}

<strong>Down Payment Analysis:</strong>
• Cash Down Payment (${downPaymentPercent}%): $${cashDownPayment.toLocaleString()}
• Gift of Equity: $${giftOfEquityAmount.toLocaleString()} (${giftOfEquityPercent.toFixed(1)}% of market value)
• Total Effective Down Payment: $${totalDownPayment.toLocaleString()} (${effectiveDownPaymentPercent.toFixed(1)}%)
• Minimum Required: ${minDownPaymentRequired}%
• Meets Requirement: ${meetsMinDownPayment ? '✓ Yes' : '✗ No'}

<strong>Loan Calculations:</strong>
• Loan Amount Needed: $${(salePrice - cashDownPayment).toLocaleString()}
• LTV Based on Sale Price: ${((salePrice - cashDownPayment) / salePrice * 100).toFixed(1)}%
• LTV Based on Market Value: ${((salePrice - cashDownPayment) / marketValue * 100).toFixed(1)}%

<strong>Tax Considerations:</strong>
• Gift of Equity Amount: $${giftOfEquityAmount.toLocaleString()}
• 2025 Annual Gift Exclusion: $${annualGiftExclusion.toLocaleString()}
• Amount Over Exclusion: $${Math.max(0, giftOfEquityAmount - annualGiftExclusion).toLocaleString()}
• Form 709 Required: ${giftOfEquityAmount > annualGiftExclusion ? 'Yes' : 'No'}

<strong>Required Documentation:</strong>
• Gift Letter (if gift of equity used)
• Identity of Interest Disclosure
• Full Appraisal
• Relationship Documentation
• Proof of Seller Ownership

<strong>💡 Recommendations:</strong>
${!meetsMinDownPayment ? '• Increase down payment or gift of equity to meet minimum requirements' : ''}
${giftOfEquityAmount > annualGiftExclusion ? '• Consult tax professional about gift tax implications' : ''}
${discountFromMarket > 20 ? '• Be prepared for additional lender scrutiny and possible second appraisal' : ''}
${!isFamilyRelationship ? '• Document the business purpose for the below-market sale' : ''}
• Keep detailed records of all money transfers
• Work with lender experienced in non-arm\'s length transactions
`;

      return [
        { label: 'Discount from Market (%)', value: `${discountFromMarket.toFixed(1)}%`, isCurrency: false },
        { label: 'Discount Amount ($)', value: discountAmount, isCurrency: true },
        { label: 'Effective Down Payment (%)', value: `${effectiveDownPaymentPercent.toFixed(1)}%`, isCurrency: false },
        { label: 'Gift of Equity (%)', value: `${giftOfEquityPercent.toFixed(1)}%`, isCurrency: false },
        { label: 'Lender Risk Assessment', value: lenderRiskAssessment, isCurrency: false },
        { label: 'IRS Reporting Required', value: irsReportingRequired, isCurrency: false },
        { label: 'Minimum Down Payment Required (%)', value: `${minDownPaymentRequired}%`, isCurrency: false },
        { label: 'Qualification Status', value: qualificationStatus, isCurrency: false },
        { label: 'Detailed Analysis', value: detailedBreakdown, isCurrency: false },
      ];
    },
  },
};
