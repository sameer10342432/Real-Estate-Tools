import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { RENT_BACK_SELLER_CALCULATOR_CONTENT } from '@/content/tools/rent-back-seller-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rent-Back Seller Calculator | Post-Closing Occupancy Costs',
    description: 'Calculate daily rent rates, total costs, and financial implications of rent-back agreements for sellers. Analyze security deposits, utilities, and net proceeds impact.',
  };
}

const RentBackSellerCalculatorPage = () => {
  return (
    <CalculatorLayout content={RENT_BACK_SELLER_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={RENT_BACK_SELLER_CALCULATOR_CONTENT.title}
        slug="rent-back-seller-calculator"
        category="Seller Tools"
        description={RENT_BACK_SELLER_CALCULATOR_CONTENT.description}
        inputs={RENT_BACK_SELLER_CALCULATOR_CONTENT.calculator.fields}
        results={RENT_BACK_SELLER_CALCULATOR_CONTENT.calculator.results}
        calculation={RENT_BACK_SELLER_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RentBackSellerCalculatorPage;
