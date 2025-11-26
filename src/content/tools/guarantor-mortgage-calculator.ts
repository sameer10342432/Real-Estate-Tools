import { CalculatorContent } from '@/types';

export const GUARANTOR_MORTGAGE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Guarantor Mortgage Calculator',
  description: 'Calculate mortgage scenarios when a guarantor is involved to help you qualify for a home loan.',
  slug: 'guarantor-mortgage-calculator',
  icon: '🤝',
  category: 'Mortgage & Financing',
  metaTitle: 'Guarantor Mortgage Calculator - Calculate Guarantor Home Loan Scenarios & Liability',
  metaDescription: 'Free guarantor mortgage calculator to estimate loan amounts, monthly payments, DTI ratios, and guarantor liability. Perfect for first-time buyers needing family support to qualify for a mortgage.',
  article: {
    title: 'Understanding Guarantor Mortgages',
    content: `
    <h2>What is a Guarantor Mortgage?</h2>
    <p>A guarantor mortgage is a specialized home loan arrangement where a third party, typically a parent, grandparent, or close family member, agrees to guarantee the mortgage. This means the guarantor promises to cover the mortgage payments if the primary borrower is unable to make them. Guarantor mortgages are designed to help borrowers who might otherwise struggle to qualify for a mortgage on their own due to insufficient income, limited credit history, or inability to save for a large enough down payment.</p>
    
    <p>In a guarantor mortgage arrangement, the guarantor provides additional security for the lender, which reduces the risk and often allows the borrower to access better loan terms, larger loan amounts, or qualify for a mortgage they otherwise wouldn't receive. This type of mortgage has become increasingly popular among first-time homebuyers who face rising property prices and stricter lending criteria.</p>

    <h3>When Do You Need a Guarantor Mortgage?</h3>
    <p>A guarantor mortgage may be appropriate in several situations:</p>
    <ul>
      <li><strong>Insufficient Income:</strong> If your income alone doesn't meet the lender's debt-to-income (DTI) requirements, a guarantor's income can be factored into the qualification process to improve your borrowing capacity.</li>
      <li><strong>Limited Down Payment:</strong> When you don't have enough savings for a substantial down payment, a guarantor can use their property equity or assets as additional collateral, potentially allowing you to borrow up to 100% of the property value.</li>
      <li><strong>Poor or Limited Credit History:</strong> First-time buyers or younger borrowers may lack the credit history needed to qualify for competitive rates. A guarantor with strong credit can help offset this limitation.</li>
      <li><strong>Self-Employment Income:</strong> Self-employed individuals often face stricter documentation requirements. A guarantor can provide the stability lenders seek.</li>
      <li><strong>High Property Prices:</strong> In expensive housing markets, even borrowers with good income may need additional support to qualify for the required loan amount.</li>
    </ul>

    <h3>How Does Guarantor Liability Work?</h3>
    <p>Understanding guarantor liability is crucial for both the borrower and the guarantor before entering into this arrangement. When someone agrees to be a guarantor, they take on significant financial responsibility:</p>
    <ul>
      <li><strong>Full Loan Liability:</strong> In most cases, the guarantor is liable for the entire loan amount if the borrower defaults. This means the lender can pursue the guarantor for all missed payments, the remaining loan balance, and any associated fees or legal costs.</li>
      <li><strong>Asset Security:</strong> Many guarantor mortgages require the guarantor to secure their guarantee against their own property or assets. If the borrower defaults and the guarantor cannot cover the payments, the lender may have the right to take action against the guarantor's assets.</li>
      <li><strong>Limited Guarantee Options:</strong> Some lenders offer limited guarantees where the guarantor is only responsible for a portion of the loan, such as the difference between the borrower's deposit and a standard down payment requirement. This limits the guarantor's exposure but may come with higher interest rates.</li>
      <li><strong>Duration of Guarantee:</strong> The guarantee typically remains in place until the borrower has paid down enough of the mortgage to meet standard lending criteria without support, which is often when the loan-to-value (LTV) ratio reaches 80% or less.</li>
    </ul>

    <h3>Pros and Cons of Guarantor Mortgages</h3>
    <h4>Advantages for Borrowers:</h4>
    <ul>
      <li>Access to homeownership earlier than would otherwise be possible</li>
      <li>Ability to borrow larger amounts with lower or zero down payment</li>
      <li>Potentially lower interest rates due to reduced lender risk</li>
      <li>Avoid paying private mortgage insurance (PMI) in some cases</li>
      <li>Build equity faster in a rising property market</li>
    </ul>

    <h4>Advantages for Guarantors:</h4>
    <ul>
      <li>Help family members achieve homeownership</li>
      <li>No upfront cash outlay required (unlike gifting a down payment)</li>
      <li>Guarantee can be released once sufficient equity is built</li>
    </ul>

    <h4>Risks and Disadvantages:</h4>
    <ul>
      <li><strong>Guarantor Risk:</strong> The guarantor's assets and credit are at risk if the borrower defaults</li>
      <li><strong>Relationship Strain:</strong> Financial arrangements between family members can create tension</li>
      <li><strong>Reduced Borrowing Capacity:</strong> The guarantor's ability to obtain their own credit may be affected</li>
      <li><strong>Long-Term Commitment:</strong> The guarantee may remain in place for many years until sufficient equity is built</li>
      <li><strong>Legal Costs:</strong> Both parties may need independent legal advice, adding to upfront costs</li>
    </ul>

    <h3>Guarantor Mortgage Requirements</h3>
    <p>To qualify for a guarantor mortgage, both the borrower and guarantor must meet certain criteria:</p>
    
    <h4>Borrower Requirements:</h4>
    <ul>
      <li>Stable employment and regular income</li>
      <li>Ability to make monthly mortgage payments from own income</li>
      <li>Acceptable credit score (requirements vary by lender)</li>
      <li>Property must meet lender's appraisal standards</li>
    </ul>

    <h4>Guarantor Requirements:</h4>
    <ul>
      <li>Strong credit history and score</li>
      <li>Sufficient income to cover both their own obligations and the guaranteed mortgage if needed</li>
      <li>Equity in their own property (if using property as security)</li>
      <li>Usually must be a close family member (parent, grandparent, sibling)</li>
      <li>Age limits may apply (typically under 65-70 at loan maturity)</li>
      <li>Must receive independent legal advice in most jurisdictions</li>
    </ul>

    <h3>How to Use This Guarantor Mortgage Calculator</h3>
    <p>This calculator helps you understand the financial implications of a guarantor mortgage arrangement. Enter the following details to calculate your mortgage scenario:</p>
    <ul>
      <li><strong>Property Price:</strong> The purchase price of the home you're looking to buy</li>
      <li><strong>Down Payment:</strong> The amount you can contribute upfront</li>
      <li><strong>Interest Rate:</strong> The annual interest rate offered by your lender</li>
      <li><strong>Loan Term:</strong> The length of the mortgage in years (typically 15-30 years)</li>
      <li><strong>Borrower Income:</strong> Your annual gross income before taxes</li>
      <li><strong>Borrower Debts:</strong> Your total monthly debt payments (credit cards, car loans, student loans, etc.)</li>
      <li><strong>Guarantor Income:</strong> The guarantor's annual gross income</li>
      <li><strong>Guarantor Assets:</strong> The value of assets the guarantor is using as security</li>
    </ul>

    <h3>Understanding the Results</h3>
    <p>The calculator provides several key metrics to help you evaluate the mortgage scenario:</p>
    <ul>
      <li><strong>Loan Amount:</strong> The total amount borrowed (property price minus down payment)</li>
      <li><strong>Monthly Payment:</strong> Your estimated monthly mortgage payment (principal and interest)</li>
      <li><strong>Borrower DTI:</strong> Your debt-to-income ratio based solely on your income</li>
      <li><strong>Combined DTI:</strong> The debt-to-income ratio when guarantor income is included</li>
      <li><strong>Guarantor Liability:</strong> The maximum amount the guarantor could be responsible for</li>
      <li><strong>Total Interest Paid:</strong> The total interest you'll pay over the life of the loan</li>
      <li><strong>Loan-to-Value (LTV):</strong> The loan amount as a percentage of the property value</li>
      <li><strong>Qualification Status:</strong> Whether you likely qualify based on standard DTI thresholds</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'propertyPrice',
        label: 'Property Price ($)',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment ($)',
        type: 'number',
        defaultValue: 20000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.5,
      },
      {
        name: 'loanTermYears',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'borrowerIncome',
        label: 'Borrower Annual Income ($)',
        type: 'number',
        defaultValue: 75000,
      },
      {
        name: 'borrowerDebts',
        label: 'Borrower Monthly Debts ($)',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'guarantorIncome',
        label: 'Guarantor Annual Income ($)',
        type: 'number',
        defaultValue: 120000,
      },
      {
        name: 'guarantorAssets',
        label: 'Guarantor Assets ($)',
        type: 'number',
        defaultValue: 500000,
      },
    ],
    results: [
      { label: 'Loan Amount', isCurrency: true },
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'Borrower DTI', isCurrency: false },
      { label: 'Combined DTI', isCurrency: false },
      { label: 'Guarantor Liability', isCurrency: true },
      { label: 'Total Interest Paid', isCurrency: true },
      { label: 'Loan-to-Value (LTV)', isCurrency: false },
      { label: 'Qualification Status', isCurrency: false },
    ],
    calculate: (values) => {
      const { 
        propertyPrice, 
        downPayment, 
        interestRate, 
        loanTermYears, 
        borrowerIncome, 
        borrowerDebts, 
        guarantorIncome, 
        guarantorAssets 
      } = values;
      
      const loanAmount = propertyPrice - downPayment;
      
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTermYears * 12;
      
      let monthlyPayment = 0;
      if (monthlyInterestRate > 0) {
        monthlyPayment = loanAmount * 
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
          (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      } else {
        monthlyPayment = loanAmount / numberOfPayments;
      }
      
      const borrowerMonthlyIncome = borrowerIncome / 12;
      const totalBorrowerMonthlyDebt = borrowerDebts + monthlyPayment;
      const borrowerDTI = (totalBorrowerMonthlyDebt / borrowerMonthlyIncome) * 100;
      
      const combinedMonthlyIncome = (borrowerIncome + guarantorIncome) / 12;
      const combinedDTI = (totalBorrowerMonthlyDebt / combinedMonthlyIncome) * 100;
      
      const guarantorLiability = loanAmount;
      
      const totalInterestPaid = (monthlyPayment * numberOfPayments) - loanAmount;
      
      const loanToValue = (loanAmount / propertyPrice) * 100;
      
      let qualificationStatus = 'Unlikely to Qualify';
      if (combinedDTI <= 36) {
        qualificationStatus = 'Likely to Qualify (Excellent DTI)';
      } else if (combinedDTI <= 43) {
        qualificationStatus = 'May Qualify (Acceptable DTI)';
      } else if (combinedDTI <= 50) {
        qualificationStatus = 'Possible with Strong Compensating Factors';
      }

      return [
        { label: 'Loan Amount', value: loanAmount.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Borrower DTI', value: `${borrowerDTI.toFixed(1)}%`, isCurrency: false },
        { label: 'Combined DTI', value: `${combinedDTI.toFixed(1)}%`, isCurrency: false },
        { label: 'Guarantor Liability', value: guarantorLiability.toFixed(2), isCurrency: true },
        { label: 'Total Interest Paid', value: totalInterestPaid.toFixed(2), isCurrency: true },
        { label: 'Loan-to-Value (LTV)', value: `${loanToValue.toFixed(1)}%`, isCurrency: false },
        { label: 'Qualification Status', value: qualificationStatus, isCurrency: false },
      ];
    },
  },
};
