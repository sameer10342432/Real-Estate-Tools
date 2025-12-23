'use client';
async function _generateMetadata() {
  return {
    title: 'Data Center Investment Calculator - Cloud Infrastructure ROI & Returns | Property Tools',
    description: 'Analyze data center investment returns including power density, connectivity premiums, colocation revenue, and technology infrastructure costs. Calculate IRR, NOI, and cash flow.',
  };
}

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DATA_CENTER_INVESTMENT_CALCULATOR_CONTENT } from '@/content/tools/data-center-investment-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DataCenterInvestmentCalculatorPage = () => {
  return (
    <CalculatorLayout content={DATA_CENTER_INVESTMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={DATA_CENTER_INVESTMENT_CALCULATOR_CONTENT.title}
        slug="data-center-investment-calculator"
        category="Investment Analysis"
        description={DATA_CENTER_INVESTMENT_CALCULATOR_CONTENT.description}
        inputs={DATA_CENTER_INVESTMENT_CALCULATOR_CONTENT.calculator.fields}
        results={DATA_CENTER_INVESTMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={DATA_CENTER_INVESTMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DataCenterInvestmentCalculatorPage;
