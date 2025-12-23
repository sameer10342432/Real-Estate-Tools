'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TENNESSEE_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/tennessee-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TennesseeTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={TENNESSEE_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={TENNESSEE_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="tennessee-transfer-tax-calculator"
        category="Seller Tools"
        description={TENNESSEE_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={TENNESSEE_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={TENNESSEE_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={TENNESSEE_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TennesseeTransferTaxCalculatorPage;
