
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Appraisal Value Calculator',
    description: 'Estimate your home\'s market value using multiple appraisal methods including comparable sales and square footage. Free online tool for real estate profession...',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HOME_APPRAISAL_VALUE_CALCULATOR_CONTENT } from '@/content/tools/home-appraisal-value-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeAppraisalValueCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOME_APPRAISAL_VALUE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOME_APPRAISAL_VALUE_CALCULATOR_CONTENT.title}
        slug="home-appraisal-value-calculator"
        category="Seller Tools"
        description={HOME_APPRAISAL_VALUE_CALCULATOR_CONTENT.description}
        inputs={HOME_APPRAISAL_VALUE_CALCULATOR_CONTENT.calculator.fields}
        results={HOME_APPRAISAL_VALUE_CALCULATOR_CONTENT.calculator.results}
        calculation={HOME_APPRAISAL_VALUE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeAppraisalValueCalculatorPage;
