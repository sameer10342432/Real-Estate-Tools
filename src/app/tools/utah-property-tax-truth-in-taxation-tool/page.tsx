'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { UTAH_PROPERTY_TAX_TRUTH_IN_TAXATION_TOOL_CONTENT } from '@/content/tools/utah-property-tax-truth-in-taxation-tool';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const UtahPropertyTaxTruthInTaxationToolPage = () => {
  return (
    <CalculatorLayout content={UTAH_PROPERTY_TAX_TRUTH_IN_TAXATION_TOOL_CONTENT}>
      <EnhancedCalculator
        title={UTAH_PROPERTY_TAX_TRUTH_IN_TAXATION_TOOL_CONTENT.title}
        slug="utah-property-tax-truth-in-taxation-tool"
        category="Tax Calculators"
        description={UTAH_PROPERTY_TAX_TRUTH_IN_TAXATION_TOOL_CONTENT.description}
        inputs={UTAH_PROPERTY_TAX_TRUTH_IN_TAXATION_TOOL_CONTENT.calculator.fields}
        results={UTAH_PROPERTY_TAX_TRUTH_IN_TAXATION_TOOL_CONTENT.calculator.results}
        calculation={UTAH_PROPERTY_TAX_TRUTH_IN_TAXATION_TOOL_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default UtahPropertyTaxTruthInTaxationToolPage;
