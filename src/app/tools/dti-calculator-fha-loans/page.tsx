'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'DTI Calculator for FHA Loans',
  description: 'Calculate your debt-to-income ratio specifically for FHA loan qualification with streamlined and standard underwriting paths',
  icon: '🏦',
  category: 'Basic Calculators',
  slug: 'dti-calculator-fha-loans',
  article: {
    title: 'FHA Loan DTI Requirements',
    content: `
      <p>FHA loans have unique debt-to-income requirements that differ from conventional mortgages, making homeownership more accessible.</p>
      <h3>FHA DTI Limits</h3>
      <ul>
        <li><strong>Front-End DTI:</strong> Maximum 31% (housing costs only)</li>
        <li><strong>Back-End DTI:</strong> Maximum 43% (all debts including housing)</li>
        <li><strong>With Compensating Factors:</strong> Up to 50-57% possible</li>
      </ul>
      <h3>FHA DTI Approval Paths</h3>
      <p><strong>Automated Approval (TOTAL Scorecard):</strong></p>
      <ul>
        <li>640+ credit: Up to 50% DTI</li>
        <li>620-639 credit: Up to 46.9% DTI</li>
        <li>580-619 credit: Up to 43% DTI</li>
      </ul>
      <p><strong>Manual Underwriting:</strong></p>
      <ul>
        <li>31% front-end, 43% back-end standard</li>
        <li>Higher with strong compensating factors</li>
      </ul>
      <h3>FHA-Specific Debt Treatment</h3>
      <p><strong>Student Loans:</strong> 0.5% of balance if deferred (vs. 1% for conventional)</p>
      <p><strong>MIP Required:</strong> FHA mortgage insurance must be included in DTI calculation</p>
    `
  },
  calculator: {
    fields: [
      { name: 'grossMonthlyIncome', label: 'Gross Monthly Income', type: 'number', defaultValue: '6000' },
      { name: 'loanAmount', label: 'FHA Loan Amount', type: 'number', defaultValue: '250000' },
      { name: 'interestRate', label: 'Interest Rate (%)', type: 'number', defaultValue: '6.5' },
      { name: 'propertyTax', label: 'Monthly Property Tax', type: 'number', defaultValue: '300' },
      { name: 'insurance', label: 'Monthly Insurance', type: 'number', defaultValue: '150' },
      { name: 'hoaFees', label: 'HOA Fees (if any)', type: 'number', defaultValue: '0' },
      { name: 'studentLoans', label: 'Student Loan Payments', type: 'number', defaultValue: '200' },
      { name: 'carPayments', label: 'Car/Other Loans', type: 'number', defaultValue: '300' },
      { name: 'creditCards', label: 'Credit Card Min Payments', type: 'number', defaultValue: '100' },
      { name: 'creditScore', label: 'Credit Score', type: 'number', defaultValue: '680' },
    ],
    results: [
      { label: 'Monthly Payment (PITIA)', isCurrency: true },
      { label: 'Front-End DTI', isCurrency: false },
      { label: 'Back-End DTI', isCurrency: false },
      { label: 'FHA Qualification', isCurrency: false },
      { label: 'Approval Path', isCurrency: false },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values: any) => {
      const income = parseFloat(values.grossMonthlyIncome) || 6000;
      const loanAmount = parseFloat(values.loanAmount) || 250000;
      const rate = (parseFloat(values.interestRate) || 6.5) / 100 / 12;
      const tax = parseFloat(values.propertyTax) || 300;
      const insurance = parseFloat(values.insurance) || 150;
      const hoa = parseFloat(values.hoaFees) || 0;
      const student = parseFloat(values.studentLoans) || 0;
      const car = parseFloat(values.carPayments) || 0;
      const credit = parseFloat(values.creditCards) || 0;
      const creditScore = parseInt(values.creditScore) || 680;
      
      const months = 30 * 12;
      const pi = (loanAmount * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
      const mip = (loanAmount * 0.0055) / 12;
      const totalHousing = pi + tax + insurance + hoa + mip;
      
      const totalDebts = totalHousing + student + car + credit;
      const frontDTI = (totalHousing / income) * 100;
      const backDTI = (totalDebts / income) * 100;
      
      let qualification = 'Not Qualified';
      let approvalPath = 'Does Not Meet Requirements';
      let recommendation = 'Reduce debt or increase income';
      
      if (creditScore >= 640 && backDTI <= 50) {
        qualification = 'Qualified';
        approvalPath = 'Automated Approval';
        recommendation = 'Strong FHA qualification';
      } else if (creditScore >= 620 && backDTI <= 46.9) {
        qualification = 'Qualified';
        approvalPath = 'Automated Approval';
        recommendation = 'Good FHA qualification';
      } else if (creditScore >= 580 && backDTI <= 43) {
        qualification = 'Qualified';
        approvalPath = 'Standard FHA';
        recommendation = 'Meets standard FHA guidelines';
      } else if (backDTI <= 50 && creditScore >= 620) {
        qualification = 'Possible';
        approvalPath = 'Manual Underwriting';
        recommendation = 'Need compensating factors';
      }
      
      return [
        { label: 'Monthly Payment (PITIA)', value: totalHousing.toFixed(2), isCurrency: true },
        { label: 'Front-End DTI', value: frontDTI.toFixed(1) + '%', isCurrency: false },
        { label: 'Back-End DTI', value: backDTI.toFixed(1) + '%', isCurrency: false },
        { label: 'FHA Qualification', value: qualification, isCurrency: false },
        { label: 'Approval Path', value: approvalPath, isCurrency: false },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};

export default function FHADTIPage() {
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
