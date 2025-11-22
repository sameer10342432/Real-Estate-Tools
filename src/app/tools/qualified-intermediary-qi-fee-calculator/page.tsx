import { qualifiedIntermediaryFeeCalculator } from '@/content/tools/qualified-intermediary-qi-fee-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: qualifiedIntermediaryFeeCalculator.metaTitle,
    description: qualifiedIntermediaryFeeCalculator.metaDescription,
  };
}

const Page = () => {
  return (
    <CalculatorLayout content={qualifiedIntermediaryFeeCalculator}>
      <EnhancedCalculator content={qualifiedIntermediaryFeeCalculator} />
    </CalculatorLayout>
  );
};

export default Page;
