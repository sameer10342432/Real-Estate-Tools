'use client';
async function _generateMetadata() {
  return {
    title: 'Medical Office Building (MOB) Investment Calculator - Healthcare Real Estate ROI | Property Tools',
    description: 'Calculate ROI and cash flow for medical office building investments. Analyze MOB returns with specialized tenant considerations, cap rates, DSCR, and healthcare market dynamics.',
  };
}

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MEDICAL_OFFICE_BUILDING_MOB_INVESTMENT_CALCULATOR_CONTENT } from '@/content/tools/medical-office-building-mob-investment-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MedicalOfficeBuildingMOBInvestmentCalculatorPage = () => {
  return (
    <CalculatorLayout content={MEDICAL_OFFICE_BUILDING_MOB_INVESTMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MEDICAL_OFFICE_BUILDING_MOB_INVESTMENT_CALCULATOR_CONTENT.title}
        slug="medical-office-building-mob-investment-calculator"
        category="Investment Analysis"
        description={MEDICAL_OFFICE_BUILDING_MOB_INVESTMENT_CALCULATOR_CONTENT.description}
        inputs={MEDICAL_OFFICE_BUILDING_MOB_INVESTMENT_CALCULATOR_CONTENT.calculator.fields}
        results={MEDICAL_OFFICE_BUILDING_MOB_INVESTMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={MEDICAL_OFFICE_BUILDING_MOB_INVESTMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MedicalOfficeBuildingMOBInvestmentCalculatorPage;
