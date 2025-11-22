import { firptaWithholdingCalculator } from '@/content/tools/firpta-withholding-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: firptaWithholdingCalculator.metaTitle,
    description: firptaWithholdingCalculator.metaDescription,
  };
}

const Page = () => {
  return (
    <CalculatorLayout content={firptaWithholdingCalculator}>
      <EnhancedCalculator content={firptaWithholdingCalculator} />
    </CalculatorLayout>
  );
};

export default Page;
