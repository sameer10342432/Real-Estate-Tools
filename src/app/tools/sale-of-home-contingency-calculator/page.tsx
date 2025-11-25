import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { SALE_OF_HOME_CONTINGENCY_CALCULATOR_CONTENT } from '@/content/tools/sale-of-home-contingency-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sale of Home Contingency Calculator | Calculate Timeline & Risk',
    description: 'Calculate timelines, financial implications, and acceptance probability of home sale contingencies. Analyze net proceeds, down payment needs, and risk assessment for your contingent offer.',
  };
}

const SaleOfHomeContingencyCalculatorPage = () => {
  return (
    <CalculatorLayout content={SALE_OF_HOME_CONTINGENCY_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SALE_OF_HOME_CONTINGENCY_CALCULATOR_CONTENT.title}
        slug="sale-of-home-contingency-calculator"
        category="Buyer Tools"
        description={SALE_OF_HOME_CONTINGENCY_CALCULATOR_CONTENT.description}
        inputs={SALE_OF_HOME_CONTINGENCY_CALCULATOR_CONTENT.calculator.fields}
        results={SALE_OF_HOME_CONTINGENCY_CALCULATOR_CONTENT.calculator.results}
        calculation={SALE_OF_HOME_CONTINGENCY_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SaleOfHomeContingencyCalculatorPage;
