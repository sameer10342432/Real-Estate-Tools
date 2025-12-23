'use client';
import { firstTimeHomebuyerSavingsPlan } from '@/content/tools/first-time-homebuyer-savings-plan';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const FirstTimeHomebuyerSavingsPlanPage = () => {
  return (
    <CalculatorLayout content={firstTimeHomebuyerSavingsPlan}>
      <EnhancedCalculator
        title={firstTimeHomebuyerSavingsPlan.title}
        slug="first-time-homebuyer-savings-plan"
        category="First-Time Homebuyer Tools"
        description={firstTimeHomebuyerSavingsPlan.description}
        inputs={firstTimeHomebuyerSavingsPlan.calculator.fields}
        results={firstTimeHomebuyerSavingsPlan.calculator.results}
        calculation={firstTimeHomebuyerSavingsPlan.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FirstTimeHomebuyerSavingsPlanPage;
