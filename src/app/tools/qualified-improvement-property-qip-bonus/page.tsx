import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Qualified Improvement Property (QIP) Bonus Calculator | Property Tools',
    description: 'Calculate QIP bonus depreciation for interior property improvements. Accelerate tax deductions on renovations with our free QIP calculator.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { QUALIFIED_IMPROVEMENT_PROPERTY_QIP_BONUS_CONTENT } from '@/content/tools/qualified-improvement-property-qip-bonus';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const QIPBonusPage = () => {
  return (
    <CalculatorLayout content={QUALIFIED_IMPROVEMENT_PROPERTY_QIP_BONUS_CONTENT}>
      <EnhancedCalculator
        title={QUALIFIED_IMPROVEMENT_PROPERTY_QIP_BONUS_CONTENT.title}
        slug="qualified-improvement-property-qip-bonus"
        category="Tax Strategy & Entity Planning"
        description={QUALIFIED_IMPROVEMENT_PROPERTY_QIP_BONUS_CONTENT.description}
        inputs={QUALIFIED_IMPROVEMENT_PROPERTY_QIP_BONUS_CONTENT.calculator.fields}
        results={QUALIFIED_IMPROVEMENT_PROPERTY_QIP_BONUS_CONTENT.calculator.results}
        calculation={QUALIFIED_IMPROVEMENT_PROPERTY_QIP_BONUS_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default QIPBonusPage;
