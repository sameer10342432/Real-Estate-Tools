import { CalculatorContent } from '@/types';

export const SBA_504_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'SBA 504 Loan Calculator',
  description: 'Calculate SBA 504 loan payments for commercial real estate with low down payments and fixed interest rates.',
  slug: 'sba-504-loan-calculator',
  icon: '🏛️',
  category: 'Commercial Real Estate',
  metaTitle: 'SBA 504 Loan Calculator - Calculate Commercial Real Estate Loan Payments | Free Tool',
  metaDescription: 'Free SBA 504 loan calculator to estimate monthly payments for commercial real estate. Calculate CDC loans with 10% down payment, fixed rates, and 20-25 year terms.',
  article: {
    title: 'Understanding SBA 504 Loans',
    content: `
    <h2>What is an SBA 504 Loan?</h2>
    <p>The SBA 504 Loan Program is a powerful financing tool designed to help small businesses purchase or improve commercial real estate and major fixed assets with long-term, fixed-rate financing. This program is administered through Certified Development Companies (CDCs) in partnership with the SBA and traditional lenders.</p>
    
    <h3>SBA 504 Loan Structure</h3>
    <p>The unique structure of a 504 loan involves three parties:</p>
    <ul>
      <li><strong>Bank Loan (50%):</strong> A private lender provides up to 50% of the project cost, taking the first lien position</li>
      <li><strong>CDC/SBA Loan (40%):</strong> The CDC provides up to 40% backed by an SBA-guaranteed debenture, second lien position</li>
      <li><strong>Borrower Equity (10%):</strong> You contribute just 10% down payment (15% for new businesses or special purpose properties)</li>
    </ul>

    <h3>Key Benefits of SBA 504 Loans</h3>
    <ul>
      <li><strong>Low Down Payment:</strong> Only 10% equity required (vs. 20-35% for conventional loans)</li>
      <li><strong>Fixed Interest Rates:</strong> CDC portion has fixed rates for the entire loan term</li>
      <li><strong>Long Terms:</strong> 10, 20, or 25-year terms for real estate; 10 years for equipment</li>
      <li><strong>No Balloon Payments:</strong> Fully amortizing loans eliminate refinance risk</li>
      <li><strong>High Loan Limits:</strong> Up to $5.5 million (up to $16.5 million for certain energy projects)</li>
      <li><strong>Preserve Working Capital:</strong> Low down payment keeps cash in your business</li>
    </ul>

    <h3>SBA 504 Loan Eligibility Requirements</h3>
    <ul>
      <li>For-profit business operating in the United States</li>
      <li>Tangible net worth less than $15 million</li>
      <li>Average net income less than $5 million (after taxes) for previous two years</li>
      <li>Owner-occupied: Must occupy at least 51% of existing building (60% for new construction)</li>
      <li>Good credit history and ability to repay</li>
      <li>Job creation requirement (typically 1 job per $65,000 of SBA funding)</li>
    </ul>

    <h3>Eligible Uses of SBA 504 Funds</h3>
    <ul>
      <li>Purchase of land and existing buildings</li>
      <li>Construction of new facilities or renovations</li>
      <li>Purchase of machinery and equipment (with 10+ year useful life)</li>
      <li>Improvements to land, streets, utilities, and parking lots</li>
      <li>Refinancing existing eligible business debt</li>
    </ul>

    <h3>SBA 504 Loan Rates and Fees</h3>
    <p>Current SBA 504 rates are based on 5, 10, and 20-year Treasury rates plus a spread:</p>
    <ul>
      <li>The CDC portion rate is fixed for the entire term</li>
      <li>Bank portion may be fixed or variable rate</li>
      <li>CDC fees include a guarantee fee (0.5%), funding fee (0.25%), and annual service fee (0.5625%)</li>
      <li>Total effective rate is typically below market for comparable conventional loans</li>
    </ul>

    <h3>How to Use This SBA 504 Calculator</h3>
    <p>Enter your project details to estimate your SBA 504 loan payments:</p>
    <ul>
      <li><strong>Total Project Cost:</strong> Land, building, improvements, and soft costs</li>
      <li><strong>Bank Rate:</strong> Interest rate from your first-lien lender</li>
      <li><strong>CDC Rate:</strong> Current SBA 504 debenture rate (check sba.gov for current rates)</li>
      <li><strong>Loan Terms:</strong> Typically 25 years for real estate, 10 years for equipment</li>
    </ul>

    <h3>SBA 504 vs. SBA 7(a) Loans</h3>
    <p>While both are SBA programs, they serve different purposes:</p>
    <ul>
      <li><strong>504 Loans:</strong> Best for commercial real estate and major fixed assets with lower down payments and fixed rates</li>
      <li><strong>7(a) Loans:</strong> More flexible uses including working capital, inventory, and debt refinancing</li>
    </ul>

    <h3>Tips for SBA 504 Loan Success</h3>
    <ul>
      <li>Start the process early - CDC loans can take 60-90 days to close</li>
      <li>Have a solid business plan with financial projections</li>
      <li>Ensure your property meets owner-occupancy requirements</li>
      <li>Work with an experienced SBA lender and CDC</li>
      <li>Prepare for job creation/retention documentation</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalProjectCost',
        label: 'Total Project Cost ($)',
        type: 'number',
        defaultValue: 1000000,
      },
      {
        name: 'downPaymentPercent',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'bankRate',
        label: 'Bank Loan Interest Rate (%)',
        type: 'number',
        defaultValue: 7.5,
      },
      {
        name: 'cdcRate',
        label: 'CDC/SBA Loan Interest Rate (%)',
        type: 'number',
        defaultValue: 6.0,
      },
      {
        name: 'bankTerm',
        label: 'Bank Loan Term (Years)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'cdcTerm',
        label: 'CDC Loan Term (Years)',
        type: 'number',
        defaultValue: 25,
      },
    ],
    results: [
      { label: 'Total Monthly Payment', isCurrency: true },
      { label: 'Bank Loan Monthly Payment', isCurrency: true },
      { label: 'CDC Loan Monthly Payment', isCurrency: true },
      { label: 'Down Payment Amount', isCurrency: true },
      { label: 'Bank Loan Amount (50%)', isCurrency: true },
      { label: 'CDC Loan Amount (40%)', isCurrency: true },
      { label: 'Annual Debt Service', isCurrency: true },
      { label: 'Total Interest (Bank + CDC)', isCurrency: true },
    ],
    calculate: (values) => {
      const { totalProjectCost, downPaymentPercent, bankRate, cdcRate, bankTerm, cdcTerm } = values;
      
      const downPaymentAmount = (totalProjectCost * downPaymentPercent) / 100;
      const bankLoanAmount = totalProjectCost * 0.50;
      const cdcLoanAmount = totalProjectCost * 0.40;
      
      const bankMonthlyRate = bankRate / 100 / 12;
      const bankPayments = bankTerm * 12;
      const bankMonthlyPayment = bankLoanAmount * 
        (bankMonthlyRate * Math.pow(1 + bankMonthlyRate, bankPayments)) / 
        (Math.pow(1 + bankMonthlyRate, bankPayments) - 1);
      
      const cdcMonthlyRate = cdcRate / 100 / 12;
      const cdcPayments = cdcTerm * 12;
      const cdcMonthlyPayment = cdcLoanAmount * 
        (cdcMonthlyRate * Math.pow(1 + cdcMonthlyRate, cdcPayments)) / 
        (Math.pow(1 + cdcMonthlyRate, cdcPayments) - 1);
      
      const totalMonthlyPayment = bankMonthlyPayment + cdcMonthlyPayment;
      const annualDebtService = totalMonthlyPayment * 12;
      
      const totalBankInterest = (bankMonthlyPayment * bankPayments) - bankLoanAmount;
      const totalCdcInterest = (cdcMonthlyPayment * cdcPayments) - cdcLoanAmount;
      const totalInterest = totalBankInterest + totalCdcInterest;

      return [
        { label: 'Total Monthly Payment', value: totalMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Bank Loan Monthly Payment', value: bankMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'CDC Loan Monthly Payment', value: cdcMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Down Payment Amount', value: downPaymentAmount.toFixed(2), isCurrency: true },
        { label: 'Bank Loan Amount (50%)', value: bankLoanAmount.toFixed(2), isCurrency: true },
        { label: 'CDC Loan Amount (40%)', value: cdcLoanAmount.toFixed(2), isCurrency: true },
        { label: 'Annual Debt Service', value: annualDebtService.toFixed(2), isCurrency: true },
        { label: 'Total Interest (Bank + CDC)', value: totalInterest.toFixed(2), isCurrency: true },
      ];
    },
  },
};
