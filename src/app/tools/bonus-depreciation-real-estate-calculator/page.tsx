import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Bonus Depreciation (Real Estate) Calculator | Property Tools',
    description: 'Calculate bonus depreciation deductions for real estate investments under current tax law. Maximize your first-year tax benefits with our free bonus depreciation calculator.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { BONUS_DEPRECIATION_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/bonus-depreciation-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BonusDepreciationCalculatorPage = () => {
  return (
    <CalculatorLayout content={BONUS_DEPRECIATION_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={BONUS_DEPRECIATION_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug="bonus-depreciation-real-estate-calculator"
        category="Tax Strategy & Entity Planning"
        description={BONUS_DEPRECIATION_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={BONUS_DEPRECIATION_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={BONUS_DEPRECIATION_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={BONUS_DEPRECIATION_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BonusDepreciationCalculatorPage;