'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ARIZONA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/arizona-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ArizonaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={ARIZONA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ARIZONA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="arizona-transfer-tax-calculator"
        category="Seller Tools"
        description={ARIZONA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={ARIZONA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={ARIZONA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={ARIZONA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ArizonaTransferTaxCalculatorPage;
