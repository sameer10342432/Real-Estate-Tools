'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CHICAGO_PARKING_SPOT_ROI_CALCULATOR_CONTENT } from '@/content/tools/chicago-parking-spot-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ChicagoParkingSpotROICalculatorPage = () => {
  return (
    <CalculatorLayout content={CHICAGO_PARKING_SPOT_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CHICAGO_PARKING_SPOT_ROI_CALCULATOR_CONTENT.title}
        slug="chicago-parking-spot-roi-calculator"
        category="Investment Calculators"
        description={CHICAGO_PARKING_SPOT_ROI_CALCULATOR_CONTENT.description}
        inputs={CHICAGO_PARKING_SPOT_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={CHICAGO_PARKING_SPOT_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={CHICAGO_PARKING_SPOT_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ChicagoParkingSpotROICalculatorPage;
