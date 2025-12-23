'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ASSET_BASED_LOAN_CALCULATOR_CONTENT } from '@/content/tools/asset-based-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AssetBasedLoanCalculatorPage = () => {
  return (
    <CalculatorLayout content={ASSET_BASED_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ASSET_BASED_LOAN_CALCULATOR_CONTENT.title}
        slug="asset-based-loan-calculator"
        category="Non-QM Loans"
        description={ASSET_BASED_LOAN_CALCULATOR_CONTENT.description}
        inputs={ASSET_BASED_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={ASSET_BASED_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={ASSET_BASED_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AssetBasedLoanCalculatorPage;
