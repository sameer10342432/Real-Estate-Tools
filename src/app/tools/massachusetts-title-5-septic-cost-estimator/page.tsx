'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MASSACHUSETTS_TITLE_5_SEPTIC_COST_ESTIMATOR_CONTENT } from '@/content/tools/massachusetts-title-5-septic-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const _metadata = {
  title: 'Massachusetts Title 5 Septic Cost Estimator | Inspection & Repair Costs',
  description: 'Calculate MA Title 5 septic inspection and repair costs. Estimate compliance expenses for your septic system - inspection, repairs, and replacement costs.',
};

const MassachusettsTitle5SepticCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={MASSACHUSETTS_TITLE_5_SEPTIC_COST_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={MASSACHUSETTS_TITLE_5_SEPTIC_COST_ESTIMATOR_CONTENT.title}
        slug="massachusetts-title-5-septic-cost-estimator"
        category="Home Maintenance"
        description={MASSACHUSETTS_TITLE_5_SEPTIC_COST_ESTIMATOR_CONTENT.description}
        inputs={MASSACHUSETTS_TITLE_5_SEPTIC_COST_ESTIMATOR_CONTENT.calculator.fields}
        results={MASSACHUSETTS_TITLE_5_SEPTIC_COST_ESTIMATOR_CONTENT.calculator.results}
        calculation={MASSACHUSETTS_TITLE_5_SEPTIC_COST_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MassachusettsTitle5SepticCostEstimatorPage;
