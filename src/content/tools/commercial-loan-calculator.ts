import { CalculatorContent } from '@/types';

export const COMMERCIAL_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Commercial Loan Calculator',
  description: 'Calculate commercial real estate loan payments, rates, and amortization schedules for business property investments.',
  slug: 'commercial-loan-calculator',
  icon: '🏢',
  category: 'Commercial Real Estate',
  metaTitle: 'Commercial Loan Calculator - Calculate CRE Loan Payments & Rates | Free Tool',
  metaDescription: 'Free commercial loan calculator to estimate monthly payments, interest costs, and amortization for commercial real estate loans. Ideal for investors and business owners.',
  article: {
    title: 'Understanding Commercial Loans',
    content: `
    <h2>What is a Commercial Loan?</h2>
    <p>A commercial loan is a type of financing used to purchase, refinance, or improve commercial real estate properties such as office buildings, retail centers, industrial warehouses, hotels, and multi-family apartment buildings (5+ units). Unlike residential mortgages, commercial loans have different underwriting criteria, terms, and interest rates.</p>
    
    <h3>Key Features of Commercial Loans</h3>
    <ul>
      <li><strong>Loan-to-Value (LTV):</strong> Typically 65-80% LTV, meaning you need a 20-35% down payment</li>
      <li><strong>Debt Service Coverage Ratio (DSCR):</strong> Most lenders require 1.20-1.35x DSCR minimum</li>
      <li><strong>Interest Rates:</strong> Generally higher than residential loans, ranging from 5% to 12%</li>
      <li><strong>Loan Terms:</strong> Usually 5-25 years with balloon payments common</li>
      <li><strong>Amortization:</strong> Often 20-30 years even with shorter loan terms</li>
    </ul>

    <h3>Types of Commercial Loans</h3>
    <ul>
      <li><strong>Traditional Bank Loans:</strong> Lower rates but strict qualification requirements</li>
      <li><strong>SBA Loans (504/7a):</strong> Government-backed with favorable terms for small businesses</li>
      <li><strong>CMBS Loans:</strong> Securitized loans with competitive rates for larger properties</li>
      <li><strong>Bridge Loans:</strong> Short-term financing for acquisitions or renovations</li>
      <li><strong>Hard Money Loans:</strong> Asset-based loans with quick approval but higher rates</li>
    </ul>

    <h3>Commercial Loan Requirements</h3>
    <p>To qualify for a commercial loan, lenders typically evaluate:</p>
    <ul>
      <li>Property's Net Operating Income (NOI) and cash flow potential</li>
      <li>Borrower's credit score (usually 680+ minimum)</li>
      <li>Business financials and tax returns (2-3 years)</li>
      <li>Property appraisal and environmental assessments</li>
      <li>Tenant quality and lease terms for income-producing properties</li>
      <li>Borrower's real estate experience and track record</li>
    </ul>

    <h3>How to Use This Commercial Loan Calculator</h3>
    <p>Enter the following information to calculate your commercial loan payments:</p>
    <ul>
      <li><strong>Property Purchase Price:</strong> The total cost of the commercial property</li>
      <li><strong>Down Payment:</strong> Your initial cash investment (typically 20-35%)</li>
      <li><strong>Interest Rate:</strong> The annual interest rate on your loan</li>
      <li><strong>Loan Term:</strong> The length of the loan in years</li>
      <li><strong>Amortization Period:</strong> The period over which payments are calculated</li>
    </ul>

    <h3>Understanding Balloon Payments</h3>
    <p>Many commercial loans have a "balloon" structure where the loan term is shorter than the amortization period. For example, a loan might have a 10-year term with 25-year amortization, meaning you'll need to refinance or pay off the remaining balance at the end of the 10-year term.</p>

    <h3>Commercial Loan Costs to Consider</h3>
    <ul>
      <li>Origination fees (0.5% - 2% of loan amount)</li>
      <li>Appraisal fees ($2,000 - $10,000+)</li>
      <li>Environmental assessments ($1,500 - $5,000)</li>
      <li>Legal fees and closing costs</li>
      <li>Prepayment penalties (if applicable)</li>
    </ul>

    <h3>Tips for Getting the Best Commercial Loan</h3>
    <ul>
      <li>Shop multiple lenders to compare rates and terms</li>
      <li>Improve your credit score before applying</li>
      <li>Have strong property financials and tenant history</li>
      <li>Consider SBA loans for lower down payments</li>
      <li>Work with a commercial mortgage broker for access to more options</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Property Purchase Price ($)',
        type: 'number',
        defaultValue: 1000000,
      },
      {
        name: 'downPaymentPercent',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 7.5,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'amortizationPeriod',
        label: 'Amortization Period (Years)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'annualNOI',
        label: 'Annual Net Operating Income ($)',
        type: 'number',
        defaultValue: 120000,
      },
      {
        name: 'originationFeePercent',
        label: 'Origination Fee (%)',
        type: 'number',
        defaultValue: 1,
      },
    ],
    results: [
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'Loan Amount', isCurrency: true },
      { label: 'Down Payment Amount', isCurrency: true },
      { label: 'Annual Debt Service', isCurrency: true },
      { label: 'DSCR (Debt Service Coverage)', isCurrency: false },
      { label: 'Balloon Payment at End of Term', isCurrency: true },
      { label: 'Total Interest Paid (Over Term)', isCurrency: true },
      { label: 'Origination Fee', isCurrency: true },
    ],
    calculate: (values) => {
      const { purchasePrice, downPaymentPercent, interestRate, loanTerm, amortizationPeriod, annualNOI, originationFeePercent } = values;
      
      const downPaymentAmount = (purchasePrice * downPaymentPercent) / 100;
      const loanAmount = purchasePrice - downPaymentAmount;
      const originationFee = (loanAmount * originationFeePercent) / 100;
      
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = amortizationPeriod * 12;
      const termPayments = loanTerm * 12;
      
      const monthlyPayment = loanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      
      const annualDebtService = monthlyPayment * 12;
      const dscr = annualNOI / annualDebtService;
      
      let remainingBalance = loanAmount;
      let totalInterest = 0;
      for (let i = 0; i < termPayments; i++) {
        const interestPayment = remainingBalance * monthlyInterestRate;
        const principalPayment = monthlyPayment - interestPayment;
        totalInterest += interestPayment;
        remainingBalance -= principalPayment;
      }

      return [
        { label: 'Monthly Payment', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Loan Amount', value: loanAmount.toFixed(2), isCurrency: true },
        { label: 'Down Payment Amount', value: downPaymentAmount.toFixed(2), isCurrency: true },
        { label: 'Annual Debt Service', value: annualDebtService.toFixed(2), isCurrency: true },
        { label: 'DSCR (Debt Service Coverage)', value: dscr.toFixed(2), isCurrency: false },
        { label: 'Balloon Payment at End of Term', value: remainingBalance.toFixed(2), isCurrency: true },
        { label: 'Total Interest Paid (Over Term)', value: totalInterest.toFixed(2), isCurrency: true },
        { label: 'Origination Fee', value: originationFee.toFixed(2), isCurrency: true },
      ];
    },
  },
};
