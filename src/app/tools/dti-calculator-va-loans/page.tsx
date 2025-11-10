'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'DTI Calculator for VA Loans',
  description: 'Calculate your debt-to-income ratio for VA loans with flexible 41% DTI allowance and residual income analysis',
  icon: '🎖️',
  category: 'Basic Calculators',
  slug: 'dti-calculator-va-loans',
  article: {
    title: 'Understanding DTI for VA Loans',
    content: `
      <p>VA loans offer some of the most flexible debt-to-income (DTI) ratio requirements in the mortgage industry, making homeownership more accessible for veterans and active military members.</p>
      
      <h3>VA Loan DTI Requirements</h3>
      <p>While the VA doesn't set a maximum DTI ratio, most lenders prefer a DTI of <strong>41% or lower</strong>. However, VA loans can be approved with DTI ratios up to 50% or higher with strong compensating factors.</p>
      
      <h3>Residual Income - The Key Difference</h3>
      <p>Unlike other loan types, VA loans emphasize <strong>residual income</strong> over DTI ratio. Residual income is the amount of money you have left after paying all major monthly expenses. This requirement ensures you have enough money for family living expenses, not just enough to cover debts.</p>
      
      <h3>Compensating Factors for High DTI</h3>
      <ul>
        <li><strong>Excellent credit score:</strong> 720+ FICO score</li>
        <li><strong>Long-term residual income:</strong> Exceeding VA requirements</li>
        <li><strong>Minimal consumer debt:</strong> Low credit card balances</li>
        <li><strong>Cash reserves:</strong> Savings equivalent to 6+ months of payments</li>
        <li><strong>Military benefits:</strong> Tax-free allowances increase qualifying income</li>
        <li><strong>Low loan-to-value (LTV):</strong> Larger down payment reduces risk</li>
      </ul>
      
      <h3>What's Included in DTI for VA Loans</h3>
      <p><strong>Front-End DTI:</strong> Housing expenses (PITI: principal, interest, taxes, insurance) + HOA fees</p>
      <p><strong>Back-End DTI:</strong> All monthly debts including housing, car loans, student loans, credit cards, child support, and other obligations</p>
      
      <h3>VA Loan Benefits</h3>
      <ul>
        <li>No down payment required (0% down)</li>
        <li>No private mortgage insurance (PMI)</li>
        <li>Competitive interest rates</li>
        <li>Flexible credit requirements</li>
        <li>Seller can pay up to 4% in concessions</li>
        <li>Streamline refinance options (IRRRL)</li>
      </ul>
      
      <h3>Tips to Improve Your VA Loan DTI</h3>
      <p><strong>1. Pay down high-interest debt:</strong> Focus on credit cards and personal loans first.</p>
      <p><strong>2. Increase your income:</strong> Include tax-free military allowances (BAH, BAS) in qualifying income.</p>
      <p><strong>3. Avoid new debt:</strong> Don't finance cars or make large purchases before applying.</p>
      <p><strong>4. Build cash reserves:</strong> Having savings strengthens your application.</p>
      <p><strong>5. Consider a co-borrower:</strong> A spouse's income can help qualify.</p>
    `
  },
  calculator: {
    fields: [
      { name: 'grossMonthlyIncome', label: 'Gross Monthly Income', type: 'number', defaultValue: '6000' },
      { name: 'militaryAllowances', label: 'Tax-Free Military Allowances (BAH, BAS)', type: 'number', defaultValue: '1500' },
      { name: 'monthlyHousingPayment', label: 'Estimated Monthly Housing Payment (PITI + HOA)', type: 'number', defaultValue: '1800' },
      { name: 'carPayments', label: 'Car Loan/Lease Payments', type: 'number', defaultValue: '400' },
      { name: 'studentLoans', label: 'Student Loan Payments', type: 'number', defaultValue: '200' },
      { name: 'creditCards', label: 'Credit Card Minimum Payments', type: 'number', defaultValue: '100' },
      { name: 'otherDebts', label: 'Other Monthly Debts', type: 'number', defaultValue: '0' },
    ],
    results: [
      { label: 'Total Monthly Income', isCurrency: true },
      { label: 'Front-End DTI', isCurrency: false },
      { label: 'Back-End DTI', isCurrency: false },
      { label: 'Total Monthly Debts', isCurrency: true },
      { label: 'VA Loan Qualification', isCurrency: false },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values: any) => {
      const baseIncome = parseFloat(values.grossMonthlyIncome) || 6000;
      const allowances = parseFloat(values.militaryAllowances) || 1500;
      const totalIncome = baseIncome + allowances;
      
      const housing = parseFloat(values.monthlyHousingPayment) || 1800;
      const car = parseFloat(values.carPayments) || 0;
      const student = parseFloat(values.studentLoans) || 0;
      const credit = parseFloat(values.creditCards) || 0;
      const other = parseFloat(values.otherDebts) || 0;
      
      const totalDebts = housing + car + student + credit + other;
      const frontEndDTI = (housing / totalIncome) * 100;
      const backEndDTI = (totalDebts / totalIncome) * 100;
      
      let qualification = 'Excellent';
      let recommendation = 'Strong VA loan qualification - proceed with application';
      
      if (backEndDTI > 60) {
        qualification = 'Challenging';
        recommendation = 'Significantly reduce debt before applying or consider lower-priced home';
      } else if (backEndDTI > 50) {
        qualification = 'Needs Improvement';
        recommendation = 'Reduce debt or increase income; focus on strong compensating factors';
      } else if (backEndDTI > 41) {
        qualification = 'Fair - Possible with Compensating Factors';
        recommendation = 'Build cash reserves and maintain excellent credit score';
      } else if (backEndDTI > 36) {
        qualification = 'Good';
        recommendation = 'Well within VA guidelines - strong application';
      }
      
      return [
        { label: 'Total Monthly Income', value: totalIncome.toFixed(2), isCurrency: true },
        { label: 'Front-End DTI', value: frontEndDTI.toFixed(1) + '%', isCurrency: false },
        { label: 'Back-End DTI', value: backEndDTI.toFixed(1) + '%', isCurrency: false },
        { label: 'Total Monthly Debts', value: totalDebts.toFixed(2), isCurrency: true },
        { label: 'VA Loan Qualification', value: qualification, isCurrency: false },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'DTI Calculator for VA Loans',
    description: 'Calculate debt-to-income ratio for VA loans with flexible 41% DTI allowance. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function VADTICalculatorPage() {
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
