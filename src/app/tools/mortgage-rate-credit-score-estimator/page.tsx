'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'Mortgage Rate by Credit Score Estimator',
  description: 'Estimate mortgage interest rates based on your credit score and see how credit impacts your monthly payment',
  icon: '💳',
  category: 'Basic Calculators',
  slug: 'mortgage-rate-credit-score-estimator',
  article: {
    title: 'How Credit Score Affects Mortgage Rates',
    content: `
      <p>Your credit score is one of the most important factors determining your mortgage interest rate. Higher scores earn you better rates, potentially saving tens of thousands of dollars.</p>
      <h3>Credit Score Tiers and Rates</h3>
      <ul>
        <li><strong>760-850 (Excellent):</strong> Best available rates</li>
        <li><strong>700-759 (Very Good):</strong> Near-best rates (+0.25%)</li>
        <li><strong>680-699 (Good):</strong> Average rates (+0.5%)</li>
        <li><strong>660-679 (Fair):</strong> Above-average (+0.75%)</li>
        <li><strong>620-659 (Poor):</strong> High rates (+1.0-1.5%)</li>
        <li><strong>Below 620:</strong> Very limited options</li>
      </ul>
      <h3>Rate Impact Example</h3>
      <p>On a $300,000 loan over 30 years:</p>
      <ul>
        <li>760 score @ 6.5%: $1,896/month, $382,633 total interest</li>
        <li>640 score @ 7.625%: $2,125/month, $464,959 total interest</li>
        <li><strong>Difference:</strong> $229/month, $82,326 over life of loan</li>
      </ul>
    `
  },
  calculator: {
    fields: [
      { name: 'creditScore', label: 'Credit Score', type: 'number', defaultValue: '720' },
      { name: 'loanAmount', label: 'Loan Amount', type: 'number', defaultValue: '300000' },
      { name: 'downPaymentPercent', label: 'Down Payment (%)', type: 'number', defaultValue: '20' },
      { name: 'loanTerm', label: 'Loan Term (Years)', type: 'number', defaultValue: '30' },
    ],
    results: [
      { label: 'Estimated Interest Rate', isCurrency: false },
      { label: 'Monthly Payment (P&I)', isCurrency: true },
      { label: 'Total Interest Paid', isCurrency: true },
      { label: 'Credit Score Tier', isCurrency: false },
      { label: 'Rate vs. Best', isCurrency: false },
      { label: 'Potential Savings (if 760+)', isCurrency: true },
    ],
    calculate: (values: any) => {
      const score = parseInt(values.creditScore) || 720;
      const loanAmount = parseFloat(values.loanAmount) || 300000;
      const downPercent = parseFloat(values.downPaymentPercent) || 20;
      const loanTerm = parseInt(values.loanTerm) || 30;
      
      let baseRate = 6.5;
      let adjustment = 0;
      let tier = 'Excellent';
      
      if (score >= 760) {
        tier = 'Excellent';
        adjustment = 0;
      } else if (score >= 700) {
        tier = 'Very Good';
        adjustment = 0.25;
      } else if (score >= 680) {
        tier = 'Good';
        adjustment = 0.5;
      } else if (score >= 660) {
        tier = 'Fair';
        adjustment = 0.75;
      } else if (score >= 640) {
        tier = 'Poor';
        adjustment = 1.125;
      } else if (score >= 620) {
        tier = 'Very Poor';
        adjustment = 1.625;
      } else {
        tier = 'Extremely Poor';
        adjustment = 2.0;
      }
      
      const estimatedRate = baseRate + adjustment;
      const monthlyRate = estimatedRate / 100 / 12;
      const months = loanTerm * 12;
      
      const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      const totalInterest = (monthlyPayment * months) - loanAmount;
      
      const bestRate = baseRate / 100 / 12;
      const bestPayment = (loanAmount * bestRate * Math.pow(1 + bestRate, months)) / (Math.pow(1 + bestRate, months) - 1);
      const bestInterest = (bestPayment * months) - loanAmount;
      const savings = totalInterest - bestInterest;
      
      return [
        { label: 'Estimated Interest Rate', value: estimatedRate.toFixed(3) + '%', isCurrency: false },
        { label: 'Monthly Payment (P&I)', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Total Interest Paid', value: totalInterest.toFixed(2), isCurrency: true },
        { label: 'Credit Score Tier', value: tier, isCurrency: false },
        { label: 'Rate vs. Best', value: '+' + adjustment.toFixed(2) + '%', isCurrency: false },
        { label: 'Potential Savings (if 760+)', value: savings.toFixed(2), isCurrency: true },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Mortgage Rate by Credit Score Estimator',
    description: 'Estimate mortgage interest rates based on your credit score. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function RateCreditScorePage() {
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
