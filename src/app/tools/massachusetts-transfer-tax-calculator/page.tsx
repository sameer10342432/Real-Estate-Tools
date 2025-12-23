'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MASSACHUSETTS_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/massachusetts-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MassachusettsTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={MASSACHUSETTS_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MASSACHUSETTS_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="massachusetts-transfer-tax-calculator"
        category="Seller Tools"
        description={MASSACHUSETTS_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={MASSACHUSETTS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={MASSACHUSETTS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={MASSACHUSETTS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MassachusettsTransferTaxCalculatorPage;
