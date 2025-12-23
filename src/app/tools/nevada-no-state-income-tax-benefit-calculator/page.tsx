'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NEVADA_NO_STATE_INCOME_TAX_BENEFIT_CALCULATOR_CONTENT } from '@/content/tools/nevada-no-state-income-tax-benefit-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NevadaNoStateIncomeTaxBenefitCalculatorPage = () => {
  return (
    <CalculatorLayout content={NEVADA_NO_STATE_INCOME_TAX_BENEFIT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NEVADA_NO_STATE_INCOME_TAX_BENEFIT_CALCULATOR_CONTENT.title}
        slug="nevada-no-state-income-tax-benefit-calculator"
        category="State-Specific Tools"
        description={NEVADA_NO_STATE_INCOME_TAX_BENEFIT_CALCULATOR_CONTENT.description}
        inputs={NEVADA_NO_STATE_INCOME_TAX_BENEFIT_CALCULATOR_CONTENT.calculator.fields}
        results={NEVADA_NO_STATE_INCOME_TAX_BENEFIT_CALCULATOR_CONTENT.calculator.results}
        calculation={NEVADA_NO_STATE_INCOME_TAX_BENEFIT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NevadaNoStateIncomeTaxBenefitCalculatorPage;

const _metadata = {
  title: 'Nevada No State Income Tax Benefit Calculator | Property Tools',
  description: 'Calculate tax savings from Nevada\'s no-income-tax status compared to high-tax states for real estate investors',
};
