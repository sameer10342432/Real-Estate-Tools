'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'Back-End DTI Calculator',
  description: 'Calculate your back-end debt-to-income ratio (total debt ratio) - target 43% or lower for mortgage approval',
  icon: '📊',
  category: 'Basic Calculators',
  slug: 'backend-dti-calculator',
  article: {
    title: 'Understanding Back-End DTI (Total Debt Ratio)',
    content: `
      <p>The back-end debt-to-income (DTI) ratio, also called the total debt ratio, is the primary metric lenders use to determine whether you qualify for a mortgage. It measures ALL your monthly debt obligations compared to your gross monthly income.</p>
      
      <h3>What is Back-End DTI?</h3>
      <p>Back-end DTI is calculated by adding up all your monthly debt payments (including your proposed housing payment) and dividing by your gross monthly income.</p>
      
      <p><strong>Formula:</strong> Back-End DTI = (Total Monthly Debts / Gross Monthly Income) × 100</p>
      
      <h3>What's Included in Back-End DTI?</h3>
      <p><strong>All Monthly Debt Obligations:</strong></p>
      <ul>
        <li><strong>Housing:</strong> Mortgage payment (PITI) + HOA fees + PMI/MIP</li>
        <li><strong>Auto Loans:</strong> Car loans and leases</li>
        <li><strong>Student Loans:</strong> Minimum payment or 1% of balance (whichever is greater)</li>
        <li><strong>Credit Cards:</strong> Minimum monthly payments on all cards</li>
        <li><strong>Personal Loans:</strong> Any installment loans</li>
        <li><strong>Child Support/Alimony:</strong> Court-ordered payments</li>
        <li><strong>Other Debts:</strong> Timeshares, medical payment plans, etc.</li>
      </ul>
      
      <p><strong>NOT Included in Back-End DTI:</strong></p>
      <ul>
        <li>Utilities (electric, gas, water, sewer)</li>
        <li>Phone and cable/internet bills</li>
        <li>Car insurance and health insurance</li>
        <li>Groceries and living expenses</li>
        <li>Gym memberships and subscriptions</li>
        <li>Debts with fewer than 10 months of payments remaining</li>
      </ul>
      
      <h3>Back-End DTI Guidelines by Loan Type</h3>
      <p><strong>Conventional Loans:</strong> 43% maximum (up to 50% with excellent credit and compensating factors)</p>
      <p><strong>FHA Loans:</strong> 43% maximum (up to 50% with automated underwriting approval)</p>
      <p><strong>VA Loans:</strong> 41% preferred (no hard maximum; evaluated with residual income)</p>
      <p><strong>USDA Loans:</strong> 41% maximum</p>
      <p><strong>Jumbo Loans:</strong> 43% maximum (often stricter at 38-40%)</p>
      
      <h3>Back-End DTI Ratings</h3>
      <p><strong>Excellent (0-35%):</strong> Strong qualification for any loan type. You have significant financial flexibility.</p>
      <p><strong>Good (36-43%):</strong> Within standard lending guidelines. Approved for most loan programs.</p>
      <p><strong>Fair (44-50%):</strong> Requires compensating factors like excellent credit (740+), large down payment (20%+), or significant cash reserves.</p>
      <p><strong>Poor (50%+):</strong> Very difficult to qualify. Must reduce debt or increase income significantly.</p>
      
      <h3>Why Back-End DTI Matters More Than Front-End</h3>
      <p>While front-end DTI shows if you can afford the housing payment, back-end DTI reveals your complete financial picture. Lenders care most about back-end DTI because:</p>
      <ul>
        <li><strong>Complete Financial Obligations:</strong> Shows your total debt burden, not just housing</li>
        <li><strong>Default Risk:</strong> High total debt increases risk you'll miss payments</li>
        <li><strong>Financial Stress:</strong> Indicates whether you'll struggle with unexpected expenses</li>
        <li><strong>Approval Decision:</strong> This is the main ratio that determines if you qualify</li>
      </ul>
      
      <h3>How to Improve Your Back-End DTI</h3>
      <p><strong>1. Pay off high-interest debt:</strong> Tackle credit cards and personal loans first—they have the highest interest rates and minimum payments.</p>
      <p><strong>2. Consolidate debt:</strong> Combine multiple debts into one lower payment (but be careful not to take on new debt).</p>
      <p><strong>3. Increase your income:</strong> Add a co-borrower, take on a side job, or document all income sources (bonuses, commissions).</p>
      <p><strong>4. Avoid new credit:</strong> Don't finance a car, open credit cards, or take personal loans during the mortgage process.</p>
      <p><strong>5. Pay down car loans:</strong> If a car loan has less than 10 months left, pay it off to exclude it from DTI.</p>
      <p><strong>6. Reduce housing budget:</strong> Choose a less expensive home to lower your proposed mortgage payment.</p>
      <p><strong>7. Make a larger down payment:</strong> Reduces your loan amount and eliminates PMI at 20% down.</p>
      
      <h3>Compensating Factors for High DTI</h3>
      <p>If your back-end DTI is between 43-50%, you may still qualify with:</p>
      <ul>
        <li><strong>Excellent Credit Score:</strong> 740+ FICO score</li>
        <li><strong>Substantial Down Payment:</strong> 20% or more reduces lender risk</li>
        <li><strong>Cash Reserves:</strong> 6-12 months of housing payments in savings</li>
        <li><strong>Low LTV Ratio:</strong> Borrowing less than 80% of home value</li>
        <li><strong>Stable Employment:</strong> 2+ years in same field or with same employer</li>
        <li><strong>Minimal Consumer Debt:</strong> Most debt is housing-related, not credit cards</li>
      </ul>
      
      <h3>The 28/36 Rule</h3>
      <p>Traditional mortgage underwriting follows the 28/36 rule:</p>
      <ul>
        <li><strong>28%</strong> - Maximum front-end DTI (housing only)</li>
        <li><strong>36%</strong> - Maximum back-end DTI (all debts) - <em>This is the key number</em></li>
      </ul>
      <p>Modern lending has relaxed to 43-50%, but staying at or below 36% significantly strengthens your application.</p>
      
      <h3>Student Loan DTI Calculation</h3>
      <p>Student loans are calculated differently:</p>
      <ul>
        <li><strong>If in repayment:</strong> Use actual monthly payment</li>
        <li><strong>If deferred:</strong> Use 1% of total balance (or 0.5% for some programs)</li>
        <li><strong>Income-driven plans:</strong> Use actual payment (may be $0)</li>
      </ul>
      <p>Student loans can significantly impact DTI even if payments are low or deferred.</p>
    `
  },
  calculator: {
    fields: [
      { name: 'grossMonthlyIncome', label: 'Gross Monthly Income (Before Taxes)', type: 'number', defaultValue: '7500' },
      { name: 'housingPayment', label: 'Total Housing Payment (PITI + HOA + PMI)', type: 'number', defaultValue: '2000' },
      { name: 'carPayments', label: 'Car Loan/Lease Payments', type: 'number', defaultValue: '500' },
      { name: 'studentLoans', label: 'Student Loan Minimum Payments', type: 'number', defaultValue: '350' },
      { name: 'creditCardPayments', label: 'Credit Card Minimum Payments', type: 'number', defaultValue: '200' },
      { name: 'personalLoans', label: 'Personal Loans', type: 'number', defaultValue: '0' },
      { name: 'childSupport', label: 'Child Support / Alimony', type: 'number', defaultValue: '0' },
      { name: 'otherDebts', label: 'Other Monthly Debts', type: 'number', defaultValue: '0' },
    ],
    results: [
      { label: 'Total Monthly Debts', isCurrency: true },
      { label: 'Back-End DTI Ratio', isCurrency: false },
      { label: 'Remaining Monthly Income', isCurrency: true },
      { label: 'Qualification Rating', isCurrency: false },
      { label: 'Maximum Loan Type', isCurrency: false },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values: any) => {
      const income = parseFloat(values.grossMonthlyIncome) || 7500;
      const housing = parseFloat(values.housingPayment) || 2000;
      const car = parseFloat(values.carPayments) || 0;
      const student = parseFloat(values.studentLoans) || 0;
      const credit = parseFloat(values.creditCardPayments) || 0;
      const personal = parseFloat(values.personalLoans) || 0;
      const childSupport = parseFloat(values.childSupport) || 0;
      const other = parseFloat(values.otherDebts) || 0;
      
      const totalDebts = housing + car + student + credit + personal + childSupport + other;
      const backEndDTI = (totalDebts / income) * 100;
      const remainingIncome = income - totalDebts;
      
      let rating = 'Excellent';
      let maxLoanType = 'Qualifies for all loan types';
      let recommendation = 'Strong financial position for mortgage approval';
      
      if (backEndDTI > 50) {
        rating = 'Poor';
        maxLoanType = 'Does not qualify';
        recommendation = 'Reduce debt significantly or increase income before applying';
      } else if (backEndDTI > 43) {
        rating = 'Fair - Needs Compensating Factors';
        maxLoanType = 'FHA/VA with excellent credit';
        recommendation = 'Improve credit score to 740+, make 20% down payment, or reduce debt';
      } else if (backEndDTI > 36) {
        rating = 'Good';
        maxLoanType = 'Conventional, FHA, VA, USDA';
        recommendation = 'Within standard guidelines for most loan programs';
      } else if (backEndDTI > 28) {
        rating = 'Very Good';
        maxLoanType = 'All loan types';
        recommendation = 'Strong qualification with financial flexibility';
      }
      
      return [
        { label: 'Total Monthly Debts', value: totalDebts.toFixed(2), isCurrency: true },
        { label: 'Back-End DTI Ratio', value: backEndDTI.toFixed(1) + '%', isCurrency: false },
        { label: 'Remaining Monthly Income', value: remainingIncome.toFixed(2), isCurrency: true },
        { label: 'Qualification Rating', value: rating, isCurrency: false },
        { label: 'Maximum Loan Type', value: maxLoanType, isCurrency: false },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Back-End DTI Calculator',
    description: 'Calculate back-end debt-to-income ratio (total debt ratio) - target 43% or lower. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function BackEndDTICalculatorPage() {
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
