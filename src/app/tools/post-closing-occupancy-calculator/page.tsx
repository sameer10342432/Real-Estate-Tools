import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { POST_CLOSING_OCCUPANCY_CALCULATOR_CONTENT } from '@/content/tools/post-closing-occupancy-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Post-Closing Occupancy Calculator | Buyer & Seller Cost Analysis',
    description: 'Calculate post-closing occupancy costs, security deposits, and risks for both buyers and sellers. Analyze daily rates, penalties, and legal implications.',
  };
}

const PostClosingOccupancyCalculatorPage = () => {
  return (
    <CalculatorLayout content={POST_CLOSING_OCCUPANCY_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={POST_CLOSING_OCCUPANCY_CALCULATOR_CONTENT.title}
        slug="post-closing-occupancy-calculator"
        category="Additional Tools"
        description={POST_CLOSING_OCCUPANCY_CALCULATOR_CONTENT.description}
        inputs={POST_CLOSING_OCCUPANCY_CALCULATOR_CONTENT.calculator.fields}
        results={POST_CLOSING_OCCUPANCY_CALCULATOR_CONTENT.calculator.results}
        calculation={POST_CLOSING_OCCUPANCY_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PostClosingOccupancyCalculatorPage;
