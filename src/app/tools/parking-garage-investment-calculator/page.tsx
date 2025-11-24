'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PARKING_GARAGE_INVESTMENT_CALCULATOR_CONTENT } from '@/content/tools/parking-garage-investment-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ParkingGarageInvestmentCalculatorPage = () => {
  return (
    <CalculatorLayout content={PARKING_GARAGE_INVESTMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PARKING_GARAGE_INVESTMENT_CALCULATOR_CONTENT.title}
        slug="parking-garage-investment-calculator"
        category={PARKING_GARAGE_INVESTMENT_CALCULATOR_CONTENT.category}
        description={PARKING_GARAGE_INVESTMENT_CALCULATOR_CONTENT.description}
        inputs={PARKING_GARAGE_INVESTMENT_CALCULATOR_CONTENT.calculator.fields}
        results={PARKING_GARAGE_INVESTMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={PARKING_GARAGE_INVESTMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ParkingGarageInvestmentCalculatorPage;
