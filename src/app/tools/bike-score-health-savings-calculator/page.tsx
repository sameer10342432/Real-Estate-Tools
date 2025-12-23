'use client';
async function _generateMetadata() {
  return {
    title: 'Bike Score Health Savings Calculator - Biking Benefits Analysis',
    description: 'Calculate health and financial benefits from living in bike-friendly neighborhoods. Estimate healthcare savings, transportation costs, and environmental impact.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { BIKE_SCORE_HEALTH_SAVINGS_CALCULATOR_CONTENT } from '@/content/tools/bike-score-health-savings-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BikeScoreHealthSavingsCalculatorPage = () => {
  return (
    <CalculatorLayout content={BIKE_SCORE_HEALTH_SAVINGS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={BIKE_SCORE_HEALTH_SAVINGS_CALCULATOR_CONTENT.title}
        slug="bike-score-health-savings-calculator"
        category="Sustainability"
        description={BIKE_SCORE_HEALTH_SAVINGS_CALCULATOR_CONTENT.description}
        inputs={BIKE_SCORE_HEALTH_SAVINGS_CALCULATOR_CONTENT.calculator.fields}
        results={BIKE_SCORE_HEALTH_SAVINGS_CALCULATOR_CONTENT.calculator.results}
        calculation={BIKE_SCORE_HEALTH_SAVINGS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BikeScoreHealthSavingsCalculatorPage;
