import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Automobile Deduction (Real Estate) Calculator | Property Tools',
    description: 'Calculate vehicle deductions for real estate professionals. Compare standard mileage vs actual expense method with our free automobile deduction calculator.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { AUTOMOBILE_DEDUCTION_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/automobile-deduction-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AutomobileDeductionPage = () => {
  return (
    <CalculatorLayout content={AUTOMOBILE_DEDUCTION_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={AUTOMOBILE_DEDUCTION_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug="automobile-deduction-real-estate-calculator"
        category="Tax Strategy & Entity Planning"
        description={AUTOMOBILE_DEDUCTION_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={AUTOMOBILE_DEDUCTION_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={AUTOMOBILE_DEDUCTION_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={AUTOMOBILE_DEDUCTION_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AutomobileDeductionPage;
