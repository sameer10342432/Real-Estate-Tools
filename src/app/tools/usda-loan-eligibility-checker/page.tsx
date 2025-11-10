'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'USDA Loan Eligibility Checker',
  description: 'Check your eligibility for USDA rural development home loans based on income and location',
  icon: '🌾',
  category: 'Basic Calculators',
  slug: 'usda-loan-eligibility-checker',
  article: {
    title: 'Understanding USDA Loan Eligibility',
    content: `
      <p>USDA loans offer 100% financing with no down payment required for eligible rural and suburban homebuyers.</p>
      <h3>Income Eligibility</h3>
      <p>Your household income must not exceed 115% of the area median income (AMI). Income limits vary by county and household size.</p>
      <h3>Property Location</h3>
      <p>The property must be in a USDA-eligible rural area. Approximately 97% of U.S. land area qualifies, including many suburban areas.</p>
      <h3>Credit Requirements</h3>
      <ul>
        <li>640+ credit score: Automated approval</li>
        <li>580-639: Manual underwriting available</li>
        <li>No bankruptcies in past 3 years</li>
      </ul>
    `
  },
  calculator: {
    fields: [
      { name: 'householdIncome', label: 'Annual Household Income', type: 'number', defaultValue: '75000' },
      { name: 'householdSize', label: 'Household Size', type: 'number', defaultValue: '4' },
      { name: 'areaMedianIncome', label: 'Area Median Income (AMI)', type: 'number', defaultValue: '80000' },
      { name: 'creditScore', label: 'Credit Score', type: 'number', defaultValue: '680' },
    ],
    results: [
      { label: 'Eligibility Status', isCurrency: false },
      { label: 'Income Limit', isCurrency: true },
      { label: 'Income Percentage of Limit', isCurrency: false },
      { label: 'Approval Path', isCurrency: false },
    ],
    calculate: (values: any) => {
      const income = parseFloat(values.householdIncome) || 75000;
      const ami = parseFloat(values.areaMedianIncome) || 80000;
      const creditScore = parseInt(values.creditScore) || 680;
      
      const incomeLimit = ami * 1.15;
      const incomePercentage = (income / incomeLimit) * 100;
      const eligible = income <= incomeLimit;
      
      let approvalPath = 'Not Eligible';
      if (eligible) {
        if (creditScore >= 640) {
          approvalPath = 'Automated Approval';
        } else if (creditScore >= 580) {
          approvalPath = 'Manual Underwriting';
        } else {
          approvalPath = 'Manual Underwriting (Difficult)';
        }
      }
      
      return [
        { label: 'Eligibility Status', value: eligible ? 'Eligible ✓' : 'Not Eligible ✗', isCurrency: false },
        { label: 'Income Limit', value: incomeLimit.toFixed(2), isCurrency: true },
        { label: 'Income Percentage of Limit', value: incomePercentage.toFixed(1) + '%', isCurrency: false },
        { label: 'Approval Path', value: approvalPath, isCurrency: false },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'USDA Loan Eligibility Checker',
    description: 'Check your eligibility for USDA rural development home loans. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function USDAEligibilityPage() {
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
