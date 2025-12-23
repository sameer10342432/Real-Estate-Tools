'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { BARISTA_FIRE_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/barista-fire-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Barista FIRE with Real Estate Calculator - Semi-Retirement with Rental Income + Part-Time Work',
    description: 'Calculate Barista FIRE using rental property income plus part-time work. Determine how many properties needed to semi-retire early with flexible work schedule.',
  };
}

const BaristaFireRealEstateCalculatorPage = () => {
  return (
    <CalculatorLayout content={BARISTA_FIRE_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={BARISTA_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug="barista-fire-real-estate-calculator"
        category="FIRE Calculators"
        description={BARISTA_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={BARISTA_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={BARISTA_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={BARISTA_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BaristaFireRealEstateCalculatorPage;