'use client';
import { renterAffordabilityCalculator } from '@/content/tools/renter-affordability-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const RenterAffordabilityCalculatorPage = () => {
  return (
    <CalculatorLayout content={renterAffordabilityCalculator}>
      <EnhancedCalculator
        title={renterAffordabilityCalculator.title}
        slug="renter-affordability-calculator"
        category="Rent & Lease Tools"
        description={renterAffordabilityCalculator.description}
        inputs={renterAffordabilityCalculator.calculator.fields}
        results={renterAffordabilityCalculator.calculator.results}
        calculation={renterAffordabilityCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RenterAffordabilityCalculatorPage;
