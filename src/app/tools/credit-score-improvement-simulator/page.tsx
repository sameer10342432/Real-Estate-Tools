'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'Credit Score Improvement Simulator (for Mortgage)',
  description: 'Simulate credit score improvements and see how different actions impact your mortgage qualification and rates',
  icon: '📈',
  category: 'Financial Planning',
  slug: 'credit-score-improvement-simulator',
  article: {
    title: 'Improving Your Credit for Better Mortgage Rates',
    content: `
      <p>Small improvements in your credit score can save thousands of dollars on your mortgage. This simulator helps you model different improvement strategies.</p>
      <h3>Credit Score Factors</h3>
      <ul>
        <li><strong>Payment History (35%):</strong> On-time vs. late payments</li>
        <li><strong>Credit Utilization (30%):</strong> Debt vs. available credit</li>
        <li><strong>Length of History (15%):</strong> Age of accounts</li>
        <li><strong>New Credit (10%):</strong> Recent inquiries and accounts</li>
        <li><strong>Credit Mix (10%):</strong> Types of credit</li>
      </ul>
      <h3>Quick Win Strategies</h3>
      <ul>
        <li><strong>Pay Down Cards:</strong> Below 30% utilization (+20-50 points)</li>
        <li><strong>Dispute Errors:</strong> Challenge inaccurate items (+10-100 points)</li>
        <li><strong>Become Authorized User:</strong> Get added to old account (+10-50 points)</li>
      </ul>
      <h3>Savings Impact</h3>
      <p>Improving from 640 to 760 on a $300,000 loan saves approximately $229/month or $82,000 over 30 years!</p>
    `
  },
  calculator: {
    fields: [
      { name: 'currentScore', label: 'Current Credit Score', type: 'number', defaultValue: '650' },
      { name: 'utilizationReduction', label: 'Reduce Utilization (%)', type: 'number', defaultValue: '30' },
      { name: 'errorsRemoved', label: 'Errors Removed', type: 'number', defaultValue: '1' },
      { name: 'monthsPerfectPayments', label: 'Months Perfect Payments', type: 'number', defaultValue: '6' },
      { name: 'loanAmount', label: 'Target Loan Amount', type: 'number', defaultValue: '300000' },
    ],
    results: [
      { label: 'Current Credit Score', isCurrency: false },
      { label: 'Projected New Score', isCurrency: false },
      { label: 'Score Improvement', isCurrency: false },
      { label: 'Current Estimated Rate', isCurrency: false },
      { label: 'New Estimated Rate', isCurrency: false },
      { label: 'Monthly Payment Savings', isCurrency: true },
      { label: 'Lifetime Interest Savings', isCurrency: true },
    ],
    calculate: (values: any) => {
      const currentScore = parseInt(values.currentScore) || 650;
      const utilizationReduction = parseInt(values.utilizationReduction) || 30;
      const errorsRemoved = parseInt(values.errorsRemoved) || 0;
      const months = parseInt(values.monthsPerfectPayments) || 0;
      const loanAmount = parseFloat(values.loanAmount) || 300000;
      
      let scoreGain = 0;
      scoreGain += Math.min(utilizationReduction, 100);
      scoreGain += errorsRemoved * 30;
      scoreGain += months * 5;
      
      const newScore = Math.min(currentScore + scoreGain, 850);
      
      const getRateForScore = (score: number) => {
        if (score >= 760) return 6.5;
        if (score >= 700) return 6.75;
        if (score >= 680) return 7.0;
        if (score >= 660) return 7.25;
        if (score >= 640) return 7.625;
        if (score >= 620) return 8.125;
        return 8.5;
      };
      
      const currentRate = getRateForScore(currentScore);
      const newRate = getRateForScore(newScore);
      
      const calcPayment = (rate: number) => {
        const monthlyRate = rate / 100 / 12;
        const months = 30 * 12;
        return (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      };
      
      const currentPayment = calcPayment(currentRate);
      const newPayment = calcPayment(newRate);
      const monthlySavings = currentPayment - newPayment;
      const lifetimeSavings = monthlySavings * 360;
      
      return [
        { label: 'Current Credit Score', value: currentScore.toString(), isCurrency: false },
        { label: 'Projected New Score', value: newScore.toString(), isCurrency: false },
        { label: 'Score Improvement', value: '+' + scoreGain + ' points', isCurrency: false },
        { label: 'Current Estimated Rate', value: currentRate.toFixed(2) + '%', isCurrency: false },
        { label: 'New Estimated Rate', value: newRate.toFixed(2) + '%', isCurrency: false },
        { label: 'Monthly Payment Savings', value: monthlySavings.toFixed(2), isCurrency: true },
        { label: 'Lifetime Interest Savings', value: lifetimeSavings.toFixed(2), isCurrency: true },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Credit Score Improvement Simulator (for Mortgage) Calculator',
    description: 'Simulate credit score improvements and see how different actions impact your mortgage. Free online tool for real estate professionals, investors, and homebuy...',
  };
}

export default function CreditImprovementPage() {
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
