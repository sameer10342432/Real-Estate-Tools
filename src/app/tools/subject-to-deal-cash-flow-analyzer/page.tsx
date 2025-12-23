'use client';
async function _generateMetadata() {
  return {
    title: 'Subject-To (Sub-To) Deal Cash Flow Analyzer - Creative Real Estate Investing | Property Tools',
    description: 'Analyze cash flow and profitability of subject-to real estate deals where you take over existing mortgage payments.',
  };
}

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SUBJECT_TO_DEAL_CASH_FLOW_ANALYZER_CONTENT } from '@/content/tools/subject-to-deal-cash-flow-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SubjectToDealCashFlowAnalyzerPage = () => {
  return (
    <CalculatorLayout content={SUBJECT_TO_DEAL_CASH_FLOW_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={SUBJECT_TO_DEAL_CASH_FLOW_ANALYZER_CONTENT.title}
        slug="subject-to-deal-cash-flow-analyzer"
        category="Investment Analysis"
        description={SUBJECT_TO_DEAL_CASH_FLOW_ANALYZER_CONTENT.description}
        inputs={SUBJECT_TO_DEAL_CASH_FLOW_ANALYZER_CONTENT.calculator.fields}
        results={SUBJECT_TO_DEAL_CASH_FLOW_ANALYZER_CONTENT.calculator.results}
        calculation={SUBJECT_TO_DEAL_CASH_FLOW_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SubjectToDealCashFlowAnalyzerPage;
