'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CERTIFICATE_OF_OCCUPANCY_CHECKLIST_CONTENT } from '@/content/tools/certificate-of-occupancy-checklist';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CertificateOfOccupancyChecklistPage = () => {
  return (
    <CalculatorLayout content={CERTIFICATE_OF_OCCUPANCY_CHECKLIST_CONTENT}>
      <EnhancedCalculator
        title={CERTIFICATE_OF_OCCUPANCY_CHECKLIST_CONTENT.title}
        slug="certificate-of-occupancy-checklist"
        category="Construction & Development"
        description={CERTIFICATE_OF_OCCUPANCY_CHECKLIST_CONTENT.description}
        inputs={CERTIFICATE_OF_OCCUPANCY_CHECKLIST_CONTENT.calculator.fields}
        results={CERTIFICATE_OF_OCCUPANCY_CHECKLIST_CONTENT.calculator.results}
        calculation={CERTIFICATE_OF_OCCUPANCY_CHECKLIST_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CertificateOfOccupancyChecklistPage;
