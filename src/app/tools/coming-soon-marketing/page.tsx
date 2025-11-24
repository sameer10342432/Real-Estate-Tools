import { COMING_SOON_MARKETING_CONTENT } from '@/content/tools/coming-soon-marketing';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ComingSoonMarketingCalculator } from '@/components/calculators/ComingSoonMarketingCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Coming Soon Marketing Calculator - Property Tools',
    description: 'Calculate the impact of Coming Soon marketing strategies, analyze pre-listing buzz effectiveness, optimize launch timing, and maximize buyer competition',
  };
}

const ComingSoonMarketingPage = () => {
  return (
    <CalculatorLayout content={COMING_SOON_MARKETING_CONTENT}>
      <ComingSoonMarketingCalculator />
    </CalculatorLayout>
  );
};

export default ComingSoonMarketingPage;
