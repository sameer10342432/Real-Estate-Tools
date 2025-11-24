import { EXCLUSIONARY_ZONING_CONTENT } from '@/content/tools/exclusionary-zoning';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ExclusionaryZoningCalculator } from '@/components/calculators/ExclusionaryZoningCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Exclusionary Zoning Analyzer - Property Tools',
    description: 'Identify exclusionary zoning practices, analyze affordability barriers, calculate economic segregation impacts, and evaluate discriminatory land use policies',
  };
}

const ExclusionaryZoningPage = () => {
  return (
    <CalculatorLayout content={EXCLUSIONARY_ZONING_CONTENT}>
      <ExclusionaryZoningCalculator />
    </CalculatorLayout>
  );
};

export default ExclusionaryZoningPage;
