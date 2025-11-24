'use client';

import { FORM_1099_S_PROCEEDS_ESTIMATOR_CONTENT } from '@/content/tools/1099-s-proceeds-estimator';
import { Calculator } from '@/components/calculators';

export const Form1099SProceedsEstimator = () => {
  return (
    <Calculator
      title={FORM_1099_S_PROCEEDS_ESTIMATOR_CONTENT.title}
      description={FORM_1099_S_PROCEEDS_ESTIMATOR_CONTENT.description}
      inputs={FORM_1099_S_PROCEEDS_ESTIMATOR_CONTENT.calculator.fields}
      results={FORM_1099_S_PROCEEDS_ESTIMATOR_CONTENT.calculator.results}
      calculation={FORM_1099_S_PROCEEDS_ESTIMATOR_CONTENT.calculator.calculate}
    />
  );
};
