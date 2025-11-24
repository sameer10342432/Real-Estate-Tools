'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CONDO_HOTEL_CONDOTEL_ROI_CALCULATOR_CONTENT } from '@/content/tools/condo-hotel-condotel-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CondoHotelCondotelROICalculatorPage = () => {
  return (
    <CalculatorLayout content={CONDO_HOTEL_CONDOTEL_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CONDO_HOTEL_CONDOTEL_ROI_CALCULATOR_CONTENT.title}
        slug="condo-hotel-condotel-roi-calculator"
        category="Real Estate"
        description={CONDO_HOTEL_CONDOTEL_ROI_CALCULATOR_CONTENT.description}
        inputs={CONDO_HOTEL_CONDOTEL_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={CONDO_HOTEL_CONDOTEL_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={CONDO_HOTEL_CONDOTEL_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CondoHotelCondotelROICalculatorPage;

