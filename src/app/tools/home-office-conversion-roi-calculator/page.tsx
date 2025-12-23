'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Office Conversion ROI Calculator | Property Tools',
    description: 'Calculate the return on investment for converting a spare room or space into a functional home office. Includes tax benefits, value increase, and productivity gains analysis.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HOME_OFFICE_CONVERSION_ROI_CALCULATOR_CONTENT } from '@/content/tools/home-office-conversion-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeOfficeConversionRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOME_OFFICE_CONVERSION_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOME_OFFICE_CONVERSION_ROI_CALCULATOR_CONTENT.title}
        slug="home-office-conversion-roi-calculator"
        category="Home Improvement"
        description={HOME_OFFICE_CONVERSION_ROI_CALCULATOR_CONTENT.description}
        inputs={HOME_OFFICE_CONVERSION_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={HOME_OFFICE_CONVERSION_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={HOME_OFFICE_CONVERSION_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeOfficeConversionRoiCalculatorPage;
