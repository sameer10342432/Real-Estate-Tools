import { NON_CONFORMING_USE_GRANDFATHER_CONTENT } from '@/content/tools/non-conforming-use-grandfather';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { NonConformingUseGrandfatherCalculator } from '@/components/calculators/NonConformingUseGrandfatherCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Non-Conforming Use (Grandfather) Calculator - Property Tools',
    description: 'Analyze grandfathered property rights, non-conforming use restrictions, expansion limitations, and compliance requirements for properties that predate current zoning laws',
  };
}

const NonConformingUseGrandfatherPage = () => {
  return (
    <CalculatorLayout content={NON_CONFORMING_USE_GRANDFATHER_CONTENT}>
      <NonConformingUseGrandfatherCalculator />
    </CalculatorLayout>
  );
};

export default NonConformingUseGrandfatherPage;
