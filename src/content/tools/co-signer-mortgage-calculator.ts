import { CalculatorContent } from '@/types';

export const CO_SIGNER_MORTGAGE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Co-Signer Mortgage Calculator',
  description: 'Calculate mortgage scenarios with a co-signer to improve your chances of loan approval and understand the financial impact on both parties.',
  slug: 'co-signer-mortgage-calculator',
  icon: '👥',
  category: 'Mortgage & Financing',
  metaTitle: 'Co-Signer Mortgage Calculator | Calculate Joint Mortgage Qualification & DTI Ratios',
  metaDescription: 'Free co-signer mortgage calculator to estimate loan amounts, monthly payments, combined DTI ratios, and qualification scenarios. Understand how a co-signer affects your mortgage approval chances and total loan costs.',
  article: {
    title: 'Understanding Co-Signer Mortgages',
    content: `
    <h2>What is a Co-Signer on a Mortgage?</h2>
    <p>A co-signer on a mortgage is someone who agrees to take on equal responsibility for a home loan alongside the primary borrower. Unlike simply being listed on the title, a co-signer signs the mortgage documents and becomes legally obligated to repay the loan if the primary borrower cannot make payments. Co-signers are often parents, grandparents, or close family members who want to help someone achieve homeownership when they might not qualify on their own.</p>
    
    <p>When you add a co-signer to your mortgage application, lenders consider both parties' income, credit scores, and debt obligations when determining loan eligibility. This can significantly improve your chances of approval, allow you to qualify for a larger loan amount, or help you secure better interest rates than you would receive on your own.</p>

    <h3>Co-Signer vs. Guarantor: Key Differences</h3>
    <p>While the terms "co-signer" and "guarantor" are sometimes used interchangeably, they represent different levels of responsibility and legal obligations in mortgage lending:</p>
    
    <h4>Co-Signer Characteristics:</h4>
    <ul>
      <li><strong>Equal Ownership Rights:</strong> A co-signer typically has ownership interest in the property and their name appears on both the mortgage and the title deed.</li>
      <li><strong>Primary Liability:</strong> The co-signer is equally responsible for the loan from day one. Lenders can pursue the co-signer for payment at any time, not just after the primary borrower defaults.</li>
      <li><strong>Credit Reporting:</strong> The mortgage appears on both the primary borrower's and co-signer's credit reports, affecting both parties' credit scores and debt-to-income ratios.</li>
      <li><strong>Full Qualification:</strong> Both parties must meet the lender's qualification requirements, though combined income and assets are considered.</li>
    </ul>

    <h4>Guarantor Characteristics:</h4>
    <ul>
      <li><strong>No Ownership Interest:</strong> A guarantor typically does not have their name on the property title and has no ownership rights.</li>
      <li><strong>Secondary Liability:</strong> The guarantor is only pursued for payment after the primary borrower has defaulted and the lender has exhausted efforts to collect from them.</li>
      <li><strong>Credit Impact:</strong> In some cases, the loan may not appear on the guarantor's credit report until a default occurs.</li>
      <li><strong>Asset Security:</strong> Guarantors often pledge their own property or assets as collateral rather than sharing income qualification.</li>
    </ul>

    <h3>When Do You Need a Co-Signer?</h3>
    <p>A co-signer can help overcome several common barriers to mortgage approval:</p>
    <ul>
      <li><strong>Insufficient Income:</strong> If your income alone doesn't meet the lender's debt-to-income (DTI) requirements, a co-signer's income can be added to help you qualify for a larger loan.</li>
      <li><strong>Limited Credit History:</strong> Young buyers or those new to credit may not have established enough credit history. A co-signer with a strong credit profile can strengthen the application.</li>
      <li><strong>Lower Credit Score:</strong> If your credit score falls below lender thresholds, a co-signer with excellent credit may help you qualify or secure better rates.</li>
      <li><strong>High Debt-to-Income Ratio:</strong> Existing debts like student loans or car payments can push your DTI above acceptable limits. A co-signer's income helps offset this.</li>
      <li><strong>Self-Employment Challenges:</strong> Self-employed borrowers often face stricter documentation requirements. A co-signer with W-2 income can provide additional stability.</li>
      <li><strong>Non-Traditional Income:</strong> If your income comes from sources lenders find difficult to verify, a co-signer can strengthen your application.</li>
    </ul>

    <h3>Co-Signer Responsibilities and Risks</h3>
    <p>Before agreeing to co-sign a mortgage, both parties should understand the full scope of responsibilities involved:</p>
    
    <h4>Financial Obligations:</h4>
    <ul>
      <li><strong>Full Repayment Liability:</strong> The co-signer is 100% responsible for the entire loan amount if the primary borrower cannot pay. This includes the principal, interest, late fees, and any legal costs.</li>
      <li><strong>Immediate Liability:</strong> Unlike guarantors, co-signers can be pursued for payment at any time, not just after a default. Lenders may contact the co-signer even for a single late payment.</li>
      <li><strong>Long-Term Commitment:</strong> Mortgage terms typically span 15-30 years. The co-signer remains responsible for this entire duration unless formally released.</li>
    </ul>

    <h4>Credit and Financial Impact:</h4>
    <ul>
      <li><strong>Credit Report Appearance:</strong> The mortgage will appear on the co-signer's credit report as their own debt, affecting their credit utilization and debt-to-income ratio.</li>
      <li><strong>Reduced Borrowing Capacity:</strong> The co-signed mortgage counts against the co-signer's borrowing capacity, potentially limiting their ability to obtain their own loans.</li>
      <li><strong>Credit Score Risk:</strong> Any late payments or defaults by the primary borrower will negatively impact the co-signer's credit score equally.</li>
    </ul>

    <h3>Impact on Both Parties' Credit</h3>
    <p>Understanding how a co-signed mortgage affects both parties' credit is crucial for making informed decisions:</p>
    
    <h4>For the Primary Borrower:</h4>
    <ul>
      <li>Regular, on-time payments build positive credit history</li>
      <li>The mortgage helps diversify credit mix, which can improve credit scores</li>
      <li>Responsible payment history over time establishes creditworthiness for future independent borrowing</li>
    </ul>

    <h4>For the Co-Signer:</h4>
    <ul>
      <li>The full mortgage balance appears as debt on their credit report</li>
      <li>Their debt-to-income ratio increases, potentially affecting future loan applications</li>
      <li>Any payment issues negatively impact their credit score immediately</li>
      <li>Positive payment history can also benefit the co-signer's credit, though this is typically not the primary consideration</li>
    </ul>

    <h3>How to Remove a Co-Signer from a Mortgage</h3>
    <p>Many borrowers and co-signers want to know when and how the co-signer can be released from the mortgage obligation. Here are the main options:</p>
    
    <h4>1. Refinancing the Mortgage:</h4>
    <p>The most common method is for the primary borrower to refinance the mortgage in their name only. This requires:</p>
    <ul>
      <li>Sufficient income to qualify independently</li>
      <li>Improved credit score meeting lender requirements</li>
      <li>Adequate home equity (typically 20% or more)</li>
      <li>Ability to cover refinancing closing costs</li>
    </ul>

    <h4>2. Loan Modification:</h4>
    <p>Some lenders offer co-signer release programs after specific conditions are met:</p>
    <ul>
      <li>A minimum number of on-time payments (often 24-48 consecutive payments)</li>
      <li>Primary borrower demonstrates ability to pay independently</li>
      <li>Credit score improvements meeting lender thresholds</li>
      <li>Loan-to-value ratio requirements are satisfied</li>
    </ul>

    <h4>3. Selling the Property:</h4>
    <p>Selling the home and paying off the mortgage completely releases both parties from the obligation.</p>

    <h4>4. Paying Off the Mortgage:</h4>
    <p>Paying the loan in full through accelerated payments or a lump sum release removes all parties from the obligation.</p>

    <h3>Using This Co-Signer Mortgage Calculator</h3>
    <p>This calculator helps you understand the financial implications of adding a co-signer to your mortgage application. Enter the following details:</p>
    <ul>
      <li><strong>Property Price:</strong> The purchase price of the home</li>
      <li><strong>Down Payment:</strong> The amount you plan to put down</li>
      <li><strong>Interest Rate:</strong> The expected annual interest rate</li>
      <li><strong>Loan Term:</strong> The length of the mortgage in years</li>
      <li><strong>Primary Borrower Income:</strong> Your annual gross income</li>
      <li><strong>Primary Borrower Debts:</strong> Your total monthly debt payments</li>
      <li><strong>Co-Signer Income:</strong> The co-signer's annual gross income</li>
      <li><strong>Co-Signer Debts:</strong> The co-signer's total monthly debt payments</li>
      <li><strong>Credit Scores:</strong> Both parties' credit scores to estimate qualification chances</li>
    </ul>

    <h3>Understanding Your Results</h3>
    <p>The calculator provides key metrics to help you evaluate your mortgage scenario:</p>
    <ul>
      <li><strong>Loan Amount:</strong> The total amount borrowed after your down payment</li>
      <li><strong>Monthly Payment:</strong> Your estimated monthly mortgage payment</li>
      <li><strong>Primary Borrower DTI:</strong> Your debt-to-income ratio without the co-signer</li>
      <li><strong>Co-Signer DTI:</strong> The co-signer's debt-to-income ratio including this mortgage</li>
      <li><strong>Combined DTI:</strong> The joint debt-to-income ratio used for qualification</li>
      <li><strong>Qualification Status:</strong> Whether you likely qualify with and without a co-signer</li>
      <li><strong>Total Loan Cost:</strong> The total amount paid over the life of the loan</li>
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
        defaultValue: 40000,
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
        name: 'primaryBorrowerIncome',
        label: 'Primary Borrower Annual Income ($)',
        type: 'number',
        defaultValue: 65000,
      },
      {
        name: 'primaryBorrowerDebts',
        label: 'Primary Borrower Monthly Debts ($)',
        type: 'number',
        defaultValue: 600,
      },
      {
        name: 'coSignerIncome',
        label: 'Co-Signer Annual Income ($)',
        type: 'number',
        defaultValue: 90000,
      },
      {
        name: 'coSignerDebts',
        label: 'Co-Signer Monthly Debts ($)',
        type: 'number',
        defaultValue: 400,
      },
      {
        name: 'primaryBorrowerCreditScore',
        label: 'Primary Borrower Credit Score',
        type: 'number',
        defaultValue: 680,
      },
      {
        name: 'coSignerCreditScore',
        label: 'Co-Signer Credit Score',
        type: 'number',
        defaultValue: 750,
      },
    ],
    results: [
      { label: 'Loan Amount', isCurrency: true },
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'Primary Borrower DTI', isCurrency: false },
      { label: 'Co-Signer DTI', isCurrency: false },
      { label: 'Combined DTI', isCurrency: false },
      { label: 'Qualification Without Co-Signer', isCurrency: false },
      { label: 'Qualification With Co-Signer', isCurrency: false },
      { label: 'Total Loan Cost', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        propertyPrice,
        downPayment,
        interestRate,
        loanTermYears,
        primaryBorrowerIncome,
        primaryBorrowerDebts,
        coSignerIncome,
        coSignerDebts,
        primaryBorrowerCreditScore,
        coSignerCreditScore,
      } = values;

      const loanAmount = propertyPrice - downPayment;

      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTermYears * 12;

      let monthlyPayment = 0;
      if (monthlyInterestRate > 0) {
        monthlyPayment =
          loanAmount *
          ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
            (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1));
      } else {
        monthlyPayment = loanAmount / numberOfPayments;
      }

      const primaryBorrowerMonthlyIncome = primaryBorrowerIncome / 12;
      const primaryBorrowerTotalDebt = primaryBorrowerDebts + monthlyPayment;
      const primaryBorrowerDTI = (primaryBorrowerTotalDebt / primaryBorrowerMonthlyIncome) * 100;

      const coSignerMonthlyIncome = coSignerIncome / 12;
      const coSignerTotalDebt = coSignerDebts + monthlyPayment;
      const coSignerDTI = (coSignerTotalDebt / coSignerMonthlyIncome) * 100;

      const combinedMonthlyIncome = (primaryBorrowerIncome + coSignerIncome) / 12;
      const combinedTotalDebt = primaryBorrowerDebts + coSignerDebts + monthlyPayment;
      const combinedDTI = (combinedTotalDebt / combinedMonthlyIncome) * 100;

      const totalLoanCost = monthlyPayment * numberOfPayments;

      let qualificationWithoutCoSigner = 'Unlikely to Qualify';
      if (primaryBorrowerDTI <= 36 && primaryBorrowerCreditScore >= 700) {
        qualificationWithoutCoSigner = 'Likely to Qualify (Excellent)';
      } else if (primaryBorrowerDTI <= 43 && primaryBorrowerCreditScore >= 660) {
        qualificationWithoutCoSigner = 'May Qualify (Good)';
      } else if (primaryBorrowerDTI <= 50 && primaryBorrowerCreditScore >= 620) {
        qualificationWithoutCoSigner = 'Possible with Compensating Factors';
      }

      let qualificationWithCoSigner = 'Unlikely to Qualify';
      const averageCreditScore = (primaryBorrowerCreditScore + coSignerCreditScore) / 2;
      const higherCreditScore = Math.max(primaryBorrowerCreditScore, coSignerCreditScore);
      
      if (combinedDTI <= 36 && higherCreditScore >= 700) {
        qualificationWithCoSigner = 'Likely to Qualify (Excellent)';
      } else if (combinedDTI <= 43 && higherCreditScore >= 660) {
        qualificationWithCoSigner = 'Likely to Qualify (Good)';
      } else if (combinedDTI <= 50 && averageCreditScore >= 620) {
        qualificationWithCoSigner = 'May Qualify with Conditions';
      } else if (combinedDTI <= 55) {
        qualificationWithCoSigner = 'Possible with Strong Compensating Factors';
      }

      return [
        { label: 'Loan Amount', value: loanAmount.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Primary Borrower DTI', value: `${primaryBorrowerDTI.toFixed(1)}%`, isCurrency: false },
        { label: 'Co-Signer DTI', value: `${coSignerDTI.toFixed(1)}%`, isCurrency: false },
        { label: 'Combined DTI', value: `${combinedDTI.toFixed(1)}%`, isCurrency: false },
        { label: 'Qualification Without Co-Signer', value: qualificationWithoutCoSigner, isCurrency: false },
        { label: 'Qualification With Co-Signer', value: qualificationWithCoSigner, isCurrency: false },
        { label: 'Total Loan Cost', value: totalLoanCost.toFixed(2), isCurrency: true },
      ];
    },
  },
};
