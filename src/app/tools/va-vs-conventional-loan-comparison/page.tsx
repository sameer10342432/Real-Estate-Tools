'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { Building2 } from 'lucide-react';

const CONTENT = {
  title: 'VA vs. Conventional Loan Comparison',
  description: 'Compare VA and Conventional loans side-by-side to find the best mortgage option for your situation',
  icon: '⚖️',
  category: 'Basic Calculators',
  slug: 'va-vs-conventional-loan-comparison',
  article: {
    title: 'Understanding VA vs. Conventional Loans',
    content: `
      <p>Choosing between a VA loan and a conventional loan is a crucial decision for homebuyers, especially veterans and active military members. This calculator helps you analyze both options side-by-side.</p>
      <h3>VA Loan Benefits</h3>
      <ul>
        <li>No down payment required for eligible borrowers</li>
        <li>No PMI requirement</li>
        <li>VA funding fee (typically 2.15%) can be rolled into loan</li>
        <li>Competitive interest rates</li>
        <li>Flexible credit requirements</li>
      </ul>
      <h3>Conventional Loan Features</h3>
      <ul>
        <li>Down payment typically 3-20%</li>
        <li>PMI required if less than 20% down</li>
        <li>PMI can be cancelled at 20% equity</li>
        <li>Flexible property types</li>
        <li>Better rates for higher credit scores</li>
      </ul>
    `
  },
  calculator: {
    fields: [
      { name: 'homePrice', label: 'Home Price', type: 'number', defaultValue: '350000' },
      { name: 'vaRate', label: 'VA Interest Rate (%)', type: 'number', defaultValue: '6.5' },
      { name: 'conventionalRate', label: 'Conventional Rate (%)', type: 'number', defaultValue: '7.0' },
      { name: 'downPaymentPercent', label: 'Conventional Down Payment (%)', type: 'number', defaultValue: '10' },
      { name: 'vaFundingFee', label: 'VA Funding Fee (%)', type: 'number', defaultValue: '2.15' },
      { name: 'loanTerm', label: 'Loan Term (Years)', type: 'number', defaultValue: '30' },
    ],
    results: [
      { label: 'VA Monthly Payment', isCurrency: true },
      { label: 'Conventional Monthly Payment', isCurrency: true },
      { label: 'Monthly Savings (VA)', isCurrency: true },
      { label: 'Total Interest (VA)', isCurrency: true },
      { label: 'Total Interest (Conventional)', isCurrency: true },
      { label: 'Lifetime Savings (VA)', isCurrency: true },
    ],
    calculate: (values: any) => {
      const homePrice = parseFloat(values.homePrice) || 350000;
      const vaRate = (parseFloat(values.vaRate) || 6.5) / 100 / 12;
      const conventionalRate = (parseFloat(values.conventionalRate) || 7.0) / 100 / 12;
      const downPaymentPercent = parseFloat(values.downPaymentPercent) || 10;
      const vaFundingFee = (parseFloat(values.vaFundingFee) || 2.15) / 100;
      const months = (parseInt(values.loanTerm) || 30) * 12;

      const vaLoanAmount = homePrice * (1 + vaFundingFee);
      const vaPayment = (vaLoanAmount * vaRate * Math.pow(1 + vaRate, months)) / (Math.pow(1 + vaRate, months) - 1);
      const vaTotalInterest = (vaPayment * months) - vaLoanAmount;

      const downPayment = homePrice * (downPaymentPercent / 100);
      const conventionalLoanAmount = homePrice - downPayment;
      const conventionalPayment = (conventionalLoanAmount * conventionalRate * Math.pow(1 + conventionalRate, months)) / (Math.pow(1 + conventionalRate, months) - 1);
      let pmi = 0;
      if (downPaymentPercent < 20) {
        pmi = conventionalLoanAmount * 0.005 / 12;
      }
      const conventionalTotalPayment = conventionalPayment + pmi;
      const conventionalTotalInterest = (conventionalPayment * months) - conventionalLoanAmount;

      const monthlySavings = conventionalTotalPayment - vaPayment;
      const lifetimeSavings = (monthlySavings * months) + downPayment;

      return [
        { label: 'VA Monthly Payment', value: vaPayment.toFixed(2), isCurrency: true },
        { label: 'Conventional Monthly Payment', value: conventionalTotalPayment.toFixed(2), isCurrency: true },
        { label: 'Monthly Savings (VA)', value: monthlySavings.toFixed(2), isCurrency: true },
        { label: 'Total Interest (VA)', value: vaTotalInterest.toFixed(2), isCurrency: true },
        { label: 'Total Interest (Conventional)', value: conventionalTotalInterest.toFixed(2), isCurrency: true },
        { label: 'Lifetime Savings (VA)', value: lifetimeSavings.toFixed(2), isCurrency: true },
      ];
    },
  },
};

export default function VAvsConventionalPage() {
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
