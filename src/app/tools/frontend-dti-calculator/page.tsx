'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'Front-End DTI Calculator',
  description: 'Calculate your front-end debt-to-income ratio (housing ratio) - target 28% or lower for mortgage approval',
  icon: '🏡',
  category: 'Basic Calculators',
  slug: 'frontend-dti-calculator',
  article: {
    title: 'Understanding Front-End DTI (Housing Ratio)',
    content: `
      <p>The front-end debt-to-income (DTI) ratio, also known as the housing ratio, measures only your housing-related expenses compared to your gross monthly income.</p>
      
      <h3>What is Front-End DTI?</h3>
      <p>Front-end DTI is calculated by dividing your total monthly housing payment by your gross monthly income. This ratio tells lenders what percentage of your income goes toward housing costs.</p>
      
      <p><strong>Formula:</strong> Front-End DTI = (Monthly Housing Payment / Gross Monthly Income) × 100</p>
      
      <h3>What's Included in Front-End DTI?</h3>
      <p><strong>PITI + HOA:</strong></p>
      <ul>
        <li><strong>P</strong> - Principal (loan repayment)</li>
        <li><strong>I</strong> - Interest (cost of borrowing)</li>
        <li><strong>T</strong> - Property Taxes (annual taxes / 12)</li>
        <li><strong>I</strong> - Homeowners Insurance (annual premium / 12)</li>
        <li><strong>PMI/MIP</strong> - Mortgage insurance (if less than 20% down)</li>
        <li><strong>HOA Fees</strong> - Homeowners association dues (if applicable)</li>
      </ul>
      
      <h3>Front-End DTI Guidelines</h3>
      <p><strong>Ideal:</strong> 28% or lower - This is the traditional "28/36 rule" for housing expenses</p>
      <p><strong>Acceptable:</strong> 28-31% - Most lenders will approve with good credit</p>
      <p><strong>High:</strong> 31-35% - May require compensating factors or higher down payment</p>
      <p><strong>Very High:</strong> 35%+ - Difficult to qualify; consider reducing housing budget</p>
      
      <h3>Front-End DTI by Loan Type</h3>
      <ul>
        <li><strong>Conventional:</strong> Prefer 28%, flexible up to 36%</li>
        <li><strong>FHA:</strong> Up to 31% standard (flexible with compensating factors)</li>
        <li><strong>VA:</strong> No specific limit (focuses on residual income)</li>
        <li><strong>USDA:</strong> Prefer 29% or lower</li>
        <li><strong>Jumbo:</strong> Typically 28% or lower (stricter requirements)</li>
      </ul>
      
      <h3>Why Front-End DTI Matters</h3>
      <p><strong>1. Lender Confidence:</strong> Lower front-end DTI shows you can comfortably afford housing payments without stretching your budget.</p>
      <p><strong>2. Budget Cushion:</strong> Keeping housing costs at 28% or less leaves room for other expenses, savings, and emergencies.</p>
      <p><strong>3. Approval Strength:</strong> A low front-end ratio strengthens your application, especially if your back-end DTI is higher.</p>
      
      <h3>How to Improve Your Front-End DTI</h3>
      <p><strong>1. Increase your down payment:</strong> A larger down payment reduces your loan amount, lowering your monthly payment and eliminating PMI at 20% down.</p>
      <p><strong>2. Choose a lower-priced home:</strong> Reducing your purchase price directly lowers all housing costs.</p>
      <p><strong>3. Shop for lower interest rates:</strong> Even a 0.25% rate reduction can significantly decrease your monthly payment.</p>
      <p><strong>4. Extend your loan term:</strong> A 30-year mortgage has lower payments than a 15-year, though you'll pay more interest over time.</p>
      <p><strong>5. Appeal property taxes:</strong> If your home is over-assessed, appeal to lower your annual tax bill.</p>
      <p><strong>6. Increase your income:</strong> Adding a co-borrower or documenting additional income sources can improve your ratio.</p>
      
      <h3>Front-End vs. Back-End DTI</h3>
      <p><strong>Front-End DTI:</strong> Only housing costs (PITI + HOA)</p>
      <p><strong>Back-End DTI:</strong> All debts including housing, car loans, student loans, credit cards, etc.</p>
      <p>Both ratios matter, but back-end DTI is usually the deciding factor for mortgage approval.</p>
      
      <h3>The 28/36 Rule</h3>
      <p>Traditional mortgage underwriting follows the 28/36 rule:</p>
      <ul>
        <li><strong>28%</strong> - Maximum front-end DTI (housing costs)</li>
        <li><strong>36%</strong> - Maximum back-end DTI (total debts)</li>
      </ul>
      <p>Modern lending has become more flexible, but the 28/36 rule remains a solid benchmark for affordable homeownership.</p>
    `
  },
  calculator: {
    fields: [
      { name: 'grossMonthlyIncome', label: 'Gross Monthly Income (Before Taxes)', type: 'number', defaultValue: '6500' },
      { name: 'monthlyPrincipalInterest', label: 'Monthly Principal & Interest', type: 'number', defaultValue: '1200' },
      { name: 'monthlyPropertyTaxes', label: 'Monthly Property Taxes', type: 'number', defaultValue: '300' },
      { name: 'monthlyHomeInsurance', label: 'Monthly Homeowners Insurance', type: 'number', defaultValue: '150' },
      { name: 'monthlyPMI', label: 'Monthly PMI/MIP (if applicable)', type: 'number', defaultValue: '100' },
      { name: 'monthlyHOA', label: 'Monthly HOA/Condo Fees (if applicable)', type: 'number', defaultValue: '0' },
    ],
    results: [
      { label: 'Total Monthly Housing Payment (PITI + HOA)', isCurrency: true },
      { label: 'Front-End DTI Ratio', isCurrency: false },
      { label: 'Remaining Monthly Income', isCurrency: true },
      { label: 'DTI Rating', isCurrency: false },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values: any) => {
      const income = parseFloat(values.grossMonthlyIncome) || 6500;
      const principalInterest = parseFloat(values.monthlyPrincipalInterest) || 1200;
      const taxes = parseFloat(values.monthlyPropertyTaxes) || 300;
      const insurance = parseFloat(values.monthlyHomeInsurance) || 150;
      const pmi = parseFloat(values.monthlyPMI) || 0;
      const hoa = parseFloat(values.monthlyHOA) || 0;
      
      const totalHousing = principalInterest + taxes + insurance + pmi + hoa;
      const frontEndDTI = (totalHousing / income) * 100;
      const remainingIncome = income - totalHousing;
      
      let rating = 'Excellent';
      let recommendation = 'Housing payment is well within budget';
      
      if (frontEndDTI > 35) {
        rating = 'Too High';
        recommendation = 'Consider a lower-priced home or larger down payment';
      } else if (frontEndDTI > 31) {
        rating = 'High';
        recommendation = 'Increase down payment or choose less expensive property';
      } else if (frontEndDTI > 28) {
        rating = 'Acceptable';
        recommendation = 'Within guidelines - ensure back-end DTI is also acceptable';
      } else if (frontEndDTI > 25) {
        rating = 'Good';
        recommendation = 'Well within traditional 28% guideline';
      }
      
      return [
        { label: 'Total Monthly Housing Payment (PITI + HOA)', value: totalHousing.toFixed(2), isCurrency: true },
        { label: 'Front-End DTI Ratio', value: frontEndDTI.toFixed(1) + '%', isCurrency: false },
        { label: 'Remaining Monthly Income', value: remainingIncome.toFixed(2), isCurrency: true },
        { label: 'DTI Rating', value: rating, isCurrency: false },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Front-End DTI Calculator',
    description: 'Calculate front-end debt-to-income ratio (housing ratio) - target 28% or lower. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function FrontEndDTICalculatorPage() {
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
