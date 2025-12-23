'use client';
async function _generateMetadata() {
  return {
    title: 'Cloud on Title Risk Calculator',
    description: 'Assess the financial and legal risk of purchasing property with a "cloud on title" - defects that impair clear ownership. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CLOUD_ON_TITLE_RISK_CALCULATOR_CONTENT } from '@/content/tools/cloud-on-title-risk-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CloudOnTitleRiskCalculatorPage = () => {
  return (
    <CalculatorLayout content={CLOUD_ON_TITLE_RISK_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CLOUD_ON_TITLE_RISK_CALCULATOR_CONTENT.title}
        slug="cloud-on-title-risk-calculator"
        category="Legal & Compliance"
        description={CLOUD_ON_TITLE_RISK_CALCULATOR_CONTENT.description}
        inputs={CLOUD_ON_TITLE_RISK_CALCULATOR_CONTENT.calculator.fields}
        results={CLOUD_ON_TITLE_RISK_CALCULATOR_CONTENT.calculator.results}
        calculation={CLOUD_ON_TITLE_RISK_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CloudOnTitleRiskCalculatorPage;
