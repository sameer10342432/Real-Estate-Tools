'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CALIFORNIA_WILDFIRE_RISK_CAL_FIRE_SCORE_CONTENT } from '@/content/tools/california-wildfire-risk-cal-fire-score';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const _metadata = {
  title: 'California Wildfire Risk (CAL FIRE) Score Calculator | Property Tools',
  description: 'Calculate California wildfire risk score for your property using CAL FIRE methodology and FHSZ classifications. Estimate insurance costs and get mitigation recommendations.',
};

const CaliforniaWildfireRiskCalFireScorePage = () => {
  return (
    <CalculatorLayout content={CALIFORNIA_WILDFIRE_RISK_CAL_FIRE_SCORE_CONTENT}>
      <EnhancedCalculator
        title={CALIFORNIA_WILDFIRE_RISK_CAL_FIRE_SCORE_CONTENT.title}
        slug="california-wildfire-risk-cal-fire-score"
        category="Risk Assessment"
        description={CALIFORNIA_WILDFIRE_RISK_CAL_FIRE_SCORE_CONTENT.description}
        inputs={CALIFORNIA_WILDFIRE_RISK_CAL_FIRE_SCORE_CONTENT.calculator.fields}
        results={CALIFORNIA_WILDFIRE_RISK_CAL_FIRE_SCORE_CONTENT.calculator.results}
        calculation={CALIFORNIA_WILDFIRE_RISK_CAL_FIRE_SCORE_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CaliforniaWildfireRiskCalFireScorePage;
