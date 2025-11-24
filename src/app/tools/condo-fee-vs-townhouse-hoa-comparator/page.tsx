'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CONDO_FEE_VS_TOWNHOUSE_HOA_COMPARATOR_CONTENT } from '@/content/tools/condo-fee-vs-townhouse-hoa-comparator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CondoFeeVsTownhouseHOAComparatorPage = () => {
  return (
    <CalculatorLayout content={CONDO_FEE_VS_TOWNHOUSE_HOA_COMPARATOR_CONTENT}>
      <EnhancedCalculator
        title={CONDO_FEE_VS_TOWNHOUSE_HOA_COMPARATOR_CONTENT.title}
        slug="condo-fee-vs-townhouse-hoa-comparator"
        category="Real Estate"
        description={CONDO_FEE_VS_TOWNHOUSE_HOA_COMPARATOR_CONTENT.description}
        inputs={CONDO_FEE_VS_TOWNHOUSE_HOA_COMPARATOR_CONTENT.calculator.fields}
        results={CONDO_FEE_VS_TOWNHOUSE_HOA_COMPARATOR_CONTENT.calculator.results}
        calculation={CONDO_FEE_VS_TOWNHOUSE_HOA_COMPARATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CondoFeeVsTownhouseHOAComparatorPage;

