import { CalculatorContent } from '@/types';

export const HARD_MONEY_INTEREST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Hard Money Interest Calculator',
  description: 'Calculate interest costs for hard money loans including monthly payments, total interest, and effective APR for both interest-only and amortized options.',
  icon: '💰',
  slug: 'hard-money-interest-calculator',
  category: 'Investment Analysis',
  metaTitle: 'Hard Money Interest Calculator | Calculate Loan Interest Costs',
  metaDescription: 'Free Hard Money Interest Calculator. Calculate monthly interest payments, total interest costs, and effective APR for hard money loans. Compare interest-only vs amortized payments.',
  article: {
    title: 'Understanding Hard Money Loan Interest',
    content: `
    <h2>How Hard Money Loan Interest Works</h2>
    <p>Hard money loans carry significantly higher interest rates than conventional mortgages, typically ranging from 10% to 18% annually. Understanding how this interest is calculated and structured is essential for real estate investors to accurately project costs and ensure profitable deals.</p>

    <h3>Interest-Only vs. Amortized Payments</h3>
    <p>Hard money loans typically offer two payment structures:</p>
    <ul>
      <li><strong>Interest-Only Payments:</strong> The most common structure where you only pay interest each month. The full principal is due at the end of the loan term. This keeps monthly payments lower and preserves cash for renovations.</li>
      <li><strong>Amortized Payments:</strong> Monthly payments include both principal and interest. This builds equity during the loan term but results in higher monthly payments.</li>
    </ul>

    <h3>Why Hard Money Rates Are Higher</h3>
    <p>Several factors contribute to higher hard money interest rates:</p>
    <ul>
      <li><strong>Speed and Flexibility:</strong> Fast funding and less stringent qualification requirements</li>
      <li><strong>Short-Term Nature:</strong> Typically 6-24 month terms require different risk pricing</li>
      <li><strong>Asset-Based Lending:</strong> Less emphasis on borrower credit means higher risk</li>
      <li><strong>Smaller Loan Sizes:</strong> Fixed costs spread over shorter terms</li>
      <li><strong>Property Condition:</strong> Distressed properties carry higher risk</li>
    </ul>

    <h3>Calculating Your Interest Costs</h3>
    <p>For interest-only loans, the monthly payment calculation is straightforward:</p>
    <p><em>Monthly Interest = (Loan Amount × Annual Rate) ÷ 12</em></p>
    <p>For amortized loans, the calculation uses the standard amortization formula that factors in principal reduction over time.</p>

    <h3>Understanding Effective APR</h3>
    <p>The effective APR (Annual Percentage Rate) includes all costs of the loan, not just the interest rate. For hard money loans, this includes:</p>
    <ul>
      <li>Base interest rate</li>
      <li>Origination points</li>
      <li>Processing fees</li>
      <li>Underwriting fees</li>
      <li>Document preparation fees</li>
    </ul>
    <p>The effective APR is typically much higher than the stated interest rate due to the short loan term and upfront fees.</p>

    <h3>How to Use This Calculator</h3>
    <p>This calculator helps you understand:</p>
    <ul>
      <li><strong>Monthly Interest Payment:</strong> Your recurring monthly cost</li>
      <li><strong>Total Interest Cost:</strong> Total interest over the loan term</li>
      <li><strong>Effective APR:</strong> True annual cost including typical fees</li>
      <li><strong>Payment Comparison:</strong> See difference between interest-only and amortized</li>
    </ul>

    <h3>Tips for Managing Interest Costs</h3>
    <ul>
      <li><strong>Negotiate Rate:</strong> Experienced investors can often negotiate 1-2% lower rates</li>
      <li><strong>Shorter Hold Period:</strong> Complete projects quickly to minimize interest</li>
      <li><strong>Extension Provisions:</strong> Understand extension fees before you need them</li>
      <li><strong>Prepayment Terms:</strong> Confirm there's no penalty for early payoff</li>
      <li><strong>Rate Locks:</strong> Lock your rate during the approval process</li>
    </ul>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'annualInterestRate',
        label: 'Annual Interest Rate (%)',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'loanTermMonths',
        label: 'Loan Term (Months)',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'paymentType',
        label: 'Payment Type',
        type: 'select',
        defaultValue: 'interest-only',
        options: [
          { value: 'interest-only', label: 'Interest Only' },
          { value: 'amortized', label: 'Fully Amortized' },
        ],
      },
    ],
    calculate: (values) => {
      const { loanAmount, annualInterestRate, loanTermMonths, paymentType } = values;
      
      const monthlyRate = annualInterestRate / 100 / 12;
      
      let monthlyPayment: number;
      let totalInterestCost: number;
      let totalPayments: number;
      
      if (paymentType === 'interest-only') {
        monthlyPayment = loanAmount * monthlyRate;
        totalInterestCost = monthlyPayment * loanTermMonths;
        totalPayments = totalInterestCost + loanAmount;
      } else {
        if (monthlyRate === 0) {
          monthlyPayment = loanAmount / loanTermMonths;
        } else {
          monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths)) / 
                          (Math.pow(1 + monthlyRate, loanTermMonths) - 1);
        }
        totalPayments = monthlyPayment * loanTermMonths;
        totalInterestCost = totalPayments - loanAmount;
      }
      
      const typicalPoints = 0.03;
      const typicalFees = 1500;
      const totalUpfrontCosts = (loanAmount * typicalPoints) + typicalFees;
      const totalLoanCost = totalInterestCost + totalUpfrontCosts;
      const effectiveAPR = ((totalLoanCost / loanAmount) / (loanTermMonths / 12)) * 100;
      
      const dailyInterest = (loanAmount * (annualInterestRate / 100)) / 365;

      return [
        { label: 'Monthly Payment', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Total Interest Cost', value: totalInterestCost.toFixed(2), isCurrency: true },
        { label: 'Total Amount Due at Maturity', value: totalPayments.toFixed(2), isCurrency: true },
        { label: 'Effective APR (with typical fees)', value: `${effectiveAPR.toFixed(2)}%` },
        { label: 'Daily Interest Accrual', value: dailyInterest.toFixed(2), isCurrency: true },
        { label: 'Payment Type', value: paymentType === 'interest-only' ? 'Interest Only' : 'Fully Amortized' },
      ];
    },
  },
};
