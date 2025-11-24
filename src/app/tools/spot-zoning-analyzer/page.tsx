import { SPOT_ZONING_ANALYZER_CONTENT } from '@/content/tools/spot-zoning-analyzer';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { SpotZoningAnalyzerCalculator } from '@/components/calculators/SpotZoningAnalyzerCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Spot Zoning Analyzer - Property Tools',
    description: 'Analyze spot zoning risks, legal challenges, property value impacts, and identify questionable zoning changes that benefit specific properties or developers',
  };
}

const SpotZoningAnalyzerPage = () => {
  return (
    <CalculatorLayout content={SPOT_ZONING_ANALYZER_CONTENT}>
      <SpotZoningAnalyzerCalculator />
    </CalculatorLayout>
  );
};

export default SpotZoningAnalyzerPage;
