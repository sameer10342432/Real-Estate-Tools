import { exchange1031RelatedPartyRules } from '@/content/tools/1031-exchange-related-party-rules';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: exchange1031RelatedPartyRules.metaTitle,
    description: exchange1031RelatedPartyRules.metaDescription,
  };
}

const Page = () => {
  return (
    <CalculatorLayout content={exchange1031RelatedPartyRules}>
      <EnhancedCalculator content={exchange1031RelatedPartyRules} />
    </CalculatorLayout>
  );
};

export default Page;
