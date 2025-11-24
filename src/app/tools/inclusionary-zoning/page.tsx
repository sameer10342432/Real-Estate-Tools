import { INCLUSIONARY_ZONING_CONTENT } from '@/content/tools/inclusionary-zoning';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { InclusionaryZoningCalculator } from '@/components/calculators/InclusionaryZoningCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Inclusionary Zoning Calculator - Property Tools',
    description: 'Calculate affordable housing requirements, density bonuses, fee-in-lieu payments, and financial impacts of inclusionary zoning mandates on residential developments',
  };
}

const InclusionaryZoningPage = () => {
  return (
    <CalculatorLayout content={INCLUSIONARY_ZONING_CONTENT}>
      <InclusionaryZoningCalculator />
    </CalculatorLayout>
  );
};

export default InclusionaryZoningPage;
