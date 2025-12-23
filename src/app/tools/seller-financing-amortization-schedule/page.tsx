'use client';
async function _generateMetadata() {
  return {
    title: 'Seller Financing Amortization Schedule - Owner Financing Calculator | Property Tools',
    description: 'Create complete amortization schedules for seller-financed real estate deals including payment breakdowns and interest calculations.',
  };
}

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SELLER_FINANCING_AMORTIZATION_SCHEDULE_CONTENT } from '@/content/tools/seller-financing-amortization-schedule';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SellerFinancingAmortizationSchedulePage = () => {
  return (
    <CalculatorLayout content={SELLER_FINANCING_AMORTIZATION_SCHEDULE_CONTENT}>
      <EnhancedCalculator
        title={SELLER_FINANCING_AMORTIZATION_SCHEDULE_CONTENT.title}
        slug="seller-financing-amortization-schedule"
        category="Investment Analysis"
        description={SELLER_FINANCING_AMORTIZATION_SCHEDULE_CONTENT.description}
        inputs={SELLER_FINANCING_AMORTIZATION_SCHEDULE_CONTENT.calculator.fields}
        results={SELLER_FINANCING_AMORTIZATION_SCHEDULE_CONTENT.calculator.results}
        calculation={SELLER_FINANCING_AMORTIZATION_SCHEDULE_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SellerFinancingAmortizationSchedulePage;
