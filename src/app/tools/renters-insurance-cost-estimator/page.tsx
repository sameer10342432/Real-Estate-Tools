'use client';


async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Renter's Insurance Cost Estimator',
    description: 'Calculate and analyze your rental/buyer options with our free online tool for real estate professionals, investors, and homebuyers.',
  };
}




import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { RENTERS_INSURANCE_COST_ESTIMATOR_CONTENT } from '@/content/tools/renters-insurance-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const Page = () => {
  return (
    <CalculatorLayout content={RENTERS_INSURANCE_COST_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={RENTERS_INSURANCE_COST_ESTIMATOR_CONTENT.title}
        slug="renters-insurance-cost-estimator"
        category="Renter Tools"
        description={RENTERS_INSURANCE_COST_ESTIMATOR_CONTENT.description}
        inputs={RENTERS_INSURANCE_COST_ESTIMATOR_CONTENT.calculator.fields}
        results={RENTERS_INSURANCE_COST_ESTIMATOR_CONTENT.calculator.results}
        calculation={RENTERS_INSURANCE_COST_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default Page;
