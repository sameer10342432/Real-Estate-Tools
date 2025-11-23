'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GenericCalculator } from '@/components/calculators/GenericCalculator';
import { COVARIANCE_REAL_ESTATE_STOCKS_CALCULATOR_CONTENT } from '@/content/tools/covariance-real-estate-stocks-calculator';

export default function CovarianceRealEstateStocksCalculatorPage() {
  return (
    <CalculatorLayout content={COVARIANCE_REAL_ESTATE_STOCKS_CALCULATOR_CONTENT}>
      <GenericCalculator content={COVARIANCE_REAL_ESTATE_STOCKS_CALCULATOR_CONTENT} />
    </CalculatorLayout>
  );
}
