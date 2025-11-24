import { ARIZONA_CFD_CALCULATOR_CONTENT } from '@/content/tools/arizona-cfd-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ArizonaCFDCalculator } from '@/components/calculators/ArizonaCFDCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Arizona CFD Calculator | Community Facilities District Fee Estimator',
    description: 'Calculate Arizona Community Facilities District (CFD) fees and special assessments. Estimate annual CFD costs for Arizona new home developments.',
  };
}

const ArizonaCFDCalculatorPage = () => {
  return (
    <CalculatorLayout content={ARIZONA_CFD_CALCULATOR_CONTENT}>
      <ArizonaCFDCalculator />
    </CalculatorLayout>
  );
};

export default ArizonaCFDCalculatorPage;
