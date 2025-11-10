
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Raw Land Investment Calculator',
    description: 'Calculate ROI, holding costs, and profit potential for raw land investments. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { RAW_LAND_INVESTMENT_CALCULATOR_CONTENT } from '@/content/tools/raw-land-investment-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RawLandInvestmentCalculatorPage = () => {
  return (
    <CalculatorLayout content={RAW_LAND_INVESTMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={RAW_LAND_INVESTMENT_CALCULATOR_CONTENT.title}
        slug="raw-land-investment-calculator"
        category="Investment Analysis"
        description={RAW_LAND_INVESTMENT_CALCULATOR_CONTENT.description}
        inputs={RAW_LAND_INVESTMENT_CALCULATOR_CONTENT.calculator.fields}
        results={RAW_LAND_INVESTMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={RAW_LAND_INVESTMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RawLandInvestmentCalculatorPage;
