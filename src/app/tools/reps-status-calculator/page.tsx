
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Real Estate Professional (REPs) Status Tax Benefit Calcul...',
    description: 'Calculate potential tax benefits of qualifying as a Real Estate Professional under IRS rules and how it affects rental property losses',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { REPS_STATUS_CALCULATOR_CONTENT } from '@/content/tools/reps-status-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';


const REPSStatusCalculator = () => {
  return (
    <CalculatorLayout content={REPS_STATUS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={REPS_STATUS_CALCULATOR_CONTENT.title}
        slug={REPS_STATUS_CALCULATOR_CONTENT.slug}
        category={REPS_STATUS_CALCULATOR_CONTENT.category}
        description={REPS_STATUS_CALCULATOR_CONTENT.description}
        inputs={REPS_STATUS_CALCULATOR_CONTENT.calculator.fields}
        results={REPS_STATUS_CALCULATOR_CONTENT.calculator.results}
        calculation={REPS_STATUS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default REPSStatusCalculator;
