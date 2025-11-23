'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PARKING_RATIO_CALCULATOR_CONTENT } from '@/content/tools/parking-ratio-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ParkingRatioCalculatorPage = () => {
  return (
    <CalculatorLayout content={PARKING_RATIO_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PARKING_RATIO_CALCULATOR_CONTENT.title}
        slug="parking-ratio-calculator"
        category="Commercial Real Estate"
        description={PARKING_RATIO_CALCULATOR_CONTENT.description}
        inputs={PARKING_RATIO_CALCULATOR_CONTENT.calculator.fields}
        results={PARKING_RATIO_CALCULATOR_CONTENT.calculator.results}
        calculation={PARKING_RATIO_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ParkingRatioCalculatorPage;
