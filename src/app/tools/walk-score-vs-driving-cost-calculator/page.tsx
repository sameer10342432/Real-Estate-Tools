'use client';
async function _generateMetadata() {
  return {
    title: 'Walk Score vs Driving Cost Calculator - Walkability Savings Analysis',
    description: 'Compare the financial impact of walkable neighborhoods vs car-dependent locations. Calculate transportation savings and total cost of living.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { WALK_SCORE_VS_DRIVING_COST_CALCULATOR_CONTENT } from '@/content/tools/walk-score-vs-driving-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WalkScoreVsDrivingCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={WALK_SCORE_VS_DRIVING_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={WALK_SCORE_VS_DRIVING_COST_CALCULATOR_CONTENT.title}
        slug="walk-score-vs-driving-cost-calculator"
        category="Sustainability"
        description={WALK_SCORE_VS_DRIVING_COST_CALCULATOR_CONTENT.description}
        inputs={WALK_SCORE_VS_DRIVING_COST_CALCULATOR_CONTENT.calculator.fields}
        results={WALK_SCORE_VS_DRIVING_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={WALK_SCORE_VS_DRIVING_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WalkScoreVsDrivingCostCalculatorPage;
