'use client';
import { arizonaProposition117Calculator } from '@/content/tools/arizona-proposition-117-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const ArizonaProposition117CalculatorPage = () => {
  return (
    <CalculatorLayout content={arizonaProposition117Calculator}>
      <EnhancedCalculator
        title={arizonaProposition117Calculator.title}
        slug="arizona-proposition-117-calculator"
        category="State-Specific Tools"
        description={arizonaProposition117Calculator.description}
        inputs={arizonaProposition117Calculator.calculator.fields}
        results={arizonaProposition117Calculator.calculator.results}
        calculation={arizonaProposition117Calculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ArizonaProposition117CalculatorPage;
