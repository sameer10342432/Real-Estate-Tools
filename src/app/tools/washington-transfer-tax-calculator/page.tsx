'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { WASHINGTON_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/washington-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WashingtonTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={WASHINGTON_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={WASHINGTON_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="washington-transfer-tax-calculator"
        category="Seller Tools"
        description={WASHINGTON_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={WASHINGTON_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={WASHINGTON_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={WASHINGTON_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WashingtonTransferTaxCalculatorPage;
