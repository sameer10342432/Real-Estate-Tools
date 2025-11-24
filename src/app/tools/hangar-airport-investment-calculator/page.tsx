'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HANGAR_AIRPORT_INVESTMENT_CALCULATOR_CONTENT } from '@/content/tools/hangar-airport-investment-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HangarAirportInvestmentCalculatorPage = () => {
  return (
    <CalculatorLayout content={HANGAR_AIRPORT_INVESTMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HANGAR_AIRPORT_INVESTMENT_CALCULATOR_CONTENT.title}
        slug="hangar-airport-investment-calculator"
        category={HANGAR_AIRPORT_INVESTMENT_CALCULATOR_CONTENT.category}
        description={HANGAR_AIRPORT_INVESTMENT_CALCULATOR_CONTENT.description}
        inputs={HANGAR_AIRPORT_INVESTMENT_CALCULATOR_CONTENT.calculator.fields}
        results={HANGAR_AIRPORT_INVESTMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={HANGAR_AIRPORT_INVESTMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HangarAirportInvestmentCalculatorPage;
