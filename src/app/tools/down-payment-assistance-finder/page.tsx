'use client';
import { downPaymentAssistanceFinder } from '@/content/tools/down-payment-assistance-finder';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const DownPaymentAssistanceFinderPage = () => {
  return (
    <CalculatorLayout content={downPaymentAssistanceFinder}>
      <EnhancedCalculator
        title={downPaymentAssistanceFinder.title}
        slug="down-payment-assistance-finder"
        category="First-Time Homebuyer Tools"
        description={downPaymentAssistanceFinder.description}
        inputs={downPaymentAssistanceFinder.calculator.fields}
        results={downPaymentAssistanceFinder.calculator.results}
        calculation={downPaymentAssistanceFinder.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DownPaymentAssistanceFinderPage;
