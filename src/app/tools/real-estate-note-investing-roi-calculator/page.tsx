'use client';
async function _generateMetadata() {
  return {
    title: 'Real Estate Note Investing ROI Calculator - Calculate Mortgage Note Returns | Property Tools',
    description: 'Calculate returns on mortgage note investments including yield, cash flow, and total ROI for performing and non-performing notes.',
  };
}

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { REAL_ESTATE_NOTE_INVESTING_ROI_CALCULATOR_CONTENT } from '@/content/tools/real-estate-note-investing-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RealEstateNoteInvestingRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={REAL_ESTATE_NOTE_INVESTING_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={REAL_ESTATE_NOTE_INVESTING_ROI_CALCULATOR_CONTENT.title}
        slug="real-estate-note-investing-roi-calculator"
        category="Investment Analysis"
        description={REAL_ESTATE_NOTE_INVESTING_ROI_CALCULATOR_CONTENT.description}
        inputs={REAL_ESTATE_NOTE_INVESTING_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={REAL_ESTATE_NOTE_INVESTING_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={REAL_ESTATE_NOTE_INVESTING_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RealEstateNoteInvestingRoiCalculatorPage;
