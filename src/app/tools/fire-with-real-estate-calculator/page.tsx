'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { FIRE_WITH_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/fire-with-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'FIRE with Real Estate Calculator - Achieve Financial Independence with Rental Properties',
    description: 'Calculate your path to Financial Independence Retire Early (FIRE) using real estate investments. Determine how many rental properties needed to replace your income and achieve FIRE.',
  };
}

const FireWithRealEstateCalculatorPage = () => {
  return (
    <CalculatorLayout content={FIRE_WITH_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FIRE_WITH_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug="fire-with-real-estate-calculator"
        category="FIRE Calculators"
        description={FIRE_WITH_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={FIRE_WITH_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={FIRE_WITH_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={FIRE_WITH_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FireWithRealEstateCalculatorPage;