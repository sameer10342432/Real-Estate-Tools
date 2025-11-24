'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NEW_YORK_ADIRONDACK_PARK_AGENCY_COMPLIANCE_CHECKER_CONTENT } from '@/content/tools/new-york-adirondack-park-agency-compliance-checker';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NewYorkAdirondackParkAgencyComplianceCheckerPage = () => {
  return (
    <CalculatorLayout content={NEW_YORK_ADIRONDACK_PARK_AGENCY_COMPLIANCE_CHECKER_CONTENT}>
      <EnhancedCalculator
        title={NEW_YORK_ADIRONDACK_PARK_AGENCY_COMPLIANCE_CHECKER_CONTENT.title}
        slug="new-york-adirondack-park-agency-compliance-checker"
        category="Legal & Compliance"
        description={NEW_YORK_ADIRONDACK_PARK_AGENCY_COMPLIANCE_CHECKER_CONTENT.description}
        inputs={NEW_YORK_ADIRONDACK_PARK_AGENCY_COMPLIANCE_CHECKER_CONTENT.calculator.fields}
        results={NEW_YORK_ADIRONDACK_PARK_AGENCY_COMPLIANCE_CHECKER_CONTENT.calculator.results}
        calculation={NEW_YORK_ADIRONDACK_PARK_AGENCY_COMPLIANCE_CHECKER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewYorkAdirondackParkAgencyComplianceCheckerPage;
