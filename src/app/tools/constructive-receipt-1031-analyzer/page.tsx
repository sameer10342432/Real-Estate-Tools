import { constructiveReceipt1031Analyzer } from '@/content/tools/constructive-receipt-1031-analyzer';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: constructiveReceipt1031Analyzer.metaTitle,
    description: constructiveReceipt1031Analyzer.metaDescription,
  };
}

const Page = () => {
  return (
    <CalculatorLayout content={constructiveReceipt1031Analyzer}>
      <EnhancedCalculator content={constructiveReceipt1031Analyzer} />
    </CalculatorLayout>
  );
};

export default Page;
