'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PROP_19_CALIFORNIA_TAX_BASIS_TRANSFER_CALCULATOR_CONTENT } from '@/content/tools/prop-19-california-tax-basis-transfer-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const Prop19CaliforniaTaxBasisTransferCalculatorPage = () => {
  return (
    <CalculatorLayout content={PROP_19_CALIFORNIA_TAX_BASIS_TRANSFER_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PROP_19_CALIFORNIA_TAX_BASIS_TRANSFER_CALCULATOR_CONTENT.title}
        slug="prop-19-california-tax-basis-transfer-calculator"
        category="State-Specific Tools"
        description={PROP_19_CALIFORNIA_TAX_BASIS_TRANSFER_CALCULATOR_CONTENT.description}
        inputs={PROP_19_CALIFORNIA_TAX_BASIS_TRANSFER_CALCULATOR_CONTENT.calculator.fields}
        results={PROP_19_CALIFORNIA_TAX_BASIS_TRANSFER_CALCULATOR_CONTENT.calculator.results}
        calculation={PROP_19_CALIFORNIA_TAX_BASIS_TRANSFER_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default Prop19CaliforniaTaxBasisTransferCalculatorPage;

const _metadata = {
  title: 'Prop 19 California Tax Basis Transfer Calculator | Property Tools',
  description: 'Calculate property tax impacts of Prop 19 for inherited properties and parent-child transfers in California',
};
