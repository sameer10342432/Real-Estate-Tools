'use client';
async function _generateMetadata() {
  return {
    title: 'Senior Living Facility ROI Calculator - Analyze Assisted Living & Memory Care Returns | Property Tools',
    description: 'Calculate investment returns for senior living facilities including assisted living, memory care, and independent living communities. Analyze occupancy, NOI, cash flow, and IRR.',
  };
}

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SENIOR_LIVING_FACILITY_ROI_CALCULATOR_CONTENT } from '@/content/tools/senior-living-facility-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SeniorLivingFacilityROICalculatorPage = () => {
  return (
    <CalculatorLayout content={SENIOR_LIVING_FACILITY_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SENIOR_LIVING_FACILITY_ROI_CALCULATOR_CONTENT.title}
        slug="senior-living-facility-roi-calculator"
        category="Investment Analysis"
        description={SENIOR_LIVING_FACILITY_ROI_CALCULATOR_CONTENT.description}
        inputs={SENIOR_LIVING_FACILITY_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={SENIOR_LIVING_FACILITY_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={SENIOR_LIVING_FACILITY_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SeniorLivingFacilityROICalculatorPage;
