'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MAINE_TREE_GROWTH_TAX_LAW_CALCULATOR_CONTENT } from '@/content/tools/maine-tree-growth-tax-law-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MaineTreeGrowthTaxLawCalculatorPage = () => {
  return (
    <CalculatorLayout content={MAINE_TREE_GROWTH_TAX_LAW_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MAINE_TREE_GROWTH_TAX_LAW_CALCULATOR_CONTENT.title}
        slug="maine-tree-growth-tax-law-calculator"
        category="Legal & Compliance"
        description={MAINE_TREE_GROWTH_TAX_LAW_CALCULATOR_CONTENT.description}
        inputs={MAINE_TREE_GROWTH_TAX_LAW_CALCULATOR_CONTENT.calculator.fields}
        results={MAINE_TREE_GROWTH_TAX_LAW_CALCULATOR_CONTENT.calculator.results}
        calculation={MAINE_TREE_GROWTH_TAX_LAW_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MaineTreeGrowthTaxLawCalculatorPage;
