'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'DTI Calculator for Conventional Loans',
  description: 'Calculate your debt-to-income ratio for conventional loans with 43% standard limit (up to 50% with excellent credit)',
  icon: '🏦',
  category: 'Basic Calculators',
  slug: 'dti-calculator-conventional-loans',
  article: {
    title: 'Understanding DTI for Conventional Loans',
    content: `
      <p>Conventional loans, backed by Fannie Mae and Freddie Mac, have specific debt-to-income (DTI) ratio requirements that determine whether you qualify for a mortgage.</p>
      
      <h3>Conventional Loan DTI Limits</h3>
      <p>The standard maximum DTI for conventional loans is <strong>43%</strong>, though some lenders may allow up to <strong>45% or even 50%</strong> with compensating factors such as:</p>
      <ul>
        <li>Excellent credit score (740+)</li>
        <li>Large down payment (20% or more)</li>
        <li>Significant cash reserves (6-12 months)</li>
        <li>Low loan-to-value ratio</li>
        <li>Stable employment history</li>
      </ul>
      
      <h3>Front-End vs. Back-End DTI</h3>
      <p><strong>Front-End DTI (Housing Ratio):</strong> Your proposed housing payment (PITI + HOA) divided by gross monthly income. Conventional loans typically prefer 28% or lower, though this is flexible.</p>
      <p><strong>Back-End DTI (Total Debt Ratio):</strong> All monthly debt payments including housing divided by gross monthly income. This is the primary qualification metric, with a maximum of 43-50%.</p>
      
      <h3>What Debts Are Included?</h3>
      <p><strong>Included in DTI:</strong></p>
      <ul>
        <li>Mortgage payment (Principal + Interest + Taxes + Insurance)</li>
        <li>HOA/condo fees</li>
        <li>Car loans and leases</li>
        <li>Student loans (minimum payment or 1% of balance)</li>
        <li>Credit card minimum payments</li>
        <li>Personal loans</li>
        <li>Child support and alimony</li>
        <li>Other installment debts</li>
      </ul>
      
      <p><strong>NOT included in DTI:</strong></p>
      <ul>
        <li>Utilities (electric, gas, water)</li>
        <li>Phone and internet bills</li>
        <li>Car insurance</li>
        <li>Health insurance</li>
        <li>Groceries and living expenses</li>
        <li>Debts with less than 10 months remaining</li>
      </ul>
      
      <h3>Improving Your DTI for Conventional Loans</h3>
      <p><strong>1. Pay down high-interest debt:</strong> Focus on credit cards and personal loans to reduce monthly obligations.</p>
      <p><strong>2. Increase your income:</strong> Add a co-borrower, take on a side job, or include bonus/commission income.</p>
      <p><strong>3. Lower your housing budget:</strong> Consider a less expensive home to reduce your front-end DTI.</p>
      <p><strong>4. Make a larger down payment:</strong> 20% down eliminates PMI and improves your qualification.</p>
      <p><strong>5. Avoid new credit:</strong> Don't finance cars or open credit cards during the loan process.</p>
      
      <h3>Conventional Loan Advantages</h3>
      <ul>
        <li>Lower interest rates than FHA for borrowers with good credit</li>
        <li>No upfront mortgage insurance premium (unlike FHA)</li>
        <li>PMI can be removed at 20% equity (unlike FHA MIP)</li>
        <li>Flexible loan terms (10, 15, 20, 30 years)</li>
        <li>Available for primary homes, second homes, and investment properties</li>
        <li>Higher loan limits than FHA in expensive markets</li>
      </ul>
      
      <h3>DTI Requirements vs. Other Loan Types</h3>
      <ul>
        <li><strong>Conventional:</strong> 43% max (up to 50% with compensating factors)</li>
        <li><strong>FHA:</strong> 43% max (up to 50% with automated approval)</li>
        <li><strong>VA:</strong> 41% preferred (no hard limit with residual income)</li>
        <li><strong>USDA:</strong> 41% max (29% front-end preferred)</li>
        <li><strong>Jumbo:</strong> 43% max (stricter requirements)</li>
      </ul>
    `
  },
  calculator: {
    fields: [
      { name: 'grossMonthlyIncome', label: 'Gross Monthly Income', type: 'number', defaultValue: '7000' },
      { name: 'monthlyHousingPayment', label: 'Estimated Monthly Housing Payment (PITI + HOA)', type: 'number', defaultValue: '2000' },
      { name: 'carPayments', label: 'Car Loan/Lease Payments', type: 'number', defaultValue: '450' },
      { name: 'studentLoans', label: 'Student Loan Payments', type: 'number', defaultValue: '300' },
      { name: 'creditCards', label: 'Credit Card Minimum Payments', type: 'number', defaultValue: '150' },
      { name: 'otherDebts', label: 'Other Monthly Debts (Personal Loans, Child Support)', type: 'number', defaultValue: '0' },
      { name: 'creditScore', label: 'Credit Score (for qualification guidance)', type: 'number', defaultValue: '720' },
    ],
    results: [
      { label: 'Front-End DTI (Housing Ratio)', isCurrency: false },
      { label: 'Back-End DTI (Total Debt)', isCurrency: false },
      { label: 'Total Monthly Debts', isCurrency: true },
      { label: 'Conventional Loan Qualification', isCurrency: false },
      { label: 'Maximum Allowed DTI', isCurrency: false },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values: any) => {
      const income = parseFloat(values.grossMonthlyIncome) || 7000;
      const housing = parseFloat(values.monthlyHousingPayment) || 2000;
      const car = parseFloat(values.carPayments) || 0;
      const student = parseFloat(values.studentLoans) || 0;
      const credit = parseFloat(values.creditCards) || 0;
      const other = parseFloat(values.otherDebts) || 0;
      const creditScore = parseFloat(values.creditScore) || 720;
      
      const totalDebts = housing + car + student + credit + other;
      const frontEndDTI = (housing / income) * 100;
      const backEndDTI = (totalDebts / income) * 100;
      
      let maxAllowedDTI = 43;
      if (creditScore >= 740) {
        maxAllowedDTI = 50;
      } else if (creditScore >= 700) {
        maxAllowedDTI = 45;
      }
      
      let qualification = 'Excellent';
      let recommendation = 'Strong conventional loan qualification';
      
      if (backEndDTI > maxAllowedDTI + 7) {
        qualification = 'Does Not Qualify';
        recommendation = 'Significantly reduce debt or increase income before applying';
      } else if (backEndDTI > maxAllowedDTI) {
        qualification = 'Challenging';
        recommendation = 'Reduce debt, improve credit score, or make larger down payment';
      } else if (backEndDTI > 43) {
        qualification = 'Possible with Strong Compensating Factors';
        recommendation = 'Maintain excellent credit and build cash reserves';
      } else if (backEndDTI > 36) {
        qualification = 'Good';
        recommendation = 'Well within conventional loan guidelines';
      } else if (frontEndDTI > 28 && backEndDTI <= 36) {
        qualification = 'Very Good';
        recommendation = 'Strong qualification - consider lower housing ratio if possible';
      }
      
      return [
        { label: 'Front-End DTI (Housing Ratio)', value: frontEndDTI.toFixed(1) + '%', isCurrency: false },
        { label: 'Back-End DTI (Total Debt)', value: backEndDTI.toFixed(1) + '%', isCurrency: false },
        { label: 'Total Monthly Debts', value: totalDebts.toFixed(2), isCurrency: true },
        { label: 'Conventional Loan Qualification', value: qualification, isCurrency: false },
        { label: 'Maximum Allowed DTI', value: maxAllowedDTI + '% (based on credit score)', isCurrency: false },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'DTI Calculator for Conventional Loans',
    description: 'Calculate DTI ratio for conventional loans with 43% standard limit. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function ConventionalDTICalculatorPage() {
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
