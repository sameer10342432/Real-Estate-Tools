'use client';
async function _generateMetadata() {
  return {
    title: 'DIY vs Pro Contractor Cost Calculator - Compare Savings & Value',
    description: 'Calculate the cost comparison between DIY and hiring a professional contractor including materials, labor, time value, and quality considerations.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DIY_VS_PRO_CONTRACTOR_COST_CALCULATOR_CONTENT } from '@/content/tools/diy-vs-pro-contractor-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DiyVsProContractorCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={DIY_VS_PRO_CONTRACTOR_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={DIY_VS_PRO_CONTRACTOR_COST_CALCULATOR_CONTENT.title}
        slug="diy-vs-pro-contractor-cost-calculator"
        category="Home Improvement"
        description={DIY_VS_PRO_CONTRACTOR_COST_CALCULATOR_CONTENT.description}
        inputs={DIY_VS_PRO_CONTRACTOR_COST_CALCULATOR_CONTENT.calculator.fields}
        results={DIY_VS_PRO_CONTRACTOR_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={DIY_VS_PRO_CONTRACTOR_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DiyVsProContractorCostCalculatorPage;
