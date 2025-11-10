
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'New Construction Budget Calculator',
    description: 'Estimate total construction costs including materials, labor, permits, and contingency. Free online tool for real estate professionals, investors, and homebu...',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { NEW_CONSTRUCTION_BUDGET_CALCULATOR_CONTENT } from '@/content/tools/new-construction-budget-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NewConstructionBudgetCalculatorPage = () => {
  return (
    <CalculatorLayout content={NEW_CONSTRUCTION_BUDGET_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NEW_CONSTRUCTION_BUDGET_CALCULATOR_CONTENT.title}
        slug="new-construction-budget-calculator"
        category="Advanced Analytics"
        description={NEW_CONSTRUCTION_BUDGET_CALCULATOR_CONTENT.description}
        inputs={NEW_CONSTRUCTION_BUDGET_CALCULATOR_CONTENT.calculator.fields}
        results={NEW_CONSTRUCTION_BUDGET_CALCULATOR_CONTENT.calculator.results}
        calculation={NEW_CONSTRUCTION_BUDGET_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewConstructionBudgetCalculatorPage;
