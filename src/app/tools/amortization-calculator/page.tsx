'use client';
import { amortizationCalculator } from '@/content/tools/amortization-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const AmortizationCalculatorPage = () => {
  return (
    <CalculatorLayout content={amortizationCalculator}>
      <EnhancedCalculator
        title={amortizationCalculator.title}
        slug="amortization-calculator"
        category="Real Estate"
        description={amortizationCalculator.description}
        inputs={amortizationCalculator.calculator.fields}
        results={amortizationCalculator.calculator.results}
        calculation={amortizationCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AmortizationCalculatorPage;