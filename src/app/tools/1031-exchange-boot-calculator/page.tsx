import { exchange1031BootCalculator } from '@/content/tools/1031-exchange-boot-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: exchange1031BootCalculator.metaTitle,
    description: exchange1031BootCalculator.metaDescription,
  };
}

const Page = () => {
  return (
    <CalculatorLayout content={exchange1031BootCalculator}>
      <EnhancedCalculator content={exchange1031BootCalculator} />
    </CalculatorLayout>
  );
};

export default Page;
