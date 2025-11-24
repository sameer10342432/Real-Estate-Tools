'use client';

import { TEXAS_MUD_FEE_ESTIMATOR_CONTENT } from '@/content/tools/texas-mud-fee-estimator';
import { Calculator } from '@/components/calculators';

export const TexasMUDFeeEstimator = () => {
  return (
    <Calculator
      title={TEXAS_MUD_FEE_ESTIMATOR_CONTENT.title}
      description={TEXAS_MUD_FEE_ESTIMATOR_CONTENT.description}
      inputs={TEXAS_MUD_FEE_ESTIMATOR_CONTENT.calculator.fields}
      results={TEXAS_MUD_FEE_ESTIMATOR_CONTENT.calculator.results}
      calculation={TEXAS_MUD_FEE_ESTIMATOR_CONTENT.calculator.calculate}
    />
  );
};
