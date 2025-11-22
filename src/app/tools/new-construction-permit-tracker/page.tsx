'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NEW_CONSTRUCTION_PERMIT_TRACKER_CONTENT } from '@/content/tools/new-construction-permit-tracker';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NewConstructionPermitTrackerPage = () => {
  return (
    <CalculatorLayout content={NEW_CONSTRUCTION_PERMIT_TRACKER_CONTENT}>
      <EnhancedCalculator
        title={NEW_CONSTRUCTION_PERMIT_TRACKER_CONTENT.title}
        slug="new-construction-permit-tracker"
        category="Market Analysis"
        description={NEW_CONSTRUCTION_PERMIT_TRACKER_CONTENT.description}
        inputs={NEW_CONSTRUCTION_PERMIT_TRACKER_CONTENT.calculator.fields}
        results={NEW_CONSTRUCTION_PERMIT_TRACKER_CONTENT.calculator.results}
        calculation={NEW_CONSTRUCTION_PERMIT_TRACKER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewConstructionPermitTrackerPage;