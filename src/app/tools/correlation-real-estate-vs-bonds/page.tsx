'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CORRELATION_REAL_ESTATE_VS_BONDS_CONTENT } from '@/content/tools/correlation-real-estate-vs-bonds';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CorrelationRealEstateVsBondsPage = () => {
  return (
    <CalculatorLayout content={CORRELATION_REAL_ESTATE_VS_BONDS_CONTENT}>
      <EnhancedCalculator
        title={CORRELATION_REAL_ESTATE_VS_BONDS_CONTENT.title}
        slug="correlation-real-estate-vs-bonds"
        category="Real Estate"
        description={CORRELATION_REAL_ESTATE_VS_BONDS_CONTENT.description}
        inputs={CORRELATION_REAL_ESTATE_VS_BONDS_CONTENT.calculator.fields}
        results={CORRELATION_REAL_ESTATE_VS_BONDS_CONTENT.calculator.results}
        calculation={CORRELATION_REAL_ESTATE_VS_BONDS_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CorrelationRealEstateVsBondsPage;
