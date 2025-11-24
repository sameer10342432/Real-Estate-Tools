import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Points (Deductible) Amortization Calculator | Property Tools',
    description: 'Calculate mortgage points deduction and amortization schedule. Compare current year vs lifetime deduction with our free points calculator.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { POINTS_DEDUCTIBLE_AMORTIZATION_CONTENT } from '@/content/tools/points-deductible-amortization';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PointsDeductibleAmortizationPage = () => {
  return (
    <CalculatorLayout content={POINTS_DEDUCTIBLE_AMORTIZATION_CONTENT}>
      <EnhancedCalculator
        title={POINTS_DEDUCTIBLE_AMORTIZATION_CONTENT.title}
        slug="points-deductible-amortization"
        category="Tax Strategy & Entity Planning"
        description={POINTS_DEDUCTIBLE_AMORTIZATION_CONTENT.description}
        inputs={POINTS_DEDUCTIBLE_AMORTIZATION_CONTENT.calculator.fields}
        results={POINTS_DEDUCTIBLE_AMORTIZATION_CONTENT.calculator.results}
        calculation={POINTS_DEDUCTIBLE_AMORTIZATION_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PointsDeductibleAmortizationPage;
