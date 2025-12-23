'use client';
async function _generateMetadata() {
  return {
    title: 'Home Addition ROI Calculator - Calculate Return on Square Footage Addition',
    description: 'Calculate the return on investment for home additions including cost per square foot, home value increase, and resale impact.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOME_ADDITION_SQ_FT_ROI_CALCULATOR_CONTENT } from '@/content/tools/home-addition-sq-ft-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeAdditionSqFtRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOME_ADDITION_SQ_FT_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOME_ADDITION_SQ_FT_ROI_CALCULATOR_CONTENT.title}
        slug="home-addition-sq-ft-roi-calculator"
        category="Home Improvement"
        description={HOME_ADDITION_SQ_FT_ROI_CALCULATOR_CONTENT.description}
        inputs={HOME_ADDITION_SQ_FT_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={HOME_ADDITION_SQ_FT_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={HOME_ADDITION_SQ_FT_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeAdditionSqFtRoiCalculatorPage;
