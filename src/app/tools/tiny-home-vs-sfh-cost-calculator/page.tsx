'use client';
async function _generateMetadata() {
  return {
    title: 'Tiny Home vs Single Family Home Cost Calculator - Compare Total Costs | Property Tools',
    description: 'Compare the total costs of tiny home living vs traditional single-family homes. Analyze purchase price, utilities, maintenance, insurance, and lifestyle trade-offs.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TinyHomeVsSFHCostCalculatorContent } from '@/content/tools/tiny-home-vs-sfh-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TinyHomeVsSFHCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={TinyHomeVsSFHCostCalculatorContent}>
      <EnhancedCalculator
        title={TinyHomeVsSFHCostCalculatorContent.title}
        slug="tiny-home-vs-sfh-cost-calculator"
        category="Additional Tools"
        description={TinyHomeVsSFHCostCalculatorContent.description}
        inputs={TinyHomeVsSFHCostCalculatorContent.calculator.fields}
        results={TinyHomeVsSFHCostCalculatorContent.calculator.results}
        calculation={TinyHomeVsSFHCostCalculatorContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TinyHomeVsSFHCostCalculatorPage;
