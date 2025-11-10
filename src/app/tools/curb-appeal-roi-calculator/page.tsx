
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Curb Appeal ROI Calculator',
    description: 'Calculate the return on investment for exterior home improvements to boost curb appeal and sale price. Free online tool for real estate professionals, invest...',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { CURB_APPEAL_ROI_CALCULATOR_CONTENT } from '@/content/tools/curb-appeal-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CurbAppealRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={CURB_APPEAL_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CURB_APPEAL_ROI_CALCULATOR_CONTENT.title}
        slug="curb-appeal-roi-calculator"
        category="Seller Tools"
        description={CURB_APPEAL_ROI_CALCULATOR_CONTENT.description}
        inputs={CURB_APPEAL_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={CURB_APPEAL_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={CURB_APPEAL_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CurbAppealRoiCalculatorPage;
