export async function generateMetadata() {
  return {
    title: 'Timber Land Investment Calculator - Calculate Forest Real Estate Returns | Property Tools',
    description: 'Calculate returns on timberland investments including timber growth, harvest revenue, land appreciation, and recreational income.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TIMBER_LAND_INVESTMENT_CALCULATOR_CONTENT } from '@/content/tools/timber-land-investment-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TimberLandInvestmentCalculatorPage = () => {
  return (
    <CalculatorLayout content={TIMBER_LAND_INVESTMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={TIMBER_LAND_INVESTMENT_CALCULATOR_CONTENT.title}
        slug="timber-land-investment-calculator"
        category="Investment Analysis"
        description={TIMBER_LAND_INVESTMENT_CALCULATOR_CONTENT.description}
        inputs={TIMBER_LAND_INVESTMENT_CALCULATOR_CONTENT.calculator.fields}
        results={TIMBER_LAND_INVESTMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={TIMBER_LAND_INVESTMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TimberLandInvestmentCalculatorPage;
