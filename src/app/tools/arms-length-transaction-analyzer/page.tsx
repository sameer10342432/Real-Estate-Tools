import { armsLengthTransactionAnalyzer } from '@/content/tools/arms-length-transaction-analyzer';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: armsLengthTransactionAnalyzer.metaTitle,
    description: armsLengthTransactionAnalyzer.metaDescription,
  };
}

const Page = () => {
  return (
    <CalculatorLayout content={armsLengthTransactionAnalyzer}>
      <EnhancedCalculator content={armsLengthTransactionAnalyzer} />
    </CalculatorLayout>
  );
};

export default Page;
