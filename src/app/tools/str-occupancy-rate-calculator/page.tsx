'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { STR_OCCUPANCY_RATE_CALCULATOR_CONTENT } from '@/content/tools/str-occupancy-rate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const StrOccupancyRateCalculatorPage = () => {
  return (
    <CalculatorLayout content={STR_OCCUPANCY_RATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={STR_OCCUPANCY_RATE_CALCULATOR_CONTENT.title}
        slug="str-occupancy-rate-calculator"
        category="Rental & Income"
        description={STR_OCCUPANCY_RATE_CALCULATOR_CONTENT.description}
        inputs={STR_OCCUPANCY_RATE_CALCULATOR_CONTENT.calculator.fields}
        results={STR_OCCUPANCY_RATE_CALCULATOR_CONTENT.calculator.results}
        calculation={STR_OCCUPANCY_RATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default StrOccupancyRateCalculatorPage;
