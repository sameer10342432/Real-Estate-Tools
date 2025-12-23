'use client';
import { NYC_MORTGAGE_RECORDING_TAX_CALCULATOR_CONTENT } from '@/content/tools/nyc-mortgage-recording-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const NYCMortgageRecordingTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={NYC_MORTGAGE_RECORDING_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NYC_MORTGAGE_RECORDING_TAX_CALCULATOR_CONTENT.title}
        slug="nyc-mortgage-recording-tax-calculator"
        category="Tax Calculators"
        description={NYC_MORTGAGE_RECORDING_TAX_CALCULATOR_CONTENT.description}
        inputs={NYC_MORTGAGE_RECORDING_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={NYC_MORTGAGE_RECORDING_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={NYC_MORTGAGE_RECORDING_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NYCMortgageRecordingTaxCalculatorPage;
