'use client';
import { COST_OF_RAISING_CHILD_HOUSING_IMPACT_CALCULATOR_CONTENT } from '@/content/tools/cost-of-raising-child-housing-impact-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const CostOfRaisingChildHousingImpactCalculatorPage = () => {
  return (
    <CalculatorLayout content={COST_OF_RAISING_CHILD_HOUSING_IMPACT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={COST_OF_RAISING_CHILD_HOUSING_IMPACT_CALCULATOR_CONTENT.title}
        slug="cost-of-raising-child-housing-impact-calculator"
        category="Lifestyle & Housing"
        description={COST_OF_RAISING_CHILD_HOUSING_IMPACT_CALCULATOR_CONTENT.description}
        inputs={COST_OF_RAISING_CHILD_HOUSING_IMPACT_CALCULATOR_CONTENT.calculator.fields}
        results={COST_OF_RAISING_CHILD_HOUSING_IMPACT_CALCULATOR_CONTENT.calculator.results}
        calculation={COST_OF_RAISING_CHILD_HOUSING_IMPACT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CostOfRaisingChildHousingImpactCalculatorPage;
