'use client';
import type { Metadata } from 'next';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'HOA Special Assessment Risk Calculator | Free HOA Tool',
    description: 'Calculate the risk of unexpected HOA special assessments. Evaluate reserve funds, building age, and maintenance to estimate potential surprise costs. Free tool for homeowners and buyers.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOA_SPECIAL_ASSESSMENT_RISK_CALCULATOR_CONTENT } from '@/content/tools/hoa-special-assessment-risk-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HOASpecialAssessmentRiskCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOA_SPECIAL_ASSESSMENT_RISK_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOA_SPECIAL_ASSESSMENT_RISK_CALCULATOR_CONTENT.title}
        slug="hoa-special-assessment-risk-calculator"
        category="Legal & Compliance"
        description={HOA_SPECIAL_ASSESSMENT_RISK_CALCULATOR_CONTENT.description}
        inputs={HOA_SPECIAL_ASSESSMENT_RISK_CALCULATOR_CONTENT.calculator.fields}
        results={HOA_SPECIAL_ASSESSMENT_RISK_CALCULATOR_CONTENT.calculator.results}
        calculation={HOA_SPECIAL_ASSESSMENT_RISK_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HOASpecialAssessmentRiskCalculatorPage;
