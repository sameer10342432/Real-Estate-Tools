export async function generateMetadata() {
  return {
    title: 'Land Banking ROI Calculator - Calculate Raw Land Investment Returns | Property Tools',
    description: 'Calculate returns on land banking investments including appreciation, holding costs, and exit strategies for raw land speculation.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LAND_BANKING_ROI_CALCULATOR_CONTENT } from '@/content/tools/land-banking-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LandBankingROICalculatorPage = () => {
  return (
    <CalculatorLayout content={LAND_BANKING_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={LAND_BANKING_ROI_CALCULATOR_CONTENT.title}
        slug="land-banking-roi-calculator"
        category="Investment Analysis"
        description={LAND_BANKING_ROI_CALCULATOR_CONTENT.description}
        inputs={LAND_BANKING_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={LAND_BANKING_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={LAND_BANKING_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LandBankingROICalculatorPage;
