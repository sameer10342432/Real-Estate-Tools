'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PENNSYLVANIA_REALTY_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/pennsylvania-realty-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const _metadata = {
  title: 'Pennsylvania Realty Transfer Tax Calculator | PA Transfer Tax Rates',
  description: 'Calculate Pennsylvania realty transfer tax on property sales. Estimate state, county, and local transfer taxes by location - Philadelphia, Pittsburgh, and more.',
};

const PennsylvaniaRealtyTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={PENNSYLVANIA_REALTY_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PENNSYLVANIA_REALTY_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="pennsylvania-realty-transfer-tax-calculator"
        category="Tax Calculators"
        description={PENNSYLVANIA_REALTY_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={PENNSYLVANIA_REALTY_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={PENNSYLVANIA_REALTY_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={PENNSYLVANIA_REALTY_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PennsylvaniaRealtyTransferTaxCalculatorPage;
