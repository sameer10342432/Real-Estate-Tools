
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Investment Property Calculator',
    description: 'Analyze the financial performance of an investment property. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}


'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { INVESTMENT_PROPERTY_CALCULATOR_CONTENT } from '@/content/tools/investment-property-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const InvestmentPropertyCalculatorPage = () => {
  return (
    <CalculatorLayout content={INVESTMENT_PROPERTY_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={INVESTMENT_PROPERTY_CALCULATOR_CONTENT.title}
        slug="investment-property-calculator"
        category="Real Estate"
        description={INVESTMENT_PROPERTY_CALCULATOR_CONTENT.description}
        inputs={INVESTMENT_PROPERTY_CALCULATOR_CONTENT.calculator.fields}
        results={INVESTMENT_PROPERTY_CALCULATOR_CONTENT.calculator.results}
        calculation={INVESTMENT_PROPERTY_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default InvestmentPropertyCalculatorPage;