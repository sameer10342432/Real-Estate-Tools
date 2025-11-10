'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'Debt-to-Income (DTI) Ratio Calculator',
  description: 'Calculate your DTI ratio to determine mortgage eligibility and maximum affordable loan amount',
  icon: '📊',
  category: 'Basic Calculators',
  slug: 'debt-to-income-calculator',
  article: {
    title: 'Understanding Debt-to-Income Ratio',
    content: `
      <p>Your debt-to-income (DTI) ratio is one of the most important factors lenders consider when evaluating your mortgage application.</p>
      <h3>Front-End DTI (Housing Ratio)</h3>
      <p>Includes only housing costs: mortgage payment, property taxes, insurance, and HOA fees. Maximum: typically 28%.</p>
      <h3>Back-End DTI (Total DTI)</h3>
      <p>Includes all monthly debt payments plus housing costs. Maximum: typically 36-43% (varies by loan type).</p>
      <h3>DTI Requirements by Loan Type</h3>
      <ul>
        <li><strong>Conventional:</strong> 36% max (up to 45% with strong credit)</li>
        <li><strong>FHA:</strong> 43% max (up to 50% with compensating factors)</li>
        <li><strong>VA:</strong> 41% preferred (up to 50%+ possible)</li>
        <li><strong>USDA:</strong> 41% max</li>
      </ul>
    `
  },
  calculator: {
    fields: [
      { name: 'grossMonthlyIncome', label: 'Gross Monthly Income', type: 'number', defaultValue: '6000' },
      { name: 'monthlyHousingCosts', label: 'Monthly Housing Payment (PITI)', type: 'number', defaultValue: '1500' },
      { name: 'carPayments', label: 'Car Loan/Lease Payments', type: 'number', defaultValue: '400' },
      { name: 'studentLoans', label: 'Student Loan Payments', type: 'number', defaultValue: '250' },
      { name: 'creditCards', label: 'Credit Card Min Payments', type: 'number', defaultValue: '150' },
      { name: 'otherDebts', label: 'Other Monthly Debts', type: 'number', defaultValue: '0' },
    ],
    results: [
      { label: 'Front-End DTI', isCurrency: false },
      { label: 'Back-End DTI', isCurrency: false },
      { label: 'Total Monthly Debts', isCurrency: true },
      { label: 'Qualification Status', isCurrency: false },
      { label: 'Recommended Action', isCurrency: false },
    ],
    calculate: (values: any) => {
      const income = parseFloat(values.grossMonthlyIncome) || 6000;
      const housing = parseFloat(values.monthlyHousingCosts) || 1500;
      const car = parseFloat(values.carPayments) || 0;
      const student = parseFloat(values.studentLoans) || 0;
      const credit = parseFloat(values.creditCards) || 0;
      const other = parseFloat(values.otherDebts) || 0;
      
      const totalDebts = housing + car + student + credit + other;
      const frontEndDTI = (housing / income) * 100;
      const backEndDTI = (totalDebts / income) * 100;
      
      let status = 'Excellent';
      let action = 'Strong mortgage qualification';
      
      if (backEndDTI > 50) {
        status = 'Poor';
        action = 'Reduce debt before applying';
      } else if (backEndDTI > 43) {
        status = 'Fair';
        action = 'Consider FHA or reduce debt';
      } else if (backEndDTI > 36) {
        status = 'Good';
        action = 'Qualify for most loan types';
      }
      
      return [
        { label: 'Front-End DTI', value: frontEndDTI.toFixed(1) + '%', isCurrency: false },
        { label: 'Back-End DTI', value: backEndDTI.toFixed(1) + '%', isCurrency: false },
        { label: 'Total Monthly Debts', value: totalDebts.toFixed(2), isCurrency: true },
        { label: 'Qualification Status', value: status, isCurrency: false },
        { label: 'Recommended Action', value: action, isCurrency: false },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Debt-to-Income (DTI) Ratio Calculator',
    description: 'Calculate your DTI ratio to determine mortgage eligibility. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function DTICalculatorPage() {
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
