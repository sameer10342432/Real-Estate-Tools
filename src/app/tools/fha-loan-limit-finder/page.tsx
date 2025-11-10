'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'FHA Loan Limit Finder',
  description: 'Find current FHA loan limits for your county and property type',
  icon: '💵',
  category: 'Basic Calculators',
  slug: 'fha-loan-limit-finder',
  article: {
    title: '2024 FHA Loan Limits',
    content: `
      <p>FHA loan limits determine the maximum amount you can borrow with an FHA-insured mortgage. These limits vary by county and property type.</p>
      <h3>2024 FHA Loan Limits</h3>
      <ul>
        <li><strong>Floor (Low-Cost Areas):</strong> $498,257 (single-family)</li>
        <li><strong>Ceiling (High-Cost Areas):</strong> $1,149,825 (single-family)</li>
      </ul>
      <h3>Property Type Limits</h3>
      <p>Multi-unit properties have higher limits. For example, in high-cost areas:</p>
      <ul>
        <li>1-Unit: $1,149,825</li>
        <li>2-Unit: $1,472,250</li>
        <li>3-Unit: $1,779,525</li>
        <li>4-Unit: $2,211,600</li>
      </ul>
    `
  },
  calculator: {
    fields: [
      { name: 'countyType', label: 'County Type', type: 'select', defaultValue: 'standard', options: [
        { value: 'low', label: 'Low-Cost Area' },
        { value: 'standard', label: 'Standard Area' },
        { value: 'high', label: 'High-Cost Area' }
      ]},
      { name: 'propertyUnits', label: 'Number of Units', type: 'select', defaultValue: '1', options: [
        { value: '1', label: '1-Unit' },
        { value: '2', label: '2-Unit' },
        { value: '3', label: '3-Unit' },
        { value: '4', label: '4-Unit' }
      ]},
      { name: 'downPayment', label: 'Down Payment (%)', type: 'number', defaultValue: '3.5' },
    ],
    results: [
      { label: 'FHA Loan Limit', isCurrency: true },
      { label: 'Maximum Purchase Price', isCurrency: true },
      { label: 'Required Down Payment', isCurrency: true },
      { label: 'Maximum Loan Amount', isCurrency: true },
    ],
    calculate: (values: any) => {
      const countyType = values.countyType || 'standard';
      const units = parseInt(values.propertyUnits) || 1;
      const downPaymentPercent = parseFloat(values.downPayment) || 3.5;
      
      const limits: any = {
        low: { 1: 498257, 2: 638100, 3: 771400, 4: 958350 },
        standard: { 1: 766550, 2: 981500, 3: 1186350, 4: 1474400 },
        high: { 1: 1149825, 2: 1472250, 3: 1779525, 4: 2211600 }
      };
      
      const limit = limits[countyType][units];
      const maxPurchasePrice = limit / (1 - downPaymentPercent / 100);
      const requiredDownPayment = maxPurchasePrice * (downPaymentPercent / 100);
      
      return [
        { label: 'FHA Loan Limit', value: limit.toFixed(2), isCurrency: true },
        { label: 'Maximum Purchase Price', value: maxPurchasePrice.toFixed(2), isCurrency: true },
        { label: 'Required Down Payment', value: requiredDownPayment.toFixed(2), isCurrency: true },
        { label: 'Maximum Loan Amount', value: limit.toFixed(2), isCurrency: true },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'FHA Loan Limit Finder',
    description: 'Find current FHA loan limits for your county and property type. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function FHALoanLimitPage() {
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
