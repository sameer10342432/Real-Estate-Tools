'use client';
import { divorceRealEstateBuyoutCalculator } from '@/content/tools/divorce-real-estate-buyout-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const DivorceRealEstateBuyoutCalculatorPage = () => {
  return (
    <CalculatorLayout content={divorceRealEstateBuyoutCalculator}>
      <EnhancedCalculator
        title={divorceRealEstateBuyoutCalculator.title}
        slug="divorce-real-estate-buyout-calculator"
        category="Lifestyle & Housing"
        description={divorceRealEstateBuyoutCalculator.description}
        inputs={divorceRealEstateBuyoutCalculator.calculator.fields}
        results={divorceRealEstateBuyoutCalculator.calculator.results}
        calculation={divorceRealEstateBuyoutCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DivorceRealEstateBuyoutCalculatorPage;
