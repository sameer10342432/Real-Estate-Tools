
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'ROI Calculator',
    description: 'Calculate return on investment for property purchases. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ROI_CALCULATOR_CONTENT } from '@/content/tools/roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ROICalculatorPage = () => {
  return (
    <CalculatorLayout content={ROI_CALCULATOR_CONTENT}>
            <EnhancedCalculator
        title={ROI_CALCULATOR_CONTENT.title}
        slug="roi-calculator"
        category="Real Estate"
        description={ROI_CALCULATOR_CONTENT.description}
        inputs={ROI_CALCULATOR_CONTENT.calculator.fields}
        results={ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ROICalculatorPage;