import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { PERCOLATION_PERC_TEST_CALCULATOR_CONTENT } from '@/content/tools/percolation-perc-test-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Percolation Perc Test Calculator | Septic System Requirements & Cost',
    description: 'Calculate percolation test costs, analyze septic system requirements, and estimate installation expenses. Understand soil drainage rates and pass/fail likelihood.',
  };
}

const PercolationPercTestCalculatorPage = () => {
  return (
    <CalculatorLayout content={PERCOLATION_PERC_TEST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PERCOLATION_PERC_TEST_CALCULATOR_CONTENT.title}
        slug="percolation-perc-test-calculator"
        category="Additional Tools"
        description={PERCOLATION_PERC_TEST_CALCULATOR_CONTENT.description}
        inputs={PERCOLATION_PERC_TEST_CALCULATOR_CONTENT.calculator.fields}
        results={PERCOLATION_PERC_TEST_CALCULATOR_CONTENT.calculator.results}
        calculation={PERCOLATION_PERC_TEST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PercolationPercTestCalculatorPage;
