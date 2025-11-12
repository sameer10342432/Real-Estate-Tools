export async function generateMetadata() {
  return {
    title: 'Zoning Variance Feasibility Checker - Analyze Variance Approval Probability | Property Tools',
    description: 'Analyze the feasibility and financial impact of pursuing zoning variances for real estate development projects including costs, timeline, and approval probability.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ZONING_VARIANCE_FEASIBILITY_CHECKER_CONTENT } from '@/content/tools/zoning-variance-feasibility-checker';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ZoningVarianceFeasibilityCheckerPage = () => {
  return (
    <CalculatorLayout content={ZONING_VARIANCE_FEASIBILITY_CHECKER_CONTENT}>
      <EnhancedCalculator
        title={ZONING_VARIANCE_FEASIBILITY_CHECKER_CONTENT.title}
        slug="zoning-variance-feasibility-checker"
        category="Investment Analysis"
        description={ZONING_VARIANCE_FEASIBILITY_CHECKER_CONTENT.description}
        inputs={ZONING_VARIANCE_FEASIBILITY_CHECKER_CONTENT.calculator.fields}
        results={ZONING_VARIANCE_FEASIBILITY_CHECKER_CONTENT.calculator.results}
        calculation={ZONING_VARIANCE_FEASIBILITY_CHECKER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ZoningVarianceFeasibilityCheckerPage;
