'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { INFLATION_HEDGE_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/inflation-hedge-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Real Estate Inflation Hedge Calculator - Protect Wealth from Inflation',
    description: 'Calculate how real estate investments protect against inflation. Compare purchasing power erosion of cash versus appreciation and rental income growth of property investments.',
  };
}

const InflationHedgeRealEstateCalculatorPage = () => {
  return (
    <CalculatorLayout content={INFLATION_HEDGE_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={INFLATION_HEDGE_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug="inflation-hedge-real-estate-calculator"
        category="Investment Analysis"
        description={INFLATION_HEDGE_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={INFLATION_HEDGE_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={INFLATION_HEDGE_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={INFLATION_HEDGE_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default InflationHedgeRealEstateCalculatorPage;