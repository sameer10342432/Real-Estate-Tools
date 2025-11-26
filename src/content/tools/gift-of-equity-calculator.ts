import { CalculatorContent } from '@/types';

export const GIFT_OF_EQUITY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Gift of Equity Calculator',
  description: 'Calculate gift of equity amounts for family property sales, including down payment impact, loan qualification, and tax implications.',
  slug: 'gift-of-equity-calculator',
  icon: '🎁',
  category: 'Mortgage Calculators',
  metaTitle: 'Gift of Equity Calculator - Family Property Sale & Down Payment Tool',
  metaDescription: 'Free gift of equity calculator for family property sales. Calculate equity gift amounts, down payment percentages, PMI requirements, and tax implications for FHA, VA, Conventional, and USDA loans.',
  article: {
    title: 'Understanding Gift of Equity in Family Property Sales',
    content: `
    <h2>What is a Gift of Equity?</h2>
    <p>A <strong>gift of equity</strong> occurs when a family member sells their property to another family member at a price below market value. The difference between the fair market value (appraised value) and the sale price is considered a "gift" and can be used as part or all of the buyer's down payment. This arrangement helps family members purchase homes with little to no cash out of pocket while still meeting lender requirements for down payments.</p>
    
    <h3>How Does Gift of Equity Work?</h3>
    <p>In a gift of equity transaction, the process typically works as follows:</p>
    <ol>
      <li><strong>Property Appraisal:</strong> An independent appraiser determines the fair market value of the property</li>
      <li><strong>Negotiated Sale Price:</strong> The family agrees on a sale price below market value</li>
      <li><strong>Equity Gift Calculation:</strong> The difference becomes the gift of equity (e.g., $400,000 market value - $350,000 sale price = $50,000 gift of equity)</li>
      <li><strong>Down Payment Credit:</strong> The lender credits the gift of equity toward the buyer's down payment requirement</li>
      <li><strong>Closing:</strong> The transaction closes with the buyer potentially needing little or no additional cash</li>
    </ol>
    
    <h3>Who Can Provide a Gift of Equity?</h3>
    <p>Gift of equity transactions are typically limited to family members. Most lenders accept gifts from:</p>
    <ul>
      <li>Parents, grandparents, or great-grandparents</li>
      <li>Children, grandchildren, or great-grandchildren</li>
      <li>Siblings (including step-siblings and adopted siblings)</li>
      <li>Aunts, uncles, nieces, and nephews</li>
      <li>Spouses or domestic partners</li>
      <li>In-laws (parents-in-law, siblings-in-law)</li>
    </ul>
    <p><strong>Important:</strong> Friends, business partners, or unrelated parties generally cannot provide a gift of equity. Some lenders may have additional restrictions.</p>
    
    <h3>Gift Letter Requirements</h3>
    <p>Lenders require a formal <strong>gift of equity letter</strong> that must include:</p>
    <ul>
      <li>Property address and description</li>
      <li>Fair market value (appraised value)</li>
      <li>Sale price agreed upon</li>
      <li>Gift of equity amount (the difference)</li>
      <li>Relationship between donor and recipient</li>
      <li>Statement that no repayment is required or expected</li>
      <li>Signatures of both the donor (seller) and recipient (buyer)</li>
    </ul>
    <p>The gift letter becomes part of the loan file and is required at closing.</p>
    
    <h3>Loan Type Requirements for Gift of Equity</h3>
    <p>Different loan programs have specific rules regarding gift of equity:</p>
    
    <h4>Conventional Loans (Fannie Mae/Freddie Mac)</h4>
    <ul>
      <li><strong>Minimum Down Payment:</strong> Gift can cover 100% of down payment if putting 20%+ down</li>
      <li><strong>Under 20% Down:</strong> Buyer may need to contribute minimum 5% from own funds (varies by lender)</li>
      <li><strong>PMI Required:</strong> If total down payment is less than 20%</li>
      <li><strong>Relationship:</strong> Must be from family member or domestic partner</li>
    </ul>
    
    <h4>FHA Loans</h4>
    <ul>
      <li><strong>Highly Flexible:</strong> Gift of equity can cover 100% of the 3.5% minimum down payment</li>
      <li><strong>No Buyer Contribution Required:</strong> Buyer does not need to contribute personal funds</li>
      <li><strong>Family Definition:</strong> Accepts gifts from extended family members</li>
      <li><strong>MIP Required:</strong> Mortgage insurance required regardless of down payment amount</li>
    </ul>
    
    <h4>VA Loans</h4>
    <ul>
      <li><strong>Zero Down Payment:</strong> VA loans don't require down payment, so gift of equity reduces loan amount</li>
      <li><strong>No PMI:</strong> VA loans don't require PMI at any LTV</li>
      <li><strong>Closing Costs:</strong> Gift of equity can help cover closing costs</li>
      <li><strong>Funding Fee:</strong> Lower LTV may reduce VA funding fee</li>
    </ul>
    
    <h4>USDA Loans</h4>
    <ul>
      <li><strong>Zero Down Payment:</strong> Like VA loans, USDA loans don't require down payment</li>
      <li><strong>Gift Reduces Loan:</strong> Gift of equity lowers the loan amount</li>
      <li><strong>Location Restricted:</strong> Property must be in eligible rural area</li>
      <li><strong>Income Limits:</strong> Household income must meet USDA limits</li>
    </ul>
    
    <h3>Tax Implications of Gift of Equity</h3>
    <p>Gift of equity has important tax considerations for both parties:</p>
    
    <h4>For the Seller (Gift Donor)</h4>
    <ul>
      <li><strong>Gift Tax Annual Exclusion (2024):</strong> $18,000 per person ($36,000 for married couples giving jointly)</li>
      <li><strong>Lifetime Exemption:</strong> Gifts exceeding annual exclusion count against $13.61 million lifetime gift/estate tax exemption</li>
      <li><strong>IRS Form 709:</strong> Required if gift exceeds annual exclusion (no tax typically owed due to lifetime exemption)</li>
      <li><strong>Capital Gains:</strong> Seller may still owe capital gains tax on the sale portion based on their original cost basis</li>
    </ul>
    
    <h4>For the Buyer (Gift Recipient)</h4>
    <ul>
      <li><strong>No Income Tax:</strong> Gift of equity is not considered taxable income for the buyer</li>
      <li><strong>Cost Basis:</strong> Buyer's cost basis is typically the sale price paid</li>
      <li><strong>Future Sale Impact:</strong> Lower cost basis may result in higher capital gains when buyer eventually sells</li>
    </ul>
    
    <h3>Advantages of Gift of Equity</h3>
    <ul>
      <li><strong>No Cash Required:</strong> Buyer may purchase with little or no cash out of pocket</li>
      <li><strong>Better Loan Terms:</strong> Higher effective down payment may mean lower interest rates</li>
      <li><strong>Avoid PMI:</strong> If gift brings down payment to 20%+ on conventional loans</li>
      <li><strong>Keep Property in Family:</strong> Allows family to retain property ownership across generations</li>
      <li><strong>Easier Qualification:</strong> Lower loan-to-value ratio may help with approval</li>
      <li><strong>Seller Benefits:</strong> Seller helps family member while potentially minimizing gift tax</li>
    </ul>
    
    <h3>Disadvantages and Considerations</h3>
    <ul>
      <li><strong>Tax Complexity:</strong> May trigger gift tax reporting requirements for seller</li>
      <li><strong>Capital Gains Impact:</strong> Seller may still owe capital gains taxes on the sale</li>
      <li><strong>Lower Sale Proceeds:</strong> Seller receives less cash from the sale</li>
      <li><strong>Appraisal Requirement:</strong> Independent appraisal is mandatory</li>
      <li><strong>IRS Scrutiny:</strong> Large gifts may attract IRS attention</li>
      <li><strong>Relationship Requirement:</strong> Only works between family members</li>
      <li><strong>Lender Restrictions:</strong> Some lenders may have additional requirements</li>
    </ul>
    
    <h3>How to Use This Gift of Equity Calculator</h3>
    <p>This calculator helps you understand the financial impact of a gift of equity transaction:</p>
    <ol>
      <li><strong>Enter Property Market Value:</strong> The appraised fair market value of the property</li>
      <li><strong>Enter Sale Price:</strong> The agreed-upon price below market value</li>
      <li><strong>Select Loan Type:</strong> Choose between Conventional, FHA, VA, or USDA</li>
      <li><strong>Enter Interest Rate:</strong> The expected mortgage interest rate</li>
      <li><strong>Select Loan Term:</strong> Typically 15 or 30 years</li>
      <li><strong>Enter Additional Down Payment:</strong> Any extra cash the buyer will contribute</li>
    </ol>
    <p>The calculator will show you the gift of equity amount, total down payment percentage, loan amount, monthly payment estimate, PMI requirements, and qualification status based on loan type guidelines.</p>
    
    <h3>Frequently Asked Questions</h3>
    <h4>Can I use gift of equity and still get an FHA loan?</h4>
    <p>Yes, FHA loans are very flexible with gift of equity. The gift can cover 100% of the required 3.5% down payment, and the buyer doesn't need to contribute any personal funds.</p>
    
    <h4>Is a gift of equity taxable?</h4>
    <p>The recipient (buyer) does not pay income tax on the gift. The donor (seller) may need to file IRS Form 709 if the gift exceeds $18,000 ($36,000 for married couples), but typically owes no tax due to the lifetime exemption.</p>
    
    <h4>Can I give a gift of equity to a non-family member?</h4>
    <p>Generally, no. Most lenders require the gift to come from a family member. Gifts from friends, employers, or unrelated parties typically aren't allowed for gift of equity transactions.</p>
    
    <h4>Does gift of equity count as down payment?</h4>
    <p>Yes, gift of equity counts toward the down payment requirement. This is one of the main benefits, allowing buyers to meet down payment requirements without using personal savings.</p>
    `
  },
  calculator: {
    fields: [
      {
        name: 'propertyMarketValue',
        label: 'Property Market Value ($)',
        type: 'number',
        defaultValue: 400000,
        placeholder: '400000',
      },
      {
        name: 'salePrice',
        label: 'Sale Price ($)',
        type: 'number',
        defaultValue: 350000,
        placeholder: '350000',
      },
      {
        name: 'loanType',
        label: 'Loan Type',
        type: 'select',
        defaultValue: 'conventional',
        options: [
          { value: 'conventional', label: 'Conventional' },
          { value: 'fha', label: 'FHA' },
          { value: 'va', label: 'VA' },
          { value: 'usda', label: 'USDA' },
        ],
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.5,
        placeholder: '6.5',
      },
      {
        name: 'loanTermYears',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
        placeholder: '30',
      },
      {
        name: 'additionalDownPayment',
        label: 'Additional Down Payment ($)',
        type: 'number',
        defaultValue: 0,
        placeholder: '0',
      },
    ],
    results: [
      { label: 'Gift of Equity Amount', isCurrency: true },
      { label: 'Gift of Equity Percent', isCurrency: false },
      { label: 'Total Down Payment', isCurrency: true },
      { label: 'Total Down Payment Percent', isCurrency: false },
      { label: 'Loan Amount', isCurrency: true },
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'PMI Required', isCurrency: false },
      { label: 'Gift Tax Implications', isCurrency: false },
      { label: 'Qualification Status', isCurrency: false },
    ],
    calculate: (values) => {
      const { propertyMarketValue, salePrice, loanType, interestRate, loanTermYears, additionalDownPayment } = values;
      
      const marketValue = parseFloat(propertyMarketValue) || 0;
      const sale = parseFloat(salePrice) || 0;
      const rate = parseFloat(interestRate) || 0;
      const term = parseFloat(loanTermYears) || 30;
      const additionalDown = parseFloat(additionalDownPayment) || 0;
      
      const giftOfEquityAmount = Math.max(0, marketValue - sale);
      const giftOfEquityPercent = marketValue > 0 ? (giftOfEquityAmount / marketValue) * 100 : 0;
      
      const totalDownPayment = giftOfEquityAmount + additionalDown;
      const totalDownPaymentPercent = marketValue > 0 ? (totalDownPayment / marketValue) * 100 : 0;
      
      const loanAmount = Math.max(0, sale - additionalDown);
      
      const monthlyInterestRate = rate / 100 / 12;
      const numberOfPayments = term * 12;
      
      let monthlyPayment = 0;
      if (monthlyInterestRate > 0 && numberOfPayments > 0 && loanAmount > 0) {
        monthlyPayment = loanAmount * 
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
          (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      } else if (loanAmount > 0 && numberOfPayments > 0) {
        monthlyPayment = loanAmount / numberOfPayments;
      }
      
      let pmiRequired = 'No';
      let qualificationStatus = '';
      
      const ltv = marketValue > 0 ? (loanAmount / marketValue) * 100 : 0;
      
      switch (loanType) {
        case 'conventional':
          if (ltv > 80) {
            pmiRequired = 'Yes - PMI required (LTV > 80%)';
          } else {
            pmiRequired = 'No - LTV is 80% or below';
          }
          if (totalDownPaymentPercent >= 20) {
            qualificationStatus = '✓ Excellent - 20%+ down payment meets conventional requirements, no PMI needed';
          } else if (totalDownPaymentPercent >= 5) {
            qualificationStatus = '✓ Qualifies - Meets 5% minimum, but PMI will be required';
          } else if (totalDownPaymentPercent >= 3) {
            qualificationStatus = '⚠ May Qualify - Meets 3% minimum for some programs, PMI required';
          } else {
            qualificationStatus = '✗ Below Minimum - Conventional loans typically require 3-5% minimum down';
          }
          break;
          
        case 'fha':
          pmiRequired = 'Yes - MIP required (FHA loans require mortgage insurance)';
          if (totalDownPaymentPercent >= 10) {
            qualificationStatus = '✓ Excellent - 10%+ down payment, MIP required for 11 years';
          } else if (totalDownPaymentPercent >= 3.5) {
            qualificationStatus = '✓ Qualifies - Meets 3.5% FHA minimum, MIP required for life of loan';
          } else {
            qualificationStatus = '✗ Below Minimum - FHA requires minimum 3.5% down payment';
          }
          break;
          
        case 'va':
          pmiRequired = 'No - VA loans do not require PMI';
          if (giftOfEquityAmount > 0) {
            qualificationStatus = '✓ Qualifies - VA allows 100% financing, gift of equity reduces loan amount';
          } else {
            qualificationStatus = '✓ Qualifies - VA loans allow 0% down payment for eligible veterans';
          }
          break;
          
        case 'usda':
          pmiRequired = 'Yes - USDA guarantee fee applies (lower than conventional PMI)';
          if (giftOfEquityAmount > 0) {
            qualificationStatus = '✓ Qualifies - USDA allows 100% financing, gift reduces loan amount (property must be in eligible rural area)';
          } else {
            qualificationStatus = '✓ Qualifies - USDA allows 0% down for eligible rural properties';
          }
          break;
          
        default:
          qualificationStatus = 'Select a loan type for qualification status';
      }
      
      let giftTaxImplications = '';
      const annualExclusion2024 = 18000;
      const marriedExclusion2024 = 36000;
      
      if (giftOfEquityAmount <= 0) {
        giftTaxImplications = 'No gift of equity - no tax implications';
      } else if (giftOfEquityAmount <= annualExclusion2024) {
        giftTaxImplications = `Gift under $${annualExclusion2024.toLocaleString()} annual exclusion - No IRS reporting required`;
      } else if (giftOfEquityAmount <= marriedExclusion2024) {
        giftTaxImplications = `Gift under $${marriedExclusion2024.toLocaleString()} - May use gift splitting (married couples) to avoid Form 709`;
      } else {
        giftTaxImplications = `Gift exceeds annual exclusion - IRS Form 709 required, counts against $13.61M lifetime exemption (typically no tax owed)`;
      }
      
      return [
        { label: 'Gift of Equity Amount', value: giftOfEquityAmount.toFixed(2), isCurrency: true },
        { label: 'Gift of Equity Percent', value: `${giftOfEquityPercent.toFixed(2)}%`, isCurrency: false },
        { label: 'Total Down Payment', value: totalDownPayment.toFixed(2), isCurrency: true },
        { label: 'Total Down Payment Percent', value: `${totalDownPaymentPercent.toFixed(2)}%`, isCurrency: false },
        { label: 'Loan Amount', value: loanAmount.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'PMI Required', value: pmiRequired, isCurrency: false },
        { label: 'Gift Tax Implications', value: giftTaxImplications, isCurrency: false },
        { label: 'Qualification Status', value: qualificationStatus, isCurrency: false },
      ];
    },
  },
};
