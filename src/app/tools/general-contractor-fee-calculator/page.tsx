'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'General Contractor Fee Calculator | Property Tools',
    description: 'Calculate general contractor fees and markup for construction projects including overhead and profit margins. Estimate GC costs for residential and commercial projects.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { GENERAL_CONTRACTOR_FEE_CALCULATOR_CONTENT } from '@/content/tools/general-contractor-fee-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GeneralContractorFeeCalculatorPage = () => {
  return (
    <CalculatorLayout content={GENERAL_CONTRACTOR_FEE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={GENERAL_CONTRACTOR_FEE_CALCULATOR_CONTENT.title}
        slug="general-contractor-fee-calculator"
        category="Home Improvement"
        description={GENERAL_CONTRACTOR_FEE_CALCULATOR_CONTENT.description}
        inputs={GENERAL_CONTRACTOR_FEE_CALCULATOR_CONTENT.calculator.fields}
        results={GENERAL_CONTRACTOR_FEE_CALCULATOR_CONTENT.calculator.results}
        calculation={GENERAL_CONTRACTOR_FEE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GeneralContractorFeeCalculatorPage;
