import { TEXAS_MUD_FEE_ESTIMATOR_CONTENT } from '@/content/tools/texas-mud-fee-estimator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { TexasMUDFeeEstimator } from '@/components/calculators/TexasMUDFeeEstimator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Texas MUD Fee Estimator | Municipal Utility District Tax Calculator',
    description: 'Calculate Texas Municipal Utility District (MUD) fees and taxes. Estimate annual MUD costs for homes in Texas development districts including bond debt service.',
  };
}

const TexasMUDFeeEstimatorPage = () => {
  return (
    <CalculatorLayout content={TEXAS_MUD_FEE_ESTIMATOR_CONTENT}>
      <TexasMUDFeeEstimator />
    </CalculatorLayout>
  );
};

export default TexasMUDFeeEstimatorPage;
