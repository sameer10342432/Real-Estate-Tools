import { respaViolationChecker } from '@/content/tools/respa-violation-checker';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: respaViolationChecker.metaTitle,
    description: respaViolationChecker.metaDescription,
  };
}

const Page = () => {
  return (
    <CalculatorLayout content={respaViolationChecker}>
      <EnhancedCalculator content={respaViolationChecker} />
    </CalculatorLayout>
  );
};

export default Page;
