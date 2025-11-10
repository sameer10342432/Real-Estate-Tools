
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Staging ROI Calculator',
    description: 'Calculate the return on investment for home staging to determine if professional staging is worth the cost. Free online tool for real estate professionals, i...',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HOME_STAGING_ROI_CALCULATOR_CONTENT } from '@/content/tools/home-staging-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeStagingRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOME_STAGING_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOME_STAGING_ROI_CALCULATOR_CONTENT.title}
        slug="home-staging-roi-calculator"
        category="Seller Tools"
        description={HOME_STAGING_ROI_CALCULATOR_CONTENT.description}
        inputs={HOME_STAGING_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={HOME_STAGING_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={HOME_STAGING_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeStagingRoiCalculatorPage;
