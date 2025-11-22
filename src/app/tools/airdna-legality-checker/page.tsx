import { airdnaLegalityChecker } from '@/content/tools/airdna-legality-checker';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: airdnaLegalityChecker.metaTitle,
    description: airdnaLegalityChecker.metaDescription,
  };
}

const Page = () => {
  return (
    <CalculatorLayout content={airdnaLegalityChecker}>
      <EnhancedCalculator content={airdnaLegalityChecker} />
    </CalculatorLayout>
  );
};

export default Page;
