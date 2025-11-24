'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOA_SPECIAL_ASSESSMENT_HISTORY_TRACKER_CONTENT } from '@/content/tools/hoa-special-assessment-history-tracker';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HoaSpecialAssessmentHistoryTrackerPage = () => {
  return (
    <CalculatorLayout content={HOA_SPECIAL_ASSESSMENT_HISTORY_TRACKER_CONTENT}>
      <EnhancedCalculator
        title={HOA_SPECIAL_ASSESSMENT_HISTORY_TRACKER_CONTENT.title}
        slug="hoa-special-assessment-history-tracker"
        category="HOA & Community"
        description={HOA_SPECIAL_ASSESSMENT_HISTORY_TRACKER_CONTENT.description}
        inputs={HOA_SPECIAL_ASSESSMENT_HISTORY_TRACKER_CONTENT.calculator.fields}
        results={HOA_SPECIAL_ASSESSMENT_HISTORY_TRACKER_CONTENT.calculator.results}
        calculation={HOA_SPECIAL_ASSESSMENT_HISTORY_TRACKER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HoaSpecialAssessmentHistoryTrackerPage;
