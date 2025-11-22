import { strawBuyerRedFlagChecker } from '@/content/tools/straw-buyer-red-flag-checker';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: strawBuyerRedFlagChecker.metaTitle,
    description: strawBuyerRedFlagChecker.metaDescription,
  };
}

const Page = () => {
  return (
    <CalculatorLayout content={strawBuyerRedFlagChecker}>
      <EnhancedCalculator content={strawBuyerRedFlagChecker} />
    </CalculatorLayout>
  );
};

export default Page;
