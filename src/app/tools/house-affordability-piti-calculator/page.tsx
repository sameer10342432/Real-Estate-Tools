'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'How Much House Can I Afford Calculator | PITI + Utilities + Real Costs',
    description: 'Calculate how much house you can really afford including PITI (Principal, Interest, Taxes, Insurance), HOA fees, utilities, maintenance, and all hidden homeownership costs.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HOUSE_AFFORDABILITY_PITI_CALCULATOR_CONTENT } from '@/content/tools/house-affordability-piti-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HouseAffordabilityPITIPage = () => {
  return (
    <CalculatorLayout content={HOUSE_AFFORDABILITY_PITI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOUSE_AFFORDABILITY_PITI_CALCULATOR_CONTENT.title}
        slug="house-affordability-piti-calculator"
        category="Real Estate"
        description={HOUSE_AFFORDABILITY_PITI_CALCULATOR_CONTENT.description}
        inputs={HOUSE_AFFORDABILITY_PITI_CALCULATOR_CONTENT.calculator.fields}
        results={HOUSE_AFFORDABILITY_PITI_CALCULATOR_CONTENT.calculator.results}
        calculation={HOUSE_AFFORDABILITY_PITI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HouseAffordabilityPITIPage;
