'use client';
import { michiganPRECalculator } from '@/content/tools/michigan-pre-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const MichiganPRECalculatorPage = () => {
  return (
    <CalculatorLayout content={michiganPRECalculator}>
      <EnhancedCalculator
        title={michiganPRECalculator.title}
        slug="michigan-pre-calculator"
        category="State-Specific Tools"
        description={michiganPRECalculator.description}
        inputs={michiganPRECalculator.calculator.fields}
        results={michiganPRECalculator.calculator.results}
        calculation={michiganPRECalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MichiganPRECalculatorPage;
