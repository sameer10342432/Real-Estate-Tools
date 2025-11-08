'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'Mortgage Pre-Approval Calculator',
  description: 'Estimate your pre-approval amount based on income, debts, credit score, and down payment',
  icon: '✅',
  category: 'Basic Calculators',
  slug: 'mortgage-pre-approval-calculator',
  article: {
    title: 'Understanding Mortgage Pre-Approval',
    content: `
      <p>Pre-approval gives you a conditional commitment from a lender stating how much they're willing to lend you based on verified financial information.</p>
      <h3>Pre-Approval vs. Pre-Qualification</h3>
      <ul>
        <li><strong>Pre-Qualification:</strong> Informal estimate based on self-reported info</li>
        <li><strong>Pre-Approval:</strong> Formal commitment with verified documents and credit check</li>
      </ul>
      <h3>Factors Affecting Pre-Approval Amount</h3>
      <ul>
        <li>Gross monthly income</li>
        <li>Debt-to-income ratio (DTI)</li>
        <li>Credit score</li>
        <li>Down payment amount</li>
        <li>Loan type (Conventional, FHA, VA, USDA)</li>
      </ul>
      <h3>Documents Required</h3>
      <ul>
        <li>Last 2 years W-2 forms or tax returns</li>
        <li>Last 30 days pay stubs</li>
        <li>Last 2 months bank statements</li>
        <li>List of debts and monthly payments</li>
      </ul>
    `
  },
  calculator: {
    fields: [
      { name: 'annualIncome', label: 'Annual Gross Income', type: 'number', defaultValue: '80000' },
      { name: 'monthlyDebts', label: 'Total Monthly Debts', type: 'number', defaultValue: '800' },
      { name: 'creditScore', label: 'Credit Score', type: 'number', defaultValue: '720' },
      { name: 'downPayment', label: 'Down Payment', type: 'number', defaultValue: '50000' },
      { name: 'interestRate', label: 'Interest Rate (%)', type: 'number', defaultValue: '7.0' },
      { name: 'loanType', label: 'Loan Type', type: 'select', defaultValue: 'conventional', options: [
        { value: 'conventional', label: 'Conventional (36% DTI)' },
        { value: 'fha', label: 'FHA (43% DTI)' },
        { value: 'va', label: 'VA (41% DTI)' }
      ]},
    ],
    results: [
      { label: 'Maximum Loan Amount', isCurrency: true },
      { label: 'Maximum Home Price', isCurrency: true },
      { label: 'Monthly Payment (P&I)', isCurrency: true },
      { label: 'DTI Ratio', isCurrency: false },
      { label: 'Pre-Approval Likelihood', isCurrency: false },
    ],
    calculate: (values: any) => {
      const annualIncome = parseFloat(values.annualIncome) || 80000;
      const monthlyIncome = annualIncome / 12;
      const monthlyDebts = parseFloat(values.monthlyDebts) || 800;
      const creditScore = parseInt(values.creditScore) || 720;
      const downPayment = parseFloat(values.downPayment) || 50000;
      const rate = (parseFloat(values.interestRate) || 7.0) / 100 / 12;
      const loanType = values.loanType || 'conventional';
      
      const maxDTI = loanType === 'fha' ? 0.43 : loanType === 'va' ? 0.41 : 0.36;
      const maxTotalPayment = monthlyIncome * maxDTI;
      const maxHousingPayment = maxTotalPayment - monthlyDebts;
      
      const months = 30 * 12;
      const maxLoan = maxHousingPayment * (Math.pow(1 + rate, months) - 1) / (rate * Math.pow(1 + rate, months));
      const maxHomePrice = maxLoan + downPayment;
      
      const actualDTI = ((maxHousingPayment + monthlyDebts) / monthlyIncome) * 100;
      
      let likelihood = 'Excellent';
      if (creditScore < 620) likelihood = 'Difficult';
      else if (creditScore < 680) likelihood = 'Good';
      else if (actualDTI > 43) likelihood = 'Fair';
      
      return [
        { label: 'Maximum Loan Amount', value: maxLoan.toFixed(2), isCurrency: true },
        { label: 'Maximum Home Price', value: maxHomePrice.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment (P&I)', value: maxHousingPayment.toFixed(2), isCurrency: true },
        { label: 'DTI Ratio', value: actualDTI.toFixed(1) + '%', isCurrency: false },
        { label: 'Pre-Approval Likelihood', value: likelihood, isCurrency: false },
      ];
    },
  },
};

export default function PreApprovalPage() {
  return (
    <CalculatorLayout content={CONTENT}>
      <EnhancedCalculator
        title={CONTENT.title}
        slug={CONTENT.slug}
        category={CONTENT.category}
        description={CONTENT.description}
        inputs={CONTENT.calculator.fields}
        results={CONTENT.calculator.results}
        calculation={CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
