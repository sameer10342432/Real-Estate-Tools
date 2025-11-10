'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'VA Loan Entitlement Calculator',
  description: 'Calculate your available VA loan entitlement and maximum purchase price with no down payment',
  icon: '🎖️',
  category: 'Basic Calculators',
  slug: 'va-loan-entitlement-calculator',
  article: {
    title: 'Understanding VA Loan Entitlement',
    content: `
      <p>VA loan entitlement is the amount the VA will guarantee on your home loan. This determines how much you can borrow with no down payment.</p>
      <h3>Basic vs. Bonus Entitlement</h3>
      <p><strong>Basic Entitlement:</strong> $36,000 for all eligible veterans</p>
      <p><strong>Bonus Entitlement:</strong> Additional entitlement based on county loan limits (up to $115,638 in standard counties, $251,206 in high-cost areas)</p>
      <h3>Calculation Formula</h3>
      <p>Maximum loan with $0 down = Total Entitlement × 4</p>
      <p>This is because the VA guarantees 25% of the loan amount, so your entitlement (25%) multiplied by 4 gives the maximum loan.</p>
    `
  },
  calculator: {
    fields: [
      { name: 'countyType', label: 'County Type', type: 'select', defaultValue: 'standard', options: [
        { value: 'standard', label: 'Standard County' },
        { value: 'high', label: 'High-Cost County' }
      ]},
      { name: 'hasExistingLoan', label: 'Have Existing VA Loan?', type: 'select', defaultValue: 'no', options: [
        { value: 'no', label: 'No' },
        { value: 'yes', label: 'Yes' }
      ]},
      { name: 'existingLoanBalance', label: 'Existing Loan Balance', type: 'number', defaultValue: '0' },
    ],
    results: [
      { label: 'Total Entitlement Available', isCurrency: true },
      { label: 'Entitlement Used', isCurrency: true },
      { label: 'Remaining Entitlement', isCurrency: true },
      { label: 'Max Loan (0% Down)', isCurrency: true },
      { label: 'Max Home Price (0% Down)', isCurrency: true },
    ],
    calculate: (values: any) => {
      const countyType = values.countyType || 'standard';
      const hasExisting = values.hasExistingLoan === 'yes';
      const existingBalance = hasExisting ? (parseFloat(values.existingLoanBalance) || 0) : 0;
      
      const basicEntitlement = 36000;
      const bonusEntitlement = countyType === 'high' ? 251206 : 115638;
      const totalEntitlement = basicEntitlement + bonusEntitlement;
      
      const entitlementUsed = hasExisting ? (existingBalance / 4) : 0;
      const remainingEntitlement = totalEntitlement - entitlementUsed;
      const maxLoan = remainingEntitlement * 4;
      
      return [
        { label: 'Total Entitlement Available', value: totalEntitlement.toFixed(2), isCurrency: true },
        { label: 'Entitlement Used', value: entitlementUsed.toFixed(2), isCurrency: true },
        { label: 'Remaining Entitlement', value: remainingEntitlement.toFixed(2), isCurrency: true },
        { label: 'Max Loan (0% Down)', value: maxLoan.toFixed(2), isCurrency: true },
        { label: 'Max Home Price (0% Down)', value: maxLoan.toFixed(2), isCurrency: true },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'VA Loan Entitlement Calculator',
    description: 'Calculate your available VA loan entitlement and maximum purchase price. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function VAEntitlementPage() {
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
