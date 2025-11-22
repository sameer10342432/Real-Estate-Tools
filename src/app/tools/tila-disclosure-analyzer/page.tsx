import { tilaDisclosureAnalyzer } from '@/content/tools/tila-disclosure-analyzer';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: tilaDisclosureAnalyzer.metaTitle,
    description: tilaDisclosureAnalyzer.metaDescription,
  };
}

const Page = () => {
  return (
    <CalculatorLayout content={tilaDisclosureAnalyzer}>
      <EnhancedCalculator content={tilaDisclosureAnalyzer} />
    </CalculatorLayout>
  );
};

export default Page;
