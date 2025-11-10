
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Mortgage Calculator',
    description: 'Calculate monthly mortgage payments, interest, and amortization schedules. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MORTGAGE_CALCULATOR_CONTENT } from '@/content/tools/mortgage-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MortgageCalculatorPage = () => {
  return (
    <CalculatorLayout content={MORTGAGE_CALCULATOR_CONTENT}>
            <EnhancedCalculator
        title={MORTGAGE_CALCULATOR_CONTENT.title}
        slug="mortgage-calculator"
        category="Real Estate"
        description={MORTGAGE_CALCULATOR_CONTENT.description}
        inputs={MORTGAGE_CALCULATOR_CONTENT.calculator.fields}
        results={MORTGAGE_CALCULATOR_CONTENT.calculator.results}
        calculation={MORTGAGE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MortgageCalculatorPage;