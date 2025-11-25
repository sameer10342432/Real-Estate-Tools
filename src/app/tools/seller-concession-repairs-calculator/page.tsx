import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { SELLER_CONCESSION_REPAIRS_CALCULATOR_CONTENT } from '@/content/tools/seller-concession-repairs-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Seller Concession Repairs Calculator | Repair Credit vs Actual Repairs',
    description: 'Calculate seller repair concessions, compare credit strategies vs actual repairs, and analyze impact on deal risk and net proceeds based on market conditions.',
  };
}

const SellerConcessionRepairsCalculatorPage = () => {
  return (
    <CalculatorLayout content={SELLER_CONCESSION_REPAIRS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SELLER_CONCESSION_REPAIRS_CALCULATOR_CONTENT.title}
        slug="seller-concession-repairs-calculator"
        category="Seller Tools"
        description={SELLER_CONCESSION_REPAIRS_CALCULATOR_CONTENT.description}
        inputs={SELLER_CONCESSION_REPAIRS_CALCULATOR_CONTENT.calculator.fields}
        results={SELLER_CONCESSION_REPAIRS_CALCULATOR_CONTENT.calculator.results}
        calculation={SELLER_CONCESSION_REPAIRS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SellerConcessionRepairsCalculatorPage;
