import { FORM_1099_S_PROCEEDS_ESTIMATOR_CONTENT } from '@/content/tools/1099-s-proceeds-estimator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { Form1099SProceedsEstimator } from '@/components/calculators/Form1099SProceedsEstimator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '1099-S Proceeds from Sale Estimator | Real Estate Tax Reporting',
    description: 'Calculate 1099-S proceeds from real estate sale and estimate tax liability. Understand gross proceeds reporting requirements for property sellers and investors.',
  };
}

const Form1099SProceedsEstimatorPage = () => {
  return (
    <CalculatorLayout content={FORM_1099_S_PROCEEDS_ESTIMATOR_CONTENT}>
      <Form1099SProceedsEstimator />
    </CalculatorLayout>
  );
};

export default Form1099SProceedsEstimatorPage;
