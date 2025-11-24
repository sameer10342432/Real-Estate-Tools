"use client";
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { RENTAL_INCOME_TAXABLE_ESTIMATOR_CONTENT } from '@/content/tools/rental-income-taxable-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RentalIncomeTaxableEstimator = () => {
  return (
    <CalculatorLayout content={RENTAL_INCOME_TAXABLE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={RENTAL_INCOME_TAXABLE_ESTIMATOR_CONTENT.title}
        slug={RENTAL_INCOME_TAXABLE_ESTIMATOR_CONTENT.slug}
        category={RENTAL_INCOME_TAXABLE_ESTIMATOR_CONTENT.category}
        description={RENTAL_INCOME_TAXABLE_ESTIMATOR_CONTENT.description}
        inputs={RENTAL_INCOME_TAXABLE_ESTIMATOR_CONTENT.calculator.fields}
        results={RENTAL_INCOME_TAXABLE_ESTIMATOR_CONTENT.calculator.results}
        calculation={RENTAL_INCOME_TAXABLE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RentalIncomeTaxableEstimator;
