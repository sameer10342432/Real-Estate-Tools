'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { COAST_FIRE_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/coast-fire-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Coast FIRE with Real Estate Calculator - Let Properties Grow to Retirement',
    description: 'Calculate Coast FIRE with rental properties. Determine when your real estate portfolio will grow enough through appreciation and equity paydown to support full retirement.',
  };
}

const CoastFireRealEstateCalculatorPage = () => {
  return (
    <CalculatorLayout content={COAST_FIRE_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={COAST_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug="coast-fire-real-estate-calculator"
        category="FIRE Calculators"
        description={COAST_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={COAST_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={COAST_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={COAST_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CoastFireRealEstateCalculatorPage;