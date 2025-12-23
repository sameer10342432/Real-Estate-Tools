'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ASSET_DEPLETION_LOAN_CALCULATOR_CONTENT } from '@/content/tools/asset-depletion-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AssetDepletionLoanCalculatorPage = () => {
  return (
    <CalculatorLayout content={ASSET_DEPLETION_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ASSET_DEPLETION_LOAN_CALCULATOR_CONTENT.title}
        slug="asset-depletion-loan-calculator"
        category="Non-QM Loans"
        description={ASSET_DEPLETION_LOAN_CALCULATOR_CONTENT.description}
        inputs={ASSET_DEPLETION_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={ASSET_DEPLETION_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={ASSET_DEPLETION_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AssetDepletionLoanCalculatorPage;
