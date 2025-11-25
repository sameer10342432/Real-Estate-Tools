import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { SELLER_ASSIST_CLOSING_COSTS_CALCULATOR_CONTENT } from '@/content/tools/seller-assist-closing-costs-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Seller Assist Closing Costs Calculator | Seller Concession Analysis',
    description: 'Calculate seller-paid closing cost assistance, analyze lender limits by loan type, and understand impact on seller net proceeds and buyer savings.',
  };
}

const SellerAssistClosingCostsCalculatorPage = () => {
  return (
    <CalculatorLayout content={SELLER_ASSIST_CLOSING_COSTS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SELLER_ASSIST_CLOSING_COSTS_CALCULATOR_CONTENT.title}
        slug="seller-assist-closing-costs-calculator"
        category="Seller Tools"
        description={SELLER_ASSIST_CLOSING_COSTS_CALCULATOR_CONTENT.description}
        inputs={SELLER_ASSIST_CLOSING_COSTS_CALCULATOR_CONTENT.calculator.fields}
        results={SELLER_ASSIST_CLOSING_COSTS_CALCULATOR_CONTENT.calculator.results}
        calculation={SELLER_ASSIST_CLOSING_COSTS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SellerAssistClosingCostsCalculatorPage;
