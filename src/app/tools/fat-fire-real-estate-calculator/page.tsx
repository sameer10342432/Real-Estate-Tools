'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { FAT_FIRE_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/fat-fire-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Fat FIRE with Real Estate Calculator - Luxury Early Retirement with Rental Properties',
    description: 'Calculate Fat FIRE using real estate investments. Determine how many high-end rental properties needed to support a luxury lifestyle and retire early with premium income.',
  };
}

const FatFireRealEstateCalculatorPage = () => {
  return (
    <CalculatorLayout content={FAT_FIRE_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FAT_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug="fat-fire-real-estate-calculator"
        category="FIRE Calculators"
        description={FAT_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={FAT_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={FAT_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={FAT_FIRE_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FatFireRealEstateCalculatorPage;