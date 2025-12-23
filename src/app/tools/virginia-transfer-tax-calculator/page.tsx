'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/virginia-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const VirginiaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="virginia-transfer-tax-calculator"
        category="Seller Tools"
        description={VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default VirginiaTransferTaxCalculatorPage;
