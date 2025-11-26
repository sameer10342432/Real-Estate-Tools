'use client';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { USDA_BUSINESS_INDUSTRY_LOAN_CALCULATOR_CONTENT } from '@/content/tools/usda-business-industry-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export default function USDABusinessIndustryLoanCalculatorPage() {
  return (
    <CalculatorLayout content={USDA_BUSINESS_INDUSTRY_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={USDA_BUSINESS_INDUSTRY_LOAN_CALCULATOR_CONTENT.title}
        slug="usda-business-industry-loan-calculator"
        category="Commercial Real Estate"
        description={USDA_BUSINESS_INDUSTRY_LOAN_CALCULATOR_CONTENT.description}
        inputs={USDA_BUSINESS_INDUSTRY_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={USDA_BUSINESS_INDUSTRY_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={USDA_BUSINESS_INDUSTRY_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
