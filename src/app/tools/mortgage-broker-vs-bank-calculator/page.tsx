'use client';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MORTGAGE_BROKER_VS_BANK_CALCULATOR_CONTENT } from '@/content/tools/mortgage-broker-vs-bank-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export default function MortgageBrokerVsBankCalculatorPage() {
  return (
    <CalculatorLayout content={MORTGAGE_BROKER_VS_BANK_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MORTGAGE_BROKER_VS_BANK_CALCULATOR_CONTENT.title}
        slug="mortgage-broker-vs-bank-calculator"
        category="Basic Calculators"
        description={MORTGAGE_BROKER_VS_BANK_CALCULATOR_CONTENT.description}
        inputs={MORTGAGE_BROKER_VS_BANK_CALCULATOR_CONTENT.calculator.fields}
        results={MORTGAGE_BROKER_VS_BANK_CALCULATOR_CONTENT.calculator.results}
        calculation={MORTGAGE_BROKER_VS_BANK_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
